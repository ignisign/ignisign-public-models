import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF } from "../signers/signers.public";
import { IGNISIGN_SIGNATURE_REQUEST_STATUS } from "../signatures/signature-requests.public";

/**
 * Webhook Responses Public Model
 * 
 * @summary Defines data transfer objects for various webhook response types in the Ignisign platform,
 * providing structured response formats for different event categories.
 * 
 * @key_points
 * - Type-safe response structures
 * - Event-specific DTOs
 * - Validation rules
 * - External ID support
 * - Nested object handling
 * 
 * @integration_points
 * - Event response handling
 * - Data validation
 * - External system integration
 * - Status tracking
 * - Error reporting
 * 
 * @gotchas
 * - Response types must match events
 * - External IDs are optional
 * - Nested validation is enforced
 * - Some fields are environment-specific
 * - Token handling is sensitive
 */

/**
 * Response DTO for signature session events.
 * Contains session identification and context.
 */
export class IgnisignWebhookDto_SignatureSession {
  @IsString()
  signerId: string

  @IsString()
  signatureRequestId: string

  @IsOptional()
  @IsString()
  signatureRequestExternalId   ?: string;

  @IsOptional()
  @IsString()
  signerExternalId   ?: string;
}

/**
 * Response DTO for signature proof error events.
 * Includes error context and related identifiers.
 */
export class IgnisignWebhookDto_SignatureProof_Error {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @IsString()
  documentId         : string;

  @IsOptional()
  @IsString()
  documentExternalId         : string;

  @IsString()
  signatureRequestId : string;

  @IsOptional()
  @IsString()
  signatureRequestExternalId   ?: string;

  @IsOptional()
  @IsString()
  signatureProofToken?: string;
  
  @IsOptional()
  @IsString()
  signatureProofUrl?: string;
}

/**
 * Internal DTO for signature proof document details.
 * Used within success responses.
 */
class IgnisignWebhookDto_SignatureProof_Document {
  @IsString()
  documentId : string;

  @IsOptional()
  @IsString()
  documentExternalId ?: string;

  @IsString()
  token : string;

  @IsString()
  url : string;
}

/**
 * Response DTO for successful signature proof events.
 * Includes document details and proof references.
 */
export class IgnisignWebhookDto_SignatureProof_Success {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @ValidateNested({ each: true })
  @Type(() => IgnisignWebhookDto_SignatureProof_Document)
  documents : IgnisignWebhookDto_SignatureProof_Document[];

  @IsString()
  signatureRequestId : string;

  @IsOptional()
  @IsString()
  signatureRequestExternalId   ?: string;

  @IsOptional()
  @IsString()
  signatureProofToken?: string;
  
  @IsOptional()
  @IsString()
  signatureProofUrl?: string;
}

/**
 * Response DTO for advanced signature proof events.
 * Contains advanced proof details and references.
 */
export class IgnisignWebhookDto_SignatureAdvancedProof {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @IsString()
  documentId         : string;

  @IsOptional()
  @IsString()
  documentExternalId         : string;

  @IsString()
  signatureRequestId : string;

  @IsOptional()
  @IsString()
  signatureRequestExternalId   ?: string;

  @IsOptional()
  @IsString()
  signatureProofToken?: string;
  
  @IsOptional()
  @IsString()
  signatureProofUrl?: string;
}

/**
 * Response DTO for application events.
 * Contains minimal application context.
 */
export class IgnisignWebhookDto_Application {
  userId ?: string
}

/**
 * Response DTO for signer events.
 * Includes signer details and input tracking.
 */
export class IgnisignWebhookDto_Signer {
  @IsString()
  appId       : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv      : IGNISIGN_APPLICATION_ENV;

  @IsString()
  signerId    : string;

  @IsOptional()
  @IsString()
  signerExternalId  ?: string;

  @IsOptional()
  inputsAdded ?: IGNISIGN_SIGNER_CREATION_INPUT_REF[];
}

/**
 * Response DTO for signature image events.
 * Contains image generation context and references.
 */
export class IgnisignWebhookDto_SignatureImage {
  @IsString()
  appId              : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv             : IGNISIGN_APPLICATION_ENV;

  @IsString()
  documentId         : string;

  @IsOptional()
  @IsString()
  documentExternalId   ?: string;

  @IsString()
  signatureRequestId : string;

  @IsOptional()
  @IsString()
  signatureRequestExternalId   ?: string;

  @IsString()
  signerId           : string;

  @IsOptional()
  @IsString()
  signerExternalId   ?: string;
}

/**
 * Response DTO for signature request signer groups.
 * Manages different signer categories.
 */
export class IgnisignWebhookDto_SignatureRequest_Signers {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => IgnisignWebhookDto_SignatureRequestSignerBySide)
  signersBySide ?: IgnisignWebhookDto_SignatureRequestSignerBySide[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => IgnisignWebhookDto_SignatureRequestSignerEmbedded)
  signersEmbedded ?: IgnisignWebhookDto_SignatureRequestSignerEmbedded[];
}

/**
 * Response DTO for signature request events.
 * Contains request status and signer details.
 */
export class IgnisignWebhookDto_SignatureRequest {
  @IsString()
  signatureRequestId : string;

  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_STATUS)
  status : IGNISIGN_SIGNATURE_REQUEST_STATUS;

  @IsOptional()
  @IsString()
  signatureRequestExternalId ?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => IgnisignWebhookDto_SignatureRequest_Signers)
  signers ?: IgnisignWebhookDto_SignatureRequest_Signers;

  @IsOptional()
  @IsString()
  initialSignatureRequestId ?: string;
}

/**
 * Response DTO for side-based signature request signers.
 * Used for multi-party signatures.
 */
export class IgnisignWebhookDto_SignatureRequestSignerBySide {
  signerId   : string;
  signerExternalId : string;
  token?      : string;
}

/**
 * Response DTO for embedded signature request signers.
 * Used for embedded signature flows.
 */
export class IgnisignWebhookDto_SignatureRequestSignerEmbedded {
  signerId   : string;
  signerExternalId : string;
  token?      : string;
}

/**
 * Response DTO for signature profile events.
 * Contains profile identification.
 */
export class IgnisignWebhookDto_SignatureProfile {
  signatureProfileId  : string;
}

/**
 * Response DTO for signature events.
 * Contains comprehensive signature context.
 */
export class IgnisignWebhookDto_Signature {
  @IsString()
  appId           : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv          : IGNISIGN_APPLICATION_ENV;

  @IsEnum(IGNISIGN_DOCUMENT_TYPE)
  documentNature  : IGNISIGN_DOCUMENT_TYPE;

  @IsString()
  signerId        : string;

  @IsOptional()
  @IsString()
  signerExternalId   ?: string;
  
  @IsString()
  documentId      : string;

  @IsOptional()
  @IsString()
  documentExternalId   ?: string;

  @IsString()
  signatureRequestId  : string;

  @IsOptional()
  @IsString()
  signatureRequestExternalId         ?: string;

  @IsString()
  signatureId     : string;
}

/**
 * Union type of all possible webhook response DTOs.
 * Used for type-safe response handling.
 */
export type IgnisignWebhookDto = IgnisignWebhookDto_SignatureSession        |
                                  IgnisignWebhookDto_SignatureRequest       |
                                  IgnisignWebhookDto_SignatureProfile       |
                                  IgnisignWebhookDto_Signer                 |
                                  IgnisignWebhookDto_Signature              |
                                  IgnisignWebhookDto_SignatureImage         |
                                  IgnisignWebhookDto_SignatureProof_Error   |
                                  IgnisignWebhookDto_SignatureProof_Success |
                                  IgnisignWebhookDto_SignatureAdvancedProof |
                                  IgnisignWebhookDto_Application
