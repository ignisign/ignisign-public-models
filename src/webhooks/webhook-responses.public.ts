import { IsEnum, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_DOCUMENT_REQUEST_TARGET } from "../documents/document-request.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";
import { IGNISIGN_INTEGRATION_MODE } from "../signatures/signatures.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF } from "../signers/signers.public";




export class IgnisignWebhookDto_SignatureSession {
  signerId: string
  signatureRequestId: string
}


export class IgnisignWebhookDto_DocumentRequest {
  documentId     : string;
  documentNature : string;
  mimeType       : string;
}

export class IgnisignWebhookDto_SignatureProof {
  appId              : string;
  appEnv             : IGNISIGN_APPLICATION_ENV;
  documentId         : string;
  signatureRequestId : string;
}


export class IgnisignWebhookDto_Application {
  userId ?: string
}

export class IgnisignWebhookDto_Signer {
  appId       : string;
  appEnv      : IGNISIGN_APPLICATION_ENV;
  signerId    : string;
  inputs      : IGNISIGN_SIGNER_CREATION_INPUT_REF[]
}

export class IgnisignWebhookDto_SignatureImage {
  appId              : string;
  appEnv             : IGNISIGN_APPLICATION_ENV;
  documentId         : string;
  signatureRequestId : string;
  signerId           : string;
}

export class IgnisignWebhookDto_SignatureRequest {
  signatureRequestId  : string;
  externalId         ?: string;
  signers            ?: {
    signerId   : string;
    externalId : string;
    token      : string;
  }[]
}

export class IgnisignWebhookDto_SignatureProfile {
  signatureProfileId  : string;
}


export class IgnisignWebhookDto_Signature {
  appId           : string;
  appEnv          : IGNISIGN_APPLICATION_ENV;
  documentNature  : IGNISIGN_DOCUMENT_TYPE;
  signerId        : string;
  documentId      : string;
  signatureId     : string;
}

export class IgnisignWebhookDto_AdvancedProof {
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

export type IgnisignWebhookDto = IgnisignWebhookDto_SignatureSession |
                                  IgnisignWebhookDto_DocumentRequest |  
                                  IgnisignWebhookDto_SignatureRequest |
                                  IgnisignWebhookDto_SignatureProfile |
                                  IgnisignWebhookDto_Signer |
                                  IgnisignWebhookDto_Signature |
                                  IgnisignWebhookDto_SignatureImage |
                                  IgnisignWebhookDto_SignatureProof |
                                  IgnisignWebhookDto_Application |
                                  IgnisignWebhookDto_AdvancedProof |
                                  IgnisignWebhookDto_DocumentRequestCreation;
