import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { PutWarmPoolAnswer, PutWarmPoolType } from "../models/models_0.ts";
import { deserializeAws_queryPutWarmPoolCommand, serializeAws_queryPutWarmPoolCommand } from "../protocols/Aws_query.ts";
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

export interface PutWarmPoolCommandInput extends PutWarmPoolType {}
export interface PutWarmPoolCommandOutput extends PutWarmPoolAnswer, __MetadataBearer {}

/**
 * <p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of
 *             pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your
 *             application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new
 *             desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>This operation must be called from the Region in which the Auto Scaling group was created.
 *             This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a
 *             launch template or launch configuration that requests Spot Instances.</p>
 *         <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the
 *                 <a>DeleteWarmPool</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutWarmPoolCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, PutWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new PutWarmPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutWarmPoolCommandInput} for command's `input` shape.
 * @see {@link PutWarmPoolCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutWarmPoolCommand extends $Command<
  PutWarmPoolCommandInput,
  PutWarmPoolCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutWarmPoolCommandInput) {
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
  ): Handler<PutWarmPoolCommandInput, PutWarmPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutWarmPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutWarmPoolType.filterSensitiveLog,
      outputFilterSensitiveLog: PutWarmPoolAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutWarmPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutWarmPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutWarmPoolCommandOutput> {
    return deserializeAws_queryPutWarmPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
