import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabasesRequest, GetRelationalDatabasesResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabasesCommand,
  serializeAws_json1_1GetRelationalDatabasesCommand,
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

export type GetRelationalDatabasesCommandInput = GetRelationalDatabasesRequest;
export type GetRelationalDatabasesCommandOutput = GetRelationalDatabasesResult & __MetadataBearer;

/**
 * <p>Returns information about all of your databases in Amazon Lightsail.</p>
 */
export class GetRelationalDatabasesCommand extends $Command<
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput,
  LightsailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRelationalDatabasesCommandInput) {
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
  ): Handler<GetRelationalDatabasesCommandInput, GetRelationalDatabasesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabasesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRelationalDatabasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRelationalDatabasesCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
