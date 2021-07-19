import {
  BatchCreatePartitionCommandInput,
  BatchCreatePartitionCommandOutput,
} from "./commands/BatchCreatePartitionCommand.ts";
import {
  BatchDeleteConnectionCommandInput,
  BatchDeleteConnectionCommandOutput,
} from "./commands/BatchDeleteConnectionCommand.ts";
import {
  BatchDeletePartitionCommandInput,
  BatchDeletePartitionCommandOutput,
} from "./commands/BatchDeletePartitionCommand.ts";
import { BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput } from "./commands/BatchDeleteTableCommand.ts";
import {
  BatchDeleteTableVersionCommandInput,
  BatchDeleteTableVersionCommandOutput,
} from "./commands/BatchDeleteTableVersionCommand.ts";
import { BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput } from "./commands/BatchGetCrawlersCommand.ts";
import {
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
} from "./commands/BatchGetDevEndpointsCommand.ts";
import { BatchGetJobsCommandInput, BatchGetJobsCommandOutput } from "./commands/BatchGetJobsCommand.ts";
import { BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput } from "./commands/BatchGetPartitionCommand.ts";
import { BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput } from "./commands/BatchGetTriggersCommand.ts";
import { BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput } from "./commands/BatchGetWorkflowsCommand.ts";
import { BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput } from "./commands/BatchStopJobRunCommand.ts";
import {
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
} from "./commands/BatchUpdatePartitionCommand.ts";
import { CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput } from "./commands/CancelMLTaskRunCommand.ts";
import {
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
} from "./commands/CheckSchemaVersionValidityCommand.ts";
import { CreateClassifierCommandInput, CreateClassifierCommandOutput } from "./commands/CreateClassifierCommand.ts";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand.ts";
import { CreateCrawlerCommandInput, CreateCrawlerCommandOutput } from "./commands/CreateCrawlerCommand.ts";
import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "./commands/CreateDatabaseCommand.ts";
import { CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput } from "./commands/CreateDevEndpointCommand.ts";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand.ts";
import { CreateMLTransformCommandInput, CreateMLTransformCommandOutput } from "./commands/CreateMLTransformCommand.ts";
import { CreatePartitionCommandInput, CreatePartitionCommandOutput } from "./commands/CreatePartitionCommand.ts";
import {
  CreatePartitionIndexCommandInput,
  CreatePartitionIndexCommandOutput,
} from "./commands/CreatePartitionIndexCommand.ts";
import { CreateRegistryCommandInput, CreateRegistryCommandOutput } from "./commands/CreateRegistryCommand.ts";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand.ts";
import { CreateScriptCommandInput, CreateScriptCommandOutput } from "./commands/CreateScriptCommand.ts";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand.ts";
import { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand.ts";
import { CreateTriggerCommandInput, CreateTriggerCommandOutput } from "./commands/CreateTriggerCommand.ts";
import {
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
} from "./commands/CreateUserDefinedFunctionCommand.ts";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand.ts";
import { DeleteClassifierCommandInput, DeleteClassifierCommandOutput } from "./commands/DeleteClassifierCommand.ts";
import {
  DeleteColumnStatisticsForPartitionCommandInput,
  DeleteColumnStatisticsForPartitionCommandOutput,
} from "./commands/DeleteColumnStatisticsForPartitionCommand.ts";
import {
  DeleteColumnStatisticsForTableCommandInput,
  DeleteColumnStatisticsForTableCommandOutput,
} from "./commands/DeleteColumnStatisticsForTableCommand.ts";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand.ts";
import { DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput } from "./commands/DeleteCrawlerCommand.ts";
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "./commands/DeleteDatabaseCommand.ts";
import { DeleteDevEndpointCommandInput, DeleteDevEndpointCommandOutput } from "./commands/DeleteDevEndpointCommand.ts";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand.ts";
import { DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput } from "./commands/DeleteMLTransformCommand.ts";
import { DeletePartitionCommandInput, DeletePartitionCommandOutput } from "./commands/DeletePartitionCommand.ts";
import {
  DeletePartitionIndexCommandInput,
  DeletePartitionIndexCommandOutput,
} from "./commands/DeletePartitionIndexCommand.ts";
import { DeleteRegistryCommandInput, DeleteRegistryCommandOutput } from "./commands/DeleteRegistryCommand.ts";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand.ts";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand.ts";
import {
  DeleteSchemaVersionsCommandInput,
  DeleteSchemaVersionsCommandOutput,
} from "./commands/DeleteSchemaVersionsCommand.ts";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand.ts";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand.ts";
import { DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput } from "./commands/DeleteTableVersionCommand.ts";
import { DeleteTriggerCommandInput, DeleteTriggerCommandOutput } from "./commands/DeleteTriggerCommand.ts";
import {
  DeleteUserDefinedFunctionCommandInput,
  DeleteUserDefinedFunctionCommandOutput,
} from "./commands/DeleteUserDefinedFunctionCommand.ts";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand.ts";
import {
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
} from "./commands/GetCatalogImportStatusCommand.ts";
import { GetClassifierCommandInput, GetClassifierCommandOutput } from "./commands/GetClassifierCommand.ts";
import { GetClassifiersCommandInput, GetClassifiersCommandOutput } from "./commands/GetClassifiersCommand.ts";
import {
  GetColumnStatisticsForPartitionCommandInput,
  GetColumnStatisticsForPartitionCommandOutput,
} from "./commands/GetColumnStatisticsForPartitionCommand.ts";
import {
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
} from "./commands/GetColumnStatisticsForTableCommand.ts";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand.ts";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "./commands/GetConnectionsCommand.ts";
import { GetCrawlerCommandInput, GetCrawlerCommandOutput } from "./commands/GetCrawlerCommand.ts";
import { GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput } from "./commands/GetCrawlerMetricsCommand.ts";
import { GetCrawlersCommandInput, GetCrawlersCommandOutput } from "./commands/GetCrawlersCommand.ts";
import {
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/GetDataCatalogEncryptionSettingsCommand.ts";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand.ts";
import { GetDatabasesCommandInput, GetDatabasesCommandOutput } from "./commands/GetDatabasesCommand.ts";
import { GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput } from "./commands/GetDataflowGraphCommand.ts";
import { GetDevEndpointCommandInput, GetDevEndpointCommandOutput } from "./commands/GetDevEndpointCommand.ts";
import { GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput } from "./commands/GetDevEndpointsCommand.ts";
import { GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput } from "./commands/GetJobBookmarkCommand.ts";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand.ts";
import { GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand.ts";
import { GetJobRunsCommandInput, GetJobRunsCommandOutput } from "./commands/GetJobRunsCommand.ts";
import { GetJobsCommandInput, GetJobsCommandOutput } from "./commands/GetJobsCommand.ts";
import { GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput } from "./commands/GetMLTaskRunCommand.ts";
import { GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput } from "./commands/GetMLTaskRunsCommand.ts";
import { GetMLTransformCommandInput, GetMLTransformCommandOutput } from "./commands/GetMLTransformCommand.ts";
import { GetMLTransformsCommandInput, GetMLTransformsCommandOutput } from "./commands/GetMLTransformsCommand.ts";
import { GetMappingCommandInput, GetMappingCommandOutput } from "./commands/GetMappingCommand.ts";
import { GetPartitionCommandInput, GetPartitionCommandOutput } from "./commands/GetPartitionCommand.ts";
import {
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "./commands/GetPartitionIndexesCommand.ts";
import { GetPartitionsCommandInput, GetPartitionsCommandOutput } from "./commands/GetPartitionsCommand.ts";
import { GetPlanCommandInput, GetPlanCommandOutput } from "./commands/GetPlanCommand.ts";
import { GetRegistryCommandInput, GetRegistryCommandOutput } from "./commands/GetRegistryCommand.ts";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand.ts";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand.ts";
import {
  GetSchemaByDefinitionCommandInput,
  GetSchemaByDefinitionCommandOutput,
} from "./commands/GetSchemaByDefinitionCommand.ts";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand.ts";
import { GetSchemaVersionCommandInput, GetSchemaVersionCommandOutput } from "./commands/GetSchemaVersionCommand.ts";
import {
  GetSchemaVersionsDiffCommandInput,
  GetSchemaVersionsDiffCommandOutput,
} from "./commands/GetSchemaVersionsDiffCommand.ts";
import {
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
} from "./commands/GetSecurityConfigurationCommand.ts";
import {
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "./commands/GetSecurityConfigurationsCommand.ts";
import { GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand.ts";
import { GetTableVersionCommandInput, GetTableVersionCommandOutput } from "./commands/GetTableVersionCommand.ts";
import { GetTableVersionsCommandInput, GetTableVersionsCommandOutput } from "./commands/GetTableVersionsCommand.ts";
import { GetTablesCommandInput, GetTablesCommandOutput } from "./commands/GetTablesCommand.ts";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand.ts";
import { GetTriggerCommandInput, GetTriggerCommandOutput } from "./commands/GetTriggerCommand.ts";
import { GetTriggersCommandInput, GetTriggersCommandOutput } from "./commands/GetTriggersCommand.ts";
import {
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
} from "./commands/GetUserDefinedFunctionCommand.ts";
import {
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "./commands/GetUserDefinedFunctionsCommand.ts";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand.ts";
import { GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput } from "./commands/GetWorkflowRunCommand.ts";
import {
  GetWorkflowRunPropertiesCommandInput,
  GetWorkflowRunPropertiesCommandOutput,
} from "./commands/GetWorkflowRunPropertiesCommand.ts";
import { GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput } from "./commands/GetWorkflowRunsCommand.ts";
import {
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
} from "./commands/ImportCatalogToGlueCommand.ts";
import { ListCrawlersCommandInput, ListCrawlersCommandOutput } from "./commands/ListCrawlersCommand.ts";
import { ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput } from "./commands/ListDevEndpointsCommand.ts";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand.ts";
import { ListMLTransformsCommandInput, ListMLTransformsCommandOutput } from "./commands/ListMLTransformsCommand.ts";
import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "./commands/ListRegistriesCommand.ts";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "./commands/ListSchemaVersionsCommand.ts";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand.ts";
import { ListTriggersCommandInput, ListTriggersCommandOutput } from "./commands/ListTriggersCommand.ts";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand.ts";
import {
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/PutDataCatalogEncryptionSettingsCommand.ts";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand.ts";
import {
  PutSchemaVersionMetadataCommandInput,
  PutSchemaVersionMetadataCommandOutput,
} from "./commands/PutSchemaVersionMetadataCommand.ts";
import {
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
} from "./commands/PutWorkflowRunPropertiesCommand.ts";
import {
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
} from "./commands/QuerySchemaVersionMetadataCommand.ts";
import {
  RegisterSchemaVersionCommandInput,
  RegisterSchemaVersionCommandOutput,
} from "./commands/RegisterSchemaVersionCommand.ts";
import {
  RemoveSchemaVersionMetadataCommandInput,
  RemoveSchemaVersionMetadataCommandOutput,
} from "./commands/RemoveSchemaVersionMetadataCommand.ts";
import { ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput } from "./commands/ResetJobBookmarkCommand.ts";
import { ResumeWorkflowRunCommandInput, ResumeWorkflowRunCommandOutput } from "./commands/ResumeWorkflowRunCommand.ts";
import { SearchTablesCommandInput, SearchTablesCommandOutput } from "./commands/SearchTablesCommand.ts";
import { StartCrawlerCommandInput, StartCrawlerCommandOutput } from "./commands/StartCrawlerCommand.ts";
import {
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
} from "./commands/StartCrawlerScheduleCommand.ts";
import {
  StartExportLabelsTaskRunCommandInput,
  StartExportLabelsTaskRunCommandOutput,
} from "./commands/StartExportLabelsTaskRunCommand.ts";
import {
  StartImportLabelsTaskRunCommandInput,
  StartImportLabelsTaskRunCommandOutput,
} from "./commands/StartImportLabelsTaskRunCommand.ts";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand.ts";
import {
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
} from "./commands/StartMLEvaluationTaskRunCommand.ts";
import {
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
} from "./commands/StartMLLabelingSetGenerationTaskRunCommand.ts";
import { StartTriggerCommandInput, StartTriggerCommandOutput } from "./commands/StartTriggerCommand.ts";
import { StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput } from "./commands/StartWorkflowRunCommand.ts";
import { StopCrawlerCommandInput, StopCrawlerCommandOutput } from "./commands/StopCrawlerCommand.ts";
import {
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
} from "./commands/StopCrawlerScheduleCommand.ts";
import { StopTriggerCommandInput, StopTriggerCommandOutput } from "./commands/StopTriggerCommand.ts";
import { StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput } from "./commands/StopWorkflowRunCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateClassifierCommandInput, UpdateClassifierCommandOutput } from "./commands/UpdateClassifierCommand.ts";
import {
  UpdateColumnStatisticsForPartitionCommandInput,
  UpdateColumnStatisticsForPartitionCommandOutput,
} from "./commands/UpdateColumnStatisticsForPartitionCommand.ts";
import {
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
} from "./commands/UpdateColumnStatisticsForTableCommand.ts";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand.ts";
import { UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput } from "./commands/UpdateCrawlerCommand.ts";
import {
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
} from "./commands/UpdateCrawlerScheduleCommand.ts";
import { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "./commands/UpdateDatabaseCommand.ts";
import { UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput } from "./commands/UpdateDevEndpointCommand.ts";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand.ts";
import { UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput } from "./commands/UpdateMLTransformCommand.ts";
import { UpdatePartitionCommandInput, UpdatePartitionCommandOutput } from "./commands/UpdatePartitionCommand.ts";
import { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "./commands/UpdateRegistryCommand.ts";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand.ts";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand.ts";
import { UpdateTriggerCommandInput, UpdateTriggerCommandOutput } from "./commands/UpdateTriggerCommand.ts";
import {
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
} from "./commands/UpdateUserDefinedFunctionCommand.ts";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "./commands/UpdateWorkflowCommand.ts";
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
  | BatchCreatePartitionCommandInput
  | BatchDeleteConnectionCommandInput
  | BatchDeletePartitionCommandInput
  | BatchDeleteTableCommandInput
  | BatchDeleteTableVersionCommandInput
  | BatchGetCrawlersCommandInput
  | BatchGetDevEndpointsCommandInput
  | BatchGetJobsCommandInput
  | BatchGetPartitionCommandInput
  | BatchGetTriggersCommandInput
  | BatchGetWorkflowsCommandInput
  | BatchStopJobRunCommandInput
  | BatchUpdatePartitionCommandInput
  | CancelMLTaskRunCommandInput
  | CheckSchemaVersionValidityCommandInput
  | CreateClassifierCommandInput
  | CreateConnectionCommandInput
  | CreateCrawlerCommandInput
  | CreateDatabaseCommandInput
  | CreateDevEndpointCommandInput
  | CreateJobCommandInput
  | CreateMLTransformCommandInput
  | CreatePartitionCommandInput
  | CreatePartitionIndexCommandInput
  | CreateRegistryCommandInput
  | CreateSchemaCommandInput
  | CreateScriptCommandInput
  | CreateSecurityConfigurationCommandInput
  | CreateTableCommandInput
  | CreateTriggerCommandInput
  | CreateUserDefinedFunctionCommandInput
  | CreateWorkflowCommandInput
  | DeleteClassifierCommandInput
  | DeleteColumnStatisticsForPartitionCommandInput
  | DeleteColumnStatisticsForTableCommandInput
  | DeleteConnectionCommandInput
  | DeleteCrawlerCommandInput
  | DeleteDatabaseCommandInput
  | DeleteDevEndpointCommandInput
  | DeleteJobCommandInput
  | DeleteMLTransformCommandInput
  | DeletePartitionCommandInput
  | DeletePartitionIndexCommandInput
  | DeleteRegistryCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSchemaCommandInput
  | DeleteSchemaVersionsCommandInput
  | DeleteSecurityConfigurationCommandInput
  | DeleteTableCommandInput
  | DeleteTableVersionCommandInput
  | DeleteTriggerCommandInput
  | DeleteUserDefinedFunctionCommandInput
  | DeleteWorkflowCommandInput
  | GetCatalogImportStatusCommandInput
  | GetClassifierCommandInput
  | GetClassifiersCommandInput
  | GetColumnStatisticsForPartitionCommandInput
  | GetColumnStatisticsForTableCommandInput
  | GetConnectionCommandInput
  | GetConnectionsCommandInput
  | GetCrawlerCommandInput
  | GetCrawlerMetricsCommandInput
  | GetCrawlersCommandInput
  | GetDataCatalogEncryptionSettingsCommandInput
  | GetDatabaseCommandInput
  | GetDatabasesCommandInput
  | GetDataflowGraphCommandInput
  | GetDevEndpointCommandInput
  | GetDevEndpointsCommandInput
  | GetJobBookmarkCommandInput
  | GetJobCommandInput
  | GetJobRunCommandInput
  | GetJobRunsCommandInput
  | GetJobsCommandInput
  | GetMLTaskRunCommandInput
  | GetMLTaskRunsCommandInput
  | GetMLTransformCommandInput
  | GetMLTransformsCommandInput
  | GetMappingCommandInput
  | GetPartitionCommandInput
  | GetPartitionIndexesCommandInput
  | GetPartitionsCommandInput
  | GetPlanCommandInput
  | GetRegistryCommandInput
  | GetResourcePoliciesCommandInput
  | GetResourcePolicyCommandInput
  | GetSchemaByDefinitionCommandInput
  | GetSchemaCommandInput
  | GetSchemaVersionCommandInput
  | GetSchemaVersionsDiffCommandInput
  | GetSecurityConfigurationCommandInput
  | GetSecurityConfigurationsCommandInput
  | GetTableCommandInput
  | GetTableVersionCommandInput
  | GetTableVersionsCommandInput
  | GetTablesCommandInput
  | GetTagsCommandInput
  | GetTriggerCommandInput
  | GetTriggersCommandInput
  | GetUserDefinedFunctionCommandInput
  | GetUserDefinedFunctionsCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowRunCommandInput
  | GetWorkflowRunPropertiesCommandInput
  | GetWorkflowRunsCommandInput
  | ImportCatalogToGlueCommandInput
  | ListCrawlersCommandInput
  | ListDevEndpointsCommandInput
  | ListJobsCommandInput
  | ListMLTransformsCommandInput
  | ListRegistriesCommandInput
  | ListSchemaVersionsCommandInput
  | ListSchemasCommandInput
  | ListTriggersCommandInput
  | ListWorkflowsCommandInput
  | PutDataCatalogEncryptionSettingsCommandInput
  | PutResourcePolicyCommandInput
  | PutSchemaVersionMetadataCommandInput
  | PutWorkflowRunPropertiesCommandInput
  | QuerySchemaVersionMetadataCommandInput
  | RegisterSchemaVersionCommandInput
  | RemoveSchemaVersionMetadataCommandInput
  | ResetJobBookmarkCommandInput
  | ResumeWorkflowRunCommandInput
  | SearchTablesCommandInput
  | StartCrawlerCommandInput
  | StartCrawlerScheduleCommandInput
  | StartExportLabelsTaskRunCommandInput
  | StartImportLabelsTaskRunCommandInput
  | StartJobRunCommandInput
  | StartMLEvaluationTaskRunCommandInput
  | StartMLLabelingSetGenerationTaskRunCommandInput
  | StartTriggerCommandInput
  | StartWorkflowRunCommandInput
  | StopCrawlerCommandInput
  | StopCrawlerScheduleCommandInput
  | StopTriggerCommandInput
  | StopWorkflowRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateClassifierCommandInput
  | UpdateColumnStatisticsForPartitionCommandInput
  | UpdateColumnStatisticsForTableCommandInput
  | UpdateConnectionCommandInput
  | UpdateCrawlerCommandInput
  | UpdateCrawlerScheduleCommandInput
  | UpdateDatabaseCommandInput
  | UpdateDevEndpointCommandInput
  | UpdateJobCommandInput
  | UpdateMLTransformCommandInput
  | UpdatePartitionCommandInput
  | UpdateRegistryCommandInput
  | UpdateSchemaCommandInput
  | UpdateTableCommandInput
  | UpdateTriggerCommandInput
  | UpdateUserDefinedFunctionCommandInput
  | UpdateWorkflowCommandInput;

export type ServiceOutputTypes =
  | BatchCreatePartitionCommandOutput
  | BatchDeleteConnectionCommandOutput
  | BatchDeletePartitionCommandOutput
  | BatchDeleteTableCommandOutput
  | BatchDeleteTableVersionCommandOutput
  | BatchGetCrawlersCommandOutput
  | BatchGetDevEndpointsCommandOutput
  | BatchGetJobsCommandOutput
  | BatchGetPartitionCommandOutput
  | BatchGetTriggersCommandOutput
  | BatchGetWorkflowsCommandOutput
  | BatchStopJobRunCommandOutput
  | BatchUpdatePartitionCommandOutput
  | CancelMLTaskRunCommandOutput
  | CheckSchemaVersionValidityCommandOutput
  | CreateClassifierCommandOutput
  | CreateConnectionCommandOutput
  | CreateCrawlerCommandOutput
  | CreateDatabaseCommandOutput
  | CreateDevEndpointCommandOutput
  | CreateJobCommandOutput
  | CreateMLTransformCommandOutput
  | CreatePartitionCommandOutput
  | CreatePartitionIndexCommandOutput
  | CreateRegistryCommandOutput
  | CreateSchemaCommandOutput
  | CreateScriptCommandOutput
  | CreateSecurityConfigurationCommandOutput
  | CreateTableCommandOutput
  | CreateTriggerCommandOutput
  | CreateUserDefinedFunctionCommandOutput
  | CreateWorkflowCommandOutput
  | DeleteClassifierCommandOutput
  | DeleteColumnStatisticsForPartitionCommandOutput
  | DeleteColumnStatisticsForTableCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteCrawlerCommandOutput
  | DeleteDatabaseCommandOutput
  | DeleteDevEndpointCommandOutput
  | DeleteJobCommandOutput
  | DeleteMLTransformCommandOutput
  | DeletePartitionCommandOutput
  | DeletePartitionIndexCommandOutput
  | DeleteRegistryCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteSchemaVersionsCommandOutput
  | DeleteSecurityConfigurationCommandOutput
  | DeleteTableCommandOutput
  | DeleteTableVersionCommandOutput
  | DeleteTriggerCommandOutput
  | DeleteUserDefinedFunctionCommandOutput
  | DeleteWorkflowCommandOutput
  | GetCatalogImportStatusCommandOutput
  | GetClassifierCommandOutput
  | GetClassifiersCommandOutput
  | GetColumnStatisticsForPartitionCommandOutput
  | GetColumnStatisticsForTableCommandOutput
  | GetConnectionCommandOutput
  | GetConnectionsCommandOutput
  | GetCrawlerCommandOutput
  | GetCrawlerMetricsCommandOutput
  | GetCrawlersCommandOutput
  | GetDataCatalogEncryptionSettingsCommandOutput
  | GetDatabaseCommandOutput
  | GetDatabasesCommandOutput
  | GetDataflowGraphCommandOutput
  | GetDevEndpointCommandOutput
  | GetDevEndpointsCommandOutput
  | GetJobBookmarkCommandOutput
  | GetJobCommandOutput
  | GetJobRunCommandOutput
  | GetJobRunsCommandOutput
  | GetJobsCommandOutput
  | GetMLTaskRunCommandOutput
  | GetMLTaskRunsCommandOutput
  | GetMLTransformCommandOutput
  | GetMLTransformsCommandOutput
  | GetMappingCommandOutput
  | GetPartitionCommandOutput
  | GetPartitionIndexesCommandOutput
  | GetPartitionsCommandOutput
  | GetPlanCommandOutput
  | GetRegistryCommandOutput
  | GetResourcePoliciesCommandOutput
  | GetResourcePolicyCommandOutput
  | GetSchemaByDefinitionCommandOutput
  | GetSchemaCommandOutput
  | GetSchemaVersionCommandOutput
  | GetSchemaVersionsDiffCommandOutput
  | GetSecurityConfigurationCommandOutput
  | GetSecurityConfigurationsCommandOutput
  | GetTableCommandOutput
  | GetTableVersionCommandOutput
  | GetTableVersionsCommandOutput
  | GetTablesCommandOutput
  | GetTagsCommandOutput
  | GetTriggerCommandOutput
  | GetTriggersCommandOutput
  | GetUserDefinedFunctionCommandOutput
  | GetUserDefinedFunctionsCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowRunCommandOutput
  | GetWorkflowRunPropertiesCommandOutput
  | GetWorkflowRunsCommandOutput
  | ImportCatalogToGlueCommandOutput
  | ListCrawlersCommandOutput
  | ListDevEndpointsCommandOutput
  | ListJobsCommandOutput
  | ListMLTransformsCommandOutput
  | ListRegistriesCommandOutput
  | ListSchemaVersionsCommandOutput
  | ListSchemasCommandOutput
  | ListTriggersCommandOutput
  | ListWorkflowsCommandOutput
  | PutDataCatalogEncryptionSettingsCommandOutput
  | PutResourcePolicyCommandOutput
  | PutSchemaVersionMetadataCommandOutput
  | PutWorkflowRunPropertiesCommandOutput
  | QuerySchemaVersionMetadataCommandOutput
  | RegisterSchemaVersionCommandOutput
  | RemoveSchemaVersionMetadataCommandOutput
  | ResetJobBookmarkCommandOutput
  | ResumeWorkflowRunCommandOutput
  | SearchTablesCommandOutput
  | StartCrawlerCommandOutput
  | StartCrawlerScheduleCommandOutput
  | StartExportLabelsTaskRunCommandOutput
  | StartImportLabelsTaskRunCommandOutput
  | StartJobRunCommandOutput
  | StartMLEvaluationTaskRunCommandOutput
  | StartMLLabelingSetGenerationTaskRunCommandOutput
  | StartTriggerCommandOutput
  | StartWorkflowRunCommandOutput
  | StopCrawlerCommandOutput
  | StopCrawlerScheduleCommandOutput
  | StopTriggerCommandOutput
  | StopWorkflowRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateClassifierCommandOutput
  | UpdateColumnStatisticsForPartitionCommandOutput
  | UpdateColumnStatisticsForTableCommandOutput
  | UpdateConnectionCommandOutput
  | UpdateCrawlerCommandOutput
  | UpdateCrawlerScheduleCommandOutput
  | UpdateDatabaseCommandOutput
  | UpdateDevEndpointCommandOutput
  | UpdateJobCommandOutput
  | UpdateMLTransformCommandOutput
  | UpdatePartitionCommandOutput
  | UpdateRegistryCommandOutput
  | UpdateSchemaCommandOutput
  | UpdateTableCommandOutput
  | UpdateTriggerCommandOutput
  | UpdateUserDefinedFunctionCommandOutput
  | UpdateWorkflowCommandOutput;

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

type GlueClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of GlueClient class constructor that set the region, credentials and other options.
 */
export interface GlueClientConfig extends GlueClientConfigType {}

type GlueClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of GlueClient class. This is resolved and normalized from the {@link GlueClientConfig | constructor configuration interface}.
 */
export interface GlueClientResolvedConfig extends GlueClientResolvedConfigType {}

/**
 * <fullname>AWS Glue</fullname>
 *          <p>Defines the public endpoint for the AWS Glue service.</p>
 */
export class GlueClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GlueClientResolvedConfig
> {
  /**
   * The resolved configuration of GlueClient class. This is resolved and normalized from the {@link GlueClientConfig | constructor configuration interface}.
   */
  readonly config: GlueClientResolvedConfig;

  constructor(configuration: GlueClientConfig) {
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
