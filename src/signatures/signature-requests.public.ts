/**
 * @module Signature Requests Public Model
 * 
 * @description
 * Defines the structure and lifecycle of signature requests in the Ignisign platform.
 * Implements request types, statuses, diffusion modes, and validation with comprehensive DTOs.
 * This model is central to managing the signature workflow process.
 * 
 * @keyPoints
 * - Eleven distinct request statuses for lifecycle tracking
 * - Multiple request types (STANDARD, SEAL, BARE_SIGNATURE, etc.)
 * - Diffusion mode support (WHEN_READY, SCHEDULED)
 * - Extensive validation using class-validator decorators
 * 
 * @integrationPoints
 * - Used in signature workflow management
 * - Referenced in document handling and processing
 * - Applied in signer coordination and tracking
 * - Controls request lifecycle and state transitions
 * 
 * @dependencies
 * - class-validator: For DTO field validation
 * - class-transformer: For object transformation
 * - reflect-metadata: For decorator support
 * - applications.public: For environment types
 * - documents/signers: For related entities
 * 
 * @gotchas
 * - Some post-processing mechanisms are commented out (pending implementation)
 * - Complex status transitions must be carefully managed
 * - Title/description fields have specific length limits
 * - Statement functionality is being deprecated
 * - Careful handling of dates and timezones required
 */

import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsDateString, IsEnum, IsNumber, IsObject, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignDocument_Context } from "../documents/document-entities.public";
import { IGNISIGN_LANGUAGES } from "../_commons/languages.public";
import { IgnisignApplication_SignatureMetadata } from "./signatures.public";
import { IgnisignSigner_Summary } from "../signers/signers.public";
import "reflect-metadata";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "./signature-methods.public";
import { IgnisignSignerProfile } from "../signers/signer-profiles.public";

/**
 * @enum IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE
 * @description Controls when and how signature requests are distributed to signers.
 */
export enum IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE {
  /** Send immediately when request is ready */
  WHEN_READY  = 'WHEN_READY',
  /** Send at a specified future date/time */
  SCHEDULED   = 'SCHEDULED'
}

/**
 * @enum IGNISIGN_SIGNATURE_REQUEST_STATUS
 * @description Comprehensive list of possible signature request states.
 */
export enum IGNISIGN_SIGNATURE_REQUEST_STATUS {
  /** Initial creation state */
  DRAFT              = 'DRAFT',
  /** All signatures collected */
  COMPLETED          = 'COMPLETED',
  /** Request timeout reached */
  EXPIRED            = 'EXPIRED',
  /** Processing error occurred */
  FAILED             = 'FAILED',
  /** Manually cancelled */
  CANCELLED          = 'CANCELLED',
  /** Ready for signatures */
  READY              = 'READY',
  /** Actively collecting signatures */
  IN_PROGRESS        = 'IN_PROGRESS',
  /** Post-signature processing */
  PROCESSING         = 'PROCESSING',
  /** Sub-requests generated */
  CHILDREN_GENERATED = 'CHILDREN_GENERATED',
  /** Initial launch state */
  LAUNCHING          = 'LAUNCHING',
  /** Launch process failed */
  LAUNCH_ERROR       = 'LAUNCH_ERROR',
}

/**
 * @const SIGNATURE_REQUESTS_STATUS_DONE
 * @description Terminal states for signature requests.
 */
export const SIGNATURE_REQUESTS_STATUS_DONE = [
  IGNISIGN_SIGNATURE_REQUEST_STATUS.COMPLETED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.EXPIRED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.FAILED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.CANCELLED
];

/**
 * @const SIGNATURE_REQUESTS_STATUS_IN_PROGRESS
 * @description Active states for signature requests.
 */
export const SIGNATURE_REQUESTS_STATUS_IN_PROGRESS = [
  IGNISIGN_SIGNATURE_REQUEST_STATUS.READY,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.IN_PROGRESS,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.PROCESSING,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.CHILDREN_GENERATED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.LAUNCHING
];

/**
 * @const IGNISIGN_SIGNATURE_REQUEST_CLOSED_STATUS
 * @description States where no further action is possible.
 */
export const IGNISIGN_SIGNATURE_REQUEST_CLOSED_STATUS = [
  IGNISIGN_SIGNATURE_REQUEST_STATUS.COMPLETED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.EXPIRED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.FAILED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.CANCELLED,
  IGNISIGN_SIGNATURE_REQUEST_STATUS.LAUNCH_ERROR
]

/**
 * @enum IGNISIGN_SIGNATURE_REQUEST_TYPE
 * @description Types of signature requests supported by the platform.
 */
export enum IGNISIGN_SIGNATURE_REQUEST_TYPE {
  /** Standard document signing */
  STANDARD       = "STANDARD",
  /** Signer identity setup */
  SIGNER_SETUP   = "SIGNER_SETUP",
  /** Document sealing */
  SEAL           = "SEAL",
  /** Machine-to-machine sealing */
  SEAL_M2M       = "SEAL_M2M",
  /** Signature without document */
  BARE_SIGNATURE = "BARE_SIGNATURE",
}

/**
 * @enum IGNISIGN_SIGNATURE_REQUEST_POST_PROCESSING_MECHANISM
 * @description Post-signature processing options.
 */
export enum IGNISIGN_SIGNATURE_REQUEST_POST_PROCESSING_MECHANISM {
  /** Generate signature proof */
  SIGNATURE_PROOF = "SIGNATURE_PROOF",
  // SEAL                   = "SEAL",
  // VERIFIABLE_CREDENTIALS = "VERIFIABLE_CREDENTIALS",
  // DELEGATED_PROCESSING   = "DELEGATED_PROCESSING"
}

/**
 * @class IgnisignSignatureRequest
 * @description Core signature request entity with comprehensive validation.
 */
export class IgnisignSignatureRequest {
  /** @property MongoDB document ID */
  _id                       ?: string;

  /** @property Creation timestamp */
  @IsOptional()
  @IsDate()
  _createdAt                ?: Date;

  /** @property Associated application ID */
  @IsString()
  appId                      : string;

  /** @property Application environment */
  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv                     : IGNISIGN_APPLICATION_ENV;

  /** @property Request type */
  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_TYPE)
  signatureRequestType      : IGNISIGN_SIGNATURE_REQUEST_TYPE = IGNISIGN_SIGNATURE_REQUEST_TYPE.STANDARD;

  /** @property Display title */
  @IsOptional()
  @IsString()
  title                     ?: string;

  /** @property Request description */
  @IsOptional()
  @IsString()
  description               ?: string;

  /** @property Interface language */
  @IsOptional()
  @IsEnum(IGNISIGN_LANGUAGES)
  language                  ?: IGNISIGN_LANGUAGES;

  /** @property Current status */
  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_STATUS)
  status                     : IGNISIGN_SIGNATURE_REQUEST_STATUS;

  /** @property External reference ID */
  @IsOptional()
  @IsString()
  externalId                ?: string;

  /** @property Request creator ID */
  @IsOptional()
  @IsString()
  creatorId                 ?: string;

  /** @property Associated document IDs */
  @IsOptional()
  @IsString({each: true})
  documentIds               ?: string[];

  /** @property Assigned signer IDs */
  @IsOptional()
  @IsString({each: true})
  signerIds                 ?: string[];

  /** @property Completed signer IDs */
  @IsOptional()
  @IsString({each: true})
  signedBy                  ?: string[];  

  /** @property Request expiration date */
  @IsOptional()
  @IsDate()
  expirationDate            ?: Date;

  /** @property Whether expiration is active */
  @IsOptional()
  @IsBoolean()
  expirationDateIsActivated ?: boolean;

  /** @property Distribution mode */
  @IsOptional()
  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE)
  diffusionMode             ?: IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE;

  /** @property Scheduled distribution date */
  @IsOptional()
  @IsDate()
  diffusionDate             ?: Date;

  /** @property Parent request ID */
  @IsOptional()
  @IsString()
  initialSignatureRequestId ?: string;

  /** @property Approver signer IDs */
  @IsOptional()
  @IsString({ each: true })
  signerIdsAsApprover ?: string[];

  /** @property Additional recipients */
  @IsOptional()
  @IsString({ each: true })
  recipients ?: string[];

  /** @property Environment settings version */
  @IsOptional()
  @IsNumber()
  appEnvSettingVersion ?: number;

  /** @property Default signature method */
  @IsEnum(IGNISIGN_SIGNATURE_METHOD_REF)
  defaultSignatureMethod : IGNISIGN_SIGNATURE_METHOD_REF;

  /** @property Signer profiles configuration */
  @IsOptional()
  @IsObject({ each: true })
  @ValidateNested({ each: true })
  @Type(() => IgnisignSignatureRequest_SignerProfile)
  signerProfilesUsed ?: IgnisignSignatureRequest_SignerProfile[];

  /** @property Whether to create individual requests */
  @IsOptional()
  @IsBoolean()
  individualizeRequests ?: boolean;

  /** @property M2M identifier */
  @IsOptional()
  @IsString()
  m2mId?: string;
  
  /** @property High-level proof cleanup status */
  @IsOptional()
  @IsBoolean()
  highLevelProofCleaned ?: boolean;

  /** @property Original files cleanup status */
  @IsOptional()
  @IsBoolean()
  originalFilesCleaned  ?: boolean;

  /** @property Request closure timestamp */
  @IsOptional()
  @IsDate()
  closedAt ?: Date;
}

/**
 * @class IgnisignSignatureRequest_SignerProfile
 * @description Configuration for a signer profile in a request.
 */
export class IgnisignSignatureRequest_SignerProfile {
  /** @property Profile identifier */
  signerProfileId      : string;
  /** @property Required signature method */
  signatureMethodRef   : IGNISIGN_SIGNATURE_METHOD_REF;
  /** @property Profile version */
  version              : number;
  /** @property Associated signer IDs */
  signerIds            : string[];
}

/**
 * @class IgnisignSignerProfileSignatureMethod
 * @description Links a signer profile to a signature method.
 */
export class IgnisignSignerProfileSignatureMethod {
  /** @property Profile identifier */
  signerProfileId      : string;
  /** @property Required signature method */
  signatureMethodRef : IGNISIGN_SIGNATURE_METHOD_REF;
}

/**
 * @class IgnisignSignatureRequest_Statement
 * @description Statement associated with a signature request.
 * @deprecated Use document content instead
 */
export class IgnisignSignatureRequest_Statement {
  /** @property Statement identifier */
  _id                ?: string;
  /** @property Associated application */
  appId               : string;
  /** @property Application environment */
  appEnv              : IGNISIGN_APPLICATION_ENV;
  /** @property Parent request ID */
  signatureRequestId  : string;
  /** @property Associated document */
  documentId         ?: string;
  /** @property Statement content */
  labelMd             : string;
}

/**
 * @class IgnisignSignatureRequest_UpdateDto
 * @description DTO for updating signature request properties.
 */
export class IgnisignSignatureRequest_UpdateDto {
  /** @property Updated title (max 1024 chars) */
  @IsString()
  @IsOptional()
  @MaxLength(1024)
  title ?: string;

  /** @property Updated description (max 4096 chars) */
  @IsString()
  @IsOptional()
  @MaxLength(4096)
  description ?: string;

  /** @property New expiration date */
  @IsOptional()
  @IsDateString()
  expirationDate ?: Date;

  /** @property Update expiration activation */
  @IsOptional()
  @IsBoolean()
  expirationDateIsActivated ?: boolean;

  /** @property New interface language */
  @IsOptional()
  @IsEnum(IGNISIGN_LANGUAGES)
  language? : IGNISIGN_LANGUAGES;

  /** @property Updated document list */
  @IsOptional()
  @IsString({ each: true })
  documentIds ?: string[];

  /** @property New external reference */
  @IsOptional()
  @IsString()
  externalId ?: string;

  /** @property Updated distribution mode */
  @IsOptional()
  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE)
  diffusionMode ?: IGNISIGN_SIGNATURE_REQUEST_DIFFUSION_MODE;

  /** @property New distribution date */
  @IsOptional()
  @IsDateString()
  diffusionDate ?: Date;

  /** @property Updated statements */
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => IgnisignSignatureRequest_Statement)
  statements ?: IgnisignSignatureRequest_Statement[];

  /** @property Updated signer list */
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