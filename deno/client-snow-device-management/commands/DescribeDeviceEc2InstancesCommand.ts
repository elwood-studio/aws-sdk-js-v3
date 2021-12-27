import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient.ts";
import { DescribeDeviceEc2Input, DescribeDeviceEc2Output } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeDeviceEc2InstancesCommand,
  serializeAws_restJson1DescribeDeviceEc2InstancesCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface DescribeDeviceEc2InstancesCommandInput extends DescribeDeviceEc2Input {}
export interface DescribeDeviceEc2InstancesCommandOutput extends DescribeDeviceEc2Output, __MetadataBearer {}

/**
 * <p>Checks the current state of the Amazon EC2 instances. The output is similar to
 *         <code>describeDevice</code>, but the results are sourced from the device cache in the
 *       Amazon Web Services Cloud and include a subset of the available fields. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, DescribeDeviceEc2InstancesCommand } from "../../client-snow-device-management/mod.ts";
 * // const { SnowDeviceManagementClient, DescribeDeviceEc2InstancesCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const command = new DescribeDeviceEc2InstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceEc2InstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceEc2InstancesCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDeviceEc2InstancesCommand extends $Command<
  DescribeDeviceEc2InstancesCommandInput,
  DescribeDeviceEc2InstancesCommandOutput,
  SnowDeviceManagementClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDeviceEc2InstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowDeviceManagementClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDeviceEc2InstancesCommandInput, DescribeDeviceEc2InstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowDeviceManagementClient";
    const commandName = "DescribeDeviceEc2InstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDeviceEc2Input.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDeviceEc2Output.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDeviceEc2InstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDeviceEc2InstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDeviceEc2InstancesCommandOutput> {
    return deserializeAws_restJson1DescribeDeviceEc2InstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
