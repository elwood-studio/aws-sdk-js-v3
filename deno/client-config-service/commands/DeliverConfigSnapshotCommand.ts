import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { DeliverConfigSnapshotRequest, DeliverConfigSnapshotResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeliverConfigSnapshotCommand,
  serializeAws_json1_1DeliverConfigSnapshotCommand,
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

export interface DeliverConfigSnapshotCommandInput extends DeliverConfigSnapshotRequest {}
export interface DeliverConfigSnapshotCommandOutput extends DeliverConfigSnapshotResponse, __MetadataBearer {}

/**
 * <p>Schedules delivery of a configuration snapshot to the Amazon S3
 * 			bucket in the specified delivery channel. After the delivery has
 * 			started, Config sends the following notifications using an
 * 			Amazon SNS topic that you have specified.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Notification of the start of the delivery.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Notification of the completion of the delivery, if the
 * 					delivery was successfully completed.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Notification of delivery failure, if the delivery
 * 					failed.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeliverConfigSnapshotCommand } from "../../client-config-service/mod.ts";
 * // const { ConfigServiceClient, DeliverConfigSnapshotCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeliverConfigSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeliverConfigSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeliverConfigSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeliverConfigSnapshotCommand extends $Command<
  DeliverConfigSnapshotCommandInput,
  DeliverConfigSnapshotCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeliverConfigSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeliverConfigSnapshotCommandInput, DeliverConfigSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeliverConfigSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeliverConfigSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeliverConfigSnapshotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeliverConfigSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeliverConfigSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeliverConfigSnapshotCommandOutput> {
    return deserializeAws_json1_1DeliverConfigSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
