import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import { ListChangedBlocksRequest, ListChangedBlocksResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListChangedBlocksCommand,
  serializeAws_restJson1ListChangedBlocksCommand,
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

export type ListChangedBlocksCommandInput = ListChangedBlocksRequest;
export type ListChangedBlocksCommandOutput = ListChangedBlocksResponse & __MetadataBearer;

/**
 * <p>Returns information about the blocks that are different between two
 *             Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p>
 */
export class ListChangedBlocksCommand extends $Command<
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput,
  EBSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChangedBlocksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "ListChangedBlocksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChangedBlocksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChangedBlocksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListChangedBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChangedBlocksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangedBlocksCommandOutput> {
    return deserializeAws_restJson1ListChangedBlocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
