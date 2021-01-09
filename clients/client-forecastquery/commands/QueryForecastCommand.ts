import { ForecastqueryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastqueryClient";
import { QueryForecastRequest, QueryForecastResponse } from "../models/models_0";
import {
  deserializeAws_json1_1QueryForecastCommand,
  serializeAws_json1_1QueryForecastCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type QueryForecastCommandInput = QueryForecastRequest;
export type QueryForecastCommandOutput = QueryForecastResponse & __MetadataBearer;

/**
 * <p>Retrieves a forecast for a single item, filtered by the supplied criteria.</p>
 *          <p>The criteria is a key-value pair. The key is either <code>item_id</code> (or the
 *       equivalent non-timestamp, non-target field) from the <code>TARGET_TIME_SERIES</code> dataset,
 *       or one of the forecast dimensions specified as part of the <code>FeaturizationConfig</code>
 *       object.</p>
 *          <p>By default, <code>QueryForecast</code> returns the complete date range for the filtered
 *       forecast. You can request a specific date range.</p>
 *          <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p>
 *          <note>
 *             <p>The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was
 *         used to create the predictor.</p>
 *          </note>
 */
export class QueryForecastCommand extends $Command<
  QueryForecastCommandInput,
  QueryForecastCommandOutput,
  ForecastqueryClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: QueryForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastqueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryForecastCommandInput, QueryForecastCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastqueryClient";
    const commandName = "QueryForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryForecastRequest.filterSensitiveLog,
      outputFilterSensitiveLog: QueryForecastResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1QueryForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryForecastCommandOutput> {
    return deserializeAws_json1_1QueryForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
