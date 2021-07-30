import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { DescribeStackResourceDriftsInput, DescribeStackResourceDriftsOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeStackResourceDriftsCommand,
  serializeAws_queryDescribeStackResourceDriftsCommand,
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

export interface DescribeStackResourceDriftsCommandInput extends DescribeStackResourceDriftsInput {}
export interface DescribeStackResourceDriftsCommandOutput extends DescribeStackResourceDriftsOutput, __MetadataBearer {}

/**
 * <p>Returns drift information for the resources that have been checked for drift in the
 *          specified stack. This includes actual and expected configuration values for resources where
 *          CloudFormation detects configuration drift.</p>
 *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
 *          resource that has been checked for drift. Resources that have not yet been checked for
 *          drift are not included. Resources that do not currently support drift detection are not
 *          checked, and so not included. For a list of resources that support drift detection, see
 *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual
 *          resources, or <a>DetectStackDrift</a> to detect drift on all supported resources
 *          for a given stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceDriftsCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, DescribeStackResourceDriftsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackResourceDriftsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackResourceDriftsCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceDriftsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeStackResourceDriftsCommand extends $Command<
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStackResourceDriftsCommandInput) {
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
  ): Handler<DescribeStackResourceDriftsCommandInput, DescribeStackResourceDriftsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackResourceDriftsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStackResourceDriftsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackResourceDriftsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStackResourceDriftsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeStackResourceDriftsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackResourceDriftsCommandOutput> {
    return deserializeAws_queryDescribeStackResourceDriftsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
