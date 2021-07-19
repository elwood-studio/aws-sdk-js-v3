import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient.ts";
import { UpdateFlowRequest, UpdateFlowResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateFlowCommand,
  serializeAws_restJson1UpdateFlowCommand,
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

export interface UpdateFlowCommandInput extends UpdateFlowRequest {}
export interface UpdateFlowCommandOutput extends UpdateFlowResponse, __MetadataBearer {}

/**
 * <p> Updates an existing flow. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, UpdateFlowCommand } from "../../client-appflow/mod.ts";
 * // const { AppflowClient, UpdateFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new UpdateFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFlowCommand extends $Command<
  UpdateFlowCommandInput,
  UpdateFlowCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFlowCommandInput, UpdateFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "UpdateFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFlowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFlowResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFlowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlowCommandOutput> {
    return deserializeAws_restJson1UpdateFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
