import {
  AutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AutoScalingClient";
import { PutScheduledUpdateGroupActionType } from "../models/index";
import {
  deserializeAws_queryPutScheduledUpdateGroupActionCommand,
  serializeAws_queryPutScheduledUpdateGroupActionCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type PutScheduledUpdateGroupActionCommandInput = PutScheduledUpdateGroupActionType;
export type PutScheduledUpdateGroupActionCommandOutput = __MetadataBearer;

export class PutScheduledUpdateGroupActionCommand extends $Command<
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutScheduledUpdateGroupActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutScheduledUpdateGroupActionCommandInput,
    PutScheduledUpdateGroupActionCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutScheduledUpdateGroupActionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryPutScheduledUpdateGroupActionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PutScheduledUpdateGroupActionCommandOutput> {
    return deserializeAws_queryPutScheduledUpdateGroupActionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}