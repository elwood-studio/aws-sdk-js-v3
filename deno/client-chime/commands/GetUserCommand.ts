import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { GetUserRequest, GetUserResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetUserCommand,
  serializeAws_restJson1GetUserCommand,
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

export interface GetUserCommandInput extends GetUserRequest {}
export interface GetUserCommandOutput extends GetUserResponse, __MetadataBearer {}

/**
 * <p>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.</p>
 *
 *          <p>
 * To retrieve user details with an email address instead of a user ID, use the
 * <a>ListUsers</a> action, and then filter by email address.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetUserCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, GetUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserCommandInput} for command's `input` shape.
 * @see {@link GetUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetUserCommand extends $Command<GetUserCommandInput, GetUserCommandOutput, ChimeClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUserCommandInput, GetUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserCommandOutput> {
    return deserializeAws_restJson1GetUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
