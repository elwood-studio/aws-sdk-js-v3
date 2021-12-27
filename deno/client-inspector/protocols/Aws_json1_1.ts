import {
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput,
} from "../commands/AddAttributesToFindingsCommand.ts";
import {
  CreateAssessmentTargetCommandInput,
  CreateAssessmentTargetCommandOutput,
} from "../commands/CreateAssessmentTargetCommand.ts";
import {
  CreateAssessmentTemplateCommandInput,
  CreateAssessmentTemplateCommandOutput,
} from "../commands/CreateAssessmentTemplateCommand.ts";
import {
  CreateExclusionsPreviewCommandInput,
  CreateExclusionsPreviewCommandOutput,
} from "../commands/CreateExclusionsPreviewCommand.ts";
import {
  CreateResourceGroupCommandInput,
  CreateResourceGroupCommandOutput,
} from "../commands/CreateResourceGroupCommand.ts";
import {
  DeleteAssessmentRunCommandInput,
  DeleteAssessmentRunCommandOutput,
} from "../commands/DeleteAssessmentRunCommand.ts";
import {
  DeleteAssessmentTargetCommandInput,
  DeleteAssessmentTargetCommandOutput,
} from "../commands/DeleteAssessmentTargetCommand.ts";
import {
  DeleteAssessmentTemplateCommandInput,
  DeleteAssessmentTemplateCommandOutput,
} from "../commands/DeleteAssessmentTemplateCommand.ts";
import {
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput,
} from "../commands/DescribeAssessmentRunsCommand.ts";
import {
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput,
} from "../commands/DescribeAssessmentTargetsCommand.ts";
import {
  DescribeAssessmentTemplatesCommandInput,
  DescribeAssessmentTemplatesCommandOutput,
} from "../commands/DescribeAssessmentTemplatesCommand.ts";
import {
  DescribeCrossAccountAccessRoleCommandInput,
  DescribeCrossAccountAccessRoleCommandOutput,
} from "../commands/DescribeCrossAccountAccessRoleCommand.ts";
import { DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput } from "../commands/DescribeExclusionsCommand.ts";
import { DescribeFindingsCommandInput, DescribeFindingsCommandOutput } from "../commands/DescribeFindingsCommand.ts";
import {
  DescribeResourceGroupsCommandInput,
  DescribeResourceGroupsCommandOutput,
} from "../commands/DescribeResourceGroupsCommand.ts";
import {
  DescribeRulesPackagesCommandInput,
  DescribeRulesPackagesCommandOutput,
} from "../commands/DescribeRulesPackagesCommand.ts";
import {
  GetAssessmentReportCommandInput,
  GetAssessmentReportCommandOutput,
} from "../commands/GetAssessmentReportCommand.ts";
import {
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
} from "../commands/GetExclusionsPreviewCommand.ts";
import {
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput,
} from "../commands/GetTelemetryMetadataCommand.ts";
import {
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
} from "../commands/ListAssessmentRunAgentsCommand.ts";
import { ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput } from "../commands/ListAssessmentRunsCommand.ts";
import {
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
} from "../commands/ListAssessmentTargetsCommand.ts";
import {
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "../commands/ListAssessmentTemplatesCommand.ts";
import {
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput,
} from "../commands/ListEventSubscriptionsCommand.ts";
import { ListExclusionsCommandInput, ListExclusionsCommandOutput } from "../commands/ListExclusionsCommand.ts";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand.ts";
import { ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput } from "../commands/ListRulesPackagesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand.ts";
import { PreviewAgentsCommandInput, PreviewAgentsCommandOutput } from "../commands/PreviewAgentsCommand.ts";
import {
  RegisterCrossAccountAccessRoleCommandInput,
  RegisterCrossAccountAccessRoleCommandOutput,
} from "../commands/RegisterCrossAccountAccessRoleCommand.ts";
import {
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
} from "../commands/RemoveAttributesFromFindingsCommand.ts";
import { SetTagsForResourceCommandInput, SetTagsForResourceCommandOutput } from "../commands/SetTagsForResourceCommand.ts";
import { StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput } from "../commands/StartAssessmentRunCommand.ts";
import { StopAssessmentRunCommandInput, StopAssessmentRunCommandOutput } from "../commands/StopAssessmentRunCommand.ts";
import { SubscribeToEventCommandInput, SubscribeToEventCommandOutput } from "../commands/SubscribeToEventCommand.ts";
import {
  UnsubscribeFromEventCommandInput,
  UnsubscribeFromEventCommandOutput,
} from "../commands/UnsubscribeFromEventCommand.ts";
import {
  UpdateAssessmentTargetCommandInput,
  UpdateAssessmentTargetCommandOutput,
} from "../commands/UpdateAssessmentTargetCommand.ts";
import {
  AccessDeniedException,
  AddAttributesToFindingsRequest,
  AddAttributesToFindingsResponse,
  AgentAlreadyRunningAssessment,
  AgentFilter,
  AgentHealth,
  AgentHealthCode,
  AgentPreview,
  AgentsAlreadyRunningAssessmentException,
  AssessmentRun,
  AssessmentRunAgent,
  AssessmentRunFilter,
  AssessmentRunInProgressException,
  AssessmentRunNotification,
  AssessmentRunState,
  AssessmentRunStateChange,
  AssessmentTarget,
  AssessmentTargetFilter,
  AssessmentTemplate,
  AssessmentTemplateFilter,
  AssetAttributes,
  Attribute,
  CreateAssessmentTargetRequest,
  CreateAssessmentTargetResponse,
  CreateAssessmentTemplateRequest,
  CreateAssessmentTemplateResponse,
  CreateExclusionsPreviewRequest,
  CreateExclusionsPreviewResponse,
  CreateResourceGroupRequest,
  CreateResourceGroupResponse,
  DeleteAssessmentRunRequest,
  DeleteAssessmentTargetRequest,
  DeleteAssessmentTemplateRequest,
  DescribeAssessmentRunsRequest,
  DescribeAssessmentRunsResponse,
  DescribeAssessmentTargetsRequest,
  DescribeAssessmentTargetsResponse,
  DescribeAssessmentTemplatesRequest,
  DescribeAssessmentTemplatesResponse,
  DescribeCrossAccountAccessRoleResponse,
  DescribeExclusionsRequest,
  DescribeExclusionsResponse,
  DescribeFindingsRequest,
  DescribeFindingsResponse,
  DescribeResourceGroupsRequest,
  DescribeResourceGroupsResponse,
  DescribeRulesPackagesRequest,
  DescribeRulesPackagesResponse,
  DurationRange,
  EventSubscription,
  Exclusion,
  ExclusionPreview,
  FailedItemDetails,
  Finding,
  FindingFilter,
  GetAssessmentReportRequest,
  GetAssessmentReportResponse,
  GetExclusionsPreviewRequest,
  GetExclusionsPreviewResponse,
  GetTelemetryMetadataRequest,
  GetTelemetryMetadataResponse,
  InspectorServiceAttributes,
  InternalException,
  InvalidCrossAccountRoleException,
  InvalidInputException,
  LimitExceededException,
  ListAssessmentRunAgentsRequest,
  ListAssessmentRunAgentsResponse,
  ListAssessmentRunsRequest,
  ListAssessmentRunsResponse,
  ListAssessmentTargetsRequest,
  ListAssessmentTargetsResponse,
  ListAssessmentTemplatesRequest,
  ListAssessmentTemplatesResponse,
  ListEventSubscriptionsRequest,
  ListEventSubscriptionsResponse,
  ListExclusionsRequest,
  ListExclusionsResponse,
  ListFindingsRequest,
  ListFindingsResponse,
  ListRulesPackagesRequest,
  ListRulesPackagesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  NetworkInterface,
  NoSuchEntityException,
  PreviewAgentsRequest,
  PreviewAgentsResponse,
  PreviewGenerationInProgressException,
  PrivateIp,
  RegisterCrossAccountAccessRoleRequest,
  RemoveAttributesFromFindingsRequest,
  RemoveAttributesFromFindingsResponse,
  ResourceGroup,
  ResourceGroupTag,
  RulesPackage,
  Scope,
  SecurityGroup,
  ServiceTemporarilyUnavailableException,
  SetTagsForResourceRequest,
  Severity,
  StartAssessmentRunRequest,
  StartAssessmentRunResponse,
  StopAssessmentRunRequest,
  SubscribeToEventRequest,
  Subscription,
  Tag,
  TelemetryMetadata,
  TimestampRange,
  UnsubscribeFromEventRequest,
  UnsupportedFeatureException,
  UpdateAssessmentTargetRequest,
} from "../models/models_0.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
} from "../../smithy-client/mod.ts";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "../../types/mod.ts";

export const serializeAws_json1_1AddAttributesToFindingsCommand = async (
  input: AddAttributesToFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.AddAttributesToFindings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddAttributesToFindingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAssessmentTargetCommand = async (
  input: CreateAssessmentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.CreateAssessmentTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAssessmentTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAssessmentTemplateCommand = async (
  input: CreateAssessmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.CreateAssessmentTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAssessmentTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateExclusionsPreviewCommand = async (
  input: CreateExclusionsPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.CreateExclusionsPreview",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateExclusionsPreviewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateResourceGroupCommand = async (
  input: CreateResourceGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.CreateResourceGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateResourceGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAssessmentRunCommand = async (
  input: DeleteAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DeleteAssessmentRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAssessmentRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAssessmentTargetCommand = async (
  input: DeleteAssessmentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DeleteAssessmentTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAssessmentTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAssessmentTemplateCommand = async (
  input: DeleteAssessmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DeleteAssessmentTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAssessmentTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAssessmentRunsCommand = async (
  input: DescribeAssessmentRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DescribeAssessmentRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAssessmentRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAssessmentTargetsCommand = async (
  input: DescribeAssessmentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DescribeAssessmentTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAssessmentTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAssessmentTemplatesCommand = async (
  input: DescribeAssessmentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DescribeAssessmentTemplates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAssessmentTemplatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCrossAccountAccessRoleCommand = async (
  input: DescribeCrossAccountAccessRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DescribeCrossAccountAccessRole",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExclusionsCommand = async (
  input: DescribeExclusionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DescribeExclusions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeExclusionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFindingsCommand = async (
  input: DescribeFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DescribeFindings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFindingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeResourceGroupsCommand = async (
  input: DescribeResourceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DescribeResourceGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeResourceGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRulesPackagesCommand = async (
  input: DescribeRulesPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.DescribeRulesPackages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRulesPackagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAssessmentReportCommand = async (
  input: GetAssessmentReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.GetAssessmentReport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAssessmentReportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetExclusionsPreviewCommand = async (
  input: GetExclusionsPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.GetExclusionsPreview",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetExclusionsPreviewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTelemetryMetadataCommand = async (
  input: GetTelemetryMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.GetTelemetryMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTelemetryMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssessmentRunAgentsCommand = async (
  input: ListAssessmentRunAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.ListAssessmentRunAgents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssessmentRunAgentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssessmentRunsCommand = async (
  input: ListAssessmentRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.ListAssessmentRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssessmentRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssessmentTargetsCommand = async (
  input: ListAssessmentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.ListAssessmentTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssessmentTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssessmentTemplatesCommand = async (
  input: ListAssessmentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.ListAssessmentTemplates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssessmentTemplatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventSubscriptionsCommand = async (
  input: ListEventSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.ListEventSubscriptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEventSubscriptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListExclusionsCommand = async (
  input: ListExclusionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.ListExclusions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListExclusionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.ListFindings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFindingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRulesPackagesCommand = async (
  input: ListRulesPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.ListRulesPackages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRulesPackagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PreviewAgentsCommand = async (
  input: PreviewAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.PreviewAgents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PreviewAgentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterCrossAccountAccessRoleCommand = async (
  input: RegisterCrossAccountAccessRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.RegisterCrossAccountAccessRole",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterCrossAccountAccessRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveAttributesFromFindingsCommand = async (
  input: RemoveAttributesFromFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.RemoveAttributesFromFindings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveAttributesFromFindingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetTagsForResourceCommand = async (
  input: SetTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.SetTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartAssessmentRunCommand = async (
  input: StartAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.StartAssessmentRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartAssessmentRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopAssessmentRunCommand = async (
  input: StopAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.StopAssessmentRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopAssessmentRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SubscribeToEventCommand = async (
  input: SubscribeToEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.SubscribeToEvent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SubscribeToEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UnsubscribeFromEventCommand = async (
  input: UnsubscribeFromEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.UnsubscribeFromEvent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnsubscribeFromEventRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAssessmentTargetCommand = async (
  input: UpdateAssessmentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "InspectorService.UpdateAssessmentTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAssessmentTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddAttributesToFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttributesToFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddAttributesToFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddAttributesToFindingsResponse(data, context);
  const response: AddAttributesToFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddAttributesToFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttributesToFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateAssessmentTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAssessmentTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAssessmentTargetResponse(data, context);
  const response: CreateAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAssessmentTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateAssessmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAssessmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAssessmentTemplateResponse(data, context);
  const response: CreateAssessmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAssessmentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateExclusionsPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExclusionsPreviewCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateExclusionsPreviewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateExclusionsPreviewResponse(data, context);
  const response: CreateExclusionsPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateExclusionsPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExclusionsPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreviewGenerationInProgressException":
    case "com.amazonaws.inspector#PreviewGenerationInProgressException":
      response = {
        ...(await deserializeAws_json1_1PreviewGenerationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateResourceGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateResourceGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateResourceGroupResponse(data, context);
  const response: CreateResourceGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateResourceGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAssessmentRunCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAssessmentRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector#AssessmentRunInProgressException":
      response = {
        ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteAssessmentTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAssessmentTargetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAssessmentTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector#AssessmentRunInProgressException":
      response = {
        ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteAssessmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAssessmentTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAssessmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAssessmentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector#AssessmentRunInProgressException":
      response = {
        ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeAssessmentRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAssessmentRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAssessmentRunsResponse(data, context);
  const response: DescribeAssessmentRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAssessmentRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeAssessmentTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAssessmentTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAssessmentTargetsResponse(data, context);
  const response: DescribeAssessmentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAssessmentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeAssessmentTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAssessmentTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAssessmentTemplatesResponse(data, context);
  const response: DescribeAssessmentTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAssessmentTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCrossAccountAccessRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCrossAccountAccessRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse(data, context);
  const response: DescribeCrossAccountAccessRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCrossAccountAccessRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCrossAccountAccessRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeExclusionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExclusionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExclusionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExclusionsResponse(data, context);
  const response: DescribeExclusionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExclusionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExclusionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFindingsResponse(data, context);
  const response: DescribeFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeResourceGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeResourceGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourceGroupsResponse(data, context);
  const response: DescribeResourceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeResourceGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeRulesPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesPackagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRulesPackagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRulesPackagesResponse(data, context);
  const response: DescribeRulesPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRulesPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetAssessmentReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAssessmentReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAssessmentReportResponse(data, context);
  const response: GetAssessmentReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAssessmentReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector#AssessmentRunInProgressException":
      response = {
        ...(await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedFeatureException":
    case "com.amazonaws.inspector#UnsupportedFeatureException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetExclusionsPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExclusionsPreviewCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetExclusionsPreviewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetExclusionsPreviewResponse(data, context);
  const response: GetExclusionsPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetExclusionsPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExclusionsPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetTelemetryMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTelemetryMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTelemetryMetadataResponse(data, context);
  const response: GetTelemetryMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTelemetryMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAssessmentRunAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssessmentRunAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssessmentRunAgentsResponse(data, context);
  const response: ListAssessmentRunAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssessmentRunAgentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunAgentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAssessmentRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssessmentRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssessmentRunsResponse(data, context);
  const response: ListAssessmentRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssessmentRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAssessmentTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssessmentTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssessmentTargetsResponse(data, context);
  const response: ListAssessmentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssessmentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAssessmentTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssessmentTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssessmentTemplatesResponse(data, context);
  const response: ListAssessmentTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssessmentTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEventSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventSubscriptionsResponse(data, context);
  const response: ListEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListExclusionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExclusionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListExclusionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListExclusionsResponse(data, context);
  const response: ListExclusionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListExclusionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExclusionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFindingsResponse(data, context);
  const response: ListFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListRulesPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesPackagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRulesPackagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRulesPackagesResponse(data, context);
  const response: ListRulesPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRulesPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PreviewAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PreviewAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PreviewAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PreviewAgentsResponse(data, context);
  const response: PreviewAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PreviewAgentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PreviewAgentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCrossAccountAccessRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterCrossAccountAccessRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterCrossAccountAccessRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterCrossAccountAccessRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCrossAccountAccessRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RemoveAttributesFromFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesFromFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveAttributesFromFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveAttributesFromFindingsResponse(data, context);
  const response: RemoveAttributesFromFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveAttributesFromFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesFromFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SetTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetTagsForResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartAssessmentRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAssessmentRunResponse(data, context);
  const response: StartAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartAssessmentRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AgentsAlreadyRunningAssessmentException":
    case "com.amazonaws.inspector#AgentsAlreadyRunningAssessmentException":
      response = {
        ...(await deserializeAws_json1_1AgentsAlreadyRunningAssessmentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopAssessmentRunCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopAssessmentRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SubscribeToEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SubscribeToEventCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SubscribeToEventCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SubscribeToEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UnsubscribeFromEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UnsubscribeFromEventCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnsubscribeFromEventCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UnsubscribeFromEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateAssessmentTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAssessmentTargetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAssessmentTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      response = {
        ...(await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AgentsAlreadyRunningAssessmentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AgentsAlreadyRunningAssessmentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AgentsAlreadyRunningAssessmentException(body, context);
  const contents: AgentsAlreadyRunningAssessmentException = {
    name: "AgentsAlreadyRunningAssessmentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AssessmentRunInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssessmentRunInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssessmentRunInProgressException(body, context);
  const contents: AssessmentRunInProgressException = {
    name: "AssessmentRunInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(body, context);
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCrossAccountRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCrossAccountRoleException(body, context);
  const contents: InvalidCrossAccountRoleException = {
    name: "InvalidCrossAccountRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NoSuchEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchEntityException(body, context);
  const contents: NoSuchEntityException = {
    name: "NoSuchEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PreviewGenerationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreviewGenerationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PreviewGenerationInProgressException(body, context);
  const contents: PreviewGenerationInProgressException = {
    name: "PreviewGenerationInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceTemporarilyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceTemporarilyUnavailableException(body, context);
  const contents: ServiceTemporarilyUnavailableException = {
    name: "ServiceTemporarilyUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedFeatureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedFeatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedFeatureException(body, context);
  const contents: UnsupportedFeatureException = {
    name: "UnsupportedFeatureException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AddAttributesToFindingsRequest = (
  input: AddAttributesToFindingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes !== undefined &&
      input.attributes !== null && { attributes: serializeAws_json1_1UserAttributeList(input.attributes, context) }),
    ...(input.findingArns !== undefined &&
      input.findingArns !== null && {
        findingArns: serializeAws_json1_1AddRemoveAttributesFindingArnList(input.findingArns, context),
      }),
  };
};

const serializeAws_json1_1AddRemoveAttributesFindingArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AgentFilter = (input: AgentFilter, context: __SerdeContext): any => {
  return {
    ...(input.agentHealthCodes !== undefined &&
      input.agentHealthCodes !== null && {
        agentHealthCodes: serializeAws_json1_1AgentHealthCodeList(input.agentHealthCodes, context),
      }),
    ...(input.agentHealths !== undefined &&
      input.agentHealths !== null && {
        agentHealths: serializeAws_json1_1AgentHealthList(input.agentHealths, context),
      }),
  };
};

const serializeAws_json1_1AgentHealthCodeList = (input: (AgentHealthCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AgentHealthList = (input: (AgentHealth | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AgentIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AssessmentRunFilter = (input: AssessmentRunFilter, context: __SerdeContext): any => {
  return {
    ...(input.completionTimeRange !== undefined &&
      input.completionTimeRange !== null && {
        completionTimeRange: serializeAws_json1_1TimestampRange(input.completionTimeRange, context),
      }),
    ...(input.durationRange !== undefined &&
      input.durationRange !== null && {
        durationRange: serializeAws_json1_1DurationRange(input.durationRange, context),
      }),
    ...(input.namePattern !== undefined && input.namePattern !== null && { namePattern: input.namePattern }),
    ...(input.rulesPackageArns !== undefined &&
      input.rulesPackageArns !== null && {
        rulesPackageArns: serializeAws_json1_1FilterRulesPackageArnList(input.rulesPackageArns, context),
      }),
    ...(input.startTimeRange !== undefined &&
      input.startTimeRange !== null && {
        startTimeRange: serializeAws_json1_1TimestampRange(input.startTimeRange, context),
      }),
    ...(input.stateChangeTimeRange !== undefined &&
      input.stateChangeTimeRange !== null && {
        stateChangeTimeRange: serializeAws_json1_1TimestampRange(input.stateChangeTimeRange, context),
      }),
    ...(input.states !== undefined &&
      input.states !== null && { states: serializeAws_json1_1AssessmentRunStateList(input.states, context) }),
  };
};

const serializeAws_json1_1AssessmentRunStateList = (
  input: (AssessmentRunState | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AssessmentTargetFilter = (input: AssessmentTargetFilter, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTargetNamePattern !== undefined &&
      input.assessmentTargetNamePattern !== null && { assessmentTargetNamePattern: input.assessmentTargetNamePattern }),
  };
};

const serializeAws_json1_1AssessmentTemplateFilter = (
  input: AssessmentTemplateFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.durationRange !== undefined &&
      input.durationRange !== null && {
        durationRange: serializeAws_json1_1DurationRange(input.durationRange, context),
      }),
    ...(input.namePattern !== undefined && input.namePattern !== null && { namePattern: input.namePattern }),
    ...(input.rulesPackageArns !== undefined &&
      input.rulesPackageArns !== null && {
        rulesPackageArns: serializeAws_json1_1FilterRulesPackageArnList(input.rulesPackageArns, context),
      }),
  };
};

const serializeAws_json1_1AssessmentTemplateRulesPackageArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1AttributeList = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Attribute(entry, context);
    });
};

const serializeAws_json1_1AutoScalingGroupList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchDescribeArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchDescribeExclusionsArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CreateAssessmentTargetRequest = (
  input: CreateAssessmentTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTargetName !== undefined &&
      input.assessmentTargetName !== null && { assessmentTargetName: input.assessmentTargetName }),
    ...(input.resourceGroupArn !== undefined &&
      input.resourceGroupArn !== null && { resourceGroupArn: input.resourceGroupArn }),
  };
};

const serializeAws_json1_1CreateAssessmentTemplateRequest = (
  input: CreateAssessmentTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTargetArn !== undefined &&
      input.assessmentTargetArn !== null && { assessmentTargetArn: input.assessmentTargetArn }),
    ...(input.assessmentTemplateName !== undefined &&
      input.assessmentTemplateName !== null && { assessmentTemplateName: input.assessmentTemplateName }),
    ...(input.durationInSeconds !== undefined &&
      input.durationInSeconds !== null && { durationInSeconds: input.durationInSeconds }),
    ...(input.rulesPackageArns !== undefined &&
      input.rulesPackageArns !== null && {
        rulesPackageArns: serializeAws_json1_1AssessmentTemplateRulesPackageArnList(input.rulesPackageArns, context),
      }),
    ...(input.userAttributesForFindings !== undefined &&
      input.userAttributesForFindings !== null && {
        userAttributesForFindings: serializeAws_json1_1UserAttributeList(input.userAttributesForFindings, context),
      }),
  };
};

const serializeAws_json1_1CreateExclusionsPreviewRequest = (
  input: CreateExclusionsPreviewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTemplateArn !== undefined &&
      input.assessmentTemplateArn !== null && { assessmentTemplateArn: input.assessmentTemplateArn }),
  };
};

const serializeAws_json1_1CreateResourceGroupRequest = (
  input: CreateResourceGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceGroupTags !== undefined &&
      input.resourceGroupTags !== null && {
        resourceGroupTags: serializeAws_json1_1ResourceGroupTags(input.resourceGroupTags, context),
      }),
  };
};

const serializeAws_json1_1DeleteAssessmentRunRequest = (
  input: DeleteAssessmentRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentRunArn !== undefined &&
      input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
  };
};

const serializeAws_json1_1DeleteAssessmentTargetRequest = (
  input: DeleteAssessmentTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTargetArn !== undefined &&
      input.assessmentTargetArn !== null && { assessmentTargetArn: input.assessmentTargetArn }),
  };
};

const serializeAws_json1_1DeleteAssessmentTemplateRequest = (
  input: DeleteAssessmentTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTemplateArn !== undefined &&
      input.assessmentTemplateArn !== null && { assessmentTemplateArn: input.assessmentTemplateArn }),
  };
};

const serializeAws_json1_1DescribeAssessmentRunsRequest = (
  input: DescribeAssessmentRunsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentRunArns !== undefined &&
      input.assessmentRunArns !== null && {
        assessmentRunArns: serializeAws_json1_1BatchDescribeArnList(input.assessmentRunArns, context),
      }),
  };
};

const serializeAws_json1_1DescribeAssessmentTargetsRequest = (
  input: DescribeAssessmentTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTargetArns !== undefined &&
      input.assessmentTargetArns !== null && {
        assessmentTargetArns: serializeAws_json1_1BatchDescribeArnList(input.assessmentTargetArns, context),
      }),
  };
};

const serializeAws_json1_1DescribeAssessmentTemplatesRequest = (
  input: DescribeAssessmentTemplatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTemplateArns !== undefined &&
      input.assessmentTemplateArns !== null && {
        assessmentTemplateArns: serializeAws_json1_1BatchDescribeArnList(input.assessmentTemplateArns, context),
      }),
  };
};

const serializeAws_json1_1DescribeExclusionsRequest = (
  input: DescribeExclusionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exclusionArns !== undefined &&
      input.exclusionArns !== null && {
        exclusionArns: serializeAws_json1_1BatchDescribeExclusionsArnList(input.exclusionArns, context),
      }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
  };
};

const serializeAws_json1_1DescribeFindingsRequest = (input: DescribeFindingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.findingArns !== undefined &&
      input.findingArns !== null && {
        findingArns: serializeAws_json1_1BatchDescribeArnList(input.findingArns, context),
      }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
  };
};

const serializeAws_json1_1DescribeResourceGroupsRequest = (
  input: DescribeResourceGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceGroupArns !== undefined &&
      input.resourceGroupArns !== null && {
        resourceGroupArns: serializeAws_json1_1BatchDescribeArnList(input.resourceGroupArns, context),
      }),
  };
};

const serializeAws_json1_1DescribeRulesPackagesRequest = (
  input: DescribeRulesPackagesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.rulesPackageArns !== undefined &&
      input.rulesPackageArns !== null && {
        rulesPackageArns: serializeAws_json1_1BatchDescribeArnList(input.rulesPackageArns, context),
      }),
  };
};

const serializeAws_json1_1DurationRange = (input: DurationRange, context: __SerdeContext): any => {
  return {
    ...(input.maxSeconds !== undefined && input.maxSeconds !== null && { maxSeconds: input.maxSeconds }),
    ...(input.minSeconds !== undefined && input.minSeconds !== null && { minSeconds: input.minSeconds }),
  };
};

const serializeAws_json1_1FilterRulesPackageArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1FindingFilter = (input: FindingFilter, context: __SerdeContext): any => {
  return {
    ...(input.agentIds !== undefined &&
      input.agentIds !== null && { agentIds: serializeAws_json1_1AgentIdList(input.agentIds, context) }),
    ...(input.attributes !== undefined &&
      input.attributes !== null && { attributes: serializeAws_json1_1AttributeList(input.attributes, context) }),
    ...(input.autoScalingGroups !== undefined &&
      input.autoScalingGroups !== null && {
        autoScalingGroups: serializeAws_json1_1AutoScalingGroupList(input.autoScalingGroups, context),
      }),
    ...(input.creationTimeRange !== undefined &&
      input.creationTimeRange !== null && {
        creationTimeRange: serializeAws_json1_1TimestampRange(input.creationTimeRange, context),
      }),
    ...(input.ruleNames !== undefined &&
      input.ruleNames !== null && { ruleNames: serializeAws_json1_1RuleNameList(input.ruleNames, context) }),
    ...(input.rulesPackageArns !== undefined &&
      input.rulesPackageArns !== null && {
        rulesPackageArns: serializeAws_json1_1FilterRulesPackageArnList(input.rulesPackageArns, context),
      }),
    ...(input.severities !== undefined &&
      input.severities !== null && { severities: serializeAws_json1_1SeverityList(input.severities, context) }),
    ...(input.userAttributes !== undefined &&
      input.userAttributes !== null && {
        userAttributes: serializeAws_json1_1AttributeList(input.userAttributes, context),
      }),
  };
};

const serializeAws_json1_1GetAssessmentReportRequest = (
  input: GetAssessmentReportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentRunArn !== undefined &&
      input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
    ...(input.reportFileFormat !== undefined &&
      input.reportFileFormat !== null && { reportFileFormat: input.reportFileFormat }),
    ...(input.reportType !== undefined && input.reportType !== null && { reportType: input.reportType }),
  };
};

const serializeAws_json1_1GetExclusionsPreviewRequest = (
  input: GetExclusionsPreviewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTemplateArn !== undefined &&
      input.assessmentTemplateArn !== null && { assessmentTemplateArn: input.assessmentTemplateArn }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.previewToken !== undefined && input.previewToken !== null && { previewToken: input.previewToken }),
  };
};

const serializeAws_json1_1GetTelemetryMetadataRequest = (
  input: GetTelemetryMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentRunArn !== undefined &&
      input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
  };
};

const serializeAws_json1_1ListAssessmentRunAgentsRequest = (
  input: ListAssessmentRunAgentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentRunArn !== undefined &&
      input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1AgentFilter(input.filter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListAssessmentRunsRequest = (
  input: ListAssessmentRunsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTemplateArns !== undefined &&
      input.assessmentTemplateArns !== null && {
        assessmentTemplateArns: serializeAws_json1_1ListParentArnList(input.assessmentTemplateArns, context),
      }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1AssessmentRunFilter(input.filter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListAssessmentTargetsRequest = (
  input: ListAssessmentTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1AssessmentTargetFilter(input.filter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListAssessmentTemplatesRequest = (
  input: ListAssessmentTemplatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTargetArns !== undefined &&
      input.assessmentTargetArns !== null && {
        assessmentTargetArns: serializeAws_json1_1ListParentArnList(input.assessmentTargetArns, context),
      }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1AssessmentTemplateFilter(input.filter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListEventSubscriptionsRequest = (
  input: ListEventSubscriptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1ListExclusionsRequest = (input: ListExclusionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArn !== undefined &&
      input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListFindingsRequest = (input: ListFindingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArns !== undefined &&
      input.assessmentRunArns !== null && {
        assessmentRunArns: serializeAws_json1_1ListParentArnList(input.assessmentRunArns, context),
      }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1FindingFilter(input.filter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListParentArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListRulesPackagesRequest = (
  input: ListRulesPackagesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1PreviewAgentsRequest = (input: PreviewAgentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.previewAgentsArn !== undefined &&
      input.previewAgentsArn !== null && { previewAgentsArn: input.previewAgentsArn }),
  };
};

const serializeAws_json1_1RegisterCrossAccountAccessRoleRequest = (
  input: RegisterCrossAccountAccessRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
  };
};

const serializeAws_json1_1RemoveAttributesFromFindingsRequest = (
  input: RemoveAttributesFromFindingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeKeys !== undefined &&
      input.attributeKeys !== null && {
        attributeKeys: serializeAws_json1_1UserAttributeKeyList(input.attributeKeys, context),
      }),
    ...(input.findingArns !== undefined &&
      input.findingArns !== null && {
        findingArns: serializeAws_json1_1AddRemoveAttributesFindingArnList(input.findingArns, context),
      }),
  };
};

const serializeAws_json1_1ResourceGroupTag = (input: ResourceGroupTag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1ResourceGroupTags = (input: ResourceGroupTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ResourceGroupTag(entry, context);
    });
};

const serializeAws_json1_1RuleNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SetTagsForResourceRequest = (
  input: SetTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1SeverityList = (input: (Severity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StartAssessmentRunRequest = (
  input: StartAssessmentRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentRunName !== undefined &&
      input.assessmentRunName !== null && { assessmentRunName: input.assessmentRunName }),
    ...(input.assessmentTemplateArn !== undefined &&
      input.assessmentTemplateArn !== null && { assessmentTemplateArn: input.assessmentTemplateArn }),
  };
};

const serializeAws_json1_1StopAssessmentRunRequest = (
  input: StopAssessmentRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentRunArn !== undefined &&
      input.assessmentRunArn !== null && { assessmentRunArn: input.assessmentRunArn }),
    ...(input.stopAction !== undefined && input.stopAction !== null && { stopAction: input.stopAction }),
  };
};

const serializeAws_json1_1SubscribeToEventRequest = (input: SubscribeToEventRequest, context: __SerdeContext): any => {
  return {
    ...(input.event !== undefined && input.event !== null && { event: input.event }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.topicArn !== undefined && input.topicArn !== null && { topicArn: input.topicArn }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TimestampRange = (input: TimestampRange, context: __SerdeContext): any => {
  return {
    ...(input.beginDate !== undefined &&
      input.beginDate !== null && { beginDate: Math.round(input.beginDate.getTime() / 1000) }),
    ...(input.endDate !== undefined &&
      input.endDate !== null && { endDate: Math.round(input.endDate.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UnsubscribeFromEventRequest = (
  input: UnsubscribeFromEventRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.event !== undefined && input.event !== null && { event: input.event }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.topicArn !== undefined && input.topicArn !== null && { topicArn: input.topicArn }),
  };
};

const serializeAws_json1_1UpdateAssessmentTargetRequest = (
  input: UpdateAssessmentTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTargetArn !== undefined &&
      input.assessmentTargetArn !== null && { assessmentTargetArn: input.assessmentTargetArn }),
    ...(input.assessmentTargetName !== undefined &&
      input.assessmentTargetName !== null && { assessmentTargetName: input.assessmentTargetName }),
    ...(input.resourceGroupArn !== undefined &&
      input.resourceGroupArn !== null && { resourceGroupArn: input.resourceGroupArn }),
  };
};

const serializeAws_json1_1UserAttributeKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1UserAttributeList = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Attribute(entry, context);
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AddAttributesToFindingsResponse = (
  output: any,
  context: __SerdeContext
): AddAttributesToFindingsResponse => {
  return {
    failedItems:
      output.failedItems !== undefined && output.failedItems !== null
        ? deserializeAws_json1_1FailedItems(output.failedItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AgentAlreadyRunningAssessment = (
  output: any,
  context: __SerdeContext
): AgentAlreadyRunningAssessment => {
  return {
    agentId: __expectString(output.agentId),
    assessmentRunArn: __expectString(output.assessmentRunArn),
  } as any;
};

const deserializeAws_json1_1AgentAlreadyRunningAssessmentList = (
  output: any,
  context: __SerdeContext
): AgentAlreadyRunningAssessment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AgentAlreadyRunningAssessment(entry, context);
    });
};

const deserializeAws_json1_1AgentPreview = (output: any, context: __SerdeContext): AgentPreview => {
  return {
    agentHealth: __expectString(output.agentHealth),
    agentId: __expectString(output.agentId),
    agentVersion: __expectString(output.agentVersion),
    autoScalingGroup: __expectString(output.autoScalingGroup),
    hostname: __expectString(output.hostname),
    ipv4Address: __expectString(output.ipv4Address),
    kernelVersion: __expectString(output.kernelVersion),
    operatingSystem: __expectString(output.operatingSystem),
  } as any;
};

const deserializeAws_json1_1AgentPreviewList = (output: any, context: __SerdeContext): AgentPreview[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AgentPreview(entry, context);
    });
};

const deserializeAws_json1_1AgentsAlreadyRunningAssessmentException = (
  output: any,
  context: __SerdeContext
): AgentsAlreadyRunningAssessmentException => {
  return {
    agents:
      output.agents !== undefined && output.agents !== null
        ? deserializeAws_json1_1AgentAlreadyRunningAssessmentList(output.agents, context)
        : undefined,
    agentsTruncated: __expectBoolean(output.agentsTruncated),
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AssessmentRulesPackageArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AssessmentRun = (output: any, context: __SerdeContext): AssessmentRun => {
  return {
    arn: __expectString(output.arn),
    assessmentTemplateArn: __expectString(output.assessmentTemplateArn),
    completedAt:
      output.completedAt !== undefined && output.completedAt !== null
        ? new Date(Math.round(output.completedAt * 1000))
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    dataCollected: __expectBoolean(output.dataCollected),
    durationInSeconds: __expectInt32(output.durationInSeconds),
    findingCounts:
      output.findingCounts !== undefined && output.findingCounts !== null
        ? deserializeAws_json1_1AssessmentRunFindingCounts(output.findingCounts, context)
        : undefined,
    name: __expectString(output.name),
    notifications:
      output.notifications !== undefined && output.notifications !== null
        ? deserializeAws_json1_1AssessmentRunNotificationList(output.notifications, context)
        : undefined,
    rulesPackageArns:
      output.rulesPackageArns !== undefined && output.rulesPackageArns !== null
        ? deserializeAws_json1_1AssessmentRulesPackageArnList(output.rulesPackageArns, context)
        : undefined,
    startedAt:
      output.startedAt !== undefined && output.startedAt !== null
        ? new Date(Math.round(output.startedAt * 1000))
        : undefined,
    state: __expectString(output.state),
    stateChangedAt:
      output.stateChangedAt !== undefined && output.stateChangedAt !== null
        ? new Date(Math.round(output.stateChangedAt * 1000))
        : undefined,
    stateChanges:
      output.stateChanges !== undefined && output.stateChanges !== null
        ? deserializeAws_json1_1AssessmentRunStateChangeList(output.stateChanges, context)
        : undefined,
    userAttributesForFindings:
      output.userAttributesForFindings !== undefined && output.userAttributesForFindings !== null
        ? deserializeAws_json1_1UserAttributeList(output.userAttributesForFindings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssessmentRunAgent = (output: any, context: __SerdeContext): AssessmentRunAgent => {
  return {
    agentHealth: __expectString(output.agentHealth),
    agentHealthCode: __expectString(output.agentHealthCode),
    agentHealthDetails: __expectString(output.agentHealthDetails),
    agentId: __expectString(output.agentId),
    assessmentRunArn: __expectString(output.assessmentRunArn),
    autoScalingGroup: __expectString(output.autoScalingGroup),
    telemetryMetadata:
      output.telemetryMetadata !== undefined && output.telemetryMetadata !== null
        ? deserializeAws_json1_1TelemetryMetadataList(output.telemetryMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssessmentRunAgentList = (output: any, context: __SerdeContext): AssessmentRunAgent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssessmentRunAgent(entry, context);
    });
};

const deserializeAws_json1_1AssessmentRunFindingCounts = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [Severity | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectInt32(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1AssessmentRunInProgressArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AssessmentRunInProgressException = (
  output: any,
  context: __SerdeContext
): AssessmentRunInProgressException => {
  return {
    assessmentRunArns:
      output.assessmentRunArns !== undefined && output.assessmentRunArns !== null
        ? deserializeAws_json1_1AssessmentRunInProgressArnList(output.assessmentRunArns, context)
        : undefined,
    assessmentRunArnsTruncated: __expectBoolean(output.assessmentRunArnsTruncated),
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AssessmentRunList = (output: any, context: __SerdeContext): AssessmentRun[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssessmentRun(entry, context);
    });
};

const deserializeAws_json1_1AssessmentRunNotification = (
  output: any,
  context: __SerdeContext
): AssessmentRunNotification => {
  return {
    date: output.date !== undefined && output.date !== null ? new Date(Math.round(output.date * 1000)) : undefined,
    error: __expectBoolean(output.error),
    event: __expectString(output.event),
    message: __expectString(output.message),
    snsPublishStatusCode: __expectString(output.snsPublishStatusCode),
    snsTopicArn: __expectString(output.snsTopicArn),
  } as any;
};

const deserializeAws_json1_1AssessmentRunNotificationList = (
  output: any,
  context: __SerdeContext
): AssessmentRunNotification[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssessmentRunNotification(entry, context);
    });
};

const deserializeAws_json1_1AssessmentRunStateChange = (
  output: any,
  context: __SerdeContext
): AssessmentRunStateChange => {
  return {
    state: __expectString(output.state),
    stateChangedAt:
      output.stateChangedAt !== undefined && output.stateChangedAt !== null
        ? new Date(Math.round(output.stateChangedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssessmentRunStateChangeList = (
  output: any,
  context: __SerdeContext
): AssessmentRunStateChange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssessmentRunStateChange(entry, context);
    });
};

const deserializeAws_json1_1AssessmentTarget = (output: any, context: __SerdeContext): AssessmentTarget => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    name: __expectString(output.name),
    resourceGroupArn: __expectString(output.resourceGroupArn),
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(Math.round(output.updatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssessmentTargetList = (output: any, context: __SerdeContext): AssessmentTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssessmentTarget(entry, context);
    });
};

const deserializeAws_json1_1AssessmentTemplate = (output: any, context: __SerdeContext): AssessmentTemplate => {
  return {
    arn: __expectString(output.arn),
    assessmentRunCount: __expectInt32(output.assessmentRunCount),
    assessmentTargetArn: __expectString(output.assessmentTargetArn),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    durationInSeconds: __expectInt32(output.durationInSeconds),
    lastAssessmentRunArn: __expectString(output.lastAssessmentRunArn),
    name: __expectString(output.name),
    rulesPackageArns:
      output.rulesPackageArns !== undefined && output.rulesPackageArns !== null
        ? deserializeAws_json1_1AssessmentTemplateRulesPackageArnList(output.rulesPackageArns, context)
        : undefined,
    userAttributesForFindings:
      output.userAttributesForFindings !== undefined && output.userAttributesForFindings !== null
        ? deserializeAws_json1_1UserAttributeList(output.userAttributesForFindings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssessmentTemplateList = (output: any, context: __SerdeContext): AssessmentTemplate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AssessmentTemplate(entry, context);
    });
};

const deserializeAws_json1_1AssessmentTemplateRulesPackageArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AssetAttributes = (output: any, context: __SerdeContext): AssetAttributes => {
  return {
    agentId: __expectString(output.agentId),
    amiId: __expectString(output.amiId),
    autoScalingGroup: __expectString(output.autoScalingGroup),
    hostname: __expectString(output.hostname),
    ipv4Addresses:
      output.ipv4Addresses !== undefined && output.ipv4Addresses !== null
        ? deserializeAws_json1_1Ipv4AddressList(output.ipv4Addresses, context)
        : undefined,
    networkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_json1_1NetworkInterfaces(output.networkInterfaces, context)
        : undefined,
    schemaVersion: __expectInt32(output.schemaVersion),
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1AttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Attribute(entry, context);
    });
};

const deserializeAws_json1_1CreateAssessmentTargetResponse = (
  output: any,
  context: __SerdeContext
): CreateAssessmentTargetResponse => {
  return {
    assessmentTargetArn: __expectString(output.assessmentTargetArn),
  } as any;
};

const deserializeAws_json1_1CreateAssessmentTemplateResponse = (
  output: any,
  context: __SerdeContext
): CreateAssessmentTemplateResponse => {
  return {
    assessmentTemplateArn: __expectString(output.assessmentTemplateArn),
  } as any;
};

const deserializeAws_json1_1CreateExclusionsPreviewResponse = (
  output: any,
  context: __SerdeContext
): CreateExclusionsPreviewResponse => {
  return {
    previewToken: __expectString(output.previewToken),
  } as any;
};

const deserializeAws_json1_1CreateResourceGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateResourceGroupResponse => {
  return {
    resourceGroupArn: __expectString(output.resourceGroupArn),
  } as any;
};

const deserializeAws_json1_1DescribeAssessmentRunsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentRunsResponse => {
  return {
    assessmentRuns:
      output.assessmentRuns !== undefined && output.assessmentRuns !== null
        ? deserializeAws_json1_1AssessmentRunList(output.assessmentRuns, context)
        : undefined,
    failedItems:
      output.failedItems !== undefined && output.failedItems !== null
        ? deserializeAws_json1_1FailedItems(output.failedItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAssessmentTargetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentTargetsResponse => {
  return {
    assessmentTargets:
      output.assessmentTargets !== undefined && output.assessmentTargets !== null
        ? deserializeAws_json1_1AssessmentTargetList(output.assessmentTargets, context)
        : undefined,
    failedItems:
      output.failedItems !== undefined && output.failedItems !== null
        ? deserializeAws_json1_1FailedItems(output.failedItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAssessmentTemplatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentTemplatesResponse => {
  return {
    assessmentTemplates:
      output.assessmentTemplates !== undefined && output.assessmentTemplates !== null
        ? deserializeAws_json1_1AssessmentTemplateList(output.assessmentTemplates, context)
        : undefined,
    failedItems:
      output.failedItems !== undefined && output.failedItems !== null
        ? deserializeAws_json1_1FailedItems(output.failedItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse = (
  output: any,
  context: __SerdeContext
): DescribeCrossAccountAccessRoleResponse => {
  return {
    registeredAt:
      output.registeredAt !== undefined && output.registeredAt !== null
        ? new Date(Math.round(output.registeredAt * 1000))
        : undefined,
    roleArn: __expectString(output.roleArn),
    valid: __expectBoolean(output.valid),
  } as any;
};

const deserializeAws_json1_1DescribeExclusionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeExclusionsResponse => {
  return {
    exclusions:
      output.exclusions !== undefined && output.exclusions !== null
        ? deserializeAws_json1_1ExclusionMap(output.exclusions, context)
        : undefined,
    failedItems:
      output.failedItems !== undefined && output.failedItems !== null
        ? deserializeAws_json1_1FailedItems(output.failedItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFindingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeFindingsResponse => {
  return {
    failedItems:
      output.failedItems !== undefined && output.failedItems !== null
        ? deserializeAws_json1_1FailedItems(output.failedItems, context)
        : undefined,
    findings:
      output.findings !== undefined && output.findings !== null
        ? deserializeAws_json1_1FindingList(output.findings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeResourceGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourceGroupsResponse => {
  return {
    failedItems:
      output.failedItems !== undefined && output.failedItems !== null
        ? deserializeAws_json1_1FailedItems(output.failedItems, context)
        : undefined,
    resourceGroups:
      output.resourceGroups !== undefined && output.resourceGroups !== null
        ? deserializeAws_json1_1ResourceGroupList(output.resourceGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRulesPackagesResponse = (
  output: any,
  context: __SerdeContext
): DescribeRulesPackagesResponse => {
  return {
    failedItems:
      output.failedItems !== undefined && output.failedItems !== null
        ? deserializeAws_json1_1FailedItems(output.failedItems, context)
        : undefined,
    rulesPackages:
      output.rulesPackages !== undefined && output.rulesPackages !== null
        ? deserializeAws_json1_1RulesPackageList(output.rulesPackages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  return {
    event: __expectString(output.event),
    subscribedAt:
      output.subscribedAt !== undefined && output.subscribedAt !== null
        ? new Date(Math.round(output.subscribedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1EventSubscriptionList = (output: any, context: __SerdeContext): EventSubscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventSubscription(entry, context);
    });
};

const deserializeAws_json1_1Exclusion = (output: any, context: __SerdeContext): Exclusion => {
  return {
    arn: __expectString(output.arn),
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1AttributeList(output.attributes, context)
        : undefined,
    description: __expectString(output.description),
    recommendation: __expectString(output.recommendation),
    scopes:
      output.scopes !== undefined && output.scopes !== null
        ? deserializeAws_json1_1ScopeList(output.scopes, context)
        : undefined,
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_json1_1ExclusionMap = (output: any, context: __SerdeContext): { [key: string]: Exclusion } => {
  return Object.entries(output).reduce((acc: { [key: string]: Exclusion }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1Exclusion(value, context),
    };
  }, {});
};

const deserializeAws_json1_1ExclusionPreview = (output: any, context: __SerdeContext): ExclusionPreview => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1AttributeList(output.attributes, context)
        : undefined,
    description: __expectString(output.description),
    recommendation: __expectString(output.recommendation),
    scopes:
      output.scopes !== undefined && output.scopes !== null
        ? deserializeAws_json1_1ScopeList(output.scopes, context)
        : undefined,
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_json1_1ExclusionPreviewList = (output: any, context: __SerdeContext): ExclusionPreview[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExclusionPreview(entry, context);
    });
};

const deserializeAws_json1_1FailedItemDetails = (output: any, context: __SerdeContext): FailedItemDetails => {
  return {
    failureCode: __expectString(output.failureCode),
    retryable: __expectBoolean(output.retryable),
  } as any;
};

const deserializeAws_json1_1FailedItems = (
  output: any,
  context: __SerdeContext
): { [key: string]: FailedItemDetails } => {
  return Object.entries(output).reduce((acc: { [key: string]: FailedItemDetails }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1FailedItemDetails(value, context),
    };
  }, {});
};

const deserializeAws_json1_1Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    arn: __expectString(output.arn),
    assetAttributes:
      output.assetAttributes !== undefined && output.assetAttributes !== null
        ? deserializeAws_json1_1AssetAttributes(output.assetAttributes, context)
        : undefined,
    assetType: __expectString(output.assetType),
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1AttributeList(output.attributes, context)
        : undefined,
    confidence: __expectInt32(output.confidence),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    indicatorOfCompromise: __expectBoolean(output.indicatorOfCompromise),
    numericSeverity: __limitedParseDouble(output.numericSeverity),
    recommendation: __expectString(output.recommendation),
    schemaVersion: __expectInt32(output.schemaVersion),
    service: __expectString(output.service),
    serviceAttributes:
      output.serviceAttributes !== undefined && output.serviceAttributes !== null
        ? deserializeAws_json1_1InspectorServiceAttributes(output.serviceAttributes, context)
        : undefined,
    severity: __expectString(output.severity),
    title: __expectString(output.title),
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(Math.round(output.updatedAt * 1000))
        : undefined,
    userAttributes:
      output.userAttributes !== undefined && output.userAttributes !== null
        ? deserializeAws_json1_1UserAttributeList(output.userAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FindingList = (output: any, context: __SerdeContext): Finding[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Finding(entry, context);
    });
};

const deserializeAws_json1_1GetAssessmentReportResponse = (
  output: any,
  context: __SerdeContext
): GetAssessmentReportResponse => {
  return {
    status: __expectString(output.status),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1GetExclusionsPreviewResponse = (
  output: any,
  context: __SerdeContext
): GetExclusionsPreviewResponse => {
  return {
    exclusionPreviews:
      output.exclusionPreviews !== undefined && output.exclusionPreviews !== null
        ? deserializeAws_json1_1ExclusionPreviewList(output.exclusionPreviews, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
    previewStatus: __expectString(output.previewStatus),
  } as any;
};

const deserializeAws_json1_1GetTelemetryMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetTelemetryMetadataResponse => {
  return {
    telemetryMetadata:
      output.telemetryMetadata !== undefined && output.telemetryMetadata !== null
        ? deserializeAws_json1_1TelemetryMetadataList(output.telemetryMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InspectorServiceAttributes = (
  output: any,
  context: __SerdeContext
): InspectorServiceAttributes => {
  return {
    assessmentRunArn: __expectString(output.assessmentRunArn),
    rulesPackageArn: __expectString(output.rulesPackageArn),
    schemaVersion: __expectInt32(output.schemaVersion),
  } as any;
};

const deserializeAws_json1_1InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidCrossAccountRoleException = (
  output: any,
  context: __SerdeContext
): InvalidCrossAccountRoleException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Ipv4AddressList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Ipv6Addresses = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListAssessmentRunAgentsResponse = (
  output: any,
  context: __SerdeContext
): ListAssessmentRunAgentsResponse => {
  return {
    assessmentRunAgents:
      output.assessmentRunAgents !== undefined && output.assessmentRunAgents !== null
        ? deserializeAws_json1_1AssessmentRunAgentList(output.assessmentRunAgents, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListAssessmentRunsResponse = (
  output: any,
  context: __SerdeContext
): ListAssessmentRunsResponse => {
  return {
    assessmentRunArns:
      output.assessmentRunArns !== undefined && output.assessmentRunArns !== null
        ? deserializeAws_json1_1ListReturnedArnList(output.assessmentRunArns, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListAssessmentTargetsResponse = (
  output: any,
  context: __SerdeContext
): ListAssessmentTargetsResponse => {
  return {
    assessmentTargetArns:
      output.assessmentTargetArns !== undefined && output.assessmentTargetArns !== null
        ? deserializeAws_json1_1ListReturnedArnList(output.assessmentTargetArns, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListAssessmentTemplatesResponse = (
  output: any,
  context: __SerdeContext
): ListAssessmentTemplatesResponse => {
  return {
    assessmentTemplateArns:
      output.assessmentTemplateArns !== undefined && output.assessmentTemplateArns !== null
        ? deserializeAws_json1_1ListReturnedArnList(output.assessmentTemplateArns, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListEventSubscriptionsResponse = (
  output: any,
  context: __SerdeContext
): ListEventSubscriptionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    subscriptions:
      output.subscriptions !== undefined && output.subscriptions !== null
        ? deserializeAws_json1_1SubscriptionList(output.subscriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListExclusionsResponse = (output: any, context: __SerdeContext): ListExclusionsResponse => {
  return {
    exclusionArns:
      output.exclusionArns !== undefined && output.exclusionArns !== null
        ? deserializeAws_json1_1ListReturnedArnList(output.exclusionArns, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListFindingsResponse = (output: any, context: __SerdeContext): ListFindingsResponse => {
  return {
    findingArns:
      output.findingArns !== undefined && output.findingArns !== null
        ? deserializeAws_json1_1ListReturnedArnList(output.findingArns, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListReturnedArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ListRulesPackagesResponse = (
  output: any,
  context: __SerdeContext
): ListRulesPackagesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    rulesPackageArns:
      output.rulesPackageArns !== undefined && output.rulesPackageArns !== null
        ? deserializeAws_json1_1ListReturnedArnList(output.rulesPackageArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    ipv6Addresses:
      output.ipv6Addresses !== undefined && output.ipv6Addresses !== null
        ? deserializeAws_json1_1Ipv6Addresses(output.ipv6Addresses, context)
        : undefined,
    networkInterfaceId: __expectString(output.networkInterfaceId),
    privateDnsName: __expectString(output.privateDnsName),
    privateIpAddress: __expectString(output.privateIpAddress),
    privateIpAddresses:
      output.privateIpAddresses !== undefined && output.privateIpAddresses !== null
        ? deserializeAws_json1_1PrivateIpAddresses(output.privateIpAddresses, context)
        : undefined,
    publicDnsName: __expectString(output.publicDnsName),
    publicIp: __expectString(output.publicIp),
    securityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_json1_1SecurityGroups(output.securityGroups, context)
        : undefined,
    subnetId: __expectString(output.subnetId),
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_json1_1NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NetworkInterface(entry, context);
    });
};

const deserializeAws_json1_1NoSuchEntityException = (output: any, context: __SerdeContext): NoSuchEntityException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PreviewAgentsResponse = (output: any, context: __SerdeContext): PreviewAgentsResponse => {
  return {
    agentPreviews:
      output.agentPreviews !== undefined && output.agentPreviews !== null
        ? deserializeAws_json1_1AgentPreviewList(output.agentPreviews, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1PreviewGenerationInProgressException = (
  output: any,
  context: __SerdeContext
): PreviewGenerationInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PrivateIp = (output: any, context: __SerdeContext): PrivateIp => {
  return {
    privateDnsName: __expectString(output.privateDnsName),
    privateIpAddress: __expectString(output.privateIpAddress),
  } as any;
};

const deserializeAws_json1_1PrivateIpAddresses = (output: any, context: __SerdeContext): PrivateIp[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PrivateIp(entry, context);
    });
};

const deserializeAws_json1_1RemoveAttributesFromFindingsResponse = (
  output: any,
  context: __SerdeContext
): RemoveAttributesFromFindingsResponse => {
  return {
    failedItems:
      output.failedItems !== undefined && output.failedItems !== null
        ? deserializeAws_json1_1FailedItems(output.failedItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceGroup = (output: any, context: __SerdeContext): ResourceGroup => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1ResourceGroupTags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceGroupList = (output: any, context: __SerdeContext): ResourceGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceGroup(entry, context);
    });
};

const deserializeAws_json1_1ResourceGroupTag = (output: any, context: __SerdeContext): ResourceGroupTag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1ResourceGroupTags = (output: any, context: __SerdeContext): ResourceGroupTag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceGroupTag(entry, context);
    });
};

const deserializeAws_json1_1RulesPackage = (output: any, context: __SerdeContext): RulesPackage => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    name: __expectString(output.name),
    provider: __expectString(output.provider),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_1RulesPackageList = (output: any, context: __SerdeContext): RulesPackage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RulesPackage(entry, context);
    });
};

const deserializeAws_json1_1Scope = (output: any, context: __SerdeContext): Scope => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1ScopeList = (output: any, context: __SerdeContext): Scope[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Scope(entry, context);
    });
};

const deserializeAws_json1_1SecurityGroup = (output: any, context: __SerdeContext): SecurityGroup => {
  return {
    groupId: __expectString(output.groupId),
    groupName: __expectString(output.groupName),
  } as any;
};

const deserializeAws_json1_1SecurityGroups = (output: any, context: __SerdeContext): SecurityGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecurityGroup(entry, context);
    });
};

const deserializeAws_json1_1ServiceTemporarilyUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceTemporarilyUnavailableException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1StartAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): StartAssessmentRunResponse => {
  return {
    assessmentRunArn: __expectString(output.assessmentRunArn),
  } as any;
};

const deserializeAws_json1_1Subscription = (output: any, context: __SerdeContext): Subscription => {
  return {
    eventSubscriptions:
      output.eventSubscriptions !== undefined && output.eventSubscriptions !== null
        ? deserializeAws_json1_1EventSubscriptionList(output.eventSubscriptions, context)
        : undefined,
    resourceArn: __expectString(output.resourceArn),
    topicArn: __expectString(output.topicArn),
  } as any;
};

const deserializeAws_json1_1SubscriptionList = (output: any, context: __SerdeContext): Subscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Subscription(entry, context);
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TelemetryMetadata = (output: any, context: __SerdeContext): TelemetryMetadata => {
  return {
    count: __expectLong(output.count),
    dataSize: __expectLong(output.dataSize),
    messageType: __expectString(output.messageType),
  } as any;
};

const deserializeAws_json1_1TelemetryMetadataList = (output: any, context: __SerdeContext): TelemetryMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TelemetryMetadata(entry, context);
    });
};

const deserializeAws_json1_1UnsupportedFeatureException = (
  output: any,
  context: __SerdeContext
): UnsupportedFeatureException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UserAttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Attribute(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
