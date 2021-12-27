import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient.ts";
import { GetCallAnalyticsJobRequest, GetCallAnalyticsJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetCallAnalyticsJobCommand,
  serializeAws_json1_1GetCallAnalyticsJobCommand,
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

export interface GetCallAnalyticsJobCommandInput extends GetCallAnalyticsJobRequest {}
export interface GetCallAnalyticsJobCommandOutput extends GetCallAnalyticsJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a call analytics job. To see the status of the job, check the
 *             <code>CallAnalyticsJobStatus</code> field. If the status is <code>COMPLETED</code>, the job
 *             is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code>
 *             field. If you enable personally identifiable information (PII) redaction, the redacted transcript appears
 *             in the <code>RedactedTranscriptFileUri</code> field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetCallAnalyticsJobCommand } from "../../client-transcribe/mod.ts";
 * // const { TranscribeClient, GetCallAnalyticsJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetCallAnalyticsJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCallAnalyticsJobCommandInput} for command's `input` shape.
 * @see {@link GetCallAnalyticsJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCallAnalyticsJobCommand extends $Command<
  GetCallAnalyticsJobCommandInput,
  GetCallAnalyticsJobCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCallAnalyticsJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCallAnalyticsJobCommandInput, GetCallAnalyticsJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "GetCallAnalyticsJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCallAnalyticsJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCallAnalyticsJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCallAnalyticsJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCallAnalyticsJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCallAnalyticsJobCommandOutput> {
    return deserializeAws_json1_1GetCallAnalyticsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
