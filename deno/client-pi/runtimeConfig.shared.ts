import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { PIClientConfig } from "./PIClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PIClientConfig = {}) => ({
  apiVersion: "2018-02-27",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "PI",
  urlParser: config.urlParser ?? parseUrl,
});
