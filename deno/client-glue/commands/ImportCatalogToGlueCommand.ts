import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { ImportCatalogToGlueRequest, ImportCatalogToGlueResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1ImportCatalogToGlueCommand,
  serializeAws_json1_1ImportCatalogToGlueCommand,
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

export interface ImportCatalogToGlueCommandInput extends ImportCatalogToGlueRequest {}
export interface ImportCatalogToGlueCommandOutput extends ImportCatalogToGlueResponse, __MetadataBearer {}

/**
 * <p>Imports an existing Amazon Athena Data Catalog to Glue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ImportCatalogToGlueCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, ImportCatalogToGlueCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ImportCatalogToGlueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportCatalogToGlueCommandInput} for command's `input` shape.
 * @see {@link ImportCatalogToGlueCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ImportCatalogToGlueCommand extends $Command<
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportCatalogToGlueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportCatalogToGlueCommandInput, ImportCatalogToGlueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ImportCatalogToGlueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportCatalogToGlueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportCatalogToGlueResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportCatalogToGlueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportCatalogToGlueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportCatalogToGlueCommandOutput> {
    return deserializeAws_json1_1ImportCatalogToGlueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
