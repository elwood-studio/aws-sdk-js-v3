import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { PutResolverQueryLogConfigPolicyRequest, PutResolverQueryLogConfigPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand,
  serializeAws_json1_1PutResolverQueryLogConfigPolicyCommand,
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

export interface PutResolverQueryLogConfigPolicyCommandInput extends PutResolverQueryLogConfigPolicyRequest {}
export interface PutResolverQueryLogConfigPolicyCommandOutput
  extends PutResolverQueryLogConfigPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share,
 * 			and the operations that you want the account to be able to perform on the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } from "../../client-route53resolver/mod.ts";
 * // const { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new PutResolverQueryLogConfigPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResolverQueryLogConfigPolicyCommandInput} for command's `input` shape.
 * @see {@link PutResolverQueryLogConfigPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutResolverQueryLogConfigPolicyCommand extends $Command<
  PutResolverQueryLogConfigPolicyCommandInput,
  PutResolverQueryLogConfigPolicyCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutResolverQueryLogConfigPolicyCommandInput) {
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
  ): Handler<PutResolverQueryLogConfigPolicyCommandInput, PutResolverQueryLogConfigPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "PutResolverQueryLogConfigPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutResolverQueryLogConfigPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutResolverQueryLogConfigPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutResolverQueryLogConfigPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutResolverQueryLogConfigPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutResolverQueryLogConfigPolicyCommandOutput> {
    return deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
