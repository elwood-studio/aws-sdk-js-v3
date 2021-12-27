import { AssociateWebACLCommandInput, AssociateWebACLCommandOutput } from "./commands/AssociateWebACLCommand.ts";
import { CheckCapacityCommandInput, CheckCapacityCommandOutput } from "./commands/CheckCapacityCommand.ts";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand.ts";
import {
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "./commands/CreateRegexPatternSetCommand.ts";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "./commands/CreateRuleGroupCommand.ts";
import { CreateWebACLCommandInput, CreateWebACLCommandOutput } from "./commands/CreateWebACLCommand.ts";
import {
  DeleteFirewallManagerRuleGroupsCommandInput,
  DeleteFirewallManagerRuleGroupsCommandOutput,
} from "./commands/DeleteFirewallManagerRuleGroupsCommand.ts";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand.ts";
import {
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand.ts";
import {
  DeletePermissionPolicyCommandInput,
  DeletePermissionPolicyCommandOutput,
} from "./commands/DeletePermissionPolicyCommand.ts";
import {
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "./commands/DeleteRegexPatternSetCommand.ts";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand.ts";
import { DeleteWebACLCommandInput, DeleteWebACLCommandOutput } from "./commands/DeleteWebACLCommand.ts";
import {
  DescribeManagedRuleGroupCommandInput,
  DescribeManagedRuleGroupCommandOutput,
} from "./commands/DescribeManagedRuleGroupCommand.ts";
import { DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput } from "./commands/DisassociateWebACLCommand.ts";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand.ts";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand.ts";
import { GetManagedRuleSetCommandInput, GetManagedRuleSetCommandOutput } from "./commands/GetManagedRuleSetCommand.ts";
import {
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "./commands/GetPermissionPolicyCommand.ts";
import {
  GetRateBasedStatementManagedKeysCommandInput,
  GetRateBasedStatementManagedKeysCommandOutput,
} from "./commands/GetRateBasedStatementManagedKeysCommand.ts";
import { GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput } from "./commands/GetRegexPatternSetCommand.ts";
import { GetRuleGroupCommandInput, GetRuleGroupCommandOutput } from "./commands/GetRuleGroupCommand.ts";
import { GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput } from "./commands/GetSampledRequestsCommand.ts";
import { GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand.ts";
import {
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
} from "./commands/GetWebACLForResourceCommand.ts";
import {
  ListAvailableManagedRuleGroupVersionsCommandInput,
  ListAvailableManagedRuleGroupVersionsCommandOutput,
} from "./commands/ListAvailableManagedRuleGroupVersionsCommand.ts";
import {
  ListAvailableManagedRuleGroupsCommandInput,
  ListAvailableManagedRuleGroupsCommandOutput,
} from "./commands/ListAvailableManagedRuleGroupsCommand.ts";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand.ts";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand.ts";
import {
  ListManagedRuleSetsCommandInput,
  ListManagedRuleSetsCommandOutput,
} from "./commands/ListManagedRuleSetsCommand.ts";
import {
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "./commands/ListRegexPatternSetsCommand.ts";
import {
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
} from "./commands/ListResourcesForWebACLCommand.ts";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand.ts";
import {
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "./commands/PutLoggingConfigurationCommand.ts";
import {
  PutManagedRuleSetVersionsCommandInput,
  PutManagedRuleSetVersionsCommandOutput,
} from "./commands/PutManagedRuleSetVersionsCommand.ts";
import {
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "./commands/PutPermissionPolicyCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand.ts";
import {
  UpdateManagedRuleSetVersionExpiryDateCommandInput,
  UpdateManagedRuleSetVersionExpiryDateCommandOutput,
} from "./commands/UpdateManagedRuleSetVersionExpiryDateCommand.ts";
import {
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "./commands/UpdateRegexPatternSetCommand.ts";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "./commands/UpdateRuleGroupCommand.ts";
import { UpdateWebACLCommandInput, UpdateWebACLCommandOutput } from "./commands/UpdateWebACLCommand.ts";
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
  | AssociateWebACLCommandInput
  | CheckCapacityCommandInput
  | CreateIPSetCommandInput
  | CreateRegexPatternSetCommandInput
  | CreateRuleGroupCommandInput
  | CreateWebACLCommandInput
  | DeleteFirewallManagerRuleGroupsCommandInput
  | DeleteIPSetCommandInput
  | DeleteLoggingConfigurationCommandInput
  | DeletePermissionPolicyCommandInput
  | DeleteRegexPatternSetCommandInput
  | DeleteRuleGroupCommandInput
  | DeleteWebACLCommandInput
  | DescribeManagedRuleGroupCommandInput
  | DisassociateWebACLCommandInput
  | GetIPSetCommandInput
  | GetLoggingConfigurationCommandInput
  | GetManagedRuleSetCommandInput
  | GetPermissionPolicyCommandInput
  | GetRateBasedStatementManagedKeysCommandInput
  | GetRegexPatternSetCommandInput
  | GetRuleGroupCommandInput
  | GetSampledRequestsCommandInput
  | GetWebACLCommandInput
  | GetWebACLForResourceCommandInput
  | ListAvailableManagedRuleGroupVersionsCommandInput
  | ListAvailableManagedRuleGroupsCommandInput
  | ListIPSetsCommandInput
  | ListLoggingConfigurationsCommandInput
  | ListManagedRuleSetsCommandInput
  | ListRegexPatternSetsCommandInput
  | ListResourcesForWebACLCommandInput
  | ListRuleGroupsCommandInput
  | ListTagsForResourceCommandInput
  | ListWebACLsCommandInput
  | PutLoggingConfigurationCommandInput
  | PutManagedRuleSetVersionsCommandInput
  | PutPermissionPolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateIPSetCommandInput
  | UpdateManagedRuleSetVersionExpiryDateCommandInput
  | UpdateRegexPatternSetCommandInput
  | UpdateRuleGroupCommandInput
  | UpdateWebACLCommandInput;

export type ServiceOutputTypes =
  | AssociateWebACLCommandOutput
  | CheckCapacityCommandOutput
  | CreateIPSetCommandOutput
  | CreateRegexPatternSetCommandOutput
  | CreateRuleGroupCommandOutput
  | CreateWebACLCommandOutput
  | DeleteFirewallManagerRuleGroupsCommandOutput
  | DeleteIPSetCommandOutput
  | DeleteLoggingConfigurationCommandOutput
  | DeletePermissionPolicyCommandOutput
  | DeleteRegexPatternSetCommandOutput
  | DeleteRuleGroupCommandOutput
  | DeleteWebACLCommandOutput
  | DescribeManagedRuleGroupCommandOutput
  | DisassociateWebACLCommandOutput
  | GetIPSetCommandOutput
  | GetLoggingConfigurationCommandOutput
  | GetManagedRuleSetCommandOutput
  | GetPermissionPolicyCommandOutput
  | GetRateBasedStatementManagedKeysCommandOutput
  | GetRegexPatternSetCommandOutput
  | GetRuleGroupCommandOutput
  | GetSampledRequestsCommandOutput
  | GetWebACLCommandOutput
  | GetWebACLForResourceCommandOutput
  | ListAvailableManagedRuleGroupVersionsCommandOutput
  | ListAvailableManagedRuleGroupsCommandOutput
  | ListIPSetsCommandOutput
  | ListLoggingConfigurationsCommandOutput
  | ListManagedRuleSetsCommandOutput
  | ListRegexPatternSetsCommandOutput
  | ListResourcesForWebACLCommandOutput
  | ListRuleGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebACLsCommandOutput
  | PutLoggingConfigurationCommandOutput
  | PutManagedRuleSetVersionsCommandOutput
  | PutPermissionPolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateIPSetCommandOutput
  | UpdateManagedRuleSetVersionExpiryDateCommandOutput
  | UpdateRegexPatternSetCommandOutput
  | UpdateRuleGroupCommandOutput
  | UpdateWebACLCommandOutput;

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

type WAFV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of WAFV2Client class constructor that set the region, credentials and other options.
 */
export interface WAFV2ClientConfig extends WAFV2ClientConfigType {}

type WAFV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of WAFV2Client class. This is resolved and normalized from the {@link WAFV2ClientConfig | constructor configuration interface}.
 */
export interface WAFV2ClientResolvedConfig extends WAFV2ClientResolvedConfigType {}

/**
 * <fullname>WAF</fullname>
 *          <note>
 *             <p>This is the latest version of the <b>WAF</b> API,
 *             released in November, 2019. The names of the entities that you use to access this API,
 *             like endpoints and namespaces, all have the versioning information added, like "V2" or
 *             "v2", to distinguish from the prior version. We recommend migrating your resources to
 *             this version, because it has a number of significant improvements.</p>
 *             <p>If you used WAF prior to this release, you can't use this WAFV2 API to access any
 *             WAF resources that you created before. You can access your old rules, web ACLs, and
 *             other WAF resources only through the WAF Classic APIs. The WAF Classic APIs
 *             have retained the prior names, endpoints, and namespaces. </p>
 *             <p>For information, including how to migrate your WAF resources to this version,
 *             see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
 *          </note>
 *          <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS
 *          requests that are forwarded to Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, or an AppSync
 *          GraphQL API. WAF also lets you control access to your content. Based on conditions that
 *          you specify, such as the IP addresses that requests originate from or the values of query
 *          strings, the Amazon API Gateway REST API, CloudFront distribution, the Application Load Balancer, or the AppSync GraphQL
 *          API responds to requests either with the requested content or with an HTTP 403 status code
 *          (Forbidden). You also can configure CloudFront to return a custom error page when a request is
 *          blocked.</p>
 *          <p>This API guide is for developers who need detailed information about WAF API actions,
 *          data types, and errors. For detailed information about WAF features and an overview of
 *          how to use WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer
 *          Guide</a>.</p>
 *          <p>You can make calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/waf.html">WAF endpoints and quotas</a>. </p>
 *          <ul>
 *             <li>
 *                <p>For regional applications, you can use any of the endpoints in the list.
 *                A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, or an AppSync GraphQL API. </p>
 *             </li>
 *             <li>
 *                <p>For Amazon CloudFront applications, you must use the API endpoint listed for
 *                US East (N. Virginia): us-east-1.</p>
 *             </li>
 *          </ul>
 *          <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the
 *          programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>We currently provide two versions of the WAF API: this API and the prior versions,
 *          the classic WAF APIs. This new API provides the same functionality as the older versions,
 *          with the following major improvements:</p>
 *          <ul>
 *             <li>
 *                <p>You use one API for both global and regional applications. Where you need to
 *                distinguish the scope, you specify a <code>Scope</code> parameter and set it to
 *                   <code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p>
 *             </li>
 *             <li>
 *                <p>You can define a web ACL or rule group with a single call, and update it with a
 *                single call. You define all rule specifications in JSON format, and pass them to your
 *                rule group or web ACL calls.</p>
 *             </li>
 *             <li>
 *                <p>The limits WAF places on the use of rules more closely reflects the cost of
 *                running each type of rule. Rule groups include capacity settings, so you know the
 *                maximum cost of a rule group when you use it.</p>
 *             </li>
 *          </ul>
 */
export class WAFV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of WAFV2Client class. This is resolved and normalized from the {@link WAFV2ClientConfig | constructor configuration interface}.
   */
  readonly config: WAFV2ClientResolvedConfig;

  constructor(configuration: WAFV2ClientConfig) {
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
