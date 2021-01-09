import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { AcceptResourceShareInvitationRequest, AcceptResourceShareInvitationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AcceptResourceShareInvitationCommand,
  serializeAws_restJson1AcceptResourceShareInvitationCommand,
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

export type AcceptResourceShareInvitationCommandInput = AcceptResourceShareInvitationRequest;
export type AcceptResourceShareInvitationCommandOutput = AcceptResourceShareInvitationResponse & __MetadataBearer;

/**
 * <p>Accepts an invitation to a resource share from another AWS account.</p>
 */
export class AcceptResourceShareInvitationCommand extends $Command<
  AcceptResourceShareInvitationCommandInput,
  AcceptResourceShareInvitationCommandOutput,
  RAMClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptResourceShareInvitationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptResourceShareInvitationCommandInput, AcceptResourceShareInvitationCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "AcceptResourceShareInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptResourceShareInvitationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptResourceShareInvitationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptResourceShareInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptResourceShareInvitationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptResourceShareInvitationCommandOutput> {
    return deserializeAws_restJson1AcceptResourceShareInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
