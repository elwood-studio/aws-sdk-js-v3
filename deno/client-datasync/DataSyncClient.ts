import {
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput,
} from "./commands/CancelTaskExecutionCommand.ts";
import { CreateAgentCommandInput, CreateAgentCommandOutput } from "./commands/CreateAgentCommand.ts";
import { CreateLocationEfsCommandInput, CreateLocationEfsCommandOutput } from "./commands/CreateLocationEfsCommand.ts";
import {
  CreateLocationFsxWindowsCommandInput,
  CreateLocationFsxWindowsCommandOutput,
} from "./commands/CreateLocationFsxWindowsCommand.ts";
import { CreateLocationNfsCommandInput, CreateLocationNfsCommandOutput } from "./commands/CreateLocationNfsCommand.ts";
import {
  CreateLocationObjectStorageCommandInput,
  CreateLocationObjectStorageCommandOutput,
} from "./commands/CreateLocationObjectStorageCommand.ts";
import { CreateLocationS3CommandInput, CreateLocationS3CommandOutput } from "./commands/CreateLocationS3Command.ts";
import { CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput } from "./commands/CreateLocationSmbCommand.ts";
import { CreateTaskCommandInput, CreateTaskCommandOutput } from "./commands/CreateTaskCommand.ts";
import { DeleteAgentCommandInput, DeleteAgentCommandOutput } from "./commands/DeleteAgentCommand.ts";
import { DeleteLocationCommandInput, DeleteLocationCommandOutput } from "./commands/DeleteLocationCommand.ts";
import { DeleteTaskCommandInput, DeleteTaskCommandOutput } from "./commands/DeleteTaskCommand.ts";
import { DescribeAgentCommandInput, DescribeAgentCommandOutput } from "./commands/DescribeAgentCommand.ts";
import {
  DescribeLocationEfsCommandInput,
  DescribeLocationEfsCommandOutput,
} from "./commands/DescribeLocationEfsCommand.ts";
import {
  DescribeLocationFsxWindowsCommandInput,
  DescribeLocationFsxWindowsCommandOutput,
} from "./commands/DescribeLocationFsxWindowsCommand.ts";
import {
  DescribeLocationNfsCommandInput,
  DescribeLocationNfsCommandOutput,
} from "./commands/DescribeLocationNfsCommand.ts";
import {
  DescribeLocationObjectStorageCommandInput,
  DescribeLocationObjectStorageCommandOutput,
} from "./commands/DescribeLocationObjectStorageCommand.ts";
import { DescribeLocationS3CommandInput, DescribeLocationS3CommandOutput } from "./commands/DescribeLocationS3Command.ts";
import {
  DescribeLocationSmbCommandInput,
  DescribeLocationSmbCommandOutput,
} from "./commands/DescribeLocationSmbCommand.ts";
import { DescribeTaskCommandInput, DescribeTaskCommandOutput } from "./commands/DescribeTaskCommand.ts";
import {
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput,
} from "./commands/DescribeTaskExecutionCommand.ts";
import { ListAgentsCommandInput, ListAgentsCommandOutput } from "./commands/ListAgentsCommand.ts";
import { ListLocationsCommandInput, ListLocationsCommandOutput } from "./commands/ListLocationsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput } from "./commands/ListTaskExecutionsCommand.ts";
import { ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand.ts";
import { StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput } from "./commands/StartTaskExecutionCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateAgentCommandInput, UpdateAgentCommandOutput } from "./commands/UpdateAgentCommand.ts";
import { UpdateLocationNfsCommandInput, UpdateLocationNfsCommandOutput } from "./commands/UpdateLocationNfsCommand.ts";
import {
  UpdateLocationObjectStorageCommandInput,
  UpdateLocationObjectStorageCommandOutput,
} from "./commands/UpdateLocationObjectStorageCommand.ts";
import { UpdateLocationSmbCommandInput, UpdateLocationSmbCommandOutput } from "./commands/UpdateLocationSmbCommand.ts";
import { UpdateTaskCommandInput, UpdateTaskCommandOutput } from "./commands/UpdateTaskCommand.ts";
import {
  UpdateTaskExecutionCommandInput,
  UpdateTaskExecutionCommandOutput,
} from "./commands/UpdateTaskExecutionCommand.ts";
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
  | CancelTaskExecutionCommandInput
  | CreateAgentCommandInput
  | CreateLocationEfsCommandInput
  | CreateLocationFsxWindowsCommandInput
  | CreateLocationNfsCommandInput
  | CreateLocationObjectStorageCommandInput
  | CreateLocationS3CommandInput
  | CreateLocationSmbCommandInput
  | CreateTaskCommandInput
  | DeleteAgentCommandInput
  | DeleteLocationCommandInput
  | DeleteTaskCommandInput
  | DescribeAgentCommandInput
  | DescribeLocationEfsCommandInput
  | DescribeLocationFsxWindowsCommandInput
  | DescribeLocationNfsCommandInput
  | DescribeLocationObjectStorageCommandInput
  | DescribeLocationS3CommandInput
  | DescribeLocationSmbCommandInput
  | DescribeTaskCommandInput
  | DescribeTaskExecutionCommandInput
  | ListAgentsCommandInput
  | ListLocationsCommandInput
  | ListTagsForResourceCommandInput
  | ListTaskExecutionsCommandInput
  | ListTasksCommandInput
  | StartTaskExecutionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAgentCommandInput
  | UpdateLocationNfsCommandInput
  | UpdateLocationObjectStorageCommandInput
  | UpdateLocationSmbCommandInput
  | UpdateTaskCommandInput
  | UpdateTaskExecutionCommandInput;

export type ServiceOutputTypes =
  | CancelTaskExecutionCommandOutput
  | CreateAgentCommandOutput
  | CreateLocationEfsCommandOutput
  | CreateLocationFsxWindowsCommandOutput
  | CreateLocationNfsCommandOutput
  | CreateLocationObjectStorageCommandOutput
  | CreateLocationS3CommandOutput
  | CreateLocationSmbCommandOutput
  | CreateTaskCommandOutput
  | DeleteAgentCommandOutput
  | DeleteLocationCommandOutput
  | DeleteTaskCommandOutput
  | DescribeAgentCommandOutput
  | DescribeLocationEfsCommandOutput
  | DescribeLocationFsxWindowsCommandOutput
  | DescribeLocationNfsCommandOutput
  | DescribeLocationObjectStorageCommandOutput
  | DescribeLocationS3CommandOutput
  | DescribeLocationSmbCommandOutput
  | DescribeTaskCommandOutput
  | DescribeTaskExecutionCommandOutput
  | ListAgentsCommandOutput
  | ListLocationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTaskExecutionsCommandOutput
  | ListTasksCommandOutput
  | StartTaskExecutionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentCommandOutput
  | UpdateLocationNfsCommandOutput
  | UpdateLocationObjectStorageCommandOutput
  | UpdateLocationSmbCommandOutput
  | UpdateTaskCommandOutput
  | UpdateTaskExecutionCommandOutput;

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
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

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

type DataSyncClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of DataSyncClient class constructor that set the region, credentials and other options.
 */
export interface DataSyncClientConfig extends DataSyncClientConfigType {}

type DataSyncClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of DataSyncClient class. This is resolved and normalized from the {@link DataSyncClientConfig | constructor configuration interface}.
 */
export interface DataSyncClientResolvedConfig extends DataSyncClientResolvedConfigType {}

/**
 * <fullname>AWS DataSync</fullname>
 *
 *          <p>AWS DataSync is a managed data transfer service that makes it simpler for you to
 *       automate moving data between on-premises storage and Amazon Simple Storage Service (Amazon S3)
 *       or Amazon Elastic File System (Amazon EFS). </p>
 *          <p>This API interface reference for AWS DataSync contains documentation for a
 *       programming interface that you can use to manage AWS DataSync.</p>
 */
export class DataSyncClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataSyncClientResolvedConfig
> {
  /**
   * The resolved configuration of DataSyncClient class. This is resolved and normalized from the {@link DataSyncClientConfig | constructor configuration interface}.
   */
  readonly config: DataSyncClientResolvedConfig;

  constructor(configuration: DataSyncClientConfig) {
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
