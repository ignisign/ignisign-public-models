import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsDateString, IsEnum, IsNumber, IsObject, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignDocument_Context } from "../documents/document-entities.public";
import { IGNISIGN_LANGUAGES } from "../_commons/languages.public";
import { IgnisignApplication_SignatureMetadata } from "./signatures.public";
import { IgnisignSignatureProfile } from "./signature-profiles.public";
import { IgnisignSigner_Summary } from "../signers/signers.public";
import "reflect-metadata";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "./signature-methods.public";
import { IgnisignSignerProfile } from "../signers/signer-profiles.public";


export enum IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE {
  WHEN_READY  = 'WHEN_READY',
  SCHEDULED   = 'SCHEDULED'
}

export enum IGNISIGN_SIGNATURE_REQUEST_STATUS {
  DRAFT              = 'DRAFT',
  COMPLETED          = 'COMPLETED',
  EXPIRED            = 'EXPIRED',
  FAILED             = 'FAILED',
  CANCELLED          = 'CANCELLED',
  READY              = 'READY',
  IN_PROGRESS        = 'IN_PROGRESS',
  PROCESSING         = 'PROCESSING',
  CHILDREN_GENERATED = 'CHILDREN_GENERATED',
  LAUNCHING          = 'LAUNCHING',
  LAUNCH_ERROR       = 'LAUNCH_ERROR',
}

export const SIGNATURE_REQUESTS_STATUS_DONE = [
  IGNISIGN_SIGNATURE_REQUEST_STATUS.COMPLETED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.EXPIRED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.FAILED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.CANCELLED
];

export const SIGNATURE_REQUESTS_STATUS_IN_PROGRESS = [
  IGNISIGN_SIGNATURE_REQUEST_STATUS.READY,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.IN_PROGRESS,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.PROCESSING,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.CHILDREN_GENERATED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.LAUNCHING
];

export const IGNISIGN_SIGNATURE_REQUEST_CLOSED_STATUS = [
  IGNISIGN_SIGNATURE_REQUEST_STATUS.COMPLETED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.EXPIRED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.FAILED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.CANCELLED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.LAUNCH_ERROR
]

export enum IGNISIGN_SIGNATURE_REQUEST_TYPE {
  STANDARD       = "STANDARD",
  SIGNER_SETUP   = "SIGNER_SETUP",
  SEAL           = "SEAL",
  SEAL_M2M       = "SEAL_M2M",
  BARE_SIGNATURE = "BARE_SIGNATURE",
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
  @IsEnum(IGNISIGN_LANGUAGES)
  language                  ?: IGNISIGN_LANGUAGES;

  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_STATUS)
  status                     : IGNISIGN_SIGNATURE_REQUEST_STATUS;

  @IsOptional()
  @IsString()
  externalId                ?: string;

  @IsOptional()
  @IsString()
  creatorId                 ?: string;

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
  initialSignatureRequestId ?: string;

  @IsOptional()
  @IsString({ each: true })
  signerIdsAsApprover ?: string[];

  @IsOptional()
  @IsString({ each: true })
  recipients ?: string[];

  @IsOptional()
  @IsNumber()
  appEnvSettingVersion ?: number;

  @IsEnum(IGNISIGN_SIGNATURE_METHOD_REF)
  defaultSignatureMethod : IGNISIGN_SIGNATURE_METHOD_REF;

  @IsOptional()
  @IsObject({ each: true })
  @ValidateNested({ each: true })
  @Type(() => IgnisignSignatureRequest_SignerProfile)
  signerProfilesUsed ?: IgnisignSignatureRequest_SignerProfile[];

  @IsOptional()
  @IsBoolean()
  individualizeRequests ?: boolean;

  @IsOptional()
  @IsString()
  m2mId?: string;
  
  @IsOptional()
  @IsBoolean()
  highLevelProofCleaned ?: boolean;

  @IsOptional()
  @IsBoolean()
  originalFilesCleaned  ?: boolean;

  @IsOptional()
  @IsDate()
  closedAt ?: Date;
}


export class IgnisignSignatureRequest_SignerProfile {
  signerProfileId      : string;
  signatureMethodRef   : IGNISIGN_SIGNATURE_METHOD_REF;
  version              : number;
  signerIds            : string[];
}

export class IgnisignSignerProfileSignatureMethod {
  signerProfileId      : string;
  signatureMethodRef : IGNISIGN_SIGNATURE_METHOD_REF;
}

export class IgnisignSignatureRequest_Statement {
  _id                ?: string;
  appId               : string;
  appEnv              : IGNISIGN_APPLICATION_ENV;
  signatureRequestId  : string;
  documentId         ?: string;
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
  @IsEnum(IGNISIGN_LANGUAGES)
  language? : IGNISIGN_LANGUAGES;

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
  @IsString({ each: true })
  signerIds ?: string[];

  @IsOptional()
  @IsBoolean()
  extendedAuthSessionEnabled ?: boolean;

  @IsOptional()
  @IsString()
  initialSignatureRequestId ?: string;

  @IsOptional()
  @IsString({ each: true })
  signerIdsAsApprover ?: string[];

  @IsOptional()
  @IsString({ each: true })
  recipients ?: string[];
  
  @IsOptional()
  @IsBoolean()
  fullPrivacy ?: boolean;
  
  @IsOptional()
  @IsEnum(IGNISIGN_SIGNATURE_METHOD_REF)
  defaultSignatureMethod ?: IGNISIGN_SIGNATURE_METHOD_REF;
  
  @IsOptional()
  @IsObject({ each: true })
  @ValidateNested({ each: true })
  @Type(() => IgnisignSignerProfileSignatureMethod)
  signerProfilesSignatureMethod ?: IgnisignSignerProfileSignatureMethod[];

  @IsOptional()
  @IsBoolean()
  individualizeRequests ?: boolean;

  // @IsOptional()
  // @IsEnum(IGNISIGN_SIGNATURE_REQUEST_TYPE)
  // signatureRequestType?: IGNISIGN_SIGNATURE_REQUEST_TYPE;


}

export class IgnisignSignatureRequest_IdContainer {
  signatureRequestId?: string;
}


export class IgnisignSignatureRequest_Publish_ResponseDTO extends IgnisignSignatureRequest_IdContainer {
  signersBySide ?: {
    signerId          : string;
    signerExternalId  : string;
  }[];

  signersEmbedded ?: {
    signerId         : string;
    signerExternalId : string;
    token            : string;
  }[];
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
  CLEANED         = "CLEANED",
}
export class IgnisignSignatureRequest_Context extends IgnisignSignatureRequest {
  signers               : IgnisignSigner_Summary[];
  // signerIdsAsApprover    ?: string[];
  documents             : IgnisignDocument_Context[];  
  statements           ?: IgnisignSignatureRequest_Statement[];
  applicationMetadata  ?: IgnisignApplication_SignatureMetadata;
  signatureProofsUrl   ?: string;
  signatureProofStatus ?: IGNISIGN_DOCUMENT_GENERATED_STATUS;
  signerProfiles       ?: IgnisignSignerProfile[];
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