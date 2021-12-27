import { CreateAccessCommandInput, CreateAccessCommandOutput } from "./commands/CreateAccessCommand.ts";
import { CreateServerCommandInput, CreateServerCommandOutput } from "./commands/CreateServerCommand.ts";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand.ts";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand.ts";
import { DeleteAccessCommandInput, DeleteAccessCommandOutput } from "./commands/DeleteAccessCommand.ts";
import { DeleteServerCommandInput, DeleteServerCommandOutput } from "./commands/DeleteServerCommand.ts";
import { DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput } from "./commands/DeleteSshPublicKeyCommand.ts";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand.ts";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand.ts";
import { DescribeAccessCommandInput, DescribeAccessCommandOutput } from "./commands/DescribeAccessCommand.ts";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "./commands/DescribeExecutionCommand.ts";
import {
  DescribeSecurityPolicyCommandInput,
  DescribeSecurityPolicyCommandOutput,
} from "./commands/DescribeSecurityPolicyCommand.ts";
import { DescribeServerCommandInput, DescribeServerCommandOutput } from "./commands/DescribeServerCommand.ts";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand.ts";
import { DescribeWorkflowCommandInput, DescribeWorkflowCommandOutput } from "./commands/DescribeWorkflowCommand.ts";
import { ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput } from "./commands/ImportSshPublicKeyCommand.ts";
import { ListAccessesCommandInput, ListAccessesCommandOutput } from "./commands/ListAccessesCommand.ts";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand.ts";
import {
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "./commands/ListSecurityPoliciesCommand.ts";
import { ListServersCommandInput, ListServersCommandOutput } from "./commands/ListServersCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand.ts";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand.ts";
import {
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
} from "./commands/SendWorkflowStepStateCommand.ts";
import { StartServerCommandInput, StartServerCommandOutput } from "./commands/StartServerCommand.ts";
import { StopServerCommandInput, StopServerCommandOutput } from "./commands/StopServerCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import {
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
} from "./commands/TestIdentityProviderCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateAccessCommandInput, UpdateAccessCommandOutput } from "./commands/UpdateAccessCommand.ts";
import { UpdateServerCommandInput, UpdateServerCommandOutput } from "./commands/UpdateServerCommand.ts";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand.ts";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig.ts";
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
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateAccessCommandInput
  | CreateServerCommandInput
  | CreateUserCommandInput
  | CreateWorkflowCommandInput
  | DeleteAccessCommandInput
  | DeleteServerCommandInput
  | DeleteSshPublicKeyCommandInput
  | DeleteUserCommandInput
  | DeleteWorkflowCommandInput
  | DescribeAccessCommandInput
  | DescribeExecutionCommandInput
  | DescribeSecurityPolicyCommandInput
  | DescribeServerCommandInput
  | DescribeUserCommandInput
  | DescribeWorkflowCommandInput
  | ImportSshPublicKeyCommandInput
  | ListAccessesCommandInput
  | ListExecutionsCommandInput
  | ListSecurityPoliciesCommandInput
  | ListServersCommandInput
  | ListTagsForResourceCommandInput
  | ListUsersCommandInput
  | ListWorkflowsCommandInput
  | SendWorkflowStepStateCommandInput
  | StartServerCommandInput
  | StopServerCommandInput
  | TagResourceCommandInput
  | TestIdentityProviderCommandInput
  | UntagResourceCommandInput
  | UpdateAccessCommandInput
  | UpdateServerCommandInput
  | UpdateUserCommandInput;

export type ServiceOutputTypes =
  | CreateAccessCommandOutput
  | CreateServerCommandOutput
  | CreateUserCommandOutput
  | CreateWorkflowCommandOutput
  | DeleteAccessCommandOutput
  | DeleteServerCommandOutput
  | DeleteSshPublicKeyCommandOutput
  | DeleteUserCommandOutput
  | DeleteWorkflowCommandOutput
  | DescribeAccessCommandOutput
  | DescribeExecutionCommandOutput
  | DescribeSecurityPolicyCommandOutput
  | DescribeServerCommandOutput
  | DescribeUserCommandOutput
  | DescribeWorkflowCommandOutput
  | ImportSshPublicKeyCommandOutput
  | ListAccessesCommandOutput
  | ListExecutionsCommandOutput
  | ListSecurityPoliciesCommandOutput
  | ListServersCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsersCommandOutput
  | ListWorkflowsCommandOutput
  | SendWorkflowStepStateCommandOutput
  | StartServerCommandOutput
  | StopServerCommandOutput
  | TagResourceCommandOutput
  | TestIdentityProviderCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessCommandOutput
  | UpdateServerCommandOutput
  | UpdateUserCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
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
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

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

type TransferClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of TransferClient class constructor that set the region, credentials and other options.
 */
export interface TransferClientConfig extends TransferClientConfigType {}

type TransferClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of TransferClient class. This is resolved and normalized from the {@link TransferClientConfig | constructor configuration interface}.
 */
export interface TransferClientResolvedConfig extends TransferClientResolvedConfigType {}

/**
 * <p>Amazon Web Services Transfer Family is a fully managed service that enables the transfer of files over the
 *       File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH)
 *       File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon
 *       S3). Amazon Web Services helps you seamlessly migrate your file transfer workflows to Amazon Web Services Transfer Family by
 *       integrating with existing authentication systems, and providing DNS routing with Amazon Route
 *       53 so nothing changes for your customers and partners, or their applications. With your data
 *       in Amazon S3, you can use it with Amazon Web Services services for processing, analytics, machine learning,
 *       and archiving. Getting started with Amazon Web Services Transfer Family is easy since there is no
 *       infrastructure to buy and set up.</p>
 */
export class TransferClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  TransferClientResolvedConfig
> {
  /**
   * The resolved configuration of TransferClient class. This is resolved and normalized from the {@link TransferClientConfig | constructor configuration interface}.
   */
  readonly config: TransferClientResolvedConfig;

  constructor(configuration: TransferClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
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
