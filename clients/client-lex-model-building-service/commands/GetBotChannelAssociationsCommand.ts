import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetBotChannelAssociationsRequest, GetBotChannelAssociationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBotChannelAssociationsCommand,
  serializeAws_restJson1GetBotChannelAssociationsCommand,
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

export type GetBotChannelAssociationsCommandInput = GetBotChannelAssociationsRequest;
export type GetBotChannelAssociationsCommandOutput = GetBotChannelAssociationsResponse & __MetadataBearer;

/**
 * <p> Returns a list of all of the channels associated with the
 *       specified bot. </p>
 *          <p>The <code>GetBotChannelAssociations</code> operation requires
 *       permissions for the <code>lex:GetBotChannelAssociations</code>
 *       action.</p>
 */
export class GetBotChannelAssociationsCommand extends $Command<
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBotChannelAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBotChannelAssociationsCommandInput, GetBotChannelAssociationsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotChannelAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBotChannelAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBotChannelAssociationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBotChannelAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBotChannelAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBotChannelAssociationsCommandOutput> {
    return deserializeAws_restJson1GetBotChannelAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
