import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { CreateWorkforceRequest, CreateWorkforceResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1CreateWorkforceCommand,
  serializeAws_json1_1CreateWorkforceCommand,
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

export interface CreateWorkforceCommandInput extends CreateWorkforceRequest {}
export interface CreateWorkforceCommandOutput extends CreateWorkforceResponse, __MetadataBearer {}

/**
 * <p>Use this operation to create a workforce. This operation will return an error
 *           if a workforce already exists in the Amazon Web Services Region that you specify. You can only
 *           create one workforce in each Amazon Web Services Region per Amazon Web Services account.</p>
 *
 *         <p>If you want to create a new workforce in an Amazon Web Services Region where
 *       a workforce already exists, use the  API
 *       operation to delete the existing workforce and then use <code>CreateWorkforce</code>
 *       to create a new workforce.</p>
 *
 *          <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool
 *     in <code>CognitoConfig</code>.
 *     You can also create an Amazon Cognito workforce using the Amazon SageMaker console.
 *     For more information, see
 *       <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">
 *       Create a Private Workforce (Amazon Cognito)</a>.</p>
 *
 *          <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP
 *       configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i>
 *       because groups are used by Ground Truth and Amazon A2I to create work teams.
 *       For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html">
 *       Create a Private Workforce (OIDC IdP)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateWorkforceCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, CreateWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateWorkforceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkforceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateWorkforceCommand extends $Command<
  CreateWorkforceCommandInput,
  CreateWorkforceCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorkforceCommandInput) {
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
  ): Handler<CreateWorkforceCommandInput, CreateWorkforceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateWorkforceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkforceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkforceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkforceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWorkforceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkforceCommandOutput> {
    return deserializeAws_json1_1CreateWorkforceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
