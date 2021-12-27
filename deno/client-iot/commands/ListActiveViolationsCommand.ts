import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListActiveViolationsRequest, ListActiveViolationsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListActiveViolationsCommand,
  serializeAws_restJson1ListActiveViolationsCommand,
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

export interface ListActiveViolationsCommandInput extends ListActiveViolationsRequest {}
export interface ListActiveViolationsCommandOutput extends ListActiveViolationsResponse, __MetadataBearer {}

/**
 * <p>Lists the active violations for a given Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListActiveViolationsCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, ListActiveViolationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListActiveViolationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActiveViolationsCommandInput} for command's `input` shape.
 * @see {@link ListActiveViolationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListActiveViolationsCommand extends $Command<
  ListActiveViolationsCommandInput,
  ListActiveViolationsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListActiveViolationsCommandInput) {
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
  ): Handler<ListActiveViolationsCommandInput, ListActiveViolationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListActiveViolationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListActiveViolationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListActiveViolationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListActiveViolationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListActiveViolationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListActiveViolationsCommandOutput> {
    return deserializeAws_restJson1ListActiveViolationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
