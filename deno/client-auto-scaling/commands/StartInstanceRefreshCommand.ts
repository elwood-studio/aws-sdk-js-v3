import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { StartInstanceRefreshAnswer, StartInstanceRefreshType } from "../models/models_0.ts";
import {
  deserializeAws_queryStartInstanceRefreshCommand,
  serializeAws_queryStartInstanceRefreshCommand,
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

export interface StartInstanceRefreshCommandInput extends StartInstanceRefreshType {}
export interface StartInstanceRefreshCommandOutput extends StartInstanceRefreshAnswer, __MetadataBearer {}

/**
 * <p>Starts a new instance refresh operation, which triggers a rolling replacement of
 *             previously launched instances in the Auto Scaling group with a new group of instances.</p>
 *         <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling
 *             group after you make configuration changes.</p>
 *         <p>If the call succeeds, it creates a new instance refresh request with a unique ID that
 *             you can use to track its progress. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that
 *             have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an
 *             instance refresh operation in progress, use the <a>CancelInstanceRefresh</a>
 *             API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, StartInstanceRefreshCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, StartInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new StartInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link StartInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartInstanceRefreshCommand extends $Command<
  StartInstanceRefreshCommandInput,
  StartInstanceRefreshCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartInstanceRefreshCommandInput) {
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
  ): Handler<StartInstanceRefreshCommandInput, StartInstanceRefreshCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "StartInstanceRefreshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartInstanceRefreshType.filterSensitiveLog,
      outputFilterSensitiveLog: StartInstanceRefreshAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartInstanceRefreshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartInstanceRefreshCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartInstanceRefreshCommandOutput> {
    return deserializeAws_queryStartInstanceRefreshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
