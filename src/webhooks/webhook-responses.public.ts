import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_DOCUMENT_REQUEST_TARGET } from "../documents/document-request.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";
import { IGNISIGN_INTEGRATION_MODE } from "../signatures/signatures.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF } from "../signers/signers.public";




export class IgnisignWebhookDto_SignatureSession {
  @IsString()
  signerId: string

  @IsString()
  signatureRequestId: string
}

export class IgnisignWebhookDto_SignerDescription {
  @IsString()
  signerId        : string;

  @IsOptional()
  @IsString()
  lastName?       : string;

  @IsOptional()
  @IsString()
  firstName?      : string;

  @IsOptional()
  @IsString()
  email?          : string;

  @IsOptional()
  @IsString()
  phoneNumber?    : string;

  @IsOptional()
  @IsString()
  tokenValue?     : string;

  @IsOptional()
  @IsString()
  signerSecret?   : string;
}
export class IgnisignWebhookDto_SignatureSessionResult {
  signatureRequestId?   : string;
  documentIds           : string[];
  integrationMode         : IGNISIGN_INTEGRATION_MODE;
  signatureMethodRefs   : IGNISIGN_SIGNATURE_METHOD_REF[];
  signers               : IgnisignWebhookDto_SignerDescription[];
}

export class IgnisignWebhookDto_DocumentRequest {
  @IsString()
  documentId     : string;

  @IsString()
  documentNature : string;

  @IsString()
  mimeType       : string;
}

export class IgnisignWebhookDto_SignatureProofGenerated {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @IsString()
  documentId         : string;

  @IsString()
  signatureRequestId : string;
}

export class IgnisignWebhookDto_Signer {
  @IsString()
  appId       : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv      : IGNISIGN_APPLICATION_ENV;

  @IsString()
  signerId    : string;

  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF, { each: true })
  inputs      : IGNISIGN_SIGNER_CREATION_INPUT_REF[]
}

export class IgnisignWebhookDto_AdvancedProofGenerated {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @IsString()
  documentId         : string;

  @IsString()
  signatureRequestId : string;
}

export class IgnisignWebhookDto_SignatureImageGenerated {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @IsString()
  documentId         : string;

  @IsString()
  signatureRequestId : string;

  @IsString()
  signerId           : string;
}

export class IgnisignWebhookDto_SignatureRequest {
  @IsString()
  signatureRequestId  : string;

  @IsOptional()
  @IsString()
  externalId         ?: string;
}

export class IgnisignWebhookDto_SignatureRequestLaunchedSigner {
  signerId   : string;
  externalId : string;
  token      : string;
}
export class IgnisignWebhookDto_SignatureRequestLaunched extends IgnisignWebhookDto_SignatureRequest {
  @ValidateNested({ each: true })
  @Type(() => IgnisignWebhookDto_SignatureRequestLaunchedSigner)
  signers: IgnisignWebhookDto_SignatureRequestLaunchedSigner[]
}

export class IgnisignWebhookDto_SignatureProfileCreated {
  @IsString()
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
  
  @IsString()
  documentId      : string;

  @IsString()
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