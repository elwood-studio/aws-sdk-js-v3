import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient.ts";
import { PutPartnerEventsRequest, PutPartnerEventsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutPartnerEventsCommand,
  serializeAws_json1_1PutPartnerEventsCommand,
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

export interface PutPartnerEventsCommandInput extends PutPartnerEventsRequest {}
export interface PutPartnerEventsCommandOutput extends PutPartnerEventsResponse, __MetadataBearer {}

/**
 * <p>This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services
 *       customers do not use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutPartnerEventsCommand } from "../../client-eventbridge/mod.ts";
 * // const { EventBridgeClient, PutPartnerEventsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new PutPartnerEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPartnerEventsCommandInput} for command's `input` shape.
 * @see {@link PutPartnerEventsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutPartnerEventsCommand extends $Command<
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPartnerEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "PutPartnerEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPartnerEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutPartnerEventsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPartnerEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPartnerEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPartnerEventsCommandOutput> {
    return deserializeAws_json1_1PutPartnerEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
