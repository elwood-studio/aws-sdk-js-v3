import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { StartBlueprintRunRequest, StartBlueprintRunResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1StartBlueprintRunCommand,
  serializeAws_json1_1StartBlueprintRunCommand,
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

export interface StartBlueprintRunCommandInput extends StartBlueprintRunRequest {}
export interface StartBlueprintRunCommandOutput extends StartBlueprintRunResponse, __MetadataBearer {}

/**
 * <p>Starts a new run of the specified blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartBlueprintRunCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, StartBlueprintRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartBlueprintRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBlueprintRunCommandInput} for command's `input` shape.
 * @see {@link StartBlueprintRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartBlueprintRunCommand extends $Command<
  StartBlueprintRunCommandInput,
  StartBlueprintRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartBlueprintRunCommandInput) {
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
  ): Handler<StartBlueprintRunCommandInput, StartBlueprintRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartBlueprintRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartBlueprintRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartBlueprintRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartBlueprintRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartBlueprintRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartBlueprintRunCommandOutput> {
    return deserializeAws_json1_1StartBlueprintRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
