import {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerA2IRuntimeClient";
import { StartHumanLoopRequest, StartHumanLoopResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartHumanLoopCommand,
  serializeAws_restJson1StartHumanLoopCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type StartHumanLoopCommandInput = StartHumanLoopRequest;
export type StartHumanLoopCommandOutput = StartHumanLoopResponse & __MetadataBearer;

/**
 * <p>Starts a human loop, provided that at least one activation condition is met.</p>
 */
export class StartHumanLoopCommand extends $Command<
  StartHumanLoopCommandInput,
  StartHumanLoopCommandOutput,
  SageMakerA2IRuntimeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartHumanLoopCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerA2IRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartHumanLoopCommandInput, StartHumanLoopCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerA2IRuntimeClient";
    const commandName = "StartHumanLoopCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartHumanLoopRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartHumanLoopResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartHumanLoopCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartHumanLoopCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartHumanLoopCommandOutput> {
    return deserializeAws_restJson1StartHumanLoopCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
