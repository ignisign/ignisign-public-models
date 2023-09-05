import { IsEnum, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_DOCUMENT_REQUEST_TARGET } from "../documents/document-request.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";
import { IGNISIGN_INTEGRATION_MODE } from "../signatures/signatures.public";



export class IGNISIGN_WEBHOOK_DTO__SIGNATURE_SESSION_INITIALIZED {
  signerId: string
  signatureRequestId: string
}


export class IgnisignSignatureRequest_WebhookResult_SignerDescription {
  signerId  : string;
  lastName?       : string;
  firstName?      : string;
  email?          : string;
  phoneNumber?    : string;
  tokenValue?     : string;
  signerSecret?   : string;
}
export class IgnisignSignatureRequest_WebhookResult {
  signatureRequestId?   : string;
  documentIds           : string[];
  integrationMode         : IGNISIGN_INTEGRATION_MODE;
  signatureMethodRefs   : IGNISIGN_SIGNATURE_METHOD_REF[];
  signers               : IgnisignSignatureRequest_WebhookResult_SignerDescription[];
}


export class IgnisignSignatureWebhookResultDto {
  appId           : string;
  appEnv          : IGNISIGN_APPLICATION_ENV;
  documentNature  : IGNISIGN_DOCUMENT_TYPE;

  signerId        : string
  documentId      : string
  signatureId     : string
}

export class IgnisignSignatureProof_Generation_WebhookDto {
  @IsString()
  signatureProofId : string;

  @IsOptional()
  @IsString()
  appId      ?: string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv      : IGNISIGN_APPLICATION_ENV;
}

export class IgnisignSignatureImage_Generation_WebhookDto {
  @IsString()
  signatureImageId : string;

  @IsOptional()
  @IsString()
  appId      ?: string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv      : IGNISIGN_APPLICATION_ENV;
}

export class IgnisignAdvancedProof_Generation_WebhookDto {
  @IsString()
  advancedProofId : string;

  @IsOptional()
  @IsString()
  appId      ?: string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv      : IGNISIGN_APPLICATION_ENV;
}

export class IgnisignSigner_CreationSuccess_WebhookResultDto {
  appId                     : string;
  appEnv                    : IGNISIGN_APPLICATION_ENV
  signerId                  : string;
  signerSecret              : string;
}

export class IgnisignSigner_CreationFailed_WebhookResultDto {
  signerId : string;
  appId    : string;
  appEnv   : IGNISIGN_APPLICATION_ENV;
}

export class IgnisignDocumentRequestWebhookContext {
  document : {
    documentId                 : string;
    externalId                ?: string;
    externalDocRequestOwnerId ?: string;
  };
  documentRequest : {
    documentRequestId          : string;
    target                     : IGNISIGN_DOCUMENT_REQUEST_TARGET;
    externalId                ?: string;
    externalDocRequestOwnerId ?: string;
    token                     ?: string;
    email                     ?: string;
  }
}