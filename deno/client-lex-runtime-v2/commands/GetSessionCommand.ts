import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client.ts";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetSessionCommand,
  serializeAws_restJson1GetSessionCommand,
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

export interface GetSessionCommandInput extends GetSessionRequest {}
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * <p>Returns session information for a specified bot, alias, and
 *          user.</p>
 *          <p>For example, you can use this operation to retrieve session
 *          information for a user that has left a long-running session in
 *          use.</p>
 *          <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2
 *          returns a <code>BadRequestException</code>. If the locale doesn't exist
 *          or is not enabled for the alias, you receive a
 *             <code>BadRequestException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, GetSessionCommand } from "../../client-lex-runtime-v2/mod.ts";
 * // const { LexRuntimeV2Client, GetSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSessionCommand extends $Command<
  GetSessionCommandInput,
  GetSessionCommandOutput,
  LexRuntimeV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSessionCommandInput, GetSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeV2Client";
    const commandName = "GetSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSessionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSessionCommandOutput> {
    return deserializeAws_restJson1GetSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
