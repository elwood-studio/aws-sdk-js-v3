import {
  CreateNotificationRuleCommandInput,
  CreateNotificationRuleCommandOutput,
} from "./commands/CreateNotificationRuleCommand.ts";
import {
  DeleteNotificationRuleCommandInput,
  DeleteNotificationRuleCommandOutput,
} from "./commands/DeleteNotificationRuleCommand.ts";
import { DeleteTargetCommandInput, DeleteTargetCommandOutput } from "./commands/DeleteTargetCommand.ts";
import {
  DescribeNotificationRuleCommandInput,
  DescribeNotificationRuleCommandOutput,
} from "./commands/DescribeNotificationRuleCommand.ts";
import { ListEventTypesCommandInput, ListEventTypesCommandOutput } from "./commands/ListEventTypesCommand.ts";
import {
  ListNotificationRulesCommandInput,
  ListNotificationRulesCommandOutput,
} from "./commands/ListNotificationRulesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListTargetsCommandInput, ListTargetsCommandOutput } from "./commands/ListTargetsCommand.ts";
import { SubscribeCommandInput, SubscribeCommandOutput } from "./commands/SubscribeCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UnsubscribeCommandInput, UnsubscribeCommandOutput } from "./commands/UnsubscribeCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateNotificationRuleCommandInput,
  UpdateNotificationRuleCommandOutput,
} from "./commands/UpdateNotificationRuleCommand.ts";
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
  | CreateNotificationRuleCommandInput
  | DeleteNotificationRuleCommandInput
  | DeleteTargetCommandInput
  | DescribeNotificationRuleCommandInput
  | ListEventTypesCommandInput
  | ListNotificationRulesCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetsCommandInput
  | SubscribeCommandInput
  | TagResourceCommandInput
  | UnsubscribeCommandInput
  | UntagResourceCommandInput
  | UpdateNotificationRuleCommandInput;

export type ServiceOutputTypes =
  | CreateNotificationRuleCommandOutput
  | DeleteNotificationRuleCommandOutput
  | DeleteTargetCommandOutput
  | DescribeNotificationRuleCommandOutput
  | ListEventTypesCommandOutput
  | ListNotificationRulesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetsCommandOutput
  | SubscribeCommandOutput
  | TagResourceCommandOutput
  | UnsubscribeCommandOutput
  | UntagResourceCommandOutput
  | UpdateNotificationRuleCommandOutput;

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

type CodestarNotificationsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CodestarNotificationsClient class constructor that set the region, credentials and other options.
 */
export interface CodestarNotificationsClientConfig extends CodestarNotificationsClientConfigType {}

type CodestarNotificationsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CodestarNotificationsClient class. This is resolved and normalized from the {@link CodestarNotificationsClientConfig | constructor configuration interface}.
 */
export interface CodestarNotificationsClientResolvedConfig extends CodestarNotificationsClientResolvedConfigType {}

/**
 * <p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the
 *       operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API
 *       to work with the following objects:</p>
 *
 *          <p>Notification rules, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateNotificationRule</a>, which creates a notification rule for a
 *                     resource in your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteNotificationRule</a>, which deletes a notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeNotificationRule</a>, which provides information about a notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListNotificationRules</a>, which lists the notification rules associated with
 *           your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a
 *           notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Subscribe</a>, which subscribes a target to a notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Unsubscribe</a>, which removes a target from a notification rule. </p>
 *             </li>
 *          </ul>
 *
 *          <p>Targets, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteTarget</a>, which removes a notification rule target (SNS topic) from a
 *           notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTargets</a>, which lists the targets associated with a
 *                     notification rule. </p>
 *             </li>
 *          </ul>
 *
 *          <p>Events, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListEventTypes</a>, which lists the event types you can include in
 *                     a notification rule. </p>
 *             </li>
 *          </ul>
 *          <p>Tags, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>, which lists the tags already associated
 *                     with a notification rule in your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>, which associates a tag you provide with a
 *                     notification rule in your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>, which removes a tag from a notification rule in
 *                     your account. </p>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p> For information about how to use AWS CodeStar Notifications, see link in the CodeStarNotifications User Guide.
 *     </p>
 */
export class CodestarNotificationsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodestarNotificationsClientResolvedConfig
> {
  /**
   * The resolved configuration of CodestarNotificationsClient class. This is resolved and normalized from the {@link CodestarNotificationsClientConfig | constructor configuration interface}.
   */
  readonly config: CodestarNotificationsClientResolvedConfig;

  constructor(configuration: CodestarNotificationsClientConfig) {
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
