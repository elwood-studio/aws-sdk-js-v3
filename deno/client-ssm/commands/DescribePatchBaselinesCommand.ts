import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { DescribePatchBaselinesRequest, DescribePatchBaselinesResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1DescribePatchBaselinesCommand,
  serializeAws_json1_1DescribePatchBaselinesCommand,
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

export interface DescribePatchBaselinesCommandInput extends DescribePatchBaselinesRequest {}
export interface DescribePatchBaselinesCommandOutput extends DescribePatchBaselinesResult, __MetadataBearer {}

/**
 * <p>Lists the patch baselines in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchBaselinesCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, DescribePatchBaselinesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribePatchBaselinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePatchBaselinesCommandInput} for command's `input` shape.
 * @see {@link DescribePatchBaselinesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribePatchBaselinesCommand extends $Command<
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePatchBaselinesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribePatchBaselinesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePatchBaselinesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePatchBaselinesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePatchBaselinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePatchBaselinesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePatchBaselinesCommandOutput> {
    return deserializeAws_json1_1DescribePatchBaselinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
