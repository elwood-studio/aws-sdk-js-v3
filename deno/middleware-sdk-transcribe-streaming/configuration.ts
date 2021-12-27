import { SignatureV4 as BaseSignatureV4 } from "../signature-v4/mod.ts";
import { Provider, RequestHandler, RequestSigner } from "../types/mod.ts";

import { SignatureV4 } from "./signer.ts";

export interface WebSocketInputConfig {}

interface PreviouslyResolved {
  signer: Provider<RequestSigner>;
  requestHandler: RequestHandler<any, any>;
}

export interface WebSocketResolvedConfig {
  /**
   * Resolved value of input config {@link AwsAuthInputConfig.signer}
   */
  signer: Provider<RequestSigner>;
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler: RequestHandler<any, any>;
}

export const resolveWebSocketConfig = <T>(
  input: T & WebSocketInputConfig & PreviouslyResolved
): T & WebSocketResolvedConfig =>
  input.requestHandler.metadata?.handlerProtocol !== "websocket"
    ? input
    : {
        ...input,
        signer: async () => {
          const signerObj = await input.signer();
          if (validateSigner(signerObj)) {
            return new SignatureV4({ signer: signerObj });
          }
          throw new Error("Expected SignatureV4 signer, please check the client constructor.");
        },
      };

const validateSigner = (signer: any): signer is BaseSignatureV4 => !!signer;
