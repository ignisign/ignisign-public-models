import { IsEnum, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_DOCUMENT_REQUEST_TARGET } from "../documents/document-request.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";
import { IGNISIGN_INTEGRATION_MODE } from "../signatures/signatures.public";



export class IgnisignWebhookDto_SignatureSessionInitialized {
  signerId: string
  signatureRequestId: string
}


export class IgnisignWebhookDto_SignerDescription {
  signerId  : string;
  lastName?       : string;
  firstName?      : string;
  email?          : string;
  phoneNumber?    : string;
  tokenValue?     : string;
  signerSecret?   : string;
}
export class IgnisignWebhookDto_SignatureSessionResult {
  signatureRequestId?   : string;
  documentIds           : string[];
  integrationMode         : IGNISIGN_INTEGRATION_MODE;
  signatureMethodRefs   : IGNISIGN_SIGNATURE_METHOD_REF[];
  signers               : IgnisignWebhookDto_SignerDescription[];
}


export class IgnisignWebhookDto_SignatureFinalization {
  appId           : string;
  appEnv          : IGNISIGN_APPLICATION_ENV;
  documentNature  : IGNISIGN_DOCUMENT_TYPE;

  signerId        : string
  documentId      : string
  signatureId     : string
}

export class IgnisignWebhookDto_SignatureProofGeneration {
  @IsString()
  signatureProofId : string;

  @IsOptional()
  @IsString()
  appId      ?: string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv      : IGNISIGN_APPLICATION_ENV;
}

export class IgnisignWebhookDto_SignatureImageGeneration {
  @IsString()
  signatureImageId : string;

  @IsOptional()
  @IsString()
  appId      ?: string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv      : IGNISIGN_APPLICATION_ENV;
}

export class IgnisignWebhookDto_AdvancedProofGeneration {
  @IsString()
  advancedProofId : string;

  @IsOptional()
  @IsString()
  appId ?: string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv : IGNISIGN_APPLICATION_ENV;
}

export class IgnisignWebhookDto_SignerCreationSuccess {
  appId        : string;
  appEnv       : IGNISIGN_APPLICATION_ENV
  signerId     : string;
  signerSecret : string;
}

export class IgnisignWebhookDto_SignerCreationFailed {
  signerId : string;
  appId    : string;
  appEnv   : IGNISIGN_APPLICATION_ENV;
}

export class IgnisignWebhookDto_DocumentRequestCreation {
  document : {
    documentId   : string;
    externalId  ?: string;
  };
  documentRequest : {
    documentRequestId   : string;
    target              : IGNISIGN_DOCUMENT_REQUEST_TARGET;
    externalId         ?: string;
    token              ?: string;
    email              ?: string;
  }
}