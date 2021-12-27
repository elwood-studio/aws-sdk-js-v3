import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DataShare } from "../models/models_0.ts";
import { RejectDataShareMessage } from "../models/models_1.ts";
import {
  deserializeAws_queryRejectDataShareCommand,
  serializeAws_queryRejectDataShareCommand,
} from "../protocols/Aws_query.ts";
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

export interface RejectDataShareCommandInput extends RejectDataShareMessage {}
export interface RejectDataShareCommandOutput extends DataShare, __MetadataBearer {}

/**
 * <p>From the consumer account, rejects the specified datashare.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RejectDataShareCommand } from "../../client-redshift/mod.ts";
 * // const { RedshiftClient, RejectDataShareCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RejectDataShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectDataShareCommandInput} for command's `input` shape.
 * @see {@link RejectDataShareCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RejectDataShareCommand extends $Command<
  RejectDataShareCommandInput,
  RejectDataShareCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectDataShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectDataShareCommandInput, RejectDataShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RejectDataShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectDataShareMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DataShare.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectDataShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRejectDataShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectDataShareCommandOutput> {
    return deserializeAws_queryRejectDataShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
