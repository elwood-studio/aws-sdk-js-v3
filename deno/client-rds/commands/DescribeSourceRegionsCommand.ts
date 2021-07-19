import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { DescribeSourceRegionsMessage, SourceRegionMessage } from "../models/models_1.ts";
import {
  deserializeAws_queryDescribeSourceRegionsCommand,
  serializeAws_queryDescribeSourceRegionsCommand,
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

export interface DescribeSourceRegionsCommandInput extends DescribeSourceRegionsMessage {}
export interface DescribeSourceRegionsCommandOutput extends SourceRegionMessage, __MetadataBearer {}

/**
 * <p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica,
 *          copy a DB snapshot from, or replicate automated backups from. This API action supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeSourceRegionsCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, DescribeSourceRegionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeSourceRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSourceRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceRegionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeSourceRegionsCommand extends $Command<
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSourceRegionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSourceRegionsCommandInput, DescribeSourceRegionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeSourceRegionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSourceRegionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: SourceRegionMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSourceRegionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeSourceRegionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSourceRegionsCommandOutput> {
    return deserializeAws_queryDescribeSourceRegionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
