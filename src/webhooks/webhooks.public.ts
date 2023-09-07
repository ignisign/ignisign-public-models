import { IsDate, IsArray, IsEnum, IsUrl, IsMongoId, IsNumber, IsOptional, IsString, ValidateNested, IsBoolean, MaxLength } from "class-validator";
import { Type } from "class-transformer";
import 'reflect-metadata';
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignError } from "../_commons/ignisign-errors.public";

export enum IGNISIGN_WEBHOOK_MESSAGE_NATURE {
  INFO      = "INFO",
  SUCCESS   = "SUCCESS",
  WARNING   = "WARNING",
  ERROR     = "ERROR"
}

export enum IGNISIGN_WEBHOOK_TOPICS {
  APP                       = "APP",               // SETTINGS_UPDATED, MEMBERSHIP_UPDATED, ARCHIVED
  SIGNATURE                 = "SIGNATURE",         // signature failed, signature finalized
  SIGNATURE_REQUEST         = "SIGNATURE_REQUEST", // INIT UPDATE, PUBLISH, LAUNCHED
  SIGNER                    = "SIGNER",            // CREATED, CLAIM_UPDATED
  
  DOCUMENT_REQUEST          = "DOCUMENT_REQUEST",  // DOC_PROVIDED, FAILED

  SIGNATURE_PROFILE         = "SIGNATURE_PROFILE", // CREATED, ARCHIVED

  SIGNATURE_SESSION         = "SIGNATURE_SESSION", // STARTED
  SIGNATURE_PROOF           = "SIGNATURE_PROOF",   // AdvancedProofGenerated, SignatureProofGenerated
  SIGNATURE_SIGNER_IMAGE    = "SIGNATURE_SIGNER_IMAGE", // GENERATED - FAILED

  SIGNER_ID_PROOFING        = "ID_PROOFING",       // TODO: POSTPONED
  SIGNER_AUTH               = "SIGNER_AUTH",       // TODO: POSTPONED
}

export enum IGNISIGN_WEBHOOK_ACTION_APPLICATION {
  SETTINGS_UPDATED   = 'SETTINGS_UPDATED',
  MEMBERSHIP_UPDATED = 'MEMBERSHIP_UPDATED',
  ARCHIVED           = 'ARCHIVED'
}

export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_PROOF {
  SIGNATURE_PROOF_GENERATED = 'SIGNATURE_PROOF_GENERATED',
  ADVANCED_PROOF_GENERATED  = 'ADVANCED_PROOF_GENERATED'
}

export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_PROFILE {
  CREATED  = 'CREATED',
  ARCHIVED = 'ARCHIVED'
}

export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_IMAGE {
  GENERATED = 'GENERATED',
}

export enum IGNISIGN_WEBHOOK_ACTION_DOCUMENT {
  PROVIDED = 'PROVIDED'
}

export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE {
  CREATED = 'CREATED',
  FAILED  = 'FAILED',
}

export enum IGNISIGN_WEBHOOK_ACTION_SIGNER {
  CREATED         = 'CREATED',
  CLAIMS_UPDATED  = 'CLAIMS_UPDATED',
}

export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_SESSION {
  INITIALIZED = 'INITIALIZED'
}

export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_REQUEST {
  INITIALIZED       = 'INITIALIZED',
  UPDATED           = 'UPDATED',
  READY             = 'READY',
  WAITING_DOCUMENTS = 'WAITING_DOCUMENTS',
  LAUNCHED          = 'LAUNCHED',
}

export class IgnisignWebhook {
  _id         ?: string;
  url          : string;
  description ?: string;
  _createdAt  ?: Date;
}

export class IgnisignWebhook_EndpointDto {
  @IsUrl()
  url          : string;

  @IsOptional()
  @IsString()
  description ?: string;
}

export type IgnisignWebhook_Callback<T = any> = (content : T, topic : IGNISIGN_WEBHOOK_TOPICS, action : string, msgNature : IGNISIGN_WEBHOOK_MESSAGE_NATURE, error ?: IgnisignError) => Promise<any>

export class IgnisignWebhook_ActionDto {
  @IsString()
  @MaxLength(512)
  appId             : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv            : IGNISIGN_APPLICATION_ENV;
  
  @IsString()
  @MaxLength(512)
  verificationToken ?: string;

  @IsEnum(IGNISIGN_WEBHOOK_TOPICS)
  topic             : IGNISIGN_WEBHOOK_TOPICS;

  @IsString()
  @MaxLength(512)
  action            : string;

  @IsEnum(IGNISIGN_WEBHOOK_MESSAGE_NATURE)
  msgNature         : IGNISIGN_WEBHOOK_MESSAGE_NATURE;

  content           : any;

  @IsOptional()
  error            ?: IgnisignError;
}