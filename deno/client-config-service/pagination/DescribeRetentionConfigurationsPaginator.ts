import { ConfigService } from "../ConfigService.ts";
import { ConfigServiceClient } from "../ConfigServiceClient.ts";
import {
  DescribeRetentionConfigurationsCommand,
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput,
} from "../commands/DescribeRetentionConfigurationsCommand.ts";
import { ConfigServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeRetentionConfigurationsCommandInput,
  ...args: any
): Promise<DescribeRetentionConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRetentionConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeRetentionConfigurationsCommandInput,
  ...args: any
): Promise<DescribeRetentionConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.describeRetentionConfigurations(input, ...args);
};
export async function* paginateDescribeRetentionConfigurations(
  config: ConfigServicePaginationConfiguration,
  input: DescribeRetentionConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRetentionConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRetentionConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
