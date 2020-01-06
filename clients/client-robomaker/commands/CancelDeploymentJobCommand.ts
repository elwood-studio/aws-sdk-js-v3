import {
  RoboMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RoboMakerClient";
import {
  CancelDeploymentJobRequest,
  CancelDeploymentJobResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1CancelDeploymentJobCommand,
  serializeAws_restJson1_1CancelDeploymentJobCommand
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

export type CancelDeploymentJobCommandInput = CancelDeploymentJobRequest;
export type CancelDeploymentJobCommandOutput = CancelDeploymentJobResponse;

export class CancelDeploymentJobCommand extends $Command<
  CancelDeploymentJobCommandInput,
  CancelDeploymentJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelDeploymentJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CancelDeploymentJobCommandInput,
    CancelDeploymentJobCommandOutput
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
    input: CancelDeploymentJobCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CancelDeploymentJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CancelDeploymentJobCommandOutput> {
    return deserializeAws_restJson1_1CancelDeploymentJobCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}