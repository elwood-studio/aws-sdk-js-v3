import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { DetectStackDriftInput, DetectStackDriftOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDetectStackDriftCommand,
  serializeAws_queryDetectStackDriftCommand,
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

export interface DetectStackDriftCommandInput extends DetectStackDriftInput {}
export interface DetectStackDriftCommandOutput extends DetectStackDriftOutput, __MetadataBearer {}

/**
 * <p>Detects whether a stack's actual configuration differs, or has
 *             <i>drifted</i>, from it's expected configuration, as defined in the stack
 *          template and any values specified as template parameters. For each resource in the stack
 *          that supports drift detection, CloudFormation compares the actual configuration of the resource with
 *          its expected template configuration. Only resource properties explicitly defined in the
 *          stack template are checked for drift. A stack is considered to have drifted if one or more
 *          of its resources differ from their expected template configurations. For more information,
 *          see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a
 *          given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual
 *          resources.</p>
 *          <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 *          <p>
 *             <code>DetectStackDrift</code> can take up to several minutes, depending on the number
 *          of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack
 *          drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and
 *          its resources.</p>
 *          <p>When detecting drift on a stack, CloudFormation does not detect drift on any nested stacks
 *          belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack
 *          itself.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackDriftCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, DetectStackDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DetectStackDriftCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectStackDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DetectStackDriftCommand extends $Command<
  DetectStackDriftCommandInput,
  DetectStackDriftCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectStackDriftCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectStackDriftCommandInput, DetectStackDriftCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DetectStackDriftCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectStackDriftInput.filterSensitiveLog,
      outputFilterSensitiveLog: DetectStackDriftOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectStackDriftCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetectStackDriftCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectStackDriftCommandOutput> {
    return deserializeAws_queryDetectStackDriftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
