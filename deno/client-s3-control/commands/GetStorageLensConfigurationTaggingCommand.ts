import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient.ts";
import {
  GetStorageLensConfigurationTaggingRequest,
  GetStorageLensConfigurationTaggingResult,
} from "../models/models_0.ts";
import {
  deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand,
  serializeAws_restXmlGetStorageLensConfigurationTaggingCommand,
} from "../protocols/Aws_restXml.ts";
import { getProcessArnablesPlugin } from "../../middleware-sdk-s3-control/mod.ts";
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

export interface GetStorageLensConfigurationTaggingCommandInput extends GetStorageLensConfigurationTaggingRequest {}
export interface GetStorageLensConfigurationTaggingCommandOutput
  extends GetStorageLensConfigurationTaggingResult,
    __MetadataBearer {}

/**
 * <p>Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:GetStorageLensConfigurationTagging</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetStorageLensConfigurationTaggingCommand } from "../../client-s3-control/mod.ts";
 * // const { S3ControlClient, GetStorageLensConfigurationTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetStorageLensConfigurationTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStorageLensConfigurationTaggingCommandInput} for command's `input` shape.
 * @see {@link GetStorageLensConfigurationTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetStorageLensConfigurationTaggingCommand extends $Command<
  GetStorageLensConfigurationTaggingCommandInput,
  GetStorageLensConfigurationTaggingCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStorageLensConfigurationTaggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStorageLensConfigurationTaggingCommandInput, GetStorageLensConfigurationTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetStorageLensConfigurationTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStorageLensConfigurationTaggingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStorageLensConfigurationTaggingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetStorageLensConfigurationTaggingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetStorageLensConfigurationTaggingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetStorageLensConfigurationTaggingCommandOutput> {
    return deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
