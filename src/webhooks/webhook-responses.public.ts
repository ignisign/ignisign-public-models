import { IsEnum, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_DOCUMENT_REQUEST_TARGET } from "../documents/document-request.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";
import { IGNISIGN_INTEGRATION_MODE } from "../signatures/signatures.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF } from "../signers/signers.public";




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

export class IgnisignWebhookDto_DocumentProvided {
  documentId     : string;
  documentNature : string;
  mimeType       : string;
}

export class IgnisignWebhookDto_SignatureProofGenerated {
  appId              : string;
  appEnv             : IGNISIGN_APPLICATION_ENV;
  documentId         : string;
  signatureRequestId : string;
}

export class IgnisignWebhookDto_Signer {
  appId       : string;
  appEnv      : IGNISIGN_APPLICATION_ENV;
  signerId    : string;
  inputs      : IGNISIGN_SIGNER_CREATION_INPUT_REF[]
}

export class IgnisignWebhookDto_AdvancedProofGenerated {
  appId              : string;
  appEnv             : IGNISIGN_APPLICATION_ENV;
  documentId         : string;
  signatureRequestId : string;
}

export class IgnisignWebhookDto_SignatureImageGenerated {
  appId              : string;
  appEnv             : IGNISIGN_APPLICATION_ENV;
  documentId         : string;
  signatureRequestId : string;
  signerId           : string;
}

export class IgnisignWebhookDto_SignatureRequest {
  signatureRequestId  : string;
  externalId         ?: string;
}

export class IgnisignWebhookDto_SignatureProfileCreated {
  signatureProfileId  : string;
}

export class IgnisignWebhookDto_SignatureRequestLaunched extends IgnisignWebhookDto_SignatureRequest {
  signers : {
    signerId   : string;
    externalId : string;
    token      : string;
  }[]
}

export class IgnisignWebhookDto_SignatureFinalization {
  appId           : string;
  appEnv          : IGNISIGN_APPLICATION_ENV;
  documentNature  : IGNISIGN_DOCUMENT_TYPE;
  signerId        : string;
  documentId      : string;
  signatureId     : string;
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