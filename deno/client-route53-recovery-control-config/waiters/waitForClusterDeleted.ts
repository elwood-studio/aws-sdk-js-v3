import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient.ts";
import { DescribeClusterCommand, DescribeClusterCommandInput } from "../commands/DescribeClusterCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (
  client: Route53RecoveryControlConfigClient,
  input: DescribeClusterCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeClusterCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.Cluster.Status;
      };
      if (returnComparator() === "PENDING_DELETION") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
    if (exception.name && exception.name == "InternalServerException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait for a cluster to be deleted
 *  @deprecated Use waitUntilClusterDeleted instead. waitForClusterDeleted does not throw error in non-success cases.
 */
export const waitForClusterDeleted = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait for a cluster to be deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterCommand for polling.
 */
export const waitUntilClusterDeleted = async (
  params: WaiterConfiguration<Route53RecoveryControlConfigClient>,
  input: DescribeClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
