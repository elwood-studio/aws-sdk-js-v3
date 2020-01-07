import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ECSClient";
import {
  ListContainerInstancesRequest,
  ListContainerInstancesResponse
} from "../models/index";
import {
  deserializeAws_json1_1ListContainerInstancesCommand,
  serializeAws_json1_1ListContainerInstancesCommand
} from "../protocols/Aws_json1_1";
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

export type ListContainerInstancesCommandInput = ListContainerInstancesRequest;
export type ListContainerInstancesCommandOutput = ListContainerInstancesResponse;

export class ListContainerInstancesCommand extends $Command<
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListContainerInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListContainerInstancesCommandInput,
    ListContainerInstancesCommandOutput
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
    input: ListContainerInstancesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListContainerInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListContainerInstancesCommandOutput> {
    return deserializeAws_json1_1ListContainerInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}