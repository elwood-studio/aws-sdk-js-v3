import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DescribeDataSharesForConsumerMessage, DescribeDataSharesForConsumerResult } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeDataSharesForConsumerCommand,
  serializeAws_queryDescribeDataSharesForConsumerCommand,
} from "../protocols/Aws_query.ts";
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

export interface DescribeDataSharesForConsumerCommandInput extends DescribeDataSharesForConsumerMessage {}
export interface DescribeDataSharesForConsumerCommandOutput
  extends DescribeDataSharesForConsumerResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of datashares where the account identifier being called is a consumer account identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeDataSharesForConsumerCommand } from "../../client-redshift/mod.ts";
 * // const { RedshiftClient, DescribeDataSharesForConsumerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeDataSharesForConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSharesForConsumerCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSharesForConsumerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDataSharesForConsumerCommand extends $Command<
  DescribeDataSharesForConsumerCommandInput,
  DescribeDataSharesForConsumerCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDataSharesForConsumerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataSharesForConsumerCommandInput, DescribeDataSharesForConsumerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeDataSharesForConsumerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDataSharesForConsumerMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDataSharesForConsumerResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDataSharesForConsumerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDataSharesForConsumerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataSharesForConsumerCommandOutput> {
    return deserializeAws_queryDescribeDataSharesForConsumerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
