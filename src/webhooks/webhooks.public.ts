import { IsDate, IsArray, IsEnum, IsMongoId, IsNumber, IsOptional, IsString, ValidateNested, IsBoolean, MaxLength } from "class-validator";
import { Type } from "class-transformer";
import 'reflect-metadata';
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

export enum IGNISIGN_WEBHOOK_MESSAGE_NATURE {
  INFO      = "INFO",
  SUCCESS   = "SUCCESS",
  WARNING   = "WARNING",
  ERROR     = "ERROR"
}

export enum IGNISIGN_WEBHOOK_TOPICS {
  APP                       = "APP",
  SIGNATURE                 = "SIGNATURE",
  SIGNATURE_REQUEST         = "SIGNATURE_REQUEST",
  SIGNER                    = "SIGNER",
  DOCUMENT                  = "DOCUMENT",
  DOCUMENT_REQUEST          = "DOCUMENT_REQUEST",
  SIGNER_KEY                = "SIGNER_KEY",
  ID_PROOFING               = "ID_PROOFING",
  PDF                       = "PDF",
  SIGNATURE_IMAGE           = "SIGNATURE_IMAGE",
  SIGNATURE_SESSION= "SIGNATURE_SESSION"
}

export enum IGNISIGN_WEBHOOK_ACTION__PDF {
  GENERATED = 'GENERATED'
}

export enum IGNISIGN_WEBHOOK_ACTION__SIGNATURE_IMAGE {
  GENERATED = 'GENERATED'
}

export enum IGNISIGN_WEBHOOK_ACTION__DOCUMENT {
  PROVIDED = 'PROVIDED'
}

export enum IGNISIGN_WEBHOOK_ACTION__SIGNATURE {
  CREATED = 'CREATED',
  FAILED  = 'FAILED',
}

export enum IGNISIGN_WEBHOOK_ACTION__SIGNER {
  CREATED = 'CREATED',
  LAUNCHED = 'LAUNCHED',
}

export enum IGNISIGN_WEBHOOK_ACTION__SIGNATURE_SESSION {
  INITIALIZED = 'INITIALIZED'
}

export enum IGNISIGN_SIGNATURE_REQUEST_WEBHOOK_ACTION {
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

export class IgnisignWebhookEndpointDto {
  url          : string;
  description ?: string;
}


export type IgnisignWebhookCallback<T = any> = (content : T, topic : IGNISIGN_WEBHOOK_TOPICS, action : string, msgNature : IGNISIGN_WEBHOOK_MESSAGE_NATURE) => Promise<any>

export class IgnisignWebhookActionDto {
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
}