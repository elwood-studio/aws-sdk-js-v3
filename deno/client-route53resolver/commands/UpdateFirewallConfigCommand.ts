import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { UpdateFirewallConfigRequest, UpdateFirewallConfigResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateFirewallConfigCommand,
  serializeAws_json1_1UpdateFirewallConfigCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface UpdateFirewallConfigCommandInput extends UpdateFirewallConfigRequest {}
export interface UpdateFirewallConfigCommandOutput extends UpdateFirewallConfigResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of the firewall behavior provided by DNS Firewall for a single
 * 			VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallConfigCommand } from "../../client-route53resolver/mod.ts";
 * // const { Route53ResolverClient, UpdateFirewallConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateFirewallConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFirewallConfigCommand extends $Command<
  UpdateFirewallConfigCommandInput,
  UpdateFirewallConfigCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFirewallConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFirewallConfigCommandInput, UpdateFirewallConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "UpdateFirewallConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFirewallConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFirewallConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFirewallConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFirewallConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFirewallConfigCommandOutput> {
    return deserializeAws_json1_1UpdateFirewallConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
