import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CloudFrontClientConfig } from "./CloudFrontClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudFrontClientConfig) => ({
  apiVersion: "2020-05-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudFront",
  urlParser: config?.urlParser ?? parseUrl,
});
