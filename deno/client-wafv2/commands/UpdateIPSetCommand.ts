import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client.ts";
import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateIPSetCommand,
  serializeAws_json1_1UpdateIPSetCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface UpdateIPSetCommandInput extends UpdateIPSetRequest {}
export interface UpdateIPSetCommandOutput extends UpdateIPSetResponse, __MetadataBearer {}

/**
 * <p>Updates the specified <a>IPSet</a>. </p>
 *          <note>
 *             <p>This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call. To modify the IP set, retrieve it by calling <a>GetIPSet</a>, update the settings as needed, and then provide the complete IP set specification to this call.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateIPSetCommand } from "../../client-wafv2/mod.ts";
 * // const { WAFV2Client, UpdateIPSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new UpdateIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIPSetCommandInput} for command's `input` shape.
 * @see {@link UpdateIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateIPSetCommand extends $Command<
  UpdateIPSetCommandInput,
  UpdateIPSetCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateIPSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIPSetCommandInput, UpdateIPSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "UpdateIPSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateIPSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateIPSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateIPSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateIPSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateIPSetCommandOutput> {
    return deserializeAws_json1_1UpdateIPSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
