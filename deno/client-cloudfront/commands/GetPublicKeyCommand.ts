import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import { GetPublicKeyRequest, GetPublicKeyResult } from "../models/models_1.ts";
import {
  deserializeAws_restXmlGetPublicKeyCommand,
  serializeAws_restXmlGetPublicKeyCommand,
} from "../protocols/Aws_restXml.ts";
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

export interface GetPublicKeyCommandInput extends GetPublicKeyRequest {}
export interface GetPublicKeyCommandOutput extends GetPublicKeyResult, __MetadataBearer {}

/**
 * <p>Gets a public key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetPublicKeyCommand } from "../../client-cloudfront/mod.ts";
 * // const { CloudFrontClient, GetPublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetPublicKeyCommand extends $Command<
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPublicKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPublicKeyCommandInput, GetPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPublicKeyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPublicKeyCommandOutput> {
    return deserializeAws_restXmlGetPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
