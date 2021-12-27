import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { UpdateCertificateRequest } from "../models/models_2.ts";
import {
  deserializeAws_restJson1UpdateCertificateCommand,
  serializeAws_restJson1UpdateCertificateCommand,
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

export interface UpdateCertificateCommandInput extends UpdateCertificateRequest {}
export interface UpdateCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the status of the specified certificate. This operation is
 *          idempotent.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCertificate</a> action.</p>
 *
 *          <p>Certificates must be in the ACTIVE state to authenticate devices that use
 *          a certificate to connect to IoT.</p>
 *          <p>Within a few minutes of updating a certificate from the ACTIVE state to any other
 *          state, IoT disconnects all devices that used that certificate to connect. Devices cannot
 *          use a certificate that is not in the ACTIVE state to reconnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCertificateCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, UpdateCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateCertificateCommand extends $Command<
  UpdateCertificateCommandInput,
  UpdateCertificateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCertificateCommandInput, UpdateCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCertificateCommandOutput> {
    return deserializeAws_restJson1UpdateCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
