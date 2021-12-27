import { ChimeSDKMessaging } from "../ChimeSDKMessaging.ts";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient.ts";
import {
  ListChannelMessagesCommand,
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "../commands/ListChannelMessagesCommand.ts";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListChannelMessagesCommandInput,
  ...args: any
): Promise<ListChannelMessagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelMessagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: ListChannelMessagesCommandInput,
  ...args: any
): Promise<ListChannelMessagesCommandOutput> => {
  // @ts-ignore
  return await client.listChannelMessages(input, ...args);
};
export async function* paginateListChannelMessages(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelMessagesCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMessagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelMessagesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKMessaging) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeSDKMessagingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKMessaging | ChimeSDKMessagingClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
