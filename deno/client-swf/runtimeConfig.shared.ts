import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SWFClientConfig } from "./SWFClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SWFClientConfig = {}) => ({
  apiVersion: "2012-01-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "SWF",
  urlParser: config.urlParser ?? parseUrl,
});
