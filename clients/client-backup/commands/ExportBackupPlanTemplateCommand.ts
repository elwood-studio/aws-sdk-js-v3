import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ExportBackupPlanTemplateInput, ExportBackupPlanTemplateOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ExportBackupPlanTemplateCommand,
  serializeAws_restJson1ExportBackupPlanTemplateCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ExportBackupPlanTemplateCommandInput = ExportBackupPlanTemplateInput;
export type ExportBackupPlanTemplateCommandOutput = ExportBackupPlanTemplateOutput & __MetadataBearer;

/**
 * <p>Returns the backup plan that is specified by the plan ID as a backup template.</p>
 */
export class ExportBackupPlanTemplateCommand extends $Command<
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
  BackupClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportBackupPlanTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportBackupPlanTemplateCommandInput, ExportBackupPlanTemplateCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ExportBackupPlanTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportBackupPlanTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: ExportBackupPlanTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportBackupPlanTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportBackupPlanTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportBackupPlanTemplateCommandOutput> {
    return deserializeAws_restJson1ExportBackupPlanTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
