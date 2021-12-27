import { ChimeSDKIdentity } from "../ChimeSDKIdentity.ts";
import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient.ts";
import {
  ListAppInstancesCommand,
  ListAppInstancesCommandInput,
  ListAppInstancesCommandOutput,
} from "../commands/ListAppInstancesCommand.ts";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKIdentityClient,
  input: ListAppInstancesCommandInput,
  ...args: any
): Promise<ListAppInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKIdentity,
  input: ListAppInstancesCommandInput,
  ...args: any
): Promise<ListAppInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listAppInstances(input, ...args);
};
export async function* paginateListAppInstances(
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListAppInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKIdentity) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeSDKIdentityClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKIdentity | ChimeSDKIdentityClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
