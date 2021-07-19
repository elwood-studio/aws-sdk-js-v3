import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient.ts";
import { GetServicesInScopeRequest, GetServicesInScopeResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetServicesInScopeCommand,
  serializeAws_restJson1GetServicesInScopeCommand,
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

export interface GetServicesInScopeCommandInput extends GetServicesInScopeRequest {}
export interface GetServicesInScopeCommandOutput extends GetServicesInScopeResponse, __MetadataBearer {}

/**
 * <p>
 *    Returns a list of the in-scope Amazon Web Services services for the specified assessment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetServicesInScopeCommand } from "../../client-auditmanager/mod.ts";
 * // const { AuditManagerClient, GetServicesInScopeCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetServicesInScopeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServicesInScopeCommandInput} for command's `input` shape.
 * @see {@link GetServicesInScopeCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetServicesInScopeCommand extends $Command<
  GetServicesInScopeCommandInput,
  GetServicesInScopeCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServicesInScopeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetServicesInScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServicesInScopeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServicesInScopeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServicesInScopeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetServicesInScopeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServicesInScopeCommandOutput> {
    return deserializeAws_restJson1GetServicesInScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
