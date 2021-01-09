import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { PutRegistryCatalogDataRequest, PutRegistryCatalogDataResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutRegistryCatalogDataCommand,
  serializeAws_json1_1PutRegistryCatalogDataCommand,
} from "../protocols/Aws_json1_1";
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

export type PutRegistryCatalogDataCommandInput = PutRegistryCatalogDataRequest;
export type PutRegistryCatalogDataCommandOutput = PutRegistryCatalogDataResponse & __MetadataBearer;

/**
 * <p>Create or updates the catalog data for a public registry.</p>
 */
export class PutRegistryCatalogDataCommand extends $Command<
  PutRegistryCatalogDataCommandInput,
  PutRegistryCatalogDataCommandOutput,
  ECRPUBLICClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRegistryCatalogDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRegistryCatalogDataCommandInput, PutRegistryCatalogDataCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "PutRegistryCatalogDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRegistryCatalogDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutRegistryCatalogDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRegistryCatalogDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRegistryCatalogDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRegistryCatalogDataCommandOutput> {
    return deserializeAws_json1_1PutRegistryCatalogDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
