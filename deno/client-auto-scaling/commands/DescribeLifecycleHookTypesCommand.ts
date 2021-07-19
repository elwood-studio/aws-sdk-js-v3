import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { DescribeLifecycleHookTypesAnswer } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeLifecycleHookTypesCommand,
  serializeAws_queryDescribeLifecycleHookTypesCommand,
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

export interface DescribeLifecycleHookTypesCommandInput {}
export interface DescribeLifecycleHookTypesCommandOutput extends DescribeLifecycleHookTypesAnswer, __MetadataBearer {}

/**
 * <p>Describes the available types of lifecycle hooks.</p>
 *         <p>The following hook types are supported:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>autoscaling:EC2_INSTANCE_TERMINATING</code>
 *                 </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHookTypesCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, DescribeLifecycleHookTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLifecycleHookTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLifecycleHookTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHookTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeLifecycleHookTypesCommand extends $Command<
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLifecycleHookTypesCommandInput) {
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
  ): Handler<DescribeLifecycleHookTypesCommandInput, DescribeLifecycleHookTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLifecycleHookTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeLifecycleHookTypesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLifecycleHookTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLifecycleHookTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLifecycleHookTypesCommandOutput> {
    return deserializeAws_queryDescribeLifecycleHookTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
