import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { DataBrewClientConfig } from "./DataBrewClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DataBrewClientConfig = {}) => ({
  apiVersion: "2017-07-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "DataBrew",
  urlParser: config.urlParser ?? parseUrl,
});
