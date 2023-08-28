import { IsDate, IsArray, IsEnum, IsMongoId, IsNumber, IsOptional, IsString, ValidateNested, IsBoolean, MaxLength, IsDefined } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_WEBHOOK_MESSAGE_NATURE, IGNISIGN_WEBHOOK_TOPICS } from "./webhooks.public";
import { Type } from "class-transformer";

export enum IGNISIGN_WEBHOOK_EVENT_FILTER {
  ALL     = "ALL",
  SUCCESS = "SUCCESS",
  FAILED  = "FAILED",
}

export enum IGNISIGN_WEBHOOK_EVENT_STATUS {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
  FAILED  = "FAILED"
}


export class IgnisignWebhookEventsRequestDto {
  @IsString()
  @MaxLength(512)
  appId     : string;

  @IsString()
  @MaxLength(512)
  webhookId : string;

  @IsEnum(IGNISIGN_WEBHOOK_TOPICS)
  filter   ?: IGNISIGN_WEBHOOK_EVENT_FILTER;
  
  @IsNumber()
  page     ?: number;
}


export class IgnisignWebhookEvent {
  _id        ?: string;
  
  @IsString()
  @MaxLength(512)
  appId             : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv            : IGNISIGN_APPLICATION_ENV;  

  @IsString()
  webhookId   : string;
  
  @IsEnum(IGNISIGN_WEBHOOK_TOPICS)
  topic             : IGNISIGN_WEBHOOK_TOPICS;

  @IsString()
  @MaxLength(512)
  action            : string;

  @IsEnum(IGNISIGN_WEBHOOK_MESSAGE_NATURE)
  msgNature         : IGNISIGN_WEBHOOK_MESSAGE_NATURE;

  @IsDefined()
  content           : any;
  
  @IsOptional()
  @ValidateNested()
  response   ?: {
    // data       ?: any;
    status     ?: number;
    statusText ?: string;
  }

  @IsEnum(IGNISIGN_WEBHOOK_EVENT_STATUS)
  status      : IGNISIGN_WEBHOOK_EVENT_STATUS;

  @IsOptional()
  @IsDate()
  _createdAt ?: Date;
}

export class IgnisignWebhookEventsResponseInitDto {
  webhookId       : string;
  [IGNISIGN_WEBHOOK_EVENT_FILTER.ALL]     : IgnisignWebhookEventResponseDto;
  [IGNISIGN_WEBHOOK_EVENT_FILTER.SUCCESS] : IgnisignWebhookEventResponseDto;
  [IGNISIGN_WEBHOOK_EVENT_FILTER.FAILED]  : IgnisignWebhookEventResponseDto;
}

export class IgnisignWebhookEventResponseDto {
  events : IgnisignWebhookEvent[];
  searchData: { total: number, page: number, nbEventsPerPage: number }
}