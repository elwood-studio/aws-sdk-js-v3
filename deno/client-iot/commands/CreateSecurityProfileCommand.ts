import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { CreateSecurityProfileRequest, CreateSecurityProfileResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateSecurityProfileCommand,
  serializeAws_restJson1CreateSecurityProfileCommand,
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

export interface CreateSecurityProfileCommandInput extends CreateSecurityProfileRequest {}
export interface CreateSecurityProfileCommandOutput extends CreateSecurityProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateSecurityProfileCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, CreateSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSecurityProfileCommand extends $Command<
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSecurityProfileCommandInput) {
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
  ): Handler<CreateSecurityProfileCommandInput, CreateSecurityProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateSecurityProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSecurityProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSecurityProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSecurityProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSecurityProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSecurityProfileCommandOutput> {
    return deserializeAws_restJson1CreateSecurityProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
