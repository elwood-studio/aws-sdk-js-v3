const fsx = require("fs-extra");
const path = require("path");
const fs = require("fs");

const DENO_STD_VERSION = "0.160.0";

async function copyPackage(packageName, packageDir, destinationDir) {
  if (packageName.endsWith("-deno")) {
    // skip here - copy instead at the end
    return;
  }

  await fsx.mkdirp(path.join(destinationDir, packageName));

  let hasSrc = false;
  let hasTsFiles = false;
  for (const dpath of await fsx.readdir(packageDir)) {
    if (dpath === "src") {
      hasSrc = true;
    }
    if (dpath.endsWith(".ts")) {
      hasTsFiles = true;
    }
  }
  if (hasSrc && hasTsFiles) {
    throw new Error("has mix of inline srcs and src dir");
  }

  if (hasSrc) {
    return copyPackage(packageName, path.join(packageDir, "src"), destinationDir);
  }

  for (const dpath of await fsx.readdir(packageDir)) {
    if (dpath.endsWith(".spec.ts")) {
      continue;
    }
    if (dpath === "e2e") {
      continue;
    }
    if (dpath === "package.json") {
      let topath = dpath;
      await fsx.copyFile(path.join(packageDir, dpath), path.join(destinationDir, packageName, topath));
    }
    if (dpath.endsWith(".ts")) {
      let topath = dpath;

      // skip the other runtime configs
      if (dpath === "runtimeConfig.native.ts") {
        continue;
      }
      if (dpath === "runtimeConfig.browser.ts") {
        continue;
      }
      if (dpath === "index.ts") {
        topath = "mod.ts";
      }

      await fsx.copyFile(path.join(packageDir, dpath), path.join(destinationDir, packageName, topath));
      continue;
    }

    const stat = await fsx.stat(path.join(packageDir, dpath));

    if (stat.isDirectory()) {
      if (dpath.endsWith("node_modules")) {
        continue;
      }
      const src = path.join(packageDir, dpath);
      const dest = path.join(destinationDir, packageName, dpath);
      await fsx.copy(src, dest, {
        filter: (filename) => !filename.endsWith(".spec.ts"),
      });
    }
  }
}

// Overwrite some packages with a deno implementation instead of editing the node implementation
async function copyDenoPackage(packageName, packageDir, destinationDir) {
  const resultPackageName = packageName.replace(/-deno$/g, "");
  await fsx.mkdirp(path.join(destinationDir, resultPackageName));
  await fsx.copy(packageDir, path.join(destinationDir, resultPackageName));
}

async function copyDenoPackages(sourceDirs, destinationDir) {
  for (const packagesDir of sourceDirs) {
    for (const packageName of await fsx.readdir(packagesDir)) {
      if (!packageName.endsWith("-deno")) {
        continue;
      }
      await copyDenoPackage(packageName, path.join(packagesDir, packageName), destinationDir);
    }
  }
}

async function denoifyTree(tpath, depth) {
  const stat = await fsx.stat(tpath);
  if (stat.isDirectory()) {
    for (const dpath of await fsx.readdir(tpath)) {
      await denoifyTree(path.join(tpath, dpath), depth + 1);
    }
    return;
  }
  await denoifyTsFile(tpath, depth);
}

// fixup imports for deno and also refer any @aws- imports to the local copy
async function denoifyTsFile(file, depth) {
  const fileContent = await fsx.readFile(file);
  const lines = fileContent.toString().split("\n");

  const extraHeaderLines = {};
  const output = [];

  const context = { state: null };

  for (const line of lines) {
    if (line.match(/\bBuffer\b/)) {
      if (file !== "deno/util-buffer-from/mod.ts") {
        extraHeaderLines[
          "buffer"
        ] = `import { Buffer } from "https://deno.land/std@${DENO_STD_VERSION}/node/buffer.ts";`;
      }
    }

    if (line.match(/\bprocess\./)) {
      extraHeaderLines["process"] = `import process from "https://deno.land/std@${DENO_STD_VERSION}/node/process.ts";`;
    }

    output.push(await denoifyLine(file, context, depth, line));
  }

  await fsx.writeFile(
    file,
    [...Object.values(extraHeaderLines), ...output.filter((line) => line !== undefined)].join("\n")
  );
}

async function denoifyLine(file, context, depth, line) {
  const isRuntimeConfig = file.endsWith("/runtimeConfig.ts");
  if (isRuntimeConfig) {
    let match;
    if ((match = line.match(/runtime: "node"/))) {
      return line.replace(match[0], 'runtime: "deno"');
    }

    // Don't show warnings for deno versions
    if (line.match(/emitWarningIfUnsupportedVersion\(process\.version\);/)) {
      return;
    }

    // Use fetch API instead of http module
    if ((match = line.match(/import .* NodeHttpHandler,? .* from .*/))) {
      return line.replace(
        match[0],
        'import { FetchHttpHandler, streamCollector } from "../fetch-http-handler/mod.ts";'
      );
    }

    if ((match = line.match(/new NodeHttpHandler\(/))) {
      return line.replace(match[0], "new FetchHttpHandler(");
    }

    // Use blobHasher instead of fileStreamHasher
    if ((match = line.match(/import .* fileStreamHasher,? .* from .*/))) {
      return line.replace(match[0], 'import { blobHasher as streamHasher } from "../hash-blob-browser/mod.ts";');
    }

    // Use eventstream-serde-browser
    if ((match = line.match(/import .* eventStreamSerdeProvider,? .* from .*/))) {
      return line.replace(match[0], 'import { eventStreamSerdeProvider } from "../eventstream-serde-browser/mod.ts";');
    }

    // Use body-checksum-browser
    if ((match = line.match(/import .* from .*body-checksum-node.*/))) {
      return line.replace(match[0], 'import { bodyChecksumGenerator } from "../body-checksum-browser/mod.ts";');
    }
  }

  if (line.match(/\bprocess\.emitWarning/)) {
    return line.replace("process.emitWarning", "console.warn");
  }

  if (line.match(/\bNodeJS\.ProcessEnv\b/)) {
    return line.replace("NodeJS.ProcessEnv", "{[key: string]: string}");
  }

  if (line.match(/\bhomedir\(\)/)) {
    return line.replace("homedir()", "homedir()!");
  }

  if (line === 'import packageInfo from "./package.json";') {
    const pkgjson = await fsx.readJson(path.join(path.dirname(file), "package.json"));
    return `const packageInfo = { version: "${pkgjson.version}" };`;
  }

  if (line.match(/tagValueProcessor: \(val\) => /)) {
    return line.replace("(val)", "(val: string)");
  }

  if (context.state === null && line.match(/^ *import/)) {
    context.state = "import";
  }
  if (context.state === null && line.match(/^ *export/)) {
    context.state = "export";
  }

  if (context.state === "import" || context.state === "export") {
    const match = line.match(/^(.*) from +("|')([^"']+)("|');/);
    if (match) {
      const importLhs = match[1];
      const importFrom = match[3];

      context.state = null;

      const relpath = [...new Array(depth - 1)].map(() => "..").join("/");

      line = await denoifyImport(file, relpath, importLhs, importFrom);

      if (depth === 0) {
        throw new Error(`denoifyTsFile ${file} - unexpected import to @aws-sdk at depth 0`);
      }
    }
  }

  if (file === "deno/shared-ini-file-loader/mod.ts") {
    if (line.match(/resolve\(data\);/)) {
      return line.replace("data", "data!");
    }
  }

  // Ignore type check on passing Readable chunk to Buffer.from()
  if (file === "deno/lib-storage/chunker.ts" || file === "deno/lib-storage/chunks/getDataReadable.ts") {
    if (line.match(/Buffer\.from\(/)) {
      return `    // @ts-ignore\n${line}`;
    }
  }

  return line;
}

async function denoifyImport(file, relpath, importLhs, importFrom) {
  const importFromAWSSDKmatch = importFrom.match(/@aws-sdk\/(.*)/);
  if (!importFromAWSSDKmatch || importFrom.match(/@aws-sdk\/hash-node/)) {
    const absImportFromMatch = importFrom.match(/^([^.].*)/);
    if (absImportFromMatch) {
      if (importFrom.startsWith("https://deno.land/std")) {
        // ignore
      }

      switch (importFrom) {
        case "@aws-crypto/crc32":
        case "@aws-sdk/hash-node":
        case "entities":
          return `${importLhs} from "https://jspm.dev/${importFrom}";`;

        case "fast-xml-parser":
          return `${importLhs} from "https://jspm.dev/${importFrom}@3";`;

        case "uuid":
          return `${importLhs} from "${relpath}/${importFrom}/mod.ts";`;

        case "mnemonist/lru-cache":
          return `${importLhs} from "${relpath}/lru-cache/mod.ts";`;

        case "buffer":
        case "child_process":
        case "crypto":
        case "events":
        case "fs":
        case "net":
        case "os":
        case "path":
        case "process":
        case "stream":
        case "url":
          return `${importLhs} from "https://deno.land/std@${DENO_STD_VERSION}/node/${importFrom}.ts";`;

        case "http":
        case "http2":
        case "https":
        case "nock":
          return;

        default:
          console.error(`Absolute import of: ${importFrom} (${file})`);
      }
    }

    if (!importFrom.endsWith(".ts")) {
      const importDir = path.resolve(path.join(file, "..", importFrom));
      if (fs.existsSync(importDir)) {
        return `${importLhs} from "${importFrom}/index.ts";`;
      }
      return `${importLhs} from "${importFrom}.ts";`;
    }

    console.error("import not handled:", file, importFrom);
  }

  if (importFromAWSSDKmatch) {
    const module = importFromAWSSDKmatch[1].replace(/(body-checksum|eventstream-serde)-node/, "$1-browser");
    const checkAt = path.resolve(path.join(file, "..", `${relpath}/${module}/mod.ts`));
    const exists = await fsx.exists(checkAt);
    if (!exists) {
      console.error(`denoifyLine ${file} - Cannot find ${checkAt}`);
    }

    return `${importLhs} from "${relpath}/${module}/mod.ts";`;
  }

  console.error("import not handled:", file, importFrom);
}

async function copyToDeno(sourceDirs, destinationDir) {
  await fsx.emptyDir(destinationDir);

  const excludePackages = ["body-checksum-node", "eventstream-serde-node", "md5-js"];

  const keepBrowserPackages = [
    "body-checksum-browser",
    "eventstream-serde-browser",
    "hash-blob-browser",
    "util-base64-browser",
  ];

  for (const packagesDir of sourceDirs) {
    for (const package of await fsx.readdir(packagesDir)) {
      if (excludePackages.includes(package)) {
        continue;
      }
      // (using the node flavoured implementations)
      // skip implementation packages for native and browser
      if (package.endsWith("-native")) {
        continue;
      }
      if (package.endsWith("-browser")) {
        if (!keepBrowserPackages.includes(package)) {
          continue;
        }
      }
      if (package.endsWith("documentation-generator")) {
        continue;
      }

      await copyPackage(package, path.join(packagesDir, package), destinationDir);
    }
  }

  await denoifyTree(destinationDir, 0);

  // Overwrite some packages with a deno implementation instead of editing the node implementation
  await copyDenoPackages(sourceDirs, destinationDir);
}

if (require.main === module) {
  (async () => {
    await copyToDeno(["./clients", "./packages", "./lib"], "./deno");
  })();
}

module.exports = {
  copyToDeno,
};
