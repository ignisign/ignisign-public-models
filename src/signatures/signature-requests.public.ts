import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsDateString, IsEnum, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignDocument_Context } from "../documents/document-entities.public";
import { IGNISIGN_SIGNATURE_LANGUAGES } from "../_commons/languages.public";
import { IgnisignApplication_SignatureMetadata } from "./signatures.public";
import { IgnisignSignatureProfile } from "./signature-profiles.public";
import { IgnisignSigner_Summary } from "../signers/signers.public";
import "reflect-metadata";

export enum IGNISIGN_SIGNATURE_REQUEST_STATEMENT_TARGET {
  SIGNATURE_REQUEST = 'SIGNATURE_REQUEST',
  DOCUMENT          = 'DOCUMENT'
}

export enum IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE {
  WHEN_READY  = 'WHEN_READY',
  SCHEDULED   = 'SCHEDULED'
}

export enum IGNISIGN_SIGNATURE_REQUEST_STATUS {
  DRAFT             = 'DRAFT',

  WAITING_DOCUMENTS = 'WAITING_DOCUMENTS',
  WAITING_DOCUMENTS_GENERATION = 'WAITING_DOCUMENTS_GENERATION',
  READY             = 'READY',
  IN_PROGRESS       = 'IN_PROGRESS',
  
  COMPLETED         = 'COMPLETED',
  EXPIRED           = 'EXPIRED',
  FAILED            = 'FAILED',
  CANCELLED         = 'CANCELLED',

  PROCESSING        = 'PROCESSING',
  CHILDREN_GENERATED = 'CHILDREN_GENERATED'
}
 

export const IGNISIGN_SIGNATURE_REQUEST_CLOSED_STATUS = [
  IGNISIGN_SIGNATURE_REQUEST_STATUS.COMPLETED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.EXPIRED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.FAILED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.CANCELLED
]

export enum IGNISIGN_SIGNATURE_REQUEST_TYPE {

  STANDARD       = "STANDARD",
  SIGNER_SETUP   = "SIGNER_SETUP",
  // REGISTERED_LETTER     = "REGISTERED_LETTER",
  // SEAL                  = "SEAL",
  // VERIFIED_CREDENTIALS  = "VERIFIED_CREDENTIALS",
}

export enum IGNISIGN_SIGNATURE_REQUEST_POST_PROCESSING_MECHANISM {
  SIGNATURE_PROOF = "SIGNATURE_PROOF",
  // SEAL                   = "SEAL",
  // VERIFIABLE_CREDENTIALS = "VERIFIABLE_CREDENTIALS",
  // DELEGATED_PROCESSING   = "DELEGATED_PROCESSING"

}

export class IgnisignSignatureRequest {
  _id                       ?: string;

  @IsOptional()
  @IsDate()
  _createdAt                ?: Date;

  @IsString()
  appId                      : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv                     : IGNISIGN_APPLICATION_ENV;

  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_TYPE)
  signatureRequestType      : IGNISIGN_SIGNATURE_REQUEST_TYPE = IGNISIGN_SIGNATURE_REQUEST_TYPE.STANDARD;

  @IsOptional()
  @IsString()
  title                     ?: string;

  @IsOptional()
  @IsString()
  description               ?: string;

  @IsOptional()
  @IsEnum(IGNISIGN_SIGNATURE_LANGUAGES)
  language                  ?: IGNISIGN_SIGNATURE_LANGUAGES;

  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_STATUS)
  status                     : IGNISIGN_SIGNATURE_REQUEST_STATUS;

  @IsOptional()
  @IsString()
  externalId                ?: string;

  @IsOptional()
  @IsString()
  creatorId                 ?: string;

  @IsString()
  signatureProfileId         : string;

  @IsOptional()
  @IsString({each: true})
  documentIds               ?: string[];

  @IsOptional()
  @IsString({each: true})
  signerIds                 ?: string[];

  @IsOptional()
  @IsString({each: true})
  signedBy                  ?: string[];  

  @IsOptional()
  @IsDate()
  expirationDate            ?: Date;

  @IsOptional()
  @IsBoolean()
  expirationDateIsActivated ?: boolean;

  @IsOptional()
  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE)
  diffusionMode             ?: IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE;

  @IsOptional()
  @IsDate()
  diffusionDate             ?: Date;

  @IsOptional()
  @IsString()
  templateDisplayerId      ?: string;

  @IsOptional()
  @IsNumber()
  templateDisplayerVersion ?: number;

  @IsOptional()
  @IsString()
  initialSignatureRequestId ?: string;

  @IsOptional()
  @IsString({ each: true })
  signersAsApprover ?: string[];

  @IsOptional()
  @IsString({ each: true })
  recipients ?: string[];

}

export class IgnisignSignatureRequest_Statement {
  _id                ?: string;
  appId               : string;
  appEnv              : IGNISIGN_APPLICATION_ENV;
  signatureRequestId  : string;
  documentId         ?: string;
  target              : IGNISIGN_SIGNATURE_REQUEST_STATEMENT_TARGET;
  labelMd             : string;
}

export class IgnisignSignatureRequest_UpdateDto {
  @IsString()
  @IsOptional()
  @MaxLength(1024)
  title ?: string;

  @IsString()
  @IsOptional()
  @MaxLength(4096)
  description ?: string;

  @IsOptional()
  @IsDateString()
  expirationDate ?: Date;

  @IsOptional()
  @IsBoolean()
  expirationDateIsActivated ?: boolean;

  @IsOptional()
  @IsEnum(IGNISIGN_SIGNATURE_LANGUAGES)
  language? : IGNISIGN_SIGNATURE_LANGUAGES;

  @IsOptional()
  @IsString({ each: true })
  documentIds ?: string[];

  @IsOptional()
  @IsString()
  externalId ?: string;

  @IsOptional()
  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE)
  diffusionMode ?: IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE;

  @IsOptional()
  @IsDateString()
  diffusionDate ?: Date;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => IgnisignSignatureRequest_Statement)
  statements ?: IgnisignSignatureRequest_Statement[];

  @IsOptional()
  @IsArray()
  signerIds ?: string[];

  @IsOptional()
  @IsBoolean()
  extendedAuthSessionEnabled ?: boolean;

  @IsOptional()
  @IsString()
  initialSignatureRequestId ?: string;

  @IsOptional()
  @IsString({ each: true })
  signersAsApprover ?: string[];

  @IsOptional()
  @IsString({ each: true })
  recipients ?: string[];
  

}

export class IgnisignSignatureRequest_IdContainer {
  signatureRequestId?: string;
}

export declare class IgnisignSignatureRequest_PublishBySide extends IgnisignSignatureRequest_IdContainer {}

export declare class IgnisignSignatureRequest_PublishEmbedded extends IgnisignSignatureRequest_IdContainer {
  signers: {
    signerId: string;
    signerExternalId: string;
    token: string;
  }[]
}

export class IgnisignSignatureRequest_WithDocName extends IgnisignSignatureRequest {
  docFileName ?: string;  
  docLabel    ?: string;
}

export class IgnisignSignatureRequests_Paginate {
  signatureRequests :  IgnisignSignatureRequest_WithDocName[];
  paginationData    : { total: number, page: number, nbEventsPerPage: number };
}

export enum IGNISIGN_DOCUMENT_GENERATED_STATUS {
  NOT_INITIALIZED = "NOT_INITIALIZED",
  IN_PROGRESS     = "IN_PROGRESS",
  WAITING_IMAGES  = "WAITING_IMAGES",
  ON_ERROR        = "ON_ERROR",
  CREATED         = "CREATED",
}
export class IgnisignSignatureRequest_Context extends IgnisignSignatureRequest {
  signers               : IgnisignSigner_Summary[];
  signersAsApprover           ?: string[];
  documents             : IgnisignDocument_Context[];  
  statements           ?: IgnisignSignatureRequest_Statement[];
  signatureProfile      : IgnisignSignatureProfile;
  applicationMetadata  ?: IgnisignApplication_SignatureMetadata;
  signatureProofsUrl   ?: string;
  signatureProofStatus ?: IGNISIGN_DOCUMENT_GENERATED_STATUS;
}


export class IgnisignSignatureRequestIdsContainerDto { 
  signatureRequestIds: string[];
}

export class IgnisignSignatureRequests_StatusContainer {
  signatureRequests : { 
    signatureRequestId: string,
    status: IGNISIGN_SIGNATURE_REQUEST_STATUS
  }[];
}