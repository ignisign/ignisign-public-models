import { IsDate, IsArray, IsEnum, IsMongoId, IsNumber, IsOptional, IsString, ValidateNested, IsBoolean, MaxLength, IsDefined } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_WEBHOOK_MESSAGE_NATURE, IGNISIGN_WEBHOOK_TOPICS, IgnisignWebhook_Action } from "./webhooks.public";
import { Type } from "class-transformer";

/**
 * Webhook Events Public Model
 * 
 * @summary Defines structures for tracking and managing webhook event delivery and status
 * in the Ignisign platform, enabling reliable event processing and monitoring.
 * 
 * @key_points
 * - Event filtering capabilities
 * - Status tracking
 * - Response handling
 * - Pagination support
 * - Error tracking
 * 
 * @integration_points
 * - Event delivery monitoring
 * - Status updates
 * - Error handling
 * - Event listing
 * - Response processing
 * 
 * @gotchas
 * - Event status transitions are strict
 * - Response format must be valid
 * - Content type is dynamic
 * - Error format is flexible
 * - Pagination is required for listings
 */

/**
 * Filter options for webhook event queries.
 * Used to filter events by their outcome.
 */
export enum IGNISIGN_WEBHOOK_EVENT_FILTER {
  ALL     = "ALL",
  SUCCESS = "SUCCESS",
  FAILED  = "FAILED",
}

/**
 * Status values for webhook event delivery.
 * Tracks the current state of event processing.
 */
export enum IGNISIGN_WEBHOOK_EVENT_STATUS {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
  FAILED  = "FAILED"
}

/**
 * Core webhook event entity.
 * Contains all information about a webhook event and its delivery status.
 */
export class IgnisignWebhookEvent {
  _id ?: string;
  
  @IsString()
  @MaxLength(512)
  appId : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv : IGNISIGN_APPLICATION_ENV;  

  @IsString()
  webhookId : string;
  
  @IsEnum(IGNISIGN_WEBHOOK_TOPICS)
  topic : IGNISIGN_WEBHOOK_TOPICS;

  @IsString()
  @MaxLength(512)
  action : IgnisignWebhook_Action;

  @IsEnum(IGNISIGN_WEBHOOK_MESSAGE_NATURE)
  msgNature : IGNISIGN_WEBHOOK_MESSAGE_NATURE;

  @IsDefined()
  content : any;
  
  @IsOptional()
  error ?: any;

  @IsOptional()
  @ValidateNested()
  response   ?: {
    status     ?: number;
    statusText ?: string;
  }

  @IsEnum(IGNISIGN_WEBHOOK_EVENT_STATUS)
  status : IGNISIGN_WEBHOOK_EVENT_STATUS;

  @IsOptional()
  @IsDate()
  _createdAt ?: Date;
}

/**
 * Data transfer object for paginated event listings.
 * Includes both events and pagination metadata.
 */
export class IgnisignWebhookEvent_ListingDto {
  events : IgnisignWebhookEvent[];
  searchData: { 
    total: number, 
    page: number, 
    nbEventsPerPage: number 
  }
}