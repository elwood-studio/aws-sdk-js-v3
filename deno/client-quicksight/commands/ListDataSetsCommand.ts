import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { ListDataSetsRequest, ListDataSetsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListDataSetsCommand,
  serializeAws_restJson1ListDataSetsCommand,
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

export interface ListDataSetsCommandInput extends ListDataSetsRequest {}
export interface ListDataSetsCommandOutput extends ListDataSetsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the datasets belonging to the current Amazon Web Services account; in an Amazon Web Services Region;.</p>
 * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/*</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDataSetsCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, ListDataSetsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListDataSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSetsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDataSetsCommand extends $Command<
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDataSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataSetsCommandInput, ListDataSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListDataSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDataSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDataSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataSetsCommandOutput> {
    return deserializeAws_restJson1ListDataSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
