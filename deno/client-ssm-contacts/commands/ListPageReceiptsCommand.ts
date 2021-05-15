import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient.ts";
import { ListPageReceiptsRequest, ListPageReceiptsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListPageReceiptsCommand,
  serializeAws_json1_1ListPageReceiptsCommand,
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

export interface ListPageReceiptsCommandInput extends ListPageReceiptsRequest {}
export interface ListPageReceiptsCommandOutput extends ListPageReceiptsResult, __MetadataBearer {}

/**
 * <p>Lists all of the engagements to contact channels that have been acknowledged. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPageReceiptsCommand } from "../../client-ssm-contacts/mod.ts";
 * // const { SSMContactsClient, ListPageReceiptsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListPageReceiptsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPageReceiptsCommandInput} for command's `input` shape.
 * @see {@link ListPageReceiptsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPageReceiptsCommand extends $Command<
  ListPageReceiptsCommandInput,
  ListPageReceiptsCommandOutput,
  SSMContactsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPageReceiptsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPageReceiptsCommandInput, ListPageReceiptsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListPageReceiptsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPageReceiptsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPageReceiptsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPageReceiptsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPageReceiptsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPageReceiptsCommandOutput> {
    return deserializeAws_json1_1ListPageReceiptsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
