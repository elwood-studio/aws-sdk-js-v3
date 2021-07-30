import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient.ts";
import { CreatePermissionSetRequest, CreatePermissionSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreatePermissionSetCommand,
  serializeAws_json1_1CreatePermissionSetCommand,
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

export interface CreatePermissionSetCommandInput extends CreatePermissionSetRequest {}
export interface CreatePermissionSetCommandOutput extends CreatePermissionSetResponse, __MetadataBearer {}

/**
 * <p>Creates a permission set within a specified SSO instance.</p>
 *          <note>
 *             <p>To grant users and groups access to Amazon Web Services account resources, use <code>
 *                   <a>CreateAccountAssignment</a>
 *                </code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreatePermissionSetCommand } from "../../client-sso-admin/mod.ts";
 * // const { SSOAdminClient, CreatePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreatePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePermissionSetCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreatePermissionSetCommand extends $Command<
  CreatePermissionSetCommandInput,
  CreatePermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePermissionSetCommandInput, CreatePermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "CreatePermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePermissionSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePermissionSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePermissionSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePermissionSetCommandOutput> {
    return deserializeAws_json1_1CreatePermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
