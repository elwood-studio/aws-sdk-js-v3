import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client.ts";
import { PutManagedRuleSetVersionsRequest, PutManagedRuleSetVersionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutManagedRuleSetVersionsCommand,
  serializeAws_json1_1PutManagedRuleSetVersionsCommand,
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

export interface PutManagedRuleSetVersionsCommandInput extends PutManagedRuleSetVersionsRequest {}
export interface PutManagedRuleSetVersionsCommandOutput extends PutManagedRuleSetVersionsResponse, __MetadataBearer {}

/**
 * <p>Defines the versions of your managed rule set that you are offering to the customers.
 *          Customers see your offerings as managed rule groups with versioning.</p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 *          <p>Customers retrieve their managed rule group list by calling <a>ListAvailableManagedRuleGroups</a>. The name that you provide here for your
 *          managed rule set is the name the customer sees for the corresponding managed rule group.
 *          Customers can retrieve the available versions for a managed rule group by calling <a>ListAvailableManagedRuleGroupVersions</a>. You provide a rule group
 *          specification for each version. For each managed rule set, you must specify a version that
 *          you recommend using. </p>
 *          <p>To initiate the expiration of a managed rule group version, use <a>UpdateManagedRuleSetVersionExpiryDate</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutManagedRuleSetVersionsCommand } from "../../client-wafv2/mod.ts";
 * // const { WAFV2Client, PutManagedRuleSetVersionsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new PutManagedRuleSetVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutManagedRuleSetVersionsCommandInput} for command's `input` shape.
 * @see {@link PutManagedRuleSetVersionsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutManagedRuleSetVersionsCommand extends $Command<
  PutManagedRuleSetVersionsCommandInput,
  PutManagedRuleSetVersionsCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutManagedRuleSetVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutManagedRuleSetVersionsCommandInput, PutManagedRuleSetVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "PutManagedRuleSetVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutManagedRuleSetVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutManagedRuleSetVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutManagedRuleSetVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutManagedRuleSetVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutManagedRuleSetVersionsCommandOutput> {
    return deserializeAws_json1_1PutManagedRuleSetVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
