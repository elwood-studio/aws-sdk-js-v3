import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient.ts";
import { UpdateServiceInstanceInput, UpdateServiceInstanceOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0UpdateServiceInstanceCommand,
  serializeAws_json1_0UpdateServiceInstanceCommand,
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

export interface UpdateServiceInstanceCommandInput extends UpdateServiceInstanceInput {}
export interface UpdateServiceInstanceCommandOutput extends UpdateServiceInstanceOutput, __MetadataBearer {}

/**
 * <p>Update a service instance.</p>
 *         <p>There are four modes for updating a service instance as described in the following. The <code>deploymentType</code> field defines the
 *             mode.</p>
 *         <dl>
 *             <dt/>
 *             <dd>
 *                     <p>
 *                   <code>NONE</code>
 *                </p>
 *                     <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p>
 *                 </dd>
 *             <dt/>
 *             <dd>
 *                     <p>
 *                   <code>CURRENT_VERSION</code>
 *                </p>
 *                     <p>In this mode, the service instance is deployed and updated with the new spec that you provide. Only requested parameters are
 *                         updated. <i>Don’t</i> include minor or major version parameters when you use this
 *                         <code>deployment-type</code>.</p>
 *                 </dd>
 *             <dt/>
 *             <dd>
 *                     <p>
 *                   <code>MINOR_VERSION</code>
 *                </p>
 *                     <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) minor version of the
 *                         current major version in use, by default. You can also specify a different minor version of the current major version in
 *                         use.</p>
 *                 </dd>
 *             <dt/>
 *             <dd>
 *                     <p>
 *                   <code>MAJOR_VERSION</code>
 *                </p>
 *                     <p>In this mode, the service instance is deployed and updated with the published, recommended (latest) major and minor version
 *                         of the current template, by default. You can also specify a different major version that is higher than the major version in
 *                         use and a minor version (optional).</p>
 *                 </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceInstanceCommand } from "../../client-proton/mod.ts";
 * // const { ProtonClient, UpdateServiceInstanceCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new UpdateServiceInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceInstanceCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateServiceInstanceCommand extends $Command<
  UpdateServiceInstanceCommandInput,
  UpdateServiceInstanceCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServiceInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceInstanceCommandInput, UpdateServiceInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "UpdateServiceInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceInstanceInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceInstanceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServiceInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateServiceInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceInstanceCommandOutput> {
    return deserializeAws_json1_0UpdateServiceInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
