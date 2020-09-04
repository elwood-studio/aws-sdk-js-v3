import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeUsageLimitsMessage, UsageLimitList } from "../models/index";
import {
  deserializeAws_queryDescribeUsageLimitsCommand,
  serializeAws_queryDescribeUsageLimitsCommand,
} from "../protocols/Aws_query";
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

export type DescribeUsageLimitsCommandInput = DescribeUsageLimitsMessage;
export type DescribeUsageLimitsCommandOutput = UsageLimitList & __MetadataBearer;

export class DescribeUsageLimitsCommand extends $Command<
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUsageLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUsageLimitsCommandInput, DescribeUsageLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeUsageLimitsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: UsageLimitList.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeUsageLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeUsageLimitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUsageLimitsCommandOutput> {
    return deserializeAws_queryDescribeUsageLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}