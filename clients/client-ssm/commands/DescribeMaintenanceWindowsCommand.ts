import {
  SSMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SSMClient";
import {
  DescribeMaintenanceWindowsRequest,
  DescribeMaintenanceWindowsResult
} from "../models/index";
import {
  deserializeAws_json1_1DescribeMaintenanceWindowsCommand,
  serializeAws_json1_1DescribeMaintenanceWindowsCommand
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

export type DescribeMaintenanceWindowsCommandInput = DescribeMaintenanceWindowsRequest;
export type DescribeMaintenanceWindowsCommandOutput = DescribeMaintenanceWindowsResult;

export class DescribeMaintenanceWindowsCommand extends $Command<
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMaintenanceWindowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeMaintenanceWindowsCommandInput,
    DescribeMaintenanceWindowsCommandOutput
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
    input: DescribeMaintenanceWindowsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMaintenanceWindowsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeMaintenanceWindowsCommandOutput> {
    return deserializeAws_json1_1DescribeMaintenanceWindowsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}