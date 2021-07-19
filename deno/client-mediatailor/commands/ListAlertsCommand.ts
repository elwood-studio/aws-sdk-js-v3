import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient.ts";
import { ListAlertsRequest, ListAlertsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAlertsCommand,
  serializeAws_restJson1ListAlertsCommand,
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

export interface ListAlertsCommandInput extends ListAlertsRequest {}
export interface ListAlertsCommandOutput extends ListAlertsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of alerts for the given resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListAlertsCommand } from "../../client-mediatailor/mod.ts";
 * // const { MediaTailorClient, ListAlertsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ListAlertsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlertsCommandInput} for command's `input` shape.
 * @see {@link ListAlertsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAlertsCommand extends $Command<
  ListAlertsCommandInput,
  ListAlertsCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAlertsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAlertsCommandInput, ListAlertsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ListAlertsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAlertsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAlertsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAlertsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAlertsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAlertsCommandOutput> {
    return deserializeAws_restJson1ListAlertsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
