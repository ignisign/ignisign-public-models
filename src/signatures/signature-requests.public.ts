import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDateString, IsEnum, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
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
  READY             = 'READY',
  IN_PROGRESS       = 'IN_PROGRESS',
  
  COMPLETED         = 'COMPLETED',
  EXPIRED           = 'EXPIRED',
  FAILED            = 'FAILED',
  CANCELLED         = 'CANCELLED',
}

export const IGNISIGN_SIGNATURE_REQUEST_CLOSED_STATUS = [
  IGNISIGN_SIGNATURE_REQUEST_STATUS.COMPLETED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.EXPIRED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.FAILED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.CANCELLED
]

export class IgnisignSignatureRequest {
  _id                                   ?: string;
  appId                                  : string;
  appEnv                                 : IGNISIGN_APPLICATION_ENV;
  signatureProfileId                     : string;
  title                                 ?: string;
  description                           ?: string;
  expirationDate                        ?: Date;
  expirationDateIsActivated             ?: boolean;
  status                                 : IGNISIGN_SIGNATURE_REQUEST_STATUS;
  language                              ?: IGNISIGN_SIGNATURE_LANGUAGES;
  documentIds                           ?: string[];
  externalId                            ?: string;
  diffusionMode                         ?: IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE;
  diffusionDate                         ?: Date;
  signerIds                             ?: string[];
  signedBy                              ?: string[];
  _createdAt                            ?: Date;
  isFakeIdProofing                      ?: boolean;
  isFakeSms                             ?: boolean;
  creatorId                             ?: string;
  // legalSignerMethod                     ?: IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF;
}

export class IgnisignSignatureRequest_Statement {
  _id                ?: string;
  appId               : string;
  appEnv              : IGNISIGN_APPLICATION_ENV;
  signatureRequestId  : string;
  documentId         ?: string;
  target              : IGNISIGN_SIGNATURE_REQUEST_STATEMENT_TARGET;
  labelMd           : string;
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
  // @IsDate()
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
}

export class IgnisignSignatureRequest_IdContainer {
  signatureRequestId?               : string;
}

export class IgnisignSignatureRequest_WithDocName extends IgnisignSignatureRequest {
  docFileName ?: string;  
  docLabel    ?: string;
}

export class IgnisignSignatureRequests_Paginate {
  signatureRequests:  IgnisignSignatureRequest_WithDocName[];
  paginationData: { total: number, page: number, nbEventsPerPage: number };
}

export class IgnisignSignatureRequest_Context extends IgnisignSignatureRequest {
  signers               : IgnisignSigner_Summary[];
  documents             : IgnisignDocument_Context[];  
  statements           ?: IgnisignSignatureRequest_Statement[];
  signatureProfile      : IgnisignSignatureProfile;
  applicationMetadata  ?: IgnisignApplication_SignatureMetadata;
  signatureProofsUrl   ?: string;
}

