import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { SelectResourceConfigRequest, SelectResourceConfigResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1SelectResourceConfigCommand,
  serializeAws_json1_1SelectResourceConfigCommand,
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

export interface SelectResourceConfigCommandInput extends SelectResourceConfigRequest {}
export interface SelectResourceConfigCommandOutput extends SelectResourceConfigResponse, __MetadataBearer {}

/**
 * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p>
 * 		       <p>For more information about query components, see the
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
 *                <b>Query Components</b>
 *             </a> section in the Config Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, SelectResourceConfigCommand } from "../../client-config-service/mod.ts";
 * // const { ConfigServiceClient, SelectResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new SelectResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SelectResourceConfigCommandInput} for command's `input` shape.
 * @see {@link SelectResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SelectResourceConfigCommand extends $Command<
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SelectResourceConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SelectResourceConfigCommandInput, SelectResourceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "SelectResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SelectResourceConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SelectResourceConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SelectResourceConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SelectResourceConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SelectResourceConfigCommandOutput> {
    return deserializeAws_json1_1SelectResourceConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
