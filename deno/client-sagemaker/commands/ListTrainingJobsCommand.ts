import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListTrainingJobsRequest, ListTrainingJobsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListTrainingJobsCommand,
  serializeAws_json1_1ListTrainingJobsCommand,
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

export interface ListTrainingJobsCommandInput extends ListTrainingJobsRequest {}
export interface ListTrainingJobsCommandOutput extends ListTrainingJobsResponse, __MetadataBearer {}

/**
 * <p>Lists training jobs.</p>
 *         <note>
 *             <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same
 *                 time, the <code>MaxResults</code> number of training jobs are first retrieved
 *                 ignoring the <code>StatusEquals</code> parameter and then they are filtered by the
 *                     <code>StatusEquals</code> parameter, which is returned as a response.</p>
 *             <p>For example, if <code>ListTrainingJobs</code> is invoked with the following
 *                 parameters:</p>
 *             <p>
 *                <code>{ ... MaxResults: 100, StatusEquals: InProgress ... }</code>
 *             </p>
 *             <p>First, 100 trainings jobs with any status, including those other than
 *                     <code>InProgress</code>, are selected (sorted according to the creation time,
 *                 from the most current to the oldest). Next, those with a status of
 *                     <code>InProgress</code> are returned.</p>
 *             <p>You can quickly test the API using the following AWS CLI code.</p>
 *             <p>
 *                <code>aws sagemaker list-training-jobs --max-results 100 --status-equals
 *                     InProgress</code>
 *             </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, ListTrainingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTrainingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrainingJobsCommandInput} for command's `input` shape.
 * @see {@link ListTrainingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTrainingJobsCommand extends $Command<
  ListTrainingJobsCommandInput,
  ListTrainingJobsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTrainingJobsCommandInput) {
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
  ): Handler<ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListTrainingJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrainingJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTrainingJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrainingJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTrainingJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrainingJobsCommandOutput> {
    return deserializeAws_json1_1ListTrainingJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
