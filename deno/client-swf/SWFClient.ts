import {
  CountClosedWorkflowExecutionsCommandInput,
  CountClosedWorkflowExecutionsCommandOutput,
} from "./commands/CountClosedWorkflowExecutionsCommand.ts";
import {
  CountOpenWorkflowExecutionsCommandInput,
  CountOpenWorkflowExecutionsCommandOutput,
} from "./commands/CountOpenWorkflowExecutionsCommand.ts";
import {
  CountPendingActivityTasksCommandInput,
  CountPendingActivityTasksCommandOutput,
} from "./commands/CountPendingActivityTasksCommand.ts";
import {
  CountPendingDecisionTasksCommandInput,
  CountPendingDecisionTasksCommandOutput,
} from "./commands/CountPendingDecisionTasksCommand.ts";
import {
  DeprecateActivityTypeCommandInput,
  DeprecateActivityTypeCommandOutput,
} from "./commands/DeprecateActivityTypeCommand.ts";
import { DeprecateDomainCommandInput, DeprecateDomainCommandOutput } from "./commands/DeprecateDomainCommand.ts";
import {
  DeprecateWorkflowTypeCommandInput,
  DeprecateWorkflowTypeCommandOutput,
} from "./commands/DeprecateWorkflowTypeCommand.ts";
import {
  DescribeActivityTypeCommandInput,
  DescribeActivityTypeCommandOutput,
} from "./commands/DescribeActivityTypeCommand.ts";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand.ts";
import {
  DescribeWorkflowExecutionCommandInput,
  DescribeWorkflowExecutionCommandOutput,
} from "./commands/DescribeWorkflowExecutionCommand.ts";
import {
  DescribeWorkflowTypeCommandInput,
  DescribeWorkflowTypeCommandOutput,
} from "./commands/DescribeWorkflowTypeCommand.ts";
import {
  GetWorkflowExecutionHistoryCommandInput,
  GetWorkflowExecutionHistoryCommandOutput,
} from "./commands/GetWorkflowExecutionHistoryCommand.ts";
import { ListActivityTypesCommandInput, ListActivityTypesCommandOutput } from "./commands/ListActivityTypesCommand.ts";
import {
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
} from "./commands/ListClosedWorkflowExecutionsCommand.ts";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand.ts";
import {
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput,
} from "./commands/ListOpenWorkflowExecutionsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListWorkflowTypesCommandInput, ListWorkflowTypesCommandOutput } from "./commands/ListWorkflowTypesCommand.ts";
import {
  PollForActivityTaskCommandInput,
  PollForActivityTaskCommandOutput,
} from "./commands/PollForActivityTaskCommand.ts";
import {
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
} from "./commands/PollForDecisionTaskCommand.ts";
import {
  RecordActivityTaskHeartbeatCommandInput,
  RecordActivityTaskHeartbeatCommandOutput,
} from "./commands/RecordActivityTaskHeartbeatCommand.ts";
import {
  RegisterActivityTypeCommandInput,
  RegisterActivityTypeCommandOutput,
} from "./commands/RegisterActivityTypeCommand.ts";
import { RegisterDomainCommandInput, RegisterDomainCommandOutput } from "./commands/RegisterDomainCommand.ts";
import {
  RegisterWorkflowTypeCommandInput,
  RegisterWorkflowTypeCommandOutput,
} from "./commands/RegisterWorkflowTypeCommand.ts";
import {
  RequestCancelWorkflowExecutionCommandInput,
  RequestCancelWorkflowExecutionCommandOutput,
} from "./commands/RequestCancelWorkflowExecutionCommand.ts";
import {
  RespondActivityTaskCanceledCommandInput,
  RespondActivityTaskCanceledCommandOutput,
} from "./commands/RespondActivityTaskCanceledCommand.ts";
import {
  RespondActivityTaskCompletedCommandInput,
  RespondActivityTaskCompletedCommandOutput,
} from "./commands/RespondActivityTaskCompletedCommand.ts";
import {
  RespondActivityTaskFailedCommandInput,
  RespondActivityTaskFailedCommandOutput,
} from "./commands/RespondActivityTaskFailedCommand.ts";
import {
  RespondDecisionTaskCompletedCommandInput,
  RespondDecisionTaskCompletedCommandOutput,
} from "./commands/RespondDecisionTaskCompletedCommand.ts";
import {
  SignalWorkflowExecutionCommandInput,
  SignalWorkflowExecutionCommandOutput,
} from "./commands/SignalWorkflowExecutionCommand.ts";
import {
  StartWorkflowExecutionCommandInput,
  StartWorkflowExecutionCommandOutput,
} from "./commands/StartWorkflowExecutionCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import {
  TerminateWorkflowExecutionCommandInput,
  TerminateWorkflowExecutionCommandOutput,
} from "./commands/TerminateWorkflowExecutionCommand.ts";
import {
  UndeprecateActivityTypeCommandInput,
  UndeprecateActivityTypeCommandOutput,
} from "./commands/UndeprecateActivityTypeCommand.ts";
import { UndeprecateDomainCommandInput, UndeprecateDomainCommandOutput } from "./commands/UndeprecateDomainCommand.ts";
import {
  UndeprecateWorkflowTypeCommandInput,
  UndeprecateWorkflowTypeCommandOutput,
} from "./commands/UndeprecateWorkflowTypeCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CountClosedWorkflowExecutionsCommandInput
  | CountOpenWorkflowExecutionsCommandInput
  | CountPendingActivityTasksCommandInput
  | CountPendingDecisionTasksCommandInput
  | DeprecateActivityTypeCommandInput
  | DeprecateDomainCommandInput
  | DeprecateWorkflowTypeCommandInput
  | DescribeActivityTypeCommandInput
  | DescribeDomainCommandInput
  | DescribeWorkflowExecutionCommandInput
  | DescribeWorkflowTypeCommandInput
  | GetWorkflowExecutionHistoryCommandInput
  | ListActivityTypesCommandInput
  | ListClosedWorkflowExecutionsCommandInput
  | ListDomainsCommandInput
  | ListOpenWorkflowExecutionsCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkflowTypesCommandInput
  | PollForActivityTaskCommandInput
  | PollForDecisionTaskCommandInput
  | RecordActivityTaskHeartbeatCommandInput
  | RegisterActivityTypeCommandInput
  | RegisterDomainCommandInput
  | RegisterWorkflowTypeCommandInput
  | RequestCancelWorkflowExecutionCommandInput
  | RespondActivityTaskCanceledCommandInput
  | RespondActivityTaskCompletedCommandInput
  | RespondActivityTaskFailedCommandInput
  | RespondDecisionTaskCompletedCommandInput
  | SignalWorkflowExecutionCommandInput
  | StartWorkflowExecutionCommandInput
  | TagResourceCommandInput
  | TerminateWorkflowExecutionCommandInput
  | UndeprecateActivityTypeCommandInput
  | UndeprecateDomainCommandInput
  | UndeprecateWorkflowTypeCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | CountClosedWorkflowExecutionsCommandOutput
  | CountOpenWorkflowExecutionsCommandOutput
  | CountPendingActivityTasksCommandOutput
  | CountPendingDecisionTasksCommandOutput
  | DeprecateActivityTypeCommandOutput
  | DeprecateDomainCommandOutput
  | DeprecateWorkflowTypeCommandOutput
  | DescribeActivityTypeCommandOutput
  | DescribeDomainCommandOutput
  | DescribeWorkflowExecutionCommandOutput
  | DescribeWorkflowTypeCommandOutput
  | GetWorkflowExecutionHistoryCommandOutput
  | ListActivityTypesCommandOutput
  | ListClosedWorkflowExecutionsCommandOutput
  | ListDomainsCommandOutput
  | ListOpenWorkflowExecutionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkflowTypesCommandOutput
  | PollForActivityTaskCommandOutput
  | PollForDecisionTaskCommandOutput
  | RecordActivityTaskHeartbeatCommandOutput
  | RegisterActivityTypeCommandOutput
  | RegisterDomainCommandOutput
  | RegisterWorkflowTypeCommandOutput
  | RequestCancelWorkflowExecutionCommandOutput
  | RespondActivityTaskCanceledCommandOutput
  | RespondActivityTaskCompletedCommandOutput
  | RespondActivityTaskFailedCommandOutput
  | RespondDecisionTaskCompletedCommandOutput
  | SignalWorkflowExecutionCommandOutput
  | StartWorkflowExecutionCommandOutput
  | TagResourceCommandOutput
  | TerminateWorkflowExecutionCommandOutput
  | UndeprecateActivityTypeCommandOutput
  | UndeprecateDomainCommandOutput
  | UndeprecateWorkflowTypeCommandOutput
  | UntagResourceCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type SWFClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of SWFClient class constructor that set the region, credentials and other options.
 */
export interface SWFClientConfig extends SWFClientConfigType {}

type SWFClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of SWFClient class. This is resolved and normalized from the {@link SWFClientConfig | constructor configuration interface}.
 */
export interface SWFClientResolvedConfig extends SWFClientResolvedConfigType {}

/**
 * <fullname>Amazon Simple Workflow Service</fullname>
 *
 *          <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to
 *       coordinate work across distributed components. In Amazon SWF, a <i>task</i>
 *       represents a logical unit of work that is performed by a component of your workflow.
 *       Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and
 *       concurrency in accordance with the logical flow of the application.</p>
 *
 *          <p>Amazon SWF gives you full control over implementing tasks and coordinating them without
 *       worrying about underlying complexities such as tracking their progress and maintaining their
 *       state.</p>
 *
 *          <p>This documentation serves as reference only. For a broader overview of the Amazon SWF
 *       programming model, see the <i>
 *                <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a>
 *             </i>.</p>
 */
export class SWFClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SWFClientResolvedConfig
> {
  /**
   * The resolved configuration of SWFClient class. This is resolved and normalized from the {@link SWFClientConfig | constructor configuration interface}.
   */
  readonly config: SWFClientResolvedConfig;

  constructor(configuration: SWFClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
