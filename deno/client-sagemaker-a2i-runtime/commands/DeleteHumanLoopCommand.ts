import {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerA2IRuntimeClient.ts";
import { DeleteHumanLoopRequest, DeleteHumanLoopResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteHumanLoopCommand,
  serializeAws_restJson1DeleteHumanLoopCommand,
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export interface DeleteHumanLoopCommandInput extends DeleteHumanLoopRequest {}
export interface DeleteHumanLoopCommandOutput extends DeleteHumanLoopResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified human loop for a flow definition.</p>
 *          <p>If the human loop was deleted, this operation will return a
 *         <code>ResourceNotFoundException</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } from "../../client-sagemaker-a2i-runtime/mod.ts";
 * // const { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new DeleteHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHumanLoopCommandInput} for command's `input` shape.
 * @see {@link DeleteHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteHumanLoopCommand extends $Command<
  DeleteHumanLoopCommandInput,
  DeleteHumanLoopCommandOutput,
  SageMakerA2IRuntimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteHumanLoopCommandInput) {
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
  ): Handler<DeleteHumanLoopCommandInput, DeleteHumanLoopCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerA2IRuntimeClient";
    const commandName = "DeleteHumanLoopCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHumanLoopRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteHumanLoopResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHumanLoopCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteHumanLoopCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHumanLoopCommandOutput> {
    return deserializeAws_restJson1DeleteHumanLoopCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
