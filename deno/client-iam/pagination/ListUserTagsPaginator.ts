import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import {
  ListUserTagsCommand,
  ListUserTagsCommandInput,
  ListUserTagsCommandOutput,
} from "../commands/ListUserTagsCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListUserTagsCommandInput,
  ...args: any
): Promise<ListUserTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUserTagsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListUserTagsCommandInput,
  ...args: any
): Promise<ListUserTagsCommandOutput> => {
  // @ts-ignore
  return await client.listUserTags(input, ...args);
};
export async function* paginateListUserTags(
  config: IAMPaginationConfiguration,
  input: ListUserTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListUserTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUserTagsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
