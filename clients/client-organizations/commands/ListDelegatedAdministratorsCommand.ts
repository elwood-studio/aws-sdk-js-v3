import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListDelegatedAdministratorsRequest, ListDelegatedAdministratorsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListDelegatedAdministratorsCommand,
  serializeAws_json1_1ListDelegatedAdministratorsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ListDelegatedAdministratorsCommandInput = ListDelegatedAdministratorsRequest;
export type ListDelegatedAdministratorsCommandOutput = ListDelegatedAdministratorsResponse & __MetadataBearer;

/**
 * <p>Lists the AWS accounts that are designated as delegated administrators in this
 *             organization.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 */
export class ListDelegatedAdministratorsCommand extends $Command<
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDelegatedAdministratorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDelegatedAdministratorsCommandInput, ListDelegatedAdministratorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListDelegatedAdministratorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDelegatedAdministratorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDelegatedAdministratorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDelegatedAdministratorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDelegatedAdministratorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDelegatedAdministratorsCommandOutput> {
    return deserializeAws_json1_1ListDelegatedAdministratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
