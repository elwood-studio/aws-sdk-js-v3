import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient.ts";
import { ListPagesByEngagementRequest, ListPagesByEngagementResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListPagesByEngagementCommand,
  serializeAws_json1_1ListPagesByEngagementCommand,
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

export interface ListPagesByEngagementCommandInput extends ListPagesByEngagementRequest {}
export interface ListPagesByEngagementCommandOutput extends ListPagesByEngagementResult, __MetadataBearer {}

/**
 * <p>Lists the engagements to contact channels that occurred by engaging a contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPagesByEngagementCommand } from "../../client-ssm-contacts/mod.ts";
 * // const { SSMContactsClient, ListPagesByEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListPagesByEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPagesByEngagementCommandInput} for command's `input` shape.
 * @see {@link ListPagesByEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPagesByEngagementCommand extends $Command<
  ListPagesByEngagementCommandInput,
  ListPagesByEngagementCommandOutput,
  SSMContactsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPagesByEngagementCommandInput) {
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
  ): Handler<ListPagesByEngagementCommandInput, ListPagesByEngagementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListPagesByEngagementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPagesByEngagementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPagesByEngagementResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPagesByEngagementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPagesByEngagementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPagesByEngagementCommandOutput> {
    return deserializeAws_json1_1ListPagesByEngagementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
