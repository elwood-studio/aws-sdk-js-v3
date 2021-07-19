import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { UpdateResourceDataSyncRequest, UpdateResourceDataSyncResult } from "../models/models_2.ts";
import {
  deserializeAws_json1_1UpdateResourceDataSyncCommand,
  serializeAws_json1_1UpdateResourceDataSyncCommand,
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

export interface UpdateResourceDataSyncCommandInput extends UpdateResourceDataSyncRequest {}
export interface UpdateResourceDataSyncCommandOutput extends UpdateResourceDataSyncResult, __MetadataBearer {}

/**
 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
 *    change the account options for that sync. For example, if you create a sync in the us-east-2
 *    (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't
 *    edit that sync later and choose the <code>Include all accounts from my Organizations
 *     configuration</code> option. Instead, you must delete the first resource data sync, and create a
 *    new one.</p>
 *          <note>
 *             <p>This API operation only supports a resource data sync that was created with a
 *     SyncFromSource <code>SyncType</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateResourceDataSyncCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, UpdateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateResourceDataSyncCommand extends $Command<
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateResourceDataSyncCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceDataSyncRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceDataSyncResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateResourceDataSyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceDataSyncCommandOutput> {
    return deserializeAws_json1_1UpdateResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
