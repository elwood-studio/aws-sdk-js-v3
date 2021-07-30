import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { PutResourceLogLevelRequest, PutResourceLogLevelResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutResourceLogLevelCommand,
  serializeAws_restJson1PutResourceLogLevelCommand,
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

export interface PutResourceLogLevelCommandInput extends PutResourceLogLevelRequest {}
export interface PutResourceLogLevelCommandOutput extends PutResourceLogLevelResponse, __MetadataBearer {}

/**
 * <p>Sets the log-level override for a resource-ID and resource-type. This option can be specified for a wireless gateway
 *             or a wireless device. A limit of 200 log level override can be set per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, PutResourceLogLevelCommand } from "../../client-iot-wireless/mod.ts";
 * // const { IoTWirelessClient, PutResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new PutResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link PutResourceLogLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutResourceLogLevelCommand extends $Command<
  PutResourceLogLevelCommandInput,
  PutResourceLogLevelCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutResourceLogLevelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutResourceLogLevelCommandInput, PutResourceLogLevelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "PutResourceLogLevelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutResourceLogLevelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutResourceLogLevelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutResourceLogLevelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutResourceLogLevelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutResourceLogLevelCommandOutput> {
    return deserializeAws_restJson1PutResourceLogLevelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
