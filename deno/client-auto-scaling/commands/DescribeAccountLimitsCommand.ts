import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { DescribeAccountLimitsAnswer } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeAccountLimitsCommand,
  serializeAws_queryDescribeAccountLimitsCommand,
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

export interface DescribeAccountLimitsCommandInput {}
export interface DescribeAccountLimitsCommandOutput extends DescribeAccountLimitsAnswer, __MetadataBearer {}

/**
 * <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p>
 *         <p>When you establish an account, the account has initial quotas on the maximum
 *             number of Auto Scaling groups and launch configurations that you can create in a given Region.
 *             For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling service
 *                 quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAccountLimitsCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, DescribeAccountLimitsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAccountLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountLimitsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAccountLimitsCommand extends $Command<
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAccountLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeAccountLimitsAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAccountLimitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccountLimitsCommandOutput> {
    return deserializeAws_queryDescribeAccountLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
