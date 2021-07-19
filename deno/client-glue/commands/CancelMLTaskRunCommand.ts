import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { CancelMLTaskRunRequest, CancelMLTaskRunResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CancelMLTaskRunCommand,
  serializeAws_json1_1CancelMLTaskRunCommand,
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

export interface CancelMLTaskRunCommandInput extends CancelMLTaskRunRequest {}
export interface CancelMLTaskRunCommandOutput extends CancelMLTaskRunResponse, __MetadataBearer {}

/**
 * <p>Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a
 *       machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task
 *       run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CancelMLTaskRunCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, CancelMLTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CancelMLTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelMLTaskRunCommandInput} for command's `input` shape.
 * @see {@link CancelMLTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelMLTaskRunCommand extends $Command<
  CancelMLTaskRunCommandInput,
  CancelMLTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelMLTaskRunCommandInput) {
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
  ): Handler<CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CancelMLTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelMLTaskRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelMLTaskRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelMLTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelMLTaskRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelMLTaskRunCommandOutput> {
    return deserializeAws_json1_1CancelMLTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
