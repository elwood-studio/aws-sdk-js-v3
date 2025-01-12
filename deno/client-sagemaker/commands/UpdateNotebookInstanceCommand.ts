import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { UpdateNotebookInstanceInput, UpdateNotebookInstanceOutput } from "../models/models_3.ts";
import {
  deserializeAws_json1_1UpdateNotebookInstanceCommand,
  serializeAws_json1_1UpdateNotebookInstanceCommand,
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

export interface UpdateNotebookInstanceCommandInput extends UpdateNotebookInstanceInput {}
export interface UpdateNotebookInstanceCommandOutput extends UpdateNotebookInstanceOutput, __MetadataBearer {}

/**
 * <p>Updates a notebook instance. NotebookInstance updates include upgrading or
 *             downgrading the ML compute instance used for your notebook instance to accommodate
 *             changes in your workload requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateNotebookInstanceCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, UpdateNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateNotebookInstanceCommand extends $Command<
  UpdateNotebookInstanceCommandInput,
  UpdateNotebookInstanceCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNotebookInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNotebookInstanceCommandInput, UpdateNotebookInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateNotebookInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNotebookInstanceInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNotebookInstanceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateNotebookInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateNotebookInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNotebookInstanceCommandOutput> {
    return deserializeAws_json1_1UpdateNotebookInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
