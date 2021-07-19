import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { CreateDomainConfigurationRequest, CreateDomainConfigurationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateDomainConfigurationCommand,
  serializeAws_restJson1CreateDomainConfigurationCommand,
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

export interface CreateDomainConfigurationCommandInput extends CreateDomainConfigurationRequest {}
export interface CreateDomainConfigurationCommandOutput extends CreateDomainConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a domain configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDomainConfigurationCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, CreateDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateDomainConfigurationCommand extends $Command<
  CreateDomainConfigurationCommandInput,
  CreateDomainConfigurationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDomainConfigurationCommandInput) {
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
  ): Handler<CreateDomainConfigurationCommandInput, CreateDomainConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateDomainConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDomainConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDomainConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDomainConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDomainConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDomainConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateDomainConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
