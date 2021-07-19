import {
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput,
} from "./commands/CreateCertificateAuthorityAuditReportCommand.ts";
import {
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput,
} from "./commands/CreateCertificateAuthorityCommand.ts";
import { CreatePermissionCommandInput, CreatePermissionCommandOutput } from "./commands/CreatePermissionCommand.ts";
import {
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput,
} from "./commands/DeleteCertificateAuthorityCommand.ts";
import { DeletePermissionCommandInput, DeletePermissionCommandOutput } from "./commands/DeletePermissionCommand.ts";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand.ts";
import {
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput,
} from "./commands/DescribeCertificateAuthorityAuditReportCommand.ts";
import {
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput,
} from "./commands/DescribeCertificateAuthorityCommand.ts";
import {
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput,
} from "./commands/GetCertificateAuthorityCertificateCommand.ts";
import {
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput,
} from "./commands/GetCertificateAuthorityCsrCommand.ts";
import { GetCertificateCommandInput, GetCertificateCommandOutput } from "./commands/GetCertificateCommand.ts";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand.ts";
import {
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput,
} from "./commands/ImportCertificateAuthorityCertificateCommand.ts";
import { IssueCertificateCommandInput, IssueCertificateCommandOutput } from "./commands/IssueCertificateCommand.ts";
import {
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "./commands/ListCertificateAuthoritiesCommand.ts";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand.ts";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand.ts";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand.ts";
import {
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput,
} from "./commands/RestoreCertificateAuthorityCommand.ts";
import { RevokeCertificateCommandInput, RevokeCertificateCommandOutput } from "./commands/RevokeCertificateCommand.ts";
import {
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput,
} from "./commands/TagCertificateAuthorityCommand.ts";
import {
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput,
} from "./commands/UntagCertificateAuthorityCommand.ts";
import {
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput,
} from "./commands/UpdateCertificateAuthorityCommand.ts";
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
  | CreateCertificateAuthorityAuditReportCommandInput
  | CreateCertificateAuthorityCommandInput
  | CreatePermissionCommandInput
  | DeleteCertificateAuthorityCommandInput
  | DeletePermissionCommandInput
  | DeletePolicyCommandInput
  | DescribeCertificateAuthorityAuditReportCommandInput
  | DescribeCertificateAuthorityCommandInput
  | GetCertificateAuthorityCertificateCommandInput
  | GetCertificateAuthorityCsrCommandInput
  | GetCertificateCommandInput
  | GetPolicyCommandInput
  | ImportCertificateAuthorityCertificateCommandInput
  | IssueCertificateCommandInput
  | ListCertificateAuthoritiesCommandInput
  | ListPermissionsCommandInput
  | ListTagsCommandInput
  | PutPolicyCommandInput
  | RestoreCertificateAuthorityCommandInput
  | RevokeCertificateCommandInput
  | TagCertificateAuthorityCommandInput
  | UntagCertificateAuthorityCommandInput
  | UpdateCertificateAuthorityCommandInput;

export type ServiceOutputTypes =
  | CreateCertificateAuthorityAuditReportCommandOutput
  | CreateCertificateAuthorityCommandOutput
  | CreatePermissionCommandOutput
  | DeleteCertificateAuthorityCommandOutput
  | DeletePermissionCommandOutput
  | DeletePolicyCommandOutput
  | DescribeCertificateAuthorityAuditReportCommandOutput
  | DescribeCertificateAuthorityCommandOutput
  | GetCertificateAuthorityCertificateCommandOutput
  | GetCertificateAuthorityCsrCommandOutput
  | GetCertificateCommandOutput
  | GetPolicyCommandOutput
  | ImportCertificateAuthorityCertificateCommandOutput
  | IssueCertificateCommandOutput
  | ListCertificateAuthoritiesCommandOutput
  | ListPermissionsCommandOutput
  | ListTagsCommandOutput
  | PutPolicyCommandOutput
  | RestoreCertificateAuthorityCommandOutput
  | RevokeCertificateCommandOutput
  | TagCertificateAuthorityCommandOutput
  | UntagCertificateAuthorityCommandOutput
  | UpdateCertificateAuthorityCommandOutput;

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

type ACMPCAClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ACMPCAClient class constructor that set the region, credentials and other options.
 */
export interface ACMPCAClientConfig extends ACMPCAClientConfigType {}

type ACMPCAClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ACMPCAClient class. This is resolved and normalized from the {@link ACMPCAClientConfig | constructor configuration interface}.
 */
export interface ACMPCAClientResolvedConfig extends ACMPCAClientResolvedConfigType {}

/**
 * <p>This is the <i>ACM Private CA API Reference</i>. It provides descriptions,
 * 			syntax, and usage examples for each of the actions and data types involved in creating
 * 			and managing private certificate authorities (CA) for your organization.</p>
 * 		       <p>The documentation for each action shows the Query API request parameters and the XML
 * 			response. Alternatively, you can use one of the AWS SDKs to access an API that's
 * 			tailored to the programming language or platform that you're using. For more
 * 			information, see <a href="https://aws.amazon.com/tools/#SDKs">AWS
 * 			SDKs</a>.</p>
 * 		       <note>
 * 			         <p>Each ACM Private CA API action has a quota that determines the number of times the action
 * 				can be called per second. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaLimits.html#PcaLimits-api">API Rate Quotas in ACM Private CA</a>
 * 				in the ACM Private CA user guide.</p>
 * 		       </note>
 */
export class ACMPCAClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ACMPCAClientResolvedConfig
> {
  /**
   * The resolved configuration of ACMPCAClient class. This is resolved and normalized from the {@link ACMPCAClientConfig | constructor configuration interface}.
   */
  readonly config: ACMPCAClientResolvedConfig;

  constructor(configuration: ACMPCAClientConfig) {
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
