import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient.ts";
import { DeleteConditionalForwarderRequest, DeleteConditionalForwarderResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteConditionalForwarderCommand,
  serializeAws_json1_1DeleteConditionalForwarderCommand,
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

export interface DeleteConditionalForwarderCommandInput extends DeleteConditionalForwarderRequest {}
export interface DeleteConditionalForwarderCommandOutput extends DeleteConditionalForwarderResult, __MetadataBearer {}

/**
 * <p>Deletes a conditional forwarder that has been set up for your Amazon Web Services
 *       directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteConditionalForwarderCommand } from "../../client-directory-service/mod.ts";
 * // const { DirectoryServiceClient, DeleteConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeleteConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link DeleteConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteConditionalForwarderCommand extends $Command<
  DeleteConditionalForwarderCommandInput,
  DeleteConditionalForwarderCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConditionalForwarderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConditionalForwarderCommandInput, DeleteConditionalForwarderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DeleteConditionalForwarderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConditionalForwarderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteConditionalForwarderResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteConditionalForwarderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteConditionalForwarderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConditionalForwarderCommandOutput> {
    return deserializeAws_json1_1DeleteConditionalForwarderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
