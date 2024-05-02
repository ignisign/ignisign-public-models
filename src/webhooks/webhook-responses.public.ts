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

export class IgnisignWebhookDto_SignatureProof_Error {
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

class IgnisignWebhookDto_SignatureProof_Document {
  @IsString()
  documentId : string;

  @IsOptional()
  @IsString()
  documentExternalId ?: string;

  @IsString()
  token : string;

  @IsString()
  url : string;

}
export class IgnisignWebhookDto_SignatureProof_Success {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @ValidateNested({ each: true })
  @Type(() => IgnisignWebhookDto_SignatureProof_Document)
  documents : IgnisignWebhookDto_SignatureProof_Document[];

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


export class IgnisignWebhookDto_SignatureAdvancedProof {
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

  @IsOptional()
  @IsString()
  initialSignatureRequestId ?: string;
}
export class IgnisignWebhookDto_SignatureRequestSigner {
  signerId   : string;
  signerExternalId : string;
  token      : string;
}

export class IgnisignWebhookDto_SignatureProfile {
  signatureProfileId  : string;
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


export type IgnisignWebhookDto = IgnisignWebhookDto_SignatureSession        |
                                  IgnisignWebhookDto_DocumentRequest        |  
                                  IgnisignWebhookDto_SignatureRequest       |
                                  IgnisignWebhookDto_SignatureProfile       |
                                  IgnisignWebhookDto_Signer                 |
                                  IgnisignWebhookDto_Signature              |
                                  IgnisignWebhookDto_SignatureImage         |
                                  IgnisignWebhookDto_SignatureProof_Error   |
                                  IgnisignWebhookDto_SignatureProof_Success |
                                  IgnisignWebhookDto_SignatureAdvancedProof |
                                  IgnisignWebhookDto_Application
