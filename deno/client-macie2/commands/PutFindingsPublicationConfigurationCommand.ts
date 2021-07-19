import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client.ts";
import {
  PutFindingsPublicationConfigurationRequest,
  PutFindingsPublicationConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutFindingsPublicationConfigurationCommand,
  serializeAws_restJson1PutFindingsPublicationConfigurationCommand,
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

export interface PutFindingsPublicationConfigurationCommandInput extends PutFindingsPublicationConfigurationRequest {}
export interface PutFindingsPublicationConfigurationCommandOutput
  extends PutFindingsPublicationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the configuration settings for publishing findings to Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, PutFindingsPublicationConfigurationCommand } from "../../client-macie2/mod.ts";
 * // const { Macie2Client, PutFindingsPublicationConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new PutFindingsPublicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFindingsPublicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutFindingsPublicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutFindingsPublicationConfigurationCommand extends $Command<
  PutFindingsPublicationConfigurationCommandInput,
  PutFindingsPublicationConfigurationCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutFindingsPublicationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutFindingsPublicationConfigurationCommandInput, PutFindingsPublicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "PutFindingsPublicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutFindingsPublicationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutFindingsPublicationConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutFindingsPublicationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutFindingsPublicationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutFindingsPublicationConfigurationCommandOutput> {
    return deserializeAws_restJson1PutFindingsPublicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
