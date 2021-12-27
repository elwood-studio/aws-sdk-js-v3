import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IoTJobsDataPlaneClientConfig } from "./IoTJobsDataPlaneClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTJobsDataPlaneClientConfig) => ({
  apiVersion: "2017-09-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoT Jobs Data Plane",
  urlParser: config?.urlParser ?? parseUrl,
});
