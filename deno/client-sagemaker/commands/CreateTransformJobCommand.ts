import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { CreateTransformJobRequest, CreateTransformJobResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1CreateTransformJobCommand,
  serializeAws_json1_1CreateTransformJobCommand,
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

export interface CreateTransformJobCommandInput extends CreateTransformJobRequest {}
export interface CreateTransformJobCommandOutput extends CreateTransformJobResponse, __MetadataBearer {}

/**
 * <p>Starts a transform job. A transform job uses a trained model to get inferences on a
 *             dataset and saves these results to an Amazon S3 location that you specify.</p>
 *         <p>To perform batch transformations, you create a transform job and use the data that you
 *             have readily available.</p>
 *         <p>In the request body, you provide the following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>TransformJobName</code> - Identifies the transform job. The name must be
 *                     unique within an Amazon Web Services Region in an Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ModelName</code> - Identifies the model to use. <code>ModelName</code>
 *                     must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services
 *                     account. For information on creating a model, see <a>CreateModel</a>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TransformInput</code> - Describes the dataset to be transformed and the
 *                     Amazon S3 location where it is stored.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TransformOutput</code> - Identifies the Amazon S3 location where you want
 *                     Amazon SageMaker to save the results from the transform job.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TransformResources</code> - Identifies the ML compute instances for the
 *                     transform job.</p>
 *             </li>
 *          </ul>
 *         <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch
 *                 Transform</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTransformJobCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, CreateTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateTransformJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransformJobCommandInput} for command's `input` shape.
 * @see {@link CreateTransformJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateTransformJobCommand extends $Command<
  CreateTransformJobCommandInput,
  CreateTransformJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransformJobCommandInput) {
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
  ): Handler<CreateTransformJobCommandInput, CreateTransformJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateTransformJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransformJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransformJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTransformJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTransformJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTransformJobCommandOutput> {
    return deserializeAws_json1_1CreateTransformJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
