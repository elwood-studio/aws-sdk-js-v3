import { ConfigService } from "../ConfigService.ts";
import { ConfigServiceClient } from "../ConfigServiceClient.ts";
import {
  GetAggregateConfigRuleComplianceSummaryCommand,
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput,
} from "../commands/GetAggregateConfigRuleComplianceSummaryCommand.ts";
import { ConfigServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetAggregateConfigRuleComplianceSummaryCommandInput,
  ...args: any
): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAggregateConfigRuleComplianceSummaryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: GetAggregateConfigRuleComplianceSummaryCommandInput,
  ...args: any
): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput> => {
  // @ts-ignore
  return await client.getAggregateConfigRuleComplianceSummary(input, ...args);
};
export async function* paginateGetAggregateConfigRuleComplianceSummary(
  config: ConfigServicePaginationConfiguration,
  input: GetAggregateConfigRuleComplianceSummaryCommandInput,
  ...additionalArguments: any
): Paginator<GetAggregateConfigRuleComplianceSummaryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAggregateConfigRuleComplianceSummaryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
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
