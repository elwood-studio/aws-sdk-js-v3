import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeFolderContentsRequest, DescribeFolderContentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeFolderContentsCommand,
  serializeAws_restJson1DescribeFolderContentsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeFolderContentsCommandInput = DescribeFolderContentsRequest;
export type DescribeFolderContentsCommandOutput = DescribeFolderContentsResponse & __MetadataBearer;

/**
 * <p>Describes the contents of the specified folder, including its documents and
 *             subfolders.</p>
 *         <p>By default, Amazon WorkDocs returns the first 100 active document and folder
 *             metadata items. If there are more results, the response includes a marker that you can
 *             use to request the next set of results. You can also request initialized
 *             documents.</p>
 */
export class DescribeFolderContentsCommand extends $Command<
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFolderContentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFolderContentsCommandInput, DescribeFolderContentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "DescribeFolderContentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFolderContentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFolderContentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFolderContentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFolderContentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFolderContentsCommandOutput> {
    return deserializeAws_restJson1DescribeFolderContentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
