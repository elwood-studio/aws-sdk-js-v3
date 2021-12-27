import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient.ts";
import { CreateChannelModeratorRequest, CreateChannelModeratorResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateChannelModeratorCommand,
  serializeAws_restJson1CreateChannelModeratorCommand,
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

export interface CreateChannelModeratorCommandInput extends CreateChannelModeratorRequest {}
export interface CreateChannelModeratorCommandOutput extends CreateChannelModeratorResponse, __MetadataBearer {}

/**
 * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Add and remove other members of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove other moderators of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove user bans for the channel.</p>
 *             </li>
 *             <li>
 *                <p>Redact messages in the channel.</p>
 *             </li>
 *             <li>
 *                <p>List messages in the channel.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, CreateChannelModeratorCommand } from "../../client-chime-sdk-messaging/mod.ts";
 * // const { ChimeSDKMessagingClient, CreateChannelModeratorCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new CreateChannelModeratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelModeratorCommandInput} for command's `input` shape.
 * @see {@link CreateChannelModeratorCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateChannelModeratorCommand extends $Command<
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateChannelModeratorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMessagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChannelModeratorCommandInput, CreateChannelModeratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "CreateChannelModeratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateChannelModeratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateChannelModeratorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateChannelModeratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateChannelModeratorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelModeratorCommandOutput> {
    return deserializeAws_restJson1CreateChannelModeratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
