import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient.ts";
import { DisassociateKmsKeyRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateKmsKeyCommand,
  serializeAws_json1_1DisassociateKmsKeyCommand,
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

export interface DisassociateKmsKeyCommandInput extends DisassociateKmsKeyRequest {}
export interface DisassociateKmsKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates the associated Key Management Service customer master key (CMK) from the specified log group.</p>
 *          <p>After the KMS CMK is disassociated from the log group, CloudWatch Logs stops encrypting newly ingested data for the log group.
 *       All previously ingested data remains encrypted, and CloudWatch Logs requires permissions for the CMK whenever the encrypted data is requested.</p>
 *          <p>Note that it can take up to 5 minutes for this operation to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DisassociateKmsKeyCommand } from "../../client-cloudwatch-logs/mod.ts";
 * // const { CloudWatchLogsClient, DisassociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DisassociateKmsKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateKmsKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateKmsKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateKmsKeyCommand extends $Command<
  DisassociateKmsKeyCommandInput,
  DisassociateKmsKeyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateKmsKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DisassociateKmsKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateKmsKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateKmsKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateKmsKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateKmsKeyCommandOutput> {
    return deserializeAws_json1_1DisassociateKmsKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
