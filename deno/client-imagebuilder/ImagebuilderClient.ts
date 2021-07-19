import {
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
} from "./commands/CancelImageCreationCommand.ts";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "./commands/CreateComponentCommand.ts";
import {
  CreateContainerRecipeCommandInput,
  CreateContainerRecipeCommandOutput,
} from "./commands/CreateContainerRecipeCommand.ts";
import {
  CreateDistributionConfigurationCommandInput,
  CreateDistributionConfigurationCommandOutput,
} from "./commands/CreateDistributionConfigurationCommand.ts";
import { CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand.ts";
import {
  CreateImagePipelineCommandInput,
  CreateImagePipelineCommandOutput,
} from "./commands/CreateImagePipelineCommand.ts";
import { CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput } from "./commands/CreateImageRecipeCommand.ts";
import {
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput,
} from "./commands/CreateInfrastructureConfigurationCommand.ts";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "./commands/DeleteComponentCommand.ts";
import {
  DeleteContainerRecipeCommandInput,
  DeleteContainerRecipeCommandOutput,
} from "./commands/DeleteContainerRecipeCommand.ts";
import {
  DeleteDistributionConfigurationCommandInput,
  DeleteDistributionConfigurationCommandOutput,
} from "./commands/DeleteDistributionConfigurationCommand.ts";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand.ts";
import {
  DeleteImagePipelineCommandInput,
  DeleteImagePipelineCommandOutput,
} from "./commands/DeleteImagePipelineCommand.ts";
import { DeleteImageRecipeCommandInput, DeleteImageRecipeCommandOutput } from "./commands/DeleteImageRecipeCommand.ts";
import {
  DeleteInfrastructureConfigurationCommandInput,
  DeleteInfrastructureConfigurationCommandOutput,
} from "./commands/DeleteInfrastructureConfigurationCommand.ts";
import { GetComponentCommandInput, GetComponentCommandOutput } from "./commands/GetComponentCommand.ts";
import { GetComponentPolicyCommandInput, GetComponentPolicyCommandOutput } from "./commands/GetComponentPolicyCommand.ts";
import { GetContainerRecipeCommandInput, GetContainerRecipeCommandOutput } from "./commands/GetContainerRecipeCommand.ts";
import {
  GetContainerRecipePolicyCommandInput,
  GetContainerRecipePolicyCommandOutput,
} from "./commands/GetContainerRecipePolicyCommand.ts";
import {
  GetDistributionConfigurationCommandInput,
  GetDistributionConfigurationCommandOutput,
} from "./commands/GetDistributionConfigurationCommand.ts";
import { GetImageCommandInput, GetImageCommandOutput } from "./commands/GetImageCommand.ts";
import { GetImagePipelineCommandInput, GetImagePipelineCommandOutput } from "./commands/GetImagePipelineCommand.ts";
import { GetImagePolicyCommandInput, GetImagePolicyCommandOutput } from "./commands/GetImagePolicyCommand.ts";
import { GetImageRecipeCommandInput, GetImageRecipeCommandOutput } from "./commands/GetImageRecipeCommand.ts";
import {
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput,
} from "./commands/GetImageRecipePolicyCommand.ts";
import {
  GetInfrastructureConfigurationCommandInput,
  GetInfrastructureConfigurationCommandOutput,
} from "./commands/GetInfrastructureConfigurationCommand.ts";
import { ImportComponentCommandInput, ImportComponentCommandOutput } from "./commands/ImportComponentCommand.ts";
import {
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
} from "./commands/ListComponentBuildVersionsCommand.ts";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand.ts";
import {
  ListContainerRecipesCommandInput,
  ListContainerRecipesCommandOutput,
} from "./commands/ListContainerRecipesCommand.ts";
import {
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput,
} from "./commands/ListDistributionConfigurationsCommand.ts";
import {
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "./commands/ListImageBuildVersionsCommand.ts";
import { ListImagePackagesCommandInput, ListImagePackagesCommandOutput } from "./commands/ListImagePackagesCommand.ts";
import {
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
} from "./commands/ListImagePipelineImagesCommand.ts";
import { ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput } from "./commands/ListImagePipelinesCommand.ts";
import { ListImageRecipesCommandInput, ListImageRecipesCommandOutput } from "./commands/ListImageRecipesCommand.ts";
import { ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand.ts";
import {
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "./commands/ListInfrastructureConfigurationsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { PutComponentPolicyCommandInput, PutComponentPolicyCommandOutput } from "./commands/PutComponentPolicyCommand.ts";
import {
  PutContainerRecipePolicyCommandInput,
  PutContainerRecipePolicyCommandOutput,
} from "./commands/PutContainerRecipePolicyCommand.ts";
import { PutImagePolicyCommandInput, PutImagePolicyCommandOutput } from "./commands/PutImagePolicyCommand.ts";
import {
  PutImageRecipePolicyCommandInput,
  PutImageRecipePolicyCommandOutput,
} from "./commands/PutImageRecipePolicyCommand.ts";
import {
  StartImagePipelineExecutionCommandInput,
  StartImagePipelineExecutionCommandOutput,
} from "./commands/StartImagePipelineExecutionCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateDistributionConfigurationCommandInput,
  UpdateDistributionConfigurationCommandOutput,
} from "./commands/UpdateDistributionConfigurationCommand.ts";
import {
  UpdateImagePipelineCommandInput,
  UpdateImagePipelineCommandOutput,
} from "./commands/UpdateImagePipelineCommand.ts";
import {
  UpdateInfrastructureConfigurationCommandInput,
  UpdateInfrastructureConfigurationCommandOutput,
} from "./commands/UpdateInfrastructureConfigurationCommand.ts";
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
  | CancelImageCreationCommandInput
  | CreateComponentCommandInput
  | CreateContainerRecipeCommandInput
  | CreateDistributionConfigurationCommandInput
  | CreateImageCommandInput
  | CreateImagePipelineCommandInput
  | CreateImageRecipeCommandInput
  | CreateInfrastructureConfigurationCommandInput
  | DeleteComponentCommandInput
  | DeleteContainerRecipeCommandInput
  | DeleteDistributionConfigurationCommandInput
  | DeleteImageCommandInput
  | DeleteImagePipelineCommandInput
  | DeleteImageRecipeCommandInput
  | DeleteInfrastructureConfigurationCommandInput
  | GetComponentCommandInput
  | GetComponentPolicyCommandInput
  | GetContainerRecipeCommandInput
  | GetContainerRecipePolicyCommandInput
  | GetDistributionConfigurationCommandInput
  | GetImageCommandInput
  | GetImagePipelineCommandInput
  | GetImagePolicyCommandInput
  | GetImageRecipeCommandInput
  | GetImageRecipePolicyCommandInput
  | GetInfrastructureConfigurationCommandInput
  | ImportComponentCommandInput
  | ListComponentBuildVersionsCommandInput
  | ListComponentsCommandInput
  | ListContainerRecipesCommandInput
  | ListDistributionConfigurationsCommandInput
  | ListImageBuildVersionsCommandInput
  | ListImagePackagesCommandInput
  | ListImagePipelineImagesCommandInput
  | ListImagePipelinesCommandInput
  | ListImageRecipesCommandInput
  | ListImagesCommandInput
  | ListInfrastructureConfigurationsCommandInput
  | ListTagsForResourceCommandInput
  | PutComponentPolicyCommandInput
  | PutContainerRecipePolicyCommandInput
  | PutImagePolicyCommandInput
  | PutImageRecipePolicyCommandInput
  | StartImagePipelineExecutionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDistributionConfigurationCommandInput
  | UpdateImagePipelineCommandInput
  | UpdateInfrastructureConfigurationCommandInput;

export type ServiceOutputTypes =
  | CancelImageCreationCommandOutput
  | CreateComponentCommandOutput
  | CreateContainerRecipeCommandOutput
  | CreateDistributionConfigurationCommandOutput
  | CreateImageCommandOutput
  | CreateImagePipelineCommandOutput
  | CreateImageRecipeCommandOutput
  | CreateInfrastructureConfigurationCommandOutput
  | DeleteComponentCommandOutput
  | DeleteContainerRecipeCommandOutput
  | DeleteDistributionConfigurationCommandOutput
  | DeleteImageCommandOutput
  | DeleteImagePipelineCommandOutput
  | DeleteImageRecipeCommandOutput
  | DeleteInfrastructureConfigurationCommandOutput
  | GetComponentCommandOutput
  | GetComponentPolicyCommandOutput
  | GetContainerRecipeCommandOutput
  | GetContainerRecipePolicyCommandOutput
  | GetDistributionConfigurationCommandOutput
  | GetImageCommandOutput
  | GetImagePipelineCommandOutput
  | GetImagePolicyCommandOutput
  | GetImageRecipeCommandOutput
  | GetImageRecipePolicyCommandOutput
  | GetInfrastructureConfigurationCommandOutput
  | ImportComponentCommandOutput
  | ListComponentBuildVersionsCommandOutput
  | ListComponentsCommandOutput
  | ListContainerRecipesCommandOutput
  | ListDistributionConfigurationsCommandOutput
  | ListImageBuildVersionsCommandOutput
  | ListImagePackagesCommandOutput
  | ListImagePipelineImagesCommandOutput
  | ListImagePipelinesCommandOutput
  | ListImageRecipesCommandOutput
  | ListImagesCommandOutput
  | ListInfrastructureConfigurationsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutComponentPolicyCommandOutput
  | PutContainerRecipePolicyCommandOutput
  | PutImagePolicyCommandOutput
  | PutImageRecipePolicyCommandOutput
  | StartImagePipelineExecutionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDistributionConfigurationCommandOutput
  | UpdateImagePipelineCommandOutput
  | UpdateInfrastructureConfigurationCommandOutput;

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

type ImagebuilderClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ImagebuilderClient class constructor that set the region, credentials and other options.
 */
export interface ImagebuilderClientConfig extends ImagebuilderClientConfigType {}

type ImagebuilderClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ImagebuilderClient class. This is resolved and normalized from the {@link ImagebuilderClientConfig | constructor configuration interface}.
 */
export interface ImagebuilderClientResolvedConfig extends ImagebuilderClientResolvedConfigType {}

/**
 * <p>EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the
 *       creation, management, and deployment of customized, secure, and up-to-date "golden" server
 *       images that are pre-installed and pre-configured with software and settings to meet specific
 *       IT standards.</p>
 */
export class ImagebuilderClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ImagebuilderClientResolvedConfig
> {
  /**
   * The resolved configuration of ImagebuilderClient class. This is resolved and normalized from the {@link ImagebuilderClientConfig | constructor configuration interface}.
   */
  readonly config: ImagebuilderClientResolvedConfig;

  constructor(configuration: ImagebuilderClientConfig) {
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
