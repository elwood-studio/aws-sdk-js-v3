import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient.ts";
import { CreateTrailRequest, CreateTrailResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateTrailCommand,
  serializeAws_json1_1CreateTrailCommand,
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

export interface CreateTrailCommandInput extends CreateTrailRequest {}
export interface CreateTrailCommandOutput extends CreateTrailResponse, __MetadataBearer {}

/**
 * <p>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, CreateTrailCommand } from "../../client-cloudtrail/mod.ts";
 * // const { CloudTrailClient, CreateTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new CreateTrailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrailCommandInput} for command's `input` shape.
 * @see {@link CreateTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateTrailCommand extends $Command<
  CreateTrailCommandInput,
  CreateTrailCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTrailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrailCommandInput, CreateTrailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "CreateTrailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTrailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrailCommandOutput> {
    return deserializeAws_json1_1CreateTrailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
