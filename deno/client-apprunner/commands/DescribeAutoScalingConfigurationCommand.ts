import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient.ts";
import { DescribeAutoScalingConfigurationRequest, DescribeAutoScalingConfigurationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DescribeAutoScalingConfigurationCommand,
  serializeAws_json1_0DescribeAutoScalingConfigurationCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface DescribeAutoScalingConfigurationCommandInput extends DescribeAutoScalingConfigurationRequest {}
export interface DescribeAutoScalingConfigurationCommandOutput
  extends DescribeAutoScalingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Return a full description of an AWS App Runner automatic scaling configuration resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeAutoScalingConfigurationCommand } from "../../client-apprunner/mod.ts";
 * // const { AppRunnerClient, DescribeAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DescribeAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAutoScalingConfigurationCommand extends $Command<
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
  AppRunnerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAutoScalingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAutoScalingConfigurationCommandInput, DescribeAutoScalingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DescribeAutoScalingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAutoScalingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAutoScalingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAutoScalingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeAutoScalingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutoScalingConfigurationCommandOutput> {
    return deserializeAws_json1_0DescribeAutoScalingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
