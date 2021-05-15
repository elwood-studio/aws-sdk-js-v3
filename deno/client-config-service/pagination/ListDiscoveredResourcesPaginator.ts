import { ConfigService } from "../ConfigService.ts";
import { ConfigServiceClient } from "../ConfigServiceClient.ts";
import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "../commands/ListDiscoveredResourcesCommand.ts";
import { ConfigServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: ListDiscoveredResourcesCommandInput,
  ...args: any
): Promise<ListDiscoveredResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDiscoveredResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: ListDiscoveredResourcesCommandInput,
  ...args: any
): Promise<ListDiscoveredResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listDiscoveredResources(input, ...args);
};
export async function* paginateListDiscoveredResources(
  config: ConfigServicePaginationConfiguration,
  input: ListDiscoveredResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListDiscoveredResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDiscoveredResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
