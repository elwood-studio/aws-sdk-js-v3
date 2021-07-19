import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DescribeClusterSnapshotsMessage, SnapshotMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeClusterSnapshotsCommand,
  serializeAws_queryDescribeClusterSnapshotsCommand,
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

export interface DescribeClusterSnapshotsCommandInput extends DescribeClusterSnapshotsMessage {}
export interface DescribeClusterSnapshotsCommandOutput extends SnapshotMessage, __MetadataBearer {}

/**
 * <p>Returns one or more snapshot objects, which contain metadata about your cluster
 *             snapshots. By default, this operation returns information about all snapshots of all
 *             clusters that are owned by your account. No information is returned for
 *             snapshots owned by inactive accounts.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all snapshots that match any combination of the specified keys and values. For example,
 *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all snapshots that have any
 *             combination of those values are returned. Only snapshots that you own are returned in
 *             the response; shared snapshots are not returned with the tag key and tag value request
 *             parameters.</p>
 *         <p>If both tag keys and values are omitted from the request, snapshots are returned
 *             regardless of whether they have tag keys or values associated with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterSnapshotsCommand } from "../../client-redshift/mod.ts";
 * // const { RedshiftClient, DescribeClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeClusterSnapshotsCommand extends $Command<
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterSnapshotsCommandInput) {
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
  ): Handler<DescribeClusterSnapshotsCommandInput, DescribeClusterSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterSnapshotsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: SnapshotMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterSnapshotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterSnapshotsCommandOutput> {
    return deserializeAws_queryDescribeClusterSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
