import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { DescribeQuickConnectRequest, DescribeQuickConnectResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeQuickConnectCommand,
  serializeAws_restJson1DescribeQuickConnectCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface DescribeQuickConnectCommandInput extends DescribeQuickConnectRequest {}
export interface DescribeQuickConnectCommandOutput extends DescribeQuickConnectResponse, __MetadataBearer {}

/**
 * <p>Describes the quick connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeQuickConnectCommand } from "../../client-connect/mod.ts";
 * // const { ConnectClient, DescribeQuickConnectCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeQuickConnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeQuickConnectCommandInput} for command's `input` shape.
 * @see {@link DescribeQuickConnectCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeQuickConnectCommand extends $Command<
  DescribeQuickConnectCommandInput,
  DescribeQuickConnectCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeQuickConnectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeQuickConnectCommandInput, DescribeQuickConnectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeQuickConnectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeQuickConnectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeQuickConnectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeQuickConnectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeQuickConnectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeQuickConnectCommandOutput> {
    return deserializeAws_restJson1DescribeQuickConnectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
