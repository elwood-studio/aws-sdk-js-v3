import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KinesisVideoClientConfig } from "./KinesisVideoClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoClientConfig) => ({
  apiVersion: "2017-09-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Kinesis Video",
  urlParser: config?.urlParser ?? parseUrl,
});
