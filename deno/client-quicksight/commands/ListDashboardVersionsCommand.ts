import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { ListDashboardVersionsRequest, ListDashboardVersionsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListDashboardVersionsCommand,
  serializeAws_restJson1ListDashboardVersionsCommand,
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

export interface ListDashboardVersionsCommandInput extends ListDashboardVersionsRequest {}
export interface ListDashboardVersionsCommandOutput extends ListDashboardVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the versions of the dashboards in the Amazon QuickSight subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDashboardVersionsCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, ListDashboardVersionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListDashboardVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDashboardVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardVersionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDashboardVersionsCommand extends $Command<
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDashboardVersionsCommandInput) {
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
  ): Handler<ListDashboardVersionsCommandInput, ListDashboardVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListDashboardVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDashboardVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDashboardVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDashboardVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDashboardVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDashboardVersionsCommandOutput> {
    return deserializeAws_restJson1ListDashboardVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
