import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient.ts";
import { PutAppInstanceRetentionSettingsRequest, PutAppInstanceRetentionSettingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutAppInstanceRetentionSettingsCommand,
  serializeAws_restJson1PutAppInstanceRetentionSettingsCommand,
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

export interface PutAppInstanceRetentionSettingsCommandInput extends PutAppInstanceRetentionSettingsRequest {}
export interface PutAppInstanceRetentionSettingsCommandOutput
  extends PutAppInstanceRetentionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Sets the amount of time in days that a given <code>AppInstance</code> retains
 *          data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, PutAppInstanceRetentionSettingsCommand } from "../../client-chime-sdk-identity/mod.ts";
 * // const { ChimeSDKIdentityClient, PutAppInstanceRetentionSettingsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const command = new PutAppInstanceRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppInstanceRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutAppInstanceRetentionSettingsCommand extends $Command<
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAppInstanceRetentionSettingsCommandInput) {
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
  ): Handler<PutAppInstanceRetentionSettingsCommandInput, PutAppInstanceRetentionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "PutAppInstanceRetentionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAppInstanceRetentionSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAppInstanceRetentionSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutAppInstanceRetentionSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAppInstanceRetentionSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAppInstanceRetentionSettingsCommandOutput> {
    return deserializeAws_restJson1PutAppInstanceRetentionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
