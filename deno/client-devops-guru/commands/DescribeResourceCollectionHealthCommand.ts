import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient.ts";
import { DescribeResourceCollectionHealthRequest, DescribeResourceCollectionHealthResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeResourceCollectionHealthCommand,
  serializeAws_restJson1DescribeResourceCollectionHealthCommand,
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

export interface DescribeResourceCollectionHealthCommandInput extends DescribeResourceCollectionHealthRequest {}
export interface DescribeResourceCollectionHealthCommandOutput
  extends DescribeResourceCollectionHealthResponse,
    __MetadataBearer {}

/**
 * <p>
 *    		Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in
 *    		resource collections in your account. You specify the type of AWS resources collection. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
 *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeResourceCollectionHealthCommand } from "../../client-devops-guru/mod.ts";
 * // const { DevOpsGuruClient, DescribeResourceCollectionHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeResourceCollectionHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceCollectionHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceCollectionHealthCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeResourceCollectionHealthCommand extends $Command<
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeResourceCollectionHealthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeResourceCollectionHealthCommandInput, DescribeResourceCollectionHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeResourceCollectionHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeResourceCollectionHealthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeResourceCollectionHealthResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeResourceCollectionHealthCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeResourceCollectionHealthCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeResourceCollectionHealthCommandOutput> {
    return deserializeAws_restJson1DescribeResourceCollectionHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
