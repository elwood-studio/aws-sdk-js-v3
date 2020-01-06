import {
  QuickSightClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../QuickSightClient";
import {
  ListIAMPolicyAssignmentsRequest,
  ListIAMPolicyAssignmentsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListIAMPolicyAssignmentsCommand,
  serializeAws_restJson1_1ListIAMPolicyAssignmentsCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type ListIAMPolicyAssignmentsCommandInput = ListIAMPolicyAssignmentsRequest;
export type ListIAMPolicyAssignmentsCommandOutput = ListIAMPolicyAssignmentsResponse;

export class ListIAMPolicyAssignmentsCommand extends $Command<
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIAMPolicyAssignmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListIAMPolicyAssignmentsCommandInput,
    ListIAMPolicyAssignmentsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListIAMPolicyAssignmentsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListIAMPolicyAssignmentsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListIAMPolicyAssignmentsCommandOutput> {
    return deserializeAws_restJson1_1ListIAMPolicyAssignmentsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}