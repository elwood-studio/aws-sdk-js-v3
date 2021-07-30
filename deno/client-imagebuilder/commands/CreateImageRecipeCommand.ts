import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient.ts";
import { CreateImageRecipeRequest, CreateImageRecipeResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateImageRecipeCommand,
  serializeAws_restJson1CreateImageRecipeCommand,
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

export interface CreateImageRecipeCommandInput extends CreateImageRecipeRequest {}
export interface CreateImageRecipeCommandOutput extends CreateImageRecipeResponse, __MetadataBearer {}

/**
 * <p> Creates a new image recipe. Image recipes define how images are configured, tested, and
 * 			assessed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImageRecipeCommand } from "../../client-imagebuilder/mod.ts";
 * // const { ImagebuilderClient, CreateImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateImageRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateImageRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateImageRecipeCommand extends $Command<
  CreateImageRecipeCommandInput,
  CreateImageRecipeCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateImageRecipeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "CreateImageRecipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateImageRecipeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateImageRecipeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateImageRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateImageRecipeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImageRecipeCommandOutput> {
    return deserializeAws_restJson1CreateImageRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
