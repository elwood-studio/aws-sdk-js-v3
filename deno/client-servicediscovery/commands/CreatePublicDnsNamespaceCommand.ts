import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient.ts";
import { CreatePublicDnsNamespaceRequest, CreatePublicDnsNamespaceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreatePublicDnsNamespaceCommand,
  serializeAws_json1_1CreatePublicDnsNamespaceCommand,
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

export interface CreatePublicDnsNamespaceCommandInput extends CreatePublicDnsNamespaceRequest {}
export interface CreatePublicDnsNamespaceCommandOutput extends CreatePublicDnsNamespaceResponse, __MetadataBearer {}

/**
 * <p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service
 *    naming scheme. For example, if you name your namespace <code>example.com</code> and name your service
 *     <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover
 *    instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request
 *    or using DNS. For the current quota on the number of namespaces that you can create using the same AWS account, see
 *     <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Quotas</a>in the
 *     <i>AWS Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } from "../../client-servicediscovery/mod.ts";
 * // const { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new CreatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePublicDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreatePublicDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreatePublicDnsNamespaceCommand extends $Command<
  CreatePublicDnsNamespaceCommandInput,
  CreatePublicDnsNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePublicDnsNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePublicDnsNamespaceCommandInput, CreatePublicDnsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "CreatePublicDnsNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePublicDnsNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePublicDnsNamespaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePublicDnsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePublicDnsNamespaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePublicDnsNamespaceCommandOutput> {
    return deserializeAws_json1_1CreatePublicDnsNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
