import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient.ts";
import {
  AssociateAssessmentReportEvidenceFolderRequest,
  AssociateAssessmentReportEvidenceFolderResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand,
  serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand,
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

export interface AssociateAssessmentReportEvidenceFolderCommandInput
  extends AssociateAssessmentReportEvidenceFolderRequest {}
export interface AssociateAssessmentReportEvidenceFolderCommandOutput
  extends AssociateAssessmentReportEvidenceFolderResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Associates an evidence folder to the specified assessment report in Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } from "../../client-auditmanager/mod.ts";
 * // const { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new AssociateAssessmentReportEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateAssessmentReportEvidenceFolderCommand extends $Command<
  AssociateAssessmentReportEvidenceFolderCommandInput,
  AssociateAssessmentReportEvidenceFolderCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateAssessmentReportEvidenceFolderCommandInput) {
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
  ): Handler<
    AssociateAssessmentReportEvidenceFolderCommandInput,
    AssociateAssessmentReportEvidenceFolderCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "AssociateAssessmentReportEvidenceFolderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateAssessmentReportEvidenceFolderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateAssessmentReportEvidenceFolderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateAssessmentReportEvidenceFolderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput> {
    return deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
