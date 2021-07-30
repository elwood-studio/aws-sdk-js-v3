import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { AppConfigClientConfig } from "./AppConfigClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppConfigClientConfig = {}) => ({
  apiVersion: "2019-10-09",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "AppConfig",
  urlParser: config.urlParser ?? parseUrl,
});
