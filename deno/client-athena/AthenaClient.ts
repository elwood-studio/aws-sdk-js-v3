import { BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput } from "./commands/BatchGetNamedQueryCommand.ts";
import {
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "./commands/BatchGetQueryExecutionCommand.ts";
import { CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput } from "./commands/CreateDataCatalogCommand.ts";
import { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput } from "./commands/CreateNamedQueryCommand.ts";
import {
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
} from "./commands/CreatePreparedStatementCommand.ts";
import { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput } from "./commands/CreateWorkGroupCommand.ts";
import { DeleteDataCatalogCommandInput, DeleteDataCatalogCommandOutput } from "./commands/DeleteDataCatalogCommand.ts";
import { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput } from "./commands/DeleteNamedQueryCommand.ts";
import {
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
} from "./commands/DeletePreparedStatementCommand.ts";
import { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput } from "./commands/DeleteWorkGroupCommand.ts";
import { GetDataCatalogCommandInput, GetDataCatalogCommandOutput } from "./commands/GetDataCatalogCommand.ts";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand.ts";
import { GetNamedQueryCommandInput, GetNamedQueryCommandOutput } from "./commands/GetNamedQueryCommand.ts";
import {
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
} from "./commands/GetPreparedStatementCommand.ts";
import { GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput } from "./commands/GetQueryExecutionCommand.ts";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand.ts";
import { GetTableMetadataCommandInput, GetTableMetadataCommandOutput } from "./commands/GetTableMetadataCommand.ts";
import { GetWorkGroupCommandInput, GetWorkGroupCommandOutput } from "./commands/GetWorkGroupCommand.ts";
import { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput } from "./commands/ListDataCatalogsCommand.ts";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "./commands/ListDatabasesCommand.ts";
import { ListEngineVersionsCommandInput, ListEngineVersionsCommandOutput } from "./commands/ListEngineVersionsCommand.ts";
import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "./commands/ListNamedQueriesCommand.ts";
import {
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "./commands/ListPreparedStatementsCommand.ts";
import {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "./commands/ListQueryExecutionsCommand.ts";
import { ListTableMetadataCommandInput, ListTableMetadataCommandOutput } from "./commands/ListTableMetadataCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "./commands/ListWorkGroupsCommand.ts";
import {
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "./commands/StartQueryExecutionCommand.ts";
import { StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput } from "./commands/StopQueryExecutionCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateDataCatalogCommandInput, UpdateDataCatalogCommandOutput } from "./commands/UpdateDataCatalogCommand.ts";
import {
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
} from "./commands/UpdatePreparedStatementCommand.ts";
import { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput } from "./commands/UpdateWorkGroupCommand.ts";
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
  | BatchGetNamedQueryCommandInput
  | BatchGetQueryExecutionCommandInput
  | CreateDataCatalogCommandInput
  | CreateNamedQueryCommandInput
  | CreatePreparedStatementCommandInput
  | CreateWorkGroupCommandInput
  | DeleteDataCatalogCommandInput
  | DeleteNamedQueryCommandInput
  | DeletePreparedStatementCommandInput
  | DeleteWorkGroupCommandInput
  | GetDataCatalogCommandInput
  | GetDatabaseCommandInput
  | GetNamedQueryCommandInput
  | GetPreparedStatementCommandInput
  | GetQueryExecutionCommandInput
  | GetQueryResultsCommandInput
  | GetTableMetadataCommandInput
  | GetWorkGroupCommandInput
  | ListDataCatalogsCommandInput
  | ListDatabasesCommandInput
  | ListEngineVersionsCommandInput
  | ListNamedQueriesCommandInput
  | ListPreparedStatementsCommandInput
  | ListQueryExecutionsCommandInput
  | ListTableMetadataCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkGroupsCommandInput
  | StartQueryExecutionCommandInput
  | StopQueryExecutionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDataCatalogCommandInput
  | UpdatePreparedStatementCommandInput
  | UpdateWorkGroupCommandInput;

export type ServiceOutputTypes =
  | BatchGetNamedQueryCommandOutput
  | BatchGetQueryExecutionCommandOutput
  | CreateDataCatalogCommandOutput
  | CreateNamedQueryCommandOutput
  | CreatePreparedStatementCommandOutput
  | CreateWorkGroupCommandOutput
  | DeleteDataCatalogCommandOutput
  | DeleteNamedQueryCommandOutput
  | DeletePreparedStatementCommandOutput
  | DeleteWorkGroupCommandOutput
  | GetDataCatalogCommandOutput
  | GetDatabaseCommandOutput
  | GetNamedQueryCommandOutput
  | GetPreparedStatementCommandOutput
  | GetQueryExecutionCommandOutput
  | GetQueryResultsCommandOutput
  | GetTableMetadataCommandOutput
  | GetWorkGroupCommandOutput
  | ListDataCatalogsCommandOutput
  | ListDatabasesCommandOutput
  | ListEngineVersionsCommandOutput
  | ListNamedQueriesCommandOutput
  | ListPreparedStatementsCommandOutput
  | ListQueryExecutionsCommandOutput
  | ListTableMetadataCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkGroupsCommandOutput
  | StartQueryExecutionCommandOutput
  | StopQueryExecutionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDataCatalogCommandOutput
  | UpdatePreparedStatementCommandOutput
  | UpdateWorkGroupCommandOutput;

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

type AthenaClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of AthenaClient class constructor that set the region, credentials and other options.
 */
export interface AthenaClientConfig extends AthenaClientConfigType {}

type AthenaClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of AthenaClient class. This is resolved and normalized from the {@link AthenaClientConfig | constructor configuration interface}.
 */
export interface AthenaClientResolvedConfig extends AthenaClientResolvedConfigType {}

/**
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL
 *             to analyze data directly in Amazon S3. You can point Athena at your
 *             data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay
 *             only for the queries you run. Athena scales automatically—executing queries
 *             in parallel—so results are fast, even with large datasets and complex queries. For more
 *             information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User
 *                 Guide</i>.</p>
 *         <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the
 *             driver or later with the Amazon Athena API. Earlier version drivers do not
 *             support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing
 *                     Amazon Athena with JDBC</a>.</p>
 *         <p>For code samples using the Amazon Web Services SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 */
export class AthenaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AthenaClientResolvedConfig
> {
  /**
   * The resolved configuration of AthenaClient class. This is resolved and normalized from the {@link AthenaClientConfig | constructor configuration interface}.
   */
  readonly config: AthenaClientResolvedConfig;

  constructor(configuration: AthenaClientConfig) {
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
