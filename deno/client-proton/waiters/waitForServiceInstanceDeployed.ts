import { ProtonClient } from "../ProtonClient.ts";
import { GetServiceInstanceCommand, GetServiceInstanceCommandInput } from "../commands/GetServiceInstanceCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: ProtonClient, input: GetServiceInstanceCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetServiceInstanceCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.serviceInstance.deploymentStatus;
      };
      if (returnComparator() === "SUCCEEDED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.serviceInstance.deploymentStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a ServiceInstance is deployed. Use this after invoking CreateService or UpdateServiceInstance
 *  @deprecated Use waitUntilServiceInstanceDeployed instead. waitForServiceInstanceDeployed does not throw error in non-success cases.
 */
export const waitForServiceInstanceDeployed = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceInstanceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a ServiceInstance is deployed. Use this after invoking CreateService or UpdateServiceInstance
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetServiceInstanceCommand for polling.
 */
export const waitUntilServiceInstanceDeployed = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceInstanceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
