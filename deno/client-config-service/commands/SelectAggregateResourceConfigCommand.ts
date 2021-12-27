import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { SelectAggregateResourceConfigRequest, SelectAggregateResourceConfigResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1SelectAggregateResourceConfigCommand,
  serializeAws_json1_1SelectAggregateResourceConfigCommand,
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

export interface SelectAggregateResourceConfigCommandInput extends SelectAggregateResourceConfigRequest {}
export interface SelectAggregateResourceConfigCommandOutput
  extends SelectAggregateResourceConfigResponse,
    __MetadataBearer {}

/**
 * <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions,
 * 			performs the corresponding search, and returns resource configurations matching the properties.</p>
 * 		       <p>For more information about query components, see the
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
 *                <b>Query Components</b>
 *             </a> section in the Config Developer Guide.</p>
 *
 * 		       <note>
 * 			         <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>)
 * 				and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p>
 *
 * 			         <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>)
 * 				and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, SelectAggregateResourceConfigCommand } from "../../client-config-service/mod.ts";
 * // const { ConfigServiceClient, SelectAggregateResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new SelectAggregateResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SelectAggregateResourceConfigCommandInput} for command's `input` shape.
 * @see {@link SelectAggregateResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SelectAggregateResourceConfigCommand extends $Command<
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SelectAggregateResourceConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SelectAggregateResourceConfigCommandInput, SelectAggregateResourceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "SelectAggregateResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SelectAggregateResourceConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SelectAggregateResourceConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SelectAggregateResourceConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SelectAggregateResourceConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SelectAggregateResourceConfigCommandOutput> {
    return deserializeAws_json1_1SelectAggregateResourceConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
