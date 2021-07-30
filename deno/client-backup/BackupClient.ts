import { CreateBackupPlanCommandInput, CreateBackupPlanCommandOutput } from "./commands/CreateBackupPlanCommand.ts";
import {
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
} from "./commands/CreateBackupSelectionCommand.ts";
import { CreateBackupVaultCommandInput, CreateBackupVaultCommandOutput } from "./commands/CreateBackupVaultCommand.ts";
import { DeleteBackupPlanCommandInput, DeleteBackupPlanCommandOutput } from "./commands/DeleteBackupPlanCommand.ts";
import {
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput,
} from "./commands/DeleteBackupSelectionCommand.ts";
import {
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput,
} from "./commands/DeleteBackupVaultAccessPolicyCommand.ts";
import { DeleteBackupVaultCommandInput, DeleteBackupVaultCommandOutput } from "./commands/DeleteBackupVaultCommand.ts";
import {
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput,
} from "./commands/DeleteBackupVaultNotificationsCommand.ts";
import {
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput,
} from "./commands/DeleteRecoveryPointCommand.ts";
import { DescribeBackupJobCommandInput, DescribeBackupJobCommandOutput } from "./commands/DescribeBackupJobCommand.ts";
import {
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput,
} from "./commands/DescribeBackupVaultCommand.ts";
import { DescribeCopyJobCommandInput, DescribeCopyJobCommandOutput } from "./commands/DescribeCopyJobCommand.ts";
import {
  DescribeGlobalSettingsCommandInput,
  DescribeGlobalSettingsCommandOutput,
} from "./commands/DescribeGlobalSettingsCommand.ts";
import {
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
} from "./commands/DescribeProtectedResourceCommand.ts";
import {
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
} from "./commands/DescribeRecoveryPointCommand.ts";
import {
  DescribeRegionSettingsCommandInput,
  DescribeRegionSettingsCommandOutput,
} from "./commands/DescribeRegionSettingsCommand.ts";
import { DescribeRestoreJobCommandInput, DescribeRestoreJobCommandOutput } from "./commands/DescribeRestoreJobCommand.ts";
import {
  DisassociateRecoveryPointCommandInput,
  DisassociateRecoveryPointCommandOutput,
} from "./commands/DisassociateRecoveryPointCommand.ts";
import {
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
} from "./commands/ExportBackupPlanTemplateCommand.ts";
import { GetBackupPlanCommandInput, GetBackupPlanCommandOutput } from "./commands/GetBackupPlanCommand.ts";
import {
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
} from "./commands/GetBackupPlanFromJSONCommand.ts";
import {
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
} from "./commands/GetBackupPlanFromTemplateCommand.ts";
import { GetBackupSelectionCommandInput, GetBackupSelectionCommandOutput } from "./commands/GetBackupSelectionCommand.ts";
import {
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput,
} from "./commands/GetBackupVaultAccessPolicyCommand.ts";
import {
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
} from "./commands/GetBackupVaultNotificationsCommand.ts";
import {
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
} from "./commands/GetRecoveryPointRestoreMetadataCommand.ts";
import {
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
} from "./commands/GetSupportedResourceTypesCommand.ts";
import { ListBackupJobsCommandInput, ListBackupJobsCommandOutput } from "./commands/ListBackupJobsCommand.ts";
import {
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "./commands/ListBackupPlanTemplatesCommand.ts";
import {
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "./commands/ListBackupPlanVersionsCommand.ts";
import { ListBackupPlansCommandInput, ListBackupPlansCommandOutput } from "./commands/ListBackupPlansCommand.ts";
import {
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "./commands/ListBackupSelectionsCommand.ts";
import { ListBackupVaultsCommandInput, ListBackupVaultsCommandOutput } from "./commands/ListBackupVaultsCommand.ts";
import { ListCopyJobsCommandInput, ListCopyJobsCommandOutput } from "./commands/ListCopyJobsCommand.ts";
import {
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "./commands/ListProtectedResourcesCommand.ts";
import {
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "./commands/ListRecoveryPointsByBackupVaultCommand.ts";
import {
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "./commands/ListRecoveryPointsByResourceCommand.ts";
import { ListRestoreJobsCommandInput, ListRestoreJobsCommandOutput } from "./commands/ListRestoreJobsCommand.ts";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand.ts";
import {
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput,
} from "./commands/PutBackupVaultAccessPolicyCommand.ts";
import {
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput,
} from "./commands/PutBackupVaultNotificationsCommand.ts";
import { StartBackupJobCommandInput, StartBackupJobCommandOutput } from "./commands/StartBackupJobCommand.ts";
import { StartCopyJobCommandInput, StartCopyJobCommandOutput } from "./commands/StartCopyJobCommand.ts";
import { StartRestoreJobCommandInput, StartRestoreJobCommandOutput } from "./commands/StartRestoreJobCommand.ts";
import { StopBackupJobCommandInput, StopBackupJobCommandOutput } from "./commands/StopBackupJobCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateBackupPlanCommandInput, UpdateBackupPlanCommandOutput } from "./commands/UpdateBackupPlanCommand.ts";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand.ts";
import {
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
} from "./commands/UpdateRecoveryPointLifecycleCommand.ts";
import {
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
} from "./commands/UpdateRegionSettingsCommand.ts";
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
  | CreateBackupPlanCommandInput
  | CreateBackupSelectionCommandInput
  | CreateBackupVaultCommandInput
  | DeleteBackupPlanCommandInput
  | DeleteBackupSelectionCommandInput
  | DeleteBackupVaultAccessPolicyCommandInput
  | DeleteBackupVaultCommandInput
  | DeleteBackupVaultNotificationsCommandInput
  | DeleteRecoveryPointCommandInput
  | DescribeBackupJobCommandInput
  | DescribeBackupVaultCommandInput
  | DescribeCopyJobCommandInput
  | DescribeGlobalSettingsCommandInput
  | DescribeProtectedResourceCommandInput
  | DescribeRecoveryPointCommandInput
  | DescribeRegionSettingsCommandInput
  | DescribeRestoreJobCommandInput
  | DisassociateRecoveryPointCommandInput
  | ExportBackupPlanTemplateCommandInput
  | GetBackupPlanCommandInput
  | GetBackupPlanFromJSONCommandInput
  | GetBackupPlanFromTemplateCommandInput
  | GetBackupSelectionCommandInput
  | GetBackupVaultAccessPolicyCommandInput
  | GetBackupVaultNotificationsCommandInput
  | GetRecoveryPointRestoreMetadataCommandInput
  | GetSupportedResourceTypesCommandInput
  | ListBackupJobsCommandInput
  | ListBackupPlanTemplatesCommandInput
  | ListBackupPlanVersionsCommandInput
  | ListBackupPlansCommandInput
  | ListBackupSelectionsCommandInput
  | ListBackupVaultsCommandInput
  | ListCopyJobsCommandInput
  | ListProtectedResourcesCommandInput
  | ListRecoveryPointsByBackupVaultCommandInput
  | ListRecoveryPointsByResourceCommandInput
  | ListRestoreJobsCommandInput
  | ListTagsCommandInput
  | PutBackupVaultAccessPolicyCommandInput
  | PutBackupVaultNotificationsCommandInput
  | StartBackupJobCommandInput
  | StartCopyJobCommandInput
  | StartRestoreJobCommandInput
  | StopBackupJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBackupPlanCommandInput
  | UpdateGlobalSettingsCommandInput
  | UpdateRecoveryPointLifecycleCommandInput
  | UpdateRegionSettingsCommandInput;

export type ServiceOutputTypes =
  | CreateBackupPlanCommandOutput
  | CreateBackupSelectionCommandOutput
  | CreateBackupVaultCommandOutput
  | DeleteBackupPlanCommandOutput
  | DeleteBackupSelectionCommandOutput
  | DeleteBackupVaultAccessPolicyCommandOutput
  | DeleteBackupVaultCommandOutput
  | DeleteBackupVaultNotificationsCommandOutput
  | DeleteRecoveryPointCommandOutput
  | DescribeBackupJobCommandOutput
  | DescribeBackupVaultCommandOutput
  | DescribeCopyJobCommandOutput
  | DescribeGlobalSettingsCommandOutput
  | DescribeProtectedResourceCommandOutput
  | DescribeRecoveryPointCommandOutput
  | DescribeRegionSettingsCommandOutput
  | DescribeRestoreJobCommandOutput
  | DisassociateRecoveryPointCommandOutput
  | ExportBackupPlanTemplateCommandOutput
  | GetBackupPlanCommandOutput
  | GetBackupPlanFromJSONCommandOutput
  | GetBackupPlanFromTemplateCommandOutput
  | GetBackupSelectionCommandOutput
  | GetBackupVaultAccessPolicyCommandOutput
  | GetBackupVaultNotificationsCommandOutput
  | GetRecoveryPointRestoreMetadataCommandOutput
  | GetSupportedResourceTypesCommandOutput
  | ListBackupJobsCommandOutput
  | ListBackupPlanTemplatesCommandOutput
  | ListBackupPlanVersionsCommandOutput
  | ListBackupPlansCommandOutput
  | ListBackupSelectionsCommandOutput
  | ListBackupVaultsCommandOutput
  | ListCopyJobsCommandOutput
  | ListProtectedResourcesCommandOutput
  | ListRecoveryPointsByBackupVaultCommandOutput
  | ListRecoveryPointsByResourceCommandOutput
  | ListRestoreJobsCommandOutput
  | ListTagsCommandOutput
  | PutBackupVaultAccessPolicyCommandOutput
  | PutBackupVaultNotificationsCommandOutput
  | StartBackupJobCommandOutput
  | StartCopyJobCommandOutput
  | StartRestoreJobCommandOutput
  | StopBackupJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBackupPlanCommandOutput
  | UpdateGlobalSettingsCommandOutput
  | UpdateRecoveryPointLifecycleCommandOutput
  | UpdateRegionSettingsCommandOutput;

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

type BackupClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of BackupClient class constructor that set the region, credentials and other options.
 */
export interface BackupClientConfig extends BackupClientConfigType {}

type BackupClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of BackupClient class. This is resolved and normalized from the {@link BackupClientConfig | constructor configuration interface}.
 */
export interface BackupClientResolvedConfig extends BackupClientResolvedConfigType {}

/**
 * <fullname>AWS Backup</fullname>
 *          <p>AWS Backup is a unified backup service designed to protect AWS services and their
 *          associated data. AWS Backup simplifies the creation, migration, restoration, and deletion
 *          of backups, while also providing reporting and auditing.</p>
 */
export class BackupClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BackupClientResolvedConfig
> {
  /**
   * The resolved configuration of BackupClient class. This is resolved and normalized from the {@link BackupClientConfig | constructor configuration interface}.
   */
  readonly config: BackupClientResolvedConfig;

  constructor(configuration: BackupClientConfig) {
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
