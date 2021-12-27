import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient.ts";
import { ListKeyPoliciesRequest, ListKeyPoliciesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListKeyPoliciesCommand,
  serializeAws_json1_1ListKeyPoliciesCommand,
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

export interface ListKeyPoliciesCommandInput extends ListKeyPoliciesRequest {}
export interface ListKeyPoliciesCommandOutput extends ListKeyPoliciesResponse, __MetadataBearer {}

/**
 * <p>Gets the names of the key policies that are attached to a KMS key. This
 *       operation is designed to get policy names that you can use in a <a>GetKeyPolicy</a>
 *       operation. However, the only valid policy name is <code>default</code>. </p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeyPolicies</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetKeyPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutKeyPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListKeyPoliciesCommand } from "../../client-kms/mod.ts";
 * // const { KMSClient, ListKeyPoliciesCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListKeyPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListKeyPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListKeyPoliciesCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListKeyPoliciesCommand extends $Command<
  ListKeyPoliciesCommandInput,
  ListKeyPoliciesCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListKeyPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKeyPoliciesCommandInput, ListKeyPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListKeyPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListKeyPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListKeyPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListKeyPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListKeyPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListKeyPoliciesCommandOutput> {
    return deserializeAws_json1_1ListKeyPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
