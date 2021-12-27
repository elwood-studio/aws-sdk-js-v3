import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient.ts";
import { UpdatePackageRequest, UpdatePackageResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdatePackageCommand,
  serializeAws_restJson1UpdatePackageCommand,
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

export interface UpdatePackageCommandInput extends UpdatePackageRequest {}
export interface UpdatePackageCommandOutput extends UpdatePackageResponse, __MetadataBearer {}

/**
 * <p>Updates a package for use with Amazon OpenSearch Service domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdatePackageCommand } from "../../client-opensearch/mod.ts";
 * // const { OpenSearchClient, UpdatePackageCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new UpdatePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePackageCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdatePackageCommand extends $Command<
  UpdatePackageCommandInput,
  UpdatePackageCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePackageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePackageCommandInput, UpdatePackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "UpdatePackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePackageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePackageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePackageCommandOutput> {
    return deserializeAws_restJson1UpdatePackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
