import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DevOpsGuruClientConfig } from "./DevOpsGuruClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DevOpsGuruClientConfig = {}) => ({
  apiVersion: "2020-12-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "DevOps Guru",
  urlParser: config.urlParser ?? parseUrl,
});
