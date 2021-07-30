import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { ChangeTagsForResourceRequest, ChangeTagsForResourceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlChangeTagsForResourceCommand,
  serializeAws_restXmlChangeTagsForResourceCommand,
} from "../protocols/Aws_restXml.ts";
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

export interface ChangeTagsForResourceCommandInput extends ChangeTagsForResourceRequest {}
export interface ChangeTagsForResourceCommandOutput extends ChangeTagsForResourceResponse, __MetadataBearer {}

/**
 * <p>Adds, edits, or deletes tags for a health check or a hosted zone.</p>
 * 		       <p>For information about using tags for cost allocation, see
 * 			<a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a>
 * 			in the <i>Billing and Cost Management User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeTagsForResourceCommand } from "../../client-route-53/mod.ts";
 * // const { Route53Client, ChangeTagsForResourceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ChangeTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ChangeTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ChangeTagsForResourceCommand extends $Command<
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ChangeTagsForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ChangeTagsForResourceCommandInput, ChangeTagsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ChangeTagsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ChangeTagsForResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ChangeTagsForResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ChangeTagsForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlChangeTagsForResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangeTagsForResourceCommandOutput> {
    return deserializeAws_restXmlChangeTagsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
