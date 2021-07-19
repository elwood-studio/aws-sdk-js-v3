import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient.ts";
import { UpdateFlowMediaStreamRequest, UpdateFlowMediaStreamResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateFlowMediaStreamCommand,
  serializeAws_restJson1UpdateFlowMediaStreamCommand,
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

export interface UpdateFlowMediaStreamCommandInput extends UpdateFlowMediaStreamRequest {}
export interface UpdateFlowMediaStreamCommandOutput extends UpdateFlowMediaStreamResponse, __MetadataBearer {}

/**
 * Updates an existing media stream.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowMediaStreamCommand } from "../../client-mediaconnect/mod.ts";
 * // const { MediaConnectClient, UpdateFlowMediaStreamCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowMediaStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowMediaStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowMediaStreamCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFlowMediaStreamCommand extends $Command<
  UpdateFlowMediaStreamCommandInput,
  UpdateFlowMediaStreamCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFlowMediaStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFlowMediaStreamCommandInput, UpdateFlowMediaStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "UpdateFlowMediaStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFlowMediaStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFlowMediaStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFlowMediaStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFlowMediaStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlowMediaStreamCommandOutput> {
    return deserializeAws_restJson1UpdateFlowMediaStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
