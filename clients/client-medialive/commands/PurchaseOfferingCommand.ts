import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { PurchaseOfferingRequest, PurchaseOfferingResponse } from "../models/models_1";
import {
  deserializeAws_restJson1PurchaseOfferingCommand,
  serializeAws_restJson1PurchaseOfferingCommand,
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

export type PurchaseOfferingCommandInput = PurchaseOfferingRequest;
export type PurchaseOfferingCommandOutput = PurchaseOfferingResponse & __MetadataBearer;

/**
 * Purchase an offering and create a reservation.
 */
export class PurchaseOfferingCommand extends $Command<
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput,
  MediaLiveClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "PurchaseOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseOfferingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseOfferingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PurchaseOfferingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PurchaseOfferingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PurchaseOfferingCommandOutput> {
    return deserializeAws_restJson1PurchaseOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
