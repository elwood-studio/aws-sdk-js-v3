import { AssociateWebACLCommandInput, AssociateWebACLCommandOutput } from "./commands/AssociateWebACLCommand.ts";
import { CreateByteMatchSetCommandInput, CreateByteMatchSetCommandOutput } from "./commands/CreateByteMatchSetCommand.ts";
import { CreateGeoMatchSetCommandInput, CreateGeoMatchSetCommandOutput } from "./commands/CreateGeoMatchSetCommand.ts";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand.ts";
import {
  CreateRateBasedRuleCommandInput,
  CreateRateBasedRuleCommandOutput,
} from "./commands/CreateRateBasedRuleCommand.ts";
import {
  CreateRegexMatchSetCommandInput,
  CreateRegexMatchSetCommandOutput,
} from "./commands/CreateRegexMatchSetCommand.ts";
import {
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "./commands/CreateRegexPatternSetCommand.ts";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand.ts";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "./commands/CreateRuleGroupCommand.ts";
import {
  CreateSizeConstraintSetCommandInput,
  CreateSizeConstraintSetCommandOutput,
} from "./commands/CreateSizeConstraintSetCommand.ts";
import {
  CreateSqlInjectionMatchSetCommandInput,
  CreateSqlInjectionMatchSetCommandOutput,
} from "./commands/CreateSqlInjectionMatchSetCommand.ts";
import { CreateWebACLCommandInput, CreateWebACLCommandOutput } from "./commands/CreateWebACLCommand.ts";
import {
  CreateWebACLMigrationStackCommandInput,
  CreateWebACLMigrationStackCommandOutput,
} from "./commands/CreateWebACLMigrationStackCommand.ts";
import { CreateXssMatchSetCommandInput, CreateXssMatchSetCommandOutput } from "./commands/CreateXssMatchSetCommand.ts";
import { DeleteByteMatchSetCommandInput, DeleteByteMatchSetCommandOutput } from "./commands/DeleteByteMatchSetCommand.ts";
import { DeleteGeoMatchSetCommandInput, DeleteGeoMatchSetCommandOutput } from "./commands/DeleteGeoMatchSetCommand.ts";
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
  DeleteRateBasedRuleCommandInput,
  DeleteRateBasedRuleCommandOutput,
} from "./commands/DeleteRateBasedRuleCommand.ts";
import {
  DeleteRegexMatchSetCommandInput,
  DeleteRegexMatchSetCommandOutput,
} from "./commands/DeleteRegexMatchSetCommand.ts";
import {
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "./commands/DeleteRegexPatternSetCommand.ts";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand.ts";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand.ts";
import {
  DeleteSizeConstraintSetCommandInput,
  DeleteSizeConstraintSetCommandOutput,
} from "./commands/DeleteSizeConstraintSetCommand.ts";
import {
  DeleteSqlInjectionMatchSetCommandInput,
  DeleteSqlInjectionMatchSetCommandOutput,
} from "./commands/DeleteSqlInjectionMatchSetCommand.ts";
import { DeleteWebACLCommandInput, DeleteWebACLCommandOutput } from "./commands/DeleteWebACLCommand.ts";
import { DeleteXssMatchSetCommandInput, DeleteXssMatchSetCommandOutput } from "./commands/DeleteXssMatchSetCommand.ts";
import { DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput } from "./commands/DisassociateWebACLCommand.ts";
import { GetByteMatchSetCommandInput, GetByteMatchSetCommandOutput } from "./commands/GetByteMatchSetCommand.ts";
import { GetChangeTokenCommandInput, GetChangeTokenCommandOutput } from "./commands/GetChangeTokenCommand.ts";
import {
  GetChangeTokenStatusCommandInput,
  GetChangeTokenStatusCommandOutput,
} from "./commands/GetChangeTokenStatusCommand.ts";
import { GetGeoMatchSetCommandInput, GetGeoMatchSetCommandOutput } from "./commands/GetGeoMatchSetCommand.ts";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand.ts";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand.ts";
import {
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "./commands/GetPermissionPolicyCommand.ts";
import { GetRateBasedRuleCommandInput, GetRateBasedRuleCommandOutput } from "./commands/GetRateBasedRuleCommand.ts";
import {
  GetRateBasedRuleManagedKeysCommandInput,
  GetRateBasedRuleManagedKeysCommandOutput,
} from "./commands/GetRateBasedRuleManagedKeysCommand.ts";
import { GetRegexMatchSetCommandInput, GetRegexMatchSetCommandOutput } from "./commands/GetRegexMatchSetCommand.ts";
import { GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput } from "./commands/GetRegexPatternSetCommand.ts";
import { GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand.ts";
import { GetRuleGroupCommandInput, GetRuleGroupCommandOutput } from "./commands/GetRuleGroupCommand.ts";
import { GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput } from "./commands/GetSampledRequestsCommand.ts";
import {
  GetSizeConstraintSetCommandInput,
  GetSizeConstraintSetCommandOutput,
} from "./commands/GetSizeConstraintSetCommand.ts";
import {
  GetSqlInjectionMatchSetCommandInput,
  GetSqlInjectionMatchSetCommandOutput,
} from "./commands/GetSqlInjectionMatchSetCommand.ts";
import { GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand.ts";
import {
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
} from "./commands/GetWebACLForResourceCommand.ts";
import { GetXssMatchSetCommandInput, GetXssMatchSetCommandOutput } from "./commands/GetXssMatchSetCommand.ts";
import {
  ListActivatedRulesInRuleGroupCommandInput,
  ListActivatedRulesInRuleGroupCommandOutput,
} from "./commands/ListActivatedRulesInRuleGroupCommand.ts";
import { ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput } from "./commands/ListByteMatchSetsCommand.ts";
import { ListGeoMatchSetsCommandInput, ListGeoMatchSetsCommandOutput } from "./commands/ListGeoMatchSetsCommand.ts";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand.ts";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand.ts";
import { ListRateBasedRulesCommandInput, ListRateBasedRulesCommandOutput } from "./commands/ListRateBasedRulesCommand.ts";
import { ListRegexMatchSetsCommandInput, ListRegexMatchSetsCommandOutput } from "./commands/ListRegexMatchSetsCommand.ts";
import {
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "./commands/ListRegexPatternSetsCommand.ts";
import {
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
} from "./commands/ListResourcesForWebACLCommand.ts";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand.ts";
import { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand.ts";
import {
  ListSizeConstraintSetsCommandInput,
  ListSizeConstraintSetsCommandOutput,
} from "./commands/ListSizeConstraintSetsCommand.ts";
import {
  ListSqlInjectionMatchSetsCommandInput,
  ListSqlInjectionMatchSetsCommandOutput,
} from "./commands/ListSqlInjectionMatchSetsCommand.ts";
import {
  ListSubscribedRuleGroupsCommandInput,
  ListSubscribedRuleGroupsCommandOutput,
} from "./commands/ListSubscribedRuleGroupsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand.ts";
import { ListXssMatchSetsCommandInput, ListXssMatchSetsCommandOutput } from "./commands/ListXssMatchSetsCommand.ts";
import {
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "./commands/PutLoggingConfigurationCommand.ts";
import {
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "./commands/PutPermissionPolicyCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateByteMatchSetCommandInput, UpdateByteMatchSetCommandOutput } from "./commands/UpdateByteMatchSetCommand.ts";
import { UpdateGeoMatchSetCommandInput, UpdateGeoMatchSetCommandOutput } from "./commands/UpdateGeoMatchSetCommand.ts";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand.ts";
import {
  UpdateRateBasedRuleCommandInput,
  UpdateRateBasedRuleCommandOutput,
} from "./commands/UpdateRateBasedRuleCommand.ts";
import {
  UpdateRegexMatchSetCommandInput,
  UpdateRegexMatchSetCommandOutput,
} from "./commands/UpdateRegexMatchSetCommand.ts";
import {
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "./commands/UpdateRegexPatternSetCommand.ts";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand.ts";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "./commands/UpdateRuleGroupCommand.ts";
import {
  UpdateSizeConstraintSetCommandInput,
  UpdateSizeConstraintSetCommandOutput,
} from "./commands/UpdateSizeConstraintSetCommand.ts";
import {
  UpdateSqlInjectionMatchSetCommandInput,
  UpdateSqlInjectionMatchSetCommandOutput,
} from "./commands/UpdateSqlInjectionMatchSetCommand.ts";
import { UpdateWebACLCommandInput, UpdateWebACLCommandOutput } from "./commands/UpdateWebACLCommand.ts";
import { UpdateXssMatchSetCommandInput, UpdateXssMatchSetCommandOutput } from "./commands/UpdateXssMatchSetCommand.ts";
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
  | AssociateWebACLCommandInput
  | CreateByteMatchSetCommandInput
  | CreateGeoMatchSetCommandInput
  | CreateIPSetCommandInput
  | CreateRateBasedRuleCommandInput
  | CreateRegexMatchSetCommandInput
  | CreateRegexPatternSetCommandInput
  | CreateRuleCommandInput
  | CreateRuleGroupCommandInput
  | CreateSizeConstraintSetCommandInput
  | CreateSqlInjectionMatchSetCommandInput
  | CreateWebACLCommandInput
  | CreateWebACLMigrationStackCommandInput
  | CreateXssMatchSetCommandInput
  | DeleteByteMatchSetCommandInput
  | DeleteGeoMatchSetCommandInput
  | DeleteIPSetCommandInput
  | DeleteLoggingConfigurationCommandInput
  | DeletePermissionPolicyCommandInput
  | DeleteRateBasedRuleCommandInput
  | DeleteRegexMatchSetCommandInput
  | DeleteRegexPatternSetCommandInput
  | DeleteRuleCommandInput
  | DeleteRuleGroupCommandInput
  | DeleteSizeConstraintSetCommandInput
  | DeleteSqlInjectionMatchSetCommandInput
  | DeleteWebACLCommandInput
  | DeleteXssMatchSetCommandInput
  | DisassociateWebACLCommandInput
  | GetByteMatchSetCommandInput
  | GetChangeTokenCommandInput
  | GetChangeTokenStatusCommandInput
  | GetGeoMatchSetCommandInput
  | GetIPSetCommandInput
  | GetLoggingConfigurationCommandInput
  | GetPermissionPolicyCommandInput
  | GetRateBasedRuleCommandInput
  | GetRateBasedRuleManagedKeysCommandInput
  | GetRegexMatchSetCommandInput
  | GetRegexPatternSetCommandInput
  | GetRuleCommandInput
  | GetRuleGroupCommandInput
  | GetSampledRequestsCommandInput
  | GetSizeConstraintSetCommandInput
  | GetSqlInjectionMatchSetCommandInput
  | GetWebACLCommandInput
  | GetWebACLForResourceCommandInput
  | GetXssMatchSetCommandInput
  | ListActivatedRulesInRuleGroupCommandInput
  | ListByteMatchSetsCommandInput
  | ListGeoMatchSetsCommandInput
  | ListIPSetsCommandInput
  | ListLoggingConfigurationsCommandInput
  | ListRateBasedRulesCommandInput
  | ListRegexMatchSetsCommandInput
  | ListRegexPatternSetsCommandInput
  | ListResourcesForWebACLCommandInput
  | ListRuleGroupsCommandInput
  | ListRulesCommandInput
  | ListSizeConstraintSetsCommandInput
  | ListSqlInjectionMatchSetsCommandInput
  | ListSubscribedRuleGroupsCommandInput
  | ListTagsForResourceCommandInput
  | ListWebACLsCommandInput
  | ListXssMatchSetsCommandInput
  | PutLoggingConfigurationCommandInput
  | PutPermissionPolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateByteMatchSetCommandInput
  | UpdateGeoMatchSetCommandInput
  | UpdateIPSetCommandInput
  | UpdateRateBasedRuleCommandInput
  | UpdateRegexMatchSetCommandInput
  | UpdateRegexPatternSetCommandInput
  | UpdateRuleCommandInput
  | UpdateRuleGroupCommandInput
  | UpdateSizeConstraintSetCommandInput
  | UpdateSqlInjectionMatchSetCommandInput
  | UpdateWebACLCommandInput
  | UpdateXssMatchSetCommandInput;

export type ServiceOutputTypes =
  | AssociateWebACLCommandOutput
  | CreateByteMatchSetCommandOutput
  | CreateGeoMatchSetCommandOutput
  | CreateIPSetCommandOutput
  | CreateRateBasedRuleCommandOutput
  | CreateRegexMatchSetCommandOutput
  | CreateRegexPatternSetCommandOutput
  | CreateRuleCommandOutput
  | CreateRuleGroupCommandOutput
  | CreateSizeConstraintSetCommandOutput
  | CreateSqlInjectionMatchSetCommandOutput
  | CreateWebACLCommandOutput
  | CreateWebACLMigrationStackCommandOutput
  | CreateXssMatchSetCommandOutput
  | DeleteByteMatchSetCommandOutput
  | DeleteGeoMatchSetCommandOutput
  | DeleteIPSetCommandOutput
  | DeleteLoggingConfigurationCommandOutput
  | DeletePermissionPolicyCommandOutput
  | DeleteRateBasedRuleCommandOutput
  | DeleteRegexMatchSetCommandOutput
  | DeleteRegexPatternSetCommandOutput
  | DeleteRuleCommandOutput
  | DeleteRuleGroupCommandOutput
  | DeleteSizeConstraintSetCommandOutput
  | DeleteSqlInjectionMatchSetCommandOutput
  | DeleteWebACLCommandOutput
  | DeleteXssMatchSetCommandOutput
  | DisassociateWebACLCommandOutput
  | GetByteMatchSetCommandOutput
  | GetChangeTokenCommandOutput
  | GetChangeTokenStatusCommandOutput
  | GetGeoMatchSetCommandOutput
  | GetIPSetCommandOutput
  | GetLoggingConfigurationCommandOutput
  | GetPermissionPolicyCommandOutput
  | GetRateBasedRuleCommandOutput
  | GetRateBasedRuleManagedKeysCommandOutput
  | GetRegexMatchSetCommandOutput
  | GetRegexPatternSetCommandOutput
  | GetRuleCommandOutput
  | GetRuleGroupCommandOutput
  | GetSampledRequestsCommandOutput
  | GetSizeConstraintSetCommandOutput
  | GetSqlInjectionMatchSetCommandOutput
  | GetWebACLCommandOutput
  | GetWebACLForResourceCommandOutput
  | GetXssMatchSetCommandOutput
  | ListActivatedRulesInRuleGroupCommandOutput
  | ListByteMatchSetsCommandOutput
  | ListGeoMatchSetsCommandOutput
  | ListIPSetsCommandOutput
  | ListLoggingConfigurationsCommandOutput
  | ListRateBasedRulesCommandOutput
  | ListRegexMatchSetsCommandOutput
  | ListRegexPatternSetsCommandOutput
  | ListResourcesForWebACLCommandOutput
  | ListRuleGroupsCommandOutput
  | ListRulesCommandOutput
  | ListSizeConstraintSetsCommandOutput
  | ListSqlInjectionMatchSetsCommandOutput
  | ListSubscribedRuleGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebACLsCommandOutput
  | ListXssMatchSetsCommandOutput
  | PutLoggingConfigurationCommandOutput
  | PutPermissionPolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateByteMatchSetCommandOutput
  | UpdateGeoMatchSetCommandOutput
  | UpdateIPSetCommandOutput
  | UpdateRateBasedRuleCommandOutput
  | UpdateRegexMatchSetCommandOutput
  | UpdateRegexPatternSetCommandOutput
  | UpdateRuleCommandOutput
  | UpdateRuleGroupCommandOutput
  | UpdateSizeConstraintSetCommandOutput
  | UpdateSqlInjectionMatchSetCommandOutput
  | UpdateWebACLCommandOutput
  | UpdateXssMatchSetCommandOutput;

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

type WAFRegionalClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of WAFRegionalClient class constructor that set the region, credentials and other options.
 */
export interface WAFRegionalClientConfig extends WAFRegionalClientConfigType {}

type WAFRegionalClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of WAFRegionalClient class. This is resolved and normalized from the {@link WAFRegionalClientConfig | constructor configuration interface}.
 */
export interface WAFRegionalClientResolvedConfig extends WAFRegionalClientResolvedConfigType {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic Regional</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>This is the <i>AWS WAF Regional Classic API Reference</i> for using AWS WAF Classic with the AWS resources, Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. The AWS WAF Classic actions and data types listed in the reference are available for protecting Elastic Load Balancing (ELB) Application Load Balancers and API Gateway APIs. You can use these actions and data types by means of the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Regions and Endpoints</a>. This guide is for developers who need detailed information about the AWS WAF Classic API actions, data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the
 *       <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *         WAF Classic</a> in the developer guide.</p>
 */
export class WAFRegionalClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFRegionalClientResolvedConfig
> {
  /**
   * The resolved configuration of WAFRegionalClient class. This is resolved and normalized from the {@link WAFRegionalClientConfig | constructor configuration interface}.
   */
  readonly config: WAFRegionalClientResolvedConfig;

  constructor(configuration: WAFRegionalClientConfig) {
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
