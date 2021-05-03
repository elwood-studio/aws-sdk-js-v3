import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient.ts";
import { GetStreamingSessionStreamRequest, GetStreamingSessionStreamResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetStreamingSessionStreamCommand,
  serializeAws_restJson1GetStreamingSessionStreamCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface GetStreamingSessionStreamCommandInput extends GetStreamingSessionStreamRequest {}
export interface GetStreamingSessionStreamCommandOutput extends GetStreamingSessionStreamResponse, __MetadataBearer {}

/**
 * <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking CreateStreamingSessionStream.</p> <p>After the StreamingSessionStream changes to the state READY, the url property will contain a stream to be used with the DCV streaming client.</p>
 */
export class GetStreamingSessionStreamCommand extends $Command<
  GetStreamingSessionStreamCommandInput,
  GetStreamingSessionStreamCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStreamingSessionStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStreamingSessionStreamCommandInput, GetStreamingSessionStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetStreamingSessionStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStreamingSessionStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStreamingSessionStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStreamingSessionStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetStreamingSessionStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetStreamingSessionStreamCommandOutput> {
    return deserializeAws_restJson1GetStreamingSessionStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
