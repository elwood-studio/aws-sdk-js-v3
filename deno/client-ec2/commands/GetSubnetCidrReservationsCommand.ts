import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { GetSubnetCidrReservationsRequest, GetSubnetCidrReservationsResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2GetSubnetCidrReservationsCommand,
  serializeAws_ec2GetSubnetCidrReservationsCommand,
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

export interface GetSubnetCidrReservationsCommandInput extends GetSubnetCidrReservationsRequest {}
export interface GetSubnetCidrReservationsCommandOutput extends GetSubnetCidrReservationsResult, __MetadataBearer {}

/**
 * <p>Gets information about the subnet CIDR reservations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSubnetCidrReservationsCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, GetSubnetCidrReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetSubnetCidrReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubnetCidrReservationsCommandInput} for command's `input` shape.
 * @see {@link GetSubnetCidrReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSubnetCidrReservationsCommand extends $Command<
  GetSubnetCidrReservationsCommandInput,
  GetSubnetCidrReservationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSubnetCidrReservationsCommandInput) {
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
  ): Handler<GetSubnetCidrReservationsCommandInput, GetSubnetCidrReservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetSubnetCidrReservationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSubnetCidrReservationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSubnetCidrReservationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSubnetCidrReservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetSubnetCidrReservationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSubnetCidrReservationsCommandOutput> {
    return deserializeAws_ec2GetSubnetCidrReservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
