import {
  BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
} from "./commands/BatchAssociateClientDeviceWithCoreDeviceCommand.ts";
import {
  BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
} from "./commands/BatchDisassociateClientDeviceFromCoreDeviceCommand.ts";
import { CancelDeploymentCommandInput, CancelDeploymentCommandOutput } from "./commands/CancelDeploymentCommand.ts";
import {
  CreateComponentVersionCommandInput,
  CreateComponentVersionCommandOutput,
} from "./commands/CreateComponentVersionCommand.ts";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand.ts";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "./commands/DeleteComponentCommand.ts";
import { DeleteCoreDeviceCommandInput, DeleteCoreDeviceCommandOutput } from "./commands/DeleteCoreDeviceCommand.ts";
import { DescribeComponentCommandInput, DescribeComponentCommandOutput } from "./commands/DescribeComponentCommand.ts";
import { GetComponentCommandInput, GetComponentCommandOutput } from "./commands/GetComponentCommand.ts";
import {
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
} from "./commands/GetComponentVersionArtifactCommand.ts";
import { GetCoreDeviceCommandInput, GetCoreDeviceCommandOutput } from "./commands/GetCoreDeviceCommand.ts";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand.ts";
import {
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
} from "./commands/ListClientDevicesAssociatedWithCoreDeviceCommand.ts";
import {
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput,
} from "./commands/ListComponentVersionsCommand.ts";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand.ts";
import { ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput } from "./commands/ListCoreDevicesCommand.ts";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand.ts";
import {
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
} from "./commands/ListEffectiveDeploymentsCommand.ts";
import {
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
} from "./commands/ListInstalledComponentsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ResolveComponentCandidatesCommandInput,
  ResolveComponentCandidatesCommandOutput,
} from "./commands/ResolveComponentCandidatesCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
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
  | BatchAssociateClientDeviceWithCoreDeviceCommandInput
  | BatchDisassociateClientDeviceFromCoreDeviceCommandInput
  | CancelDeploymentCommandInput
  | CreateComponentVersionCommandInput
  | CreateDeploymentCommandInput
  | DeleteComponentCommandInput
  | DeleteCoreDeviceCommandInput
  | DescribeComponentCommandInput
  | GetComponentCommandInput
  | GetComponentVersionArtifactCommandInput
  | GetCoreDeviceCommandInput
  | GetDeploymentCommandInput
  | ListClientDevicesAssociatedWithCoreDeviceCommandInput
  | ListComponentVersionsCommandInput
  | ListComponentsCommandInput
  | ListCoreDevicesCommandInput
  | ListDeploymentsCommandInput
  | ListEffectiveDeploymentsCommandInput
  | ListInstalledComponentsCommandInput
  | ListTagsForResourceCommandInput
  | ResolveComponentCandidatesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | BatchAssociateClientDeviceWithCoreDeviceCommandOutput
  | BatchDisassociateClientDeviceFromCoreDeviceCommandOutput
  | CancelDeploymentCommandOutput
  | CreateComponentVersionCommandOutput
  | CreateDeploymentCommandOutput
  | DeleteComponentCommandOutput
  | DeleteCoreDeviceCommandOutput
  | DescribeComponentCommandOutput
  | GetComponentCommandOutput
  | GetComponentVersionArtifactCommandOutput
  | GetCoreDeviceCommandOutput
  | GetDeploymentCommandOutput
  | ListClientDevicesAssociatedWithCoreDeviceCommandOutput
  | ListComponentVersionsCommandOutput
  | ListComponentsCommandOutput
  | ListCoreDevicesCommandOutput
  | ListDeploymentsCommandOutput
  | ListEffectiveDeploymentsCommandOutput
  | ListInstalledComponentsCommandOutput
  | ListTagsForResourceCommandOutput
  | ResolveComponentCandidatesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

type GreengrassV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of GreengrassV2Client class constructor that set the region, credentials and other options.
 */
export interface GreengrassV2ClientConfig extends GreengrassV2ClientConfigType {}

type GreengrassV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of GreengrassV2Client class. This is resolved and normalized from the {@link GreengrassV2ClientConfig | constructor configuration interface}.
 */
export interface GreengrassV2ClientResolvedConfig extends GreengrassV2ClientResolvedConfigType {}

/**
 * <p>AWS IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities
 *       to edge devices. This enables devices to collect and analyze data closer to the source of
 *       information, react autonomously to local events, and communicate securely with each other on
 *       local networks. Local devices can also communicate securely with AWS IoT Core and export IoT data
 *       to the AWS Cloud. AWS IoT Greengrass developers can use AWS Lambda functions and components to create and
 *       deploy applications to fleets of edge devices for local operation.</p>
 *          <p>AWS IoT Greengrass Version 2 provides a new major version of the AWS IoT Greengrass Core software, new APIs, and a new console.
 *       Use this API reference to learn how to use the AWS IoT Greengrass V2 API operations to manage components,
 *       manage deployments, and core devices.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is AWS IoT Greengrass?</a> in
 *       the <i>AWS IoT Greengrass V2 Developer Guide</i>.</p>
 */
export class GreengrassV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GreengrassV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of GreengrassV2Client class. This is resolved and normalized from the {@link GreengrassV2ClientConfig | constructor configuration interface}.
   */
  readonly config: GreengrassV2ClientResolvedConfig;

  constructor(configuration: GreengrassV2ClientConfig) {
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
