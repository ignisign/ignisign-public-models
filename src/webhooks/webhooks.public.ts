import { IsDate, IsArray, IsEnum, IsUrl, IsMongoId, IsNumber, IsOptional, IsString, ValidateNested, IsBoolean, MaxLength } from "class-validator";
import { Type } from "class-transformer";
import 'reflect-metadata';
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignError } from "../_commons/ignisign-errors.public";
import { IgnisignWebhookDto } from "./webhook-responses.public";

/**
 * Webhooks Public Model
 * 
 * @summary Defines structures and operations for webhook management in the Ignisign platform,
 * enabling real-time event notifications and integrations.
 * 
 * @key_points
 * - Comprehensive event topics
 * - Multiple message types
 * - Action-specific handling
 * - Secure verification
 * - Flexible endpoint configuration
 * 
 * @integration_points
 * - Event notification
 * - Status updates
 * - Error reporting
 * - Process monitoring
 * - Integration management
 * 
 * @gotchas
 * - URLs must be valid and accessible
 * - Topics affect available actions
 * - Verification token required
 * - Message size limits apply
 * - Error handling is critical
 */

/**
 * Message nature enumeration for webhook notifications.
 * Defines the severity and type of the message.
 */
export enum IGNISIGN_WEBHOOK_MESSAGE_NATURE {
  INFO      = "INFO",
  SUCCESS   = "SUCCESS",
  WARNING   = "WARNING",
  ERROR     = "ERROR",
}

/**
 * Available topics for webhook subscriptions.
 * Each topic corresponds to a specific area of functionality.
 */
export enum IGNISIGN_WEBHOOK_TOPICS {
  ALL                       = 'ALL',
  APP                       = "APP",               // SETTINGS_UPDATED, MEMBERSHIP_UPDATED, ARCHIVED
  SIGNATURE                 = "SIGNATURE",         // signature failed, signature finalized
  SIGNATURE_REQUEST         = "SIGNATURE_REQUEST", // INIT UPDATE, PUBLISH, LAUNCHED
  SIGNER                    = "SIGNER",            // CREATED, CLAIM_UPDATED
  
  SIGNATURE_PROFILE         = "SIGNATURE_PROFILE", // CREATED, ARCHIVED
  SIGNATURE_SESSION         = "SIGNATURE_SESSION", // STARTED
  SIGNATURE_PROOF           = "SIGNATURE_PROOF",   // AdvancedProofGenerated, SignatureProofGenerated
  SIGNATURE_SIGNER_IMAGE    = "SIGNATURE_SIGNER_IMAGE", // GENERATED - FAILED
  SIGNER_ID_PROOFING        = "ID_PROOFING",       // TODO: POSTPONED
  SIGNER_AUTH               = "SIGNER_AUTH",       // TODO: POSTPONED
}

/**
 * Application-specific webhook actions.
 * Triggered by changes in application settings or status.
 */
export enum IGNISIGN_WEBHOOK_ACTION_APPLICATION {
  SETTINGS_UPDATED   = 'SETTINGS_UPDATED',
  MEMBERSHIP_UPDATED = 'MEMBERSHIP_UPDATED',
  ARCHIVED           = 'ARCHIVED',
}

/**
 * Signature proof generation actions.
 * Triggered when proofs are generated or advanced.
 */
export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_PROOF {
  GENERATED      = 'GENERATED',
  ADV_GENERATED  = 'ADV_GENERATED',
}

/**
 * Signature profile lifecycle actions.
 * Triggered by profile creation or archival.
 */
export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_PROFILE {
  CREATED  = 'CREATED',
  ARCHIVED = 'ARCHIVED',
}

/**
 * Signature image generation actions.
 * Triggered when signature images are created.
 */
export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_IMAGE {
  GENERATED = 'GENERATED',
}

/**
 * Document request actions.
 * Triggered when documents are provided.
 */
export enum IGNISIGN_WEBHOOK_ACTION_DOCUMENT_REQUEST {
  PROVIDED = 'PROVIDED',
}

/**
 * Core signature process actions.
 * Triggered by signature completion or failure.
 */
export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE {
  FINALIZED = 'FINALIZED',
  FAILED    = 'FAILED',
}

/**
 * Signer-related actions.
 * Triggered by signer creation and updates.
 */
export enum IGNISIGN_WEBHOOK_ACTION_SIGNER {
  CREATED       = 'CREATED',
  INPUTS_ADDED  = 'INPUTS_ADDED',
}

/**
 * Signature session actions.
 * Triggered by session initialization.
 */
export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_SESSION {
  INITIALIZED = 'INITIALIZED'
}

/**
 * Signature request lifecycle actions.
 * Triggered by various stages in the request process.
 */
export enum IGNISIGN_WEBHOOK_ACTION_SIGNATURE_REQUEST {
  INITIALIZED         = 'INITIALIZED',
  UPDATED             = 'UPDATED',
  READY               = 'READY',
  LAUNCHED            = 'LAUNCHED',
  FAILED              = 'FAILED',
  CANCELLED           = 'CANCELLED', // Only send if no signature has been done => else send COMPLETED
  EXPIRED             = 'EXPIRED',   // Only send if no signature has been done => else send COMPLETED
  COMPLETED           = 'COMPLETED',
  CHILDREN_GENERATED  = 'CHILDREN_GENERATED',
  APPROVER_STEP      = 'APPROVER_STEP',
}

export type IGNISIGN_WEBHOOK_ALL_TYPE = 'ALL';
export const IGNISIGN_WEBHOOK_ACTION_ALL = 'ALL';

/**
 * Union type of all possible webhook actions.
 * Used for type-safe action handling.
 */
export type IgnisignWebhook_Action =  IGNISIGN_WEBHOOK_ACTION_SIGNATURE_REQUEST | 
                                      IGNISIGN_WEBHOOK_ACTION_SIGNATURE_SESSION |
                                      IGNISIGN_WEBHOOK_ACTION_SIGNATURE         |
                                      IGNISIGN_WEBHOOK_ACTION_SIGNER            |
                                      IGNISIGN_WEBHOOK_ACTION_DOCUMENT_REQUEST  |
                                      IGNISIGN_WEBHOOK_ACTION_SIGNATURE_IMAGE   |
                                      IGNISIGN_WEBHOOK_ACTION_SIGNATURE_PROFILE |
                                      IGNISIGN_WEBHOOK_ACTION_SIGNATURE_PROOF   |
                                      IGNISIGN_WEBHOOK_ACTION_APPLICATION       |
                                      IGNISIGN_WEBHOOK_ALL_TYPE;

/**
 * Core webhook configuration class.
 * Defines endpoint and status information.
 */
export class IgnisignWebhook {
  _id         ?: string;
  url          : string;
  description ?: string;
  isDisabled  ?: boolean;
  _createdAt  ?: Date;
}

/**
 * Data transfer object for webhook endpoints.
 * Used for creating and updating webhook configurations.
 */
export class IgnisignWebhook_EndpointDto {
  @IsUrl({ require_tld: false }) // To allow localhost
  url          : string;

  @IsOptional()
  @IsString()
  description ?: string;
}

/**
 * Parameters for webhook callback functions.
 * Includes content and metadata for the webhook call.
 */
export type IgnisignWebhook_CallbackParams<T = any> = {
  content     : T,
  error      ?: IgnisignError,
  msgNature  ?: IGNISIGN_WEBHOOK_MESSAGE_NATURE,
  action     ?: string,
  topic      ?: IGNISIGN_WEBHOOK_TOPICS
}

/**
 * Type definition for webhook callback functions.
 * Defines the expected signature of callback handlers.
 */
export type IgnisignWebhook_Callback<T = any> = ({content, error, msgNature, action, topic}: IgnisignWebhook_CallbackParams<T>) => Promise<any>

/**
 * Data transfer object for webhook actions.
 * Used for sending webhook notifications.
 */
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
  action            : IgnisignWebhook_Action;

  @IsEnum(IGNISIGN_WEBHOOK_MESSAGE_NATURE)
  msgNature         : IGNISIGN_WEBHOOK_MESSAGE_NATURE;

  content           : IgnisignWebhookDto;

  @IsOptional()
  error            ?: IgnisignError;
}
