import { BuildBotLocaleCommandInput, BuildBotLocaleCommandOutput } from "./commands/BuildBotLocaleCommand.ts";
import { CreateBotAliasCommandInput, CreateBotAliasCommandOutput } from "./commands/CreateBotAliasCommand.ts";
import { CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand.ts";
import { CreateBotLocaleCommandInput, CreateBotLocaleCommandOutput } from "./commands/CreateBotLocaleCommand.ts";
import { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "./commands/CreateBotVersionCommand.ts";
import { CreateIntentCommandInput, CreateIntentCommandOutput } from "./commands/CreateIntentCommand.ts";
import { CreateSlotCommandInput, CreateSlotCommandOutput } from "./commands/CreateSlotCommand.ts";
import { CreateSlotTypeCommandInput, CreateSlotTypeCommandOutput } from "./commands/CreateSlotTypeCommand.ts";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "./commands/DeleteBotAliasCommand.ts";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand.ts";
import { DeleteBotLocaleCommandInput, DeleteBotLocaleCommandOutput } from "./commands/DeleteBotLocaleCommand.ts";
import { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "./commands/DeleteBotVersionCommand.ts";
import { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "./commands/DeleteIntentCommand.ts";
import { DeleteSlotCommandInput, DeleteSlotCommandOutput } from "./commands/DeleteSlotCommand.ts";
import { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "./commands/DeleteSlotTypeCommand.ts";
import { DescribeBotAliasCommandInput, DescribeBotAliasCommandOutput } from "./commands/DescribeBotAliasCommand.ts";
import { DescribeBotCommandInput, DescribeBotCommandOutput } from "./commands/DescribeBotCommand.ts";
import { DescribeBotLocaleCommandInput, DescribeBotLocaleCommandOutput } from "./commands/DescribeBotLocaleCommand.ts";
import { DescribeBotVersionCommandInput, DescribeBotVersionCommandOutput } from "./commands/DescribeBotVersionCommand.ts";
import { DescribeIntentCommandInput, DescribeIntentCommandOutput } from "./commands/DescribeIntentCommand.ts";
import { DescribeSlotCommandInput, DescribeSlotCommandOutput } from "./commands/DescribeSlotCommand.ts";
import { DescribeSlotTypeCommandInput, DescribeSlotTypeCommandOutput } from "./commands/DescribeSlotTypeCommand.ts";
import { ListBotAliasesCommandInput, ListBotAliasesCommandOutput } from "./commands/ListBotAliasesCommand.ts";
import { ListBotLocalesCommandInput, ListBotLocalesCommandOutput } from "./commands/ListBotLocalesCommand.ts";
import { ListBotVersionsCommandInput, ListBotVersionsCommandOutput } from "./commands/ListBotVersionsCommand.ts";
import { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand.ts";
import { ListBuiltInIntentsCommandInput, ListBuiltInIntentsCommandOutput } from "./commands/ListBuiltInIntentsCommand.ts";
import {
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput,
} from "./commands/ListBuiltInSlotTypesCommand.ts";
import { ListIntentsCommandInput, ListIntentsCommandOutput } from "./commands/ListIntentsCommand.ts";
import { ListSlotTypesCommandInput, ListSlotTypesCommandOutput } from "./commands/ListSlotTypesCommand.ts";
import { ListSlotsCommandInput, ListSlotsCommandOutput } from "./commands/ListSlotsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateBotAliasCommandInput, UpdateBotAliasCommandOutput } from "./commands/UpdateBotAliasCommand.ts";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand.ts";
import { UpdateBotLocaleCommandInput, UpdateBotLocaleCommandOutput } from "./commands/UpdateBotLocaleCommand.ts";
import { UpdateIntentCommandInput, UpdateIntentCommandOutput } from "./commands/UpdateIntentCommand.ts";
import { UpdateSlotCommandInput, UpdateSlotCommandOutput } from "./commands/UpdateSlotCommand.ts";
import { UpdateSlotTypeCommandInput, UpdateSlotTypeCommandOutput } from "./commands/UpdateSlotTypeCommand.ts";
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
  | BuildBotLocaleCommandInput
  | CreateBotAliasCommandInput
  | CreateBotCommandInput
  | CreateBotLocaleCommandInput
  | CreateBotVersionCommandInput
  | CreateIntentCommandInput
  | CreateSlotCommandInput
  | CreateSlotTypeCommandInput
  | DeleteBotAliasCommandInput
  | DeleteBotCommandInput
  | DeleteBotLocaleCommandInput
  | DeleteBotVersionCommandInput
  | DeleteIntentCommandInput
  | DeleteSlotCommandInput
  | DeleteSlotTypeCommandInput
  | DescribeBotAliasCommandInput
  | DescribeBotCommandInput
  | DescribeBotLocaleCommandInput
  | DescribeBotVersionCommandInput
  | DescribeIntentCommandInput
  | DescribeSlotCommandInput
  | DescribeSlotTypeCommandInput
  | ListBotAliasesCommandInput
  | ListBotLocalesCommandInput
  | ListBotVersionsCommandInput
  | ListBotsCommandInput
  | ListBuiltInIntentsCommandInput
  | ListBuiltInSlotTypesCommandInput
  | ListIntentsCommandInput
  | ListSlotTypesCommandInput
  | ListSlotsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBotAliasCommandInput
  | UpdateBotCommandInput
  | UpdateBotLocaleCommandInput
  | UpdateIntentCommandInput
  | UpdateSlotCommandInput
  | UpdateSlotTypeCommandInput;

export type ServiceOutputTypes =
  | BuildBotLocaleCommandOutput
  | CreateBotAliasCommandOutput
  | CreateBotCommandOutput
  | CreateBotLocaleCommandOutput
  | CreateBotVersionCommandOutput
  | CreateIntentCommandOutput
  | CreateSlotCommandOutput
  | CreateSlotTypeCommandOutput
  | DeleteBotAliasCommandOutput
  | DeleteBotCommandOutput
  | DeleteBotLocaleCommandOutput
  | DeleteBotVersionCommandOutput
  | DeleteIntentCommandOutput
  | DeleteSlotCommandOutput
  | DeleteSlotTypeCommandOutput
  | DescribeBotAliasCommandOutput
  | DescribeBotCommandOutput
  | DescribeBotLocaleCommandOutput
  | DescribeBotVersionCommandOutput
  | DescribeIntentCommandOutput
  | DescribeSlotCommandOutput
  | DescribeSlotTypeCommandOutput
  | ListBotAliasesCommandOutput
  | ListBotLocalesCommandOutput
  | ListBotVersionsCommandOutput
  | ListBotsCommandOutput
  | ListBuiltInIntentsCommandOutput
  | ListBuiltInSlotTypesCommandOutput
  | ListIntentsCommandOutput
  | ListSlotTypesCommandOutput
  | ListSlotsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBotAliasCommandOutput
  | UpdateBotCommandOutput
  | UpdateBotLocaleCommandOutput
  | UpdateIntentCommandOutput
  | UpdateSlotCommandOutput
  | UpdateSlotTypeCommandOutput;

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
   * The AWS region to which this client will send requests or use as signingRegion
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

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

type LexModelsV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of LexModelsV2Client class constructor that set the region, credentials and other options.
 */
export interface LexModelsV2ClientConfig extends LexModelsV2ClientConfigType {}

type LexModelsV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of LexModelsV2Client class. This is resolved and normalized from the {@link LexModelsV2ClientConfig | constructor configuration interface}.
 */
export interface LexModelsV2ClientResolvedConfig extends LexModelsV2ClientResolvedConfigType {}

/**
 * <p></p>
 */
export class LexModelsV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LexModelsV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of LexModelsV2Client class. This is resolved and normalized from the {@link LexModelsV2ClientConfig | constructor configuration interface}.
   */
  readonly config: LexModelsV2ClientResolvedConfig;

  constructor(configuration: LexModelsV2ClientConfig) {
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
