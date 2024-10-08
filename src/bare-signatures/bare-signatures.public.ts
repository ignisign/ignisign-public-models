import { IGNISIGN_EIDAS_LEVEL } from "../_commons/eidas.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNATURE_PROOF_TYPE } from "../signatures/signatures.public";
import { IGNISIGN_SIGNER_CLAIM_REF } from "../signers/signer-claims.public";




export class IgnisignBareSignature_GetAuthrozationUrlRequest {
  redirectUri       : string;
  hashes            : string[];
  externalId       ?: string;
  nonce            ?: string;
  codeChallenge    ?: string;
}

export class IgnisignBareSignature_GetAuthrozationUrlResponse {
  authorizationUrl  : string;
  codeVerifier?     : string;
  codeChallenge     : string;
  nonce             :  string;
}




export class IgnisignBareSignature_ProofAccessTokenRequest {
  client_id      : string;
  client_secret  : string;
  code_verifier  : string;
  redirect_uri   : string;
  grant_type     : string;
  code           : string;
}



export class IgnisignBareSignature_GetProofAccessToken {
  appEnv         : IGNISIGN_APPLICATION_ENV;
  client_id      : string;
  client_secret  : string;
  code_verifier  : string;
  redirect_uri   : string;
  grant_type     : string;
  code           : string;
}

export class IgnisignBareSignature_ProofAccessToken {
  access_token : string;
  token_type  : string;
  expires_in  : number;
  scope       : string;
}


export class IgnisignBareSignature_Proof {
  appId              : string;
  appEnv             : IGNISIGN_APPLICATION_ENV;
  signatureRequestId : string;
  externalId        ?: string;
  signerId           : string;
  proofs             : {
    documentId          : string;
    type                : IGNISIGN_SIGNATURE_PROOF_TYPE;
    documentHash        : string;
    proofB64            : string;
    timestampSequence  ?: string;
    signingTime        ?: Date;
  }[];
  
  signerInformation : {
    fullName         : string;
    lastName        ?: string;
    firstName       ?: string;
  };


}

export class IgnisignApplication_BareSignatureEnvSettings {
  appId             : string;
  appEnv            : IGNISIGN_APPLICATION_ENV;
  redirectUris      : string[];
  authorizedOrigins : string[];
  eidasLevel        : IGNISIGN_EIDAS_LEVEL;
}



