import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchSkillGroupsRequest, SearchSkillGroupsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchSkillGroupsCommand,
  serializeAws_json1_1SearchSkillGroupsCommand,
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

export type SearchSkillGroupsCommandInput = SearchSkillGroupsRequest;
export type SearchSkillGroupsCommandOutput = SearchSkillGroupsResponse & __MetadataBearer;

/**
 * <p>Searches skill groups and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 */
export class SearchSkillGroupsCommand extends $Command<
  SearchSkillGroupsCommandInput,
  SearchSkillGroupsCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchSkillGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchSkillGroupsCommandInput, SearchSkillGroupsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchSkillGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchSkillGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchSkillGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchSkillGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchSkillGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchSkillGroupsCommandOutput> {
    return deserializeAws_json1_1SearchSkillGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
