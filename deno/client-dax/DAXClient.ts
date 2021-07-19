import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand.ts";
import {
  CreateParameterGroupCommandInput,
  CreateParameterGroupCommandOutput,
} from "./commands/CreateParameterGroupCommand.ts";
import { CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput } from "./commands/CreateSubnetGroupCommand.ts";
import {
  DecreaseReplicationFactorCommandInput,
  DecreaseReplicationFactorCommandOutput,
} from "./commands/DecreaseReplicationFactorCommand.ts";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand.ts";
import {
  DeleteParameterGroupCommandInput,
  DeleteParameterGroupCommandOutput,
} from "./commands/DeleteParameterGroupCommand.ts";
import { DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput } from "./commands/DeleteSubnetGroupCommand.ts";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand.ts";
import {
  DescribeDefaultParametersCommandInput,
  DescribeDefaultParametersCommandOutput,
} from "./commands/DescribeDefaultParametersCommand.ts";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand.ts";
import {
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
} from "./commands/DescribeParameterGroupsCommand.ts";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "./commands/DescribeParametersCommand.ts";
import {
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput,
} from "./commands/DescribeSubnetGroupsCommand.ts";
import {
  IncreaseReplicationFactorCommandInput,
  IncreaseReplicationFactorCommandOutput,
} from "./commands/IncreaseReplicationFactorCommand.ts";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand.ts";
import { RebootNodeCommandInput, RebootNodeCommandOutput } from "./commands/RebootNodeCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand.ts";
import {
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput,
} from "./commands/UpdateParameterGroupCommand.ts";
import { UpdateSubnetGroupCommandInput, UpdateSubnetGroupCommandOutput } from "./commands/UpdateSubnetGroupCommand.ts";
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
  | CreateClusterCommandInput
  | CreateParameterGroupCommandInput
  | CreateSubnetGroupCommandInput
  | DecreaseReplicationFactorCommandInput
  | DeleteClusterCommandInput
  | DeleteParameterGroupCommandInput
  | DeleteSubnetGroupCommandInput
  | DescribeClustersCommandInput
  | DescribeDefaultParametersCommandInput
  | DescribeEventsCommandInput
  | DescribeParameterGroupsCommandInput
  | DescribeParametersCommandInput
  | DescribeSubnetGroupsCommandInput
  | IncreaseReplicationFactorCommandInput
  | ListTagsCommandInput
  | RebootNodeCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateClusterCommandInput
  | UpdateParameterGroupCommandInput
  | UpdateSubnetGroupCommandInput;

export type ServiceOutputTypes =
  | CreateClusterCommandOutput
  | CreateParameterGroupCommandOutput
  | CreateSubnetGroupCommandOutput
  | DecreaseReplicationFactorCommandOutput
  | DeleteClusterCommandOutput
  | DeleteParameterGroupCommandOutput
  | DeleteSubnetGroupCommandOutput
  | DescribeClustersCommandOutput
  | DescribeDefaultParametersCommandOutput
  | DescribeEventsCommandOutput
  | DescribeParameterGroupsCommandOutput
  | DescribeParametersCommandOutput
  | DescribeSubnetGroupsCommandOutput
  | IncreaseReplicationFactorCommandOutput
  | ListTagsCommandOutput
  | RebootNodeCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateClusterCommandOutput
  | UpdateParameterGroupCommandOutput
  | UpdateSubnetGroupCommandOutput;

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

type DAXClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of DAXClient class constructor that set the region, credentials and other options.
 */
export interface DAXClientConfig extends DAXClientConfigType {}

type DAXClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of DAXClient class. This is resolved and normalized from the {@link DAXClientConfig | constructor configuration interface}.
 */
export interface DAXClientResolvedConfig extends DAXClientResolvedConfigType {}

/**
 * <p>DAX is a managed caching service engineered for Amazon DynamoDB. DAX
 *             dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so
 *             applications can access that data with sub-millisecond latency. You can create a DAX
 *             cluster easily, using the AWS Management Console. With a few simple modifications to
 *             your code, your application can begin taking advantage of the DAX cluster and realize
 *             significant improvements in read performance.</p>
 */
export class DAXClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DAXClientResolvedConfig
> {
  /**
   * The resolved configuration of DAXClient class. This is resolved and normalized from the {@link DAXClientConfig | constructor configuration interface}.
   */
  readonly config: DAXClientResolvedConfig;

  constructor(configuration: DAXClientConfig) {
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
