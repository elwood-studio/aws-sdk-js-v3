import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { ResetServiceSpecificCredentialRequest, ResetServiceSpecificCredentialResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryResetServiceSpecificCredentialCommand,
  serializeAws_queryResetServiceSpecificCredentialCommand,
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

export interface ResetServiceSpecificCredentialCommandInput extends ResetServiceSpecificCredentialRequest {}
export interface ResetServiceSpecificCredentialCommandOutput
  extends ResetServiceSpecificCredentialResponse,
    __MetadataBearer {}

/**
 * <p>Resets the password for a service-specific credential. The new password is Amazon Web Services
 *             generated and cryptographically strong. It cannot be configured by the user. Resetting
 *             the password immediately invalidates the previous password associated with this
 *             user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ResetServiceSpecificCredentialCommand } from "../../client-iam/mod.ts";
 * // const { IAMClient, ResetServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ResetServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link ResetServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResetServiceSpecificCredentialCommand extends $Command<
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetServiceSpecificCredentialCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ResetServiceSpecificCredentialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetServiceSpecificCredentialRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResetServiceSpecificCredentialResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ResetServiceSpecificCredentialCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryResetServiceSpecificCredentialCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetServiceSpecificCredentialCommandOutput> {
    return deserializeAws_queryResetServiceSpecificCredentialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
