import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient.ts";
import {
  DescribeChannelModeratedByAppInstanceUserRequest,
  DescribeChannelModeratedByAppInstanceUserResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand,
  serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand,
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

export interface DescribeChannelModeratedByAppInstanceUserCommandInput
  extends DescribeChannelModeratedByAppInstanceUserRequest {}
export interface DescribeChannelModeratedByAppInstanceUserCommandOutput
  extends DescribeChannelModeratedByAppInstanceUserResponse,
    __MetadataBearer {}

/**
 * <p>Returns the full details of a channel moderated by the specified
 *             <code>AppInstanceUser</code>.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DescribeChannelModeratedByAppInstanceUserCommand } from "../../client-chime-sdk-messaging/mod.ts";
 * // const { ChimeSDKMessagingClient, DescribeChannelModeratedByAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new DescribeChannelModeratedByAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChannelModeratedByAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelModeratedByAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeChannelModeratedByAppInstanceUserCommand extends $Command<
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeChannelModeratedByAppInstanceUserCommandInput) {
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
  ): Handler<
    DescribeChannelModeratedByAppInstanceUserCommandInput,
    DescribeChannelModeratedByAppInstanceUserCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "DescribeChannelModeratedByAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeChannelModeratedByAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeChannelModeratedByAppInstanceUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeChannelModeratedByAppInstanceUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> {
    return deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
