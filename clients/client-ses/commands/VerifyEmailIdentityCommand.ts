import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { VerifyEmailIdentityRequest, VerifyEmailIdentityResponse } from "../models/models_0";
import {
  deserializeAws_queryVerifyEmailIdentityCommand,
  serializeAws_queryVerifyEmailIdentityCommand,
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

export type VerifyEmailIdentityCommandInput = VerifyEmailIdentityRequest;
export type VerifyEmailIdentityCommandOutput = VerifyEmailIdentityResponse & __MetadataBearer;

/**
 * <p>Adds an email address to the list of identities for your Amazon SES account in the current
 *             AWS region and attempts to verify it. As a result of executing this operation, a
 *             verification email is sent to the specified address.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class VerifyEmailIdentityCommand extends $Command<
  VerifyEmailIdentityCommandInput,
  VerifyEmailIdentityCommandOutput,
  SESClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: VerifyEmailIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyEmailIdentityCommandInput, VerifyEmailIdentityCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "VerifyEmailIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyEmailIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VerifyEmailIdentityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyEmailIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryVerifyEmailIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyEmailIdentityCommandOutput> {
    return deserializeAws_queryVerifyEmailIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
