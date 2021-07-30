import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AppMeshClientConfig } from "./AppMeshClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppMeshClientConfig = {}) => ({
  apiVersion: "2019-01-25",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "App Mesh",
  urlParser: config.urlParser ?? parseUrl,
});
