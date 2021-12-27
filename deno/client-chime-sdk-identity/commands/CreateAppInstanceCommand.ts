import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient.ts";
import { CreateAppInstanceRequest, CreateAppInstanceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateAppInstanceCommand,
  serializeAws_restJson1CreateAppInstanceCommand,
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

export interface CreateAppInstanceCommandInput extends CreateAppInstanceRequest {}
export interface CreateAppInstanceCommandOutput extends CreateAppInstanceResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account.
 *          Only SDK messaging customers use this API. <code>CreateAppInstance</code> supports
 *          idempotency behavior as described in the AWS API Standard.</p>
 *          <p>identity</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, CreateAppInstanceCommand } from "../../client-chime-sdk-identity/mod.ts";
 * // const { ChimeSDKIdentityClient, CreateAppInstanceCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const command = new CreateAppInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAppInstanceCommand extends $Command<
  CreateAppInstanceCommandInput,
  CreateAppInstanceCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAppInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppInstanceCommandInput, CreateAppInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "CreateAppInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAppInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAppInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAppInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppInstanceCommandOutput> {
    return deserializeAws_restJson1CreateAppInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
