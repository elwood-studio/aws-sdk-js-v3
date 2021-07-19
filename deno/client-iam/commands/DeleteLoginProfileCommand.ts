import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { DeleteLoginProfileRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteLoginProfileCommand,
  serializeAws_queryDeleteLoginProfileCommand,
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

export interface DeleteLoginProfileCommandInput extends DeleteLoginProfileRequest {}
export interface DeleteLoginProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the password for the specified IAM user, which terminates the user's ability
 *             to access Amazon Web Services services through the Management Console.</p>
 *         <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user.
 *             You can use <a>ChangePassword</a> to update, but not delete, your own
 *             password in the <b>My Security Credentials</b> page in the
 *             Management Console.</p>
 *         <important>
 *             <p> Deleting a user's password does not prevent a user from accessing Amazon Web Services through
 *                 the command line interface or the API. To prevent all user access, you must also
 *                 either make any access keys inactive or delete them. For more information about
 *                 making keys inactive or deleting them, see <a>UpdateAccessKey</a> and
 *                     <a>DeleteAccessKey</a>. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteLoginProfileCommand } from "../../client-iam/mod.ts";
 * // const { IAMClient, DeleteLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoginProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteLoginProfileCommand extends $Command<
  DeleteLoginProfileCommandInput,
  DeleteLoginProfileCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLoginProfileCommandInput) {
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
  ): Handler<DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteLoginProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLoginProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLoginProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteLoginProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLoginProfileCommandOutput> {
    return deserializeAws_queryDeleteLoginProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
