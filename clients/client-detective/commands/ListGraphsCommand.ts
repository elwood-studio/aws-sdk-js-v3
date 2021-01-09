import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { ListGraphsRequest, ListGraphsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListGraphsCommand,
  serializeAws_restJson1ListGraphsCommand,
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

export type ListGraphsCommandInput = ListGraphsRequest;
export type ListGraphsCommandOutput = ListGraphsResponse & __MetadataBearer;

/**
 * <p>Returns the list of behavior graphs that the calling account is a master of. This
 *          operation can only be called by a master account.</p>
 *          <p>Because an account can currently only be the master of one behavior graph within a
 *          Region, the results always contain a single graph.</p>
 */
export class ListGraphsCommand extends $Command<
  ListGraphsCommandInput,
  ListGraphsCommandOutput,
  DetectiveClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGraphsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGraphsCommandInput, ListGraphsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "ListGraphsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGraphsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGraphsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGraphsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGraphsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGraphsCommandOutput> {
    return deserializeAws_restJson1ListGraphsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
