import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { AssignPrivateIpAddressesRequest, AssignPrivateIpAddressesResult } from "../models/models_0.ts";
import {
  deserializeAws_ec2AssignPrivateIpAddressesCommand,
  serializeAws_ec2AssignPrivateIpAddressesCommand,
} from "../protocols/Aws_ec2.ts";
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

export interface AssignPrivateIpAddressesCommandInput extends AssignPrivateIpAddressesRequest {}
export interface AssignPrivateIpAddressesCommandOutput extends AssignPrivateIpAddressesResult, __MetadataBearer {}

/**
 * <p>Assigns one or more secondary private IP addresses to the specified network interface.</p>
 *         <p>You can specify one or more specific secondary IP addresses, or you can specify the number
 *             of secondary IP addresses to be automatically assigned within the subnet's CIDR block range.
 *             The number of secondary IP addresses that you can assign to an instance varies by instance type.
 *             For information about instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about
 *             Elastic IP addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *         <p>When you move a secondary private IP address to another network interface, any Elastic IP address
 *             that is associated with the IP address is also moved.</p>
 *         <p>Remapping an IP address is an asynchronous operation. When you move an IP address from one network
 *             interface to another, check <code>network/interfaces/macs/mac/local-ipv4s</code> in the instance
 *             metadata to confirm that the remapping is complete.</p>
 *         <p>You must specify either the IP addresses or the IP address count in the request.</p>
 *         <p>You can optionally use Prefix Delegation on the network interface. You must specify
 *             either the IPv4 Prefix Delegation prefixes, or the IPv4 Prefix Delegation count. For
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
 *                 Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssignPrivateIpAddressesCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, AssignPrivateIpAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssignPrivateIpAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignPrivateIpAddressesCommandInput} for command's `input` shape.
 * @see {@link AssignPrivateIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssignPrivateIpAddressesCommand extends $Command<
  AssignPrivateIpAddressesCommandInput,
  AssignPrivateIpAddressesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssignPrivateIpAddressesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssignPrivateIpAddressesCommandInput, AssignPrivateIpAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssignPrivateIpAddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssignPrivateIpAddressesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssignPrivateIpAddressesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssignPrivateIpAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssignPrivateIpAddressesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssignPrivateIpAddressesCommandOutput> {
    return deserializeAws_ec2AssignPrivateIpAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
