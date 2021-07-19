import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient.ts";
import { SetSMSAttributesInput, SetSMSAttributesResponse } from "../models/models_0.ts";
import {
  deserializeAws_querySetSMSAttributesCommand,
  serializeAws_querySetSMSAttributesCommand,
} from "../protocols/Aws_query.ts";
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

export interface SetSMSAttributesCommandInput extends SetSMSAttributesInput {}
export interface SetSMSAttributesCommandOutput extends SetSMSAttributesResponse, __MetadataBearer {}

/**
 * <p>Use this request to set the default settings for sending SMS messages and receiving
 *             daily SMS usage reports.</p>
 *         <p>You can override some of these settings for a single message when you use the
 *                 <code>Publish</code> action with the <code>MessageAttributes.entry.N</code>
 *             parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a>
 *             in the <i>Amazon SNS Developer Guide</i>.</p>
 *         <note>
 *             <p>To use this operation, you must grant the Amazon SNS service principal
 *                     (<code>sns.amazonaws.com</code>) permission to perform the
 *                     <code>s3:ListBucket</code> action. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetSMSAttributesCommand } from "../../client-sns/mod.ts";
 * // const { SNSClient, SetSMSAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetSMSAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSMSAttributesCommandInput} for command's `input` shape.
 * @see {@link SetSMSAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetSMSAttributesCommand extends $Command<
  SetSMSAttributesCommandInput,
  SetSMSAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetSMSAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "SetSMSAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetSMSAttributesInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetSMSAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetSMSAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetSMSAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSMSAttributesCommandOutput> {
    return deserializeAws_querySetSMSAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
