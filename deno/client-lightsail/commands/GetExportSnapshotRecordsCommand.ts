import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetExportSnapshotRecordsRequest, GetExportSnapshotRecordsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetExportSnapshotRecordsCommand,
  serializeAws_json1_1GetExportSnapshotRecordsCommand,
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

export interface GetExportSnapshotRecordsCommandInput extends GetExportSnapshotRecordsRequest {}
export interface GetExportSnapshotRecordsCommandOutput extends GetExportSnapshotRecordsResult, __MetadataBearer {}

/**
 * <p>Returns all export snapshot records created as a result of the <code>export
 *         snapshot</code> operation.</p>
 *          <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related
 *       resources with the <a>CreateCloudFormationStack</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetExportSnapshotRecordsCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, GetExportSnapshotRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetExportSnapshotRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExportSnapshotRecordsCommandInput} for command's `input` shape.
 * @see {@link GetExportSnapshotRecordsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetExportSnapshotRecordsCommand extends $Command<
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetExportSnapshotRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExportSnapshotRecordsCommandInput, GetExportSnapshotRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetExportSnapshotRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExportSnapshotRecordsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetExportSnapshotRecordsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExportSnapshotRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetExportSnapshotRecordsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExportSnapshotRecordsCommandOutput> {
    return deserializeAws_json1_1GetExportSnapshotRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
