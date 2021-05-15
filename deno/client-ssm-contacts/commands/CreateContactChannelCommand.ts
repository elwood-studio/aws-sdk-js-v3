import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient.ts";
import { CreateContactChannelRequest, CreateContactChannelResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateContactChannelCommand,
  serializeAws_json1_1CreateContactChannelCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface CreateContactChannelCommandInput extends CreateContactChannelRequest {}
export interface CreateContactChannelCommandOutput extends CreateContactChannelResult, __MetadataBearer {}

/**
 * <p>A contact channel is the method that Incident Manager uses to engage your contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactChannelCommand } from "../../client-ssm-contacts/mod.ts";
 * // const { SSMContactsClient, CreateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new CreateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactChannelCommandInput} for command's `input` shape.
 * @see {@link CreateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateContactChannelCommand extends $Command<
  CreateContactChannelCommandInput,
  CreateContactChannelCommandOutput,
  SSMContactsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateContactChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateContactChannelCommandInput, CreateContactChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "CreateContactChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContactChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateContactChannelResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateContactChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContactChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContactChannelCommandOutput> {
    return deserializeAws_json1_1CreateContactChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
