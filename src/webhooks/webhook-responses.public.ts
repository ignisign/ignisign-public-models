import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF } from "../signers/signers.public";
import { IGNISIGN_SIGNATURE_REQUEST_STATUS } from "../signatures/signature-requests.public";


export class IgnisignWebhookDto_SignatureSession {
  @IsString()
  signerId: string

  @IsString()
  signatureRequestId: string

  @IsOptional()
  @IsString()
  signatureRequestExternalId   ?: string;

  @IsOptional()
  @IsString()
  signerExternalId   ?: string;
}

export class IgnisignWebhookDto_DocumentRequest {
  @IsString()
  signatureRequestId : string;

  @IsOptional()
  @IsString()
  signatureRequestExternalId   ?: string;

  @IsString()
  documentId     : string;

  @IsOptional()
  @IsString()
  documentExternalId         : string;

  @IsString()
  documentNature : string;

  @IsString()
  mimeType       : string;
}

export class IgnisignWebhookDto_SignatureProof {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @IsString()
  documentId         : string;

  @IsOptional()
  @IsString()
  documentExternalId         : string;

  @IsString()
  signatureRequestId : string;

  @IsOptional()
  @IsString()
  signatureRequestExternalId   ?: string;

  @IsOptional()
  @IsString()
  signatureProofToken?: string;
  
  @IsOptional()
  @IsString()
  signatureProofUrl?: string;
}

export class IgnisignWebhookDto_Application {
  userId ?: string
}

export class IgnisignWebhookDto_Signer {
  @IsString()
  appId       : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv      : IGNISIGN_APPLICATION_ENV;

  @IsString()
  signerId    : string;

  @IsOptional()
  @IsString()
  authSecret ?: string;

  @IsOptional()
  @IsString()
  signerExternalId  ?: string;

  @IsOptional()
  inputsAdded ?: IGNISIGN_SIGNER_CREATION_INPUT_REF[];
}

export class IgnisignWebhookDto_SignatureImage {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @IsString()
  documentId         : string;

  @IsOptional()
  @IsString()
  documentExternalId   ?: string;

  @IsString()
  signatureRequestId : string;

  @IsOptional()
  @IsString()
  signatureRequestExternalId   ?: string;

  @IsString()
  signerId           : string;

  @IsOptional()
  @IsString()
  signerExternalId   ?: string;
}

export class IgnisignWebhookDto_SignatureRequest {
  @IsString()
  signatureRequestId : string;

  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_STATUS)
  status : IGNISIGN_SIGNATURE_REQUEST_STATUS;

  @IsOptional()
  @IsString()
  signatureRequestExternalId ?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => IgnisignWebhookDto_SignatureRequestSigner)
  signers ?: IgnisignWebhookDto_SignatureRequestSigner[];
}
export class IgnisignWebhookDto_SignatureRequestSigner {
  signerId   : string;
  signerExternalId : string;
  token      : string;
}

export class IgnisignWebhookDto_SignatureProfile {
  signatureProfileId  : string;
}

export class IgnisignWebhookDto_IdProofing {
  signatureRequestId : string;
  signatureRequestExternalId ?: string;
  signerId   : string;
  signerExternalId ?: string;
  token      : string;
}

export class IgnisignWebhookDto_Signature {
  @IsString()
  appId           : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv          : IGNISIGN_APPLICATION_ENV;

  @IsEnum(IGNISIGN_DOCUMENT_TYPE)
  documentNature  : IGNISIGN_DOCUMENT_TYPE;

  @IsString()
  signerId        : string;

  @IsOptional()
  @IsString()
  signerExternalId   ?: string;
  
  @IsString()
  documentId      : string;

  @IsOptional()
  @IsString()
  documentExternalId   ?: string;

  @IsString()
  signatureRequestId  : string;

  @IsOptional()
  @IsString()
  signatureRequestExternalId         ?: string;

  @IsString()
  signatureId     : string;
}


export type IgnisignWebhookDto = IgnisignWebhookDto_SignatureSession |
                                  IgnisignWebhookDto_DocumentRequest |  
                                  IgnisignWebhookDto_SignatureRequest |
                                  IgnisignWebhookDto_SignatureProfile |
                                  IgnisignWebhookDto_Signer |
                                  IgnisignWebhookDto_Signature |
                                  IgnisignWebhookDto_SignatureImage |
                                  IgnisignWebhookDto_SignatureProof |
                                  IgnisignWebhookDto_Application 
                                  | IgnisignWebhookDto_IdProofing;
