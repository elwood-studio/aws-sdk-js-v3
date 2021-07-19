import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { StopSolutionVersionCreationRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StopSolutionVersionCreationCommand,
  serializeAws_json1_1StopSolutionVersionCreationCommand,
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

export interface StopSolutionVersionCreationCommandInput extends StopSolutionVersionCreationRequest {}
export interface StopSolutionVersionCreationCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS.
 *       </p>
 *          <p>Depending on the current state of the solution version, the solution version state changes as follows:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE_PENDING > CREATE_STOPPED</p>
 *                <p>or</p>
 *             </li>
 *             <li>
 *                <p>CREATE_IN_PROGRESS > CREATE_STOPPING > CREATE_STOPPED</p>
 *             </li>
 *          </ul>
 *          <p>You are billed for all of the training completed up
 *       until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, StopSolutionVersionCreationCommand } from "../../client-personalize/mod.ts";
 * // const { PersonalizeClient, StopSolutionVersionCreationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new StopSolutionVersionCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopSolutionVersionCreationCommandInput} for command's `input` shape.
 * @see {@link StopSolutionVersionCreationCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopSolutionVersionCreationCommand extends $Command<
  StopSolutionVersionCreationCommandInput,
  StopSolutionVersionCreationCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopSolutionVersionCreationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopSolutionVersionCreationCommandInput, StopSolutionVersionCreationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "StopSolutionVersionCreationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopSolutionVersionCreationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopSolutionVersionCreationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopSolutionVersionCreationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopSolutionVersionCreationCommandOutput> {
    return deserializeAws_json1_1StopSolutionVersionCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
