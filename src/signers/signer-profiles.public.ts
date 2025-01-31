/**
 * @module Signer Profiles Public Model
 * 
 * @description
 * Defines configuration profiles for signature processes in the Ignisign platform.
 * Implements authentication methods, integration modes, and signer requirements with comprehensive validation.
 * This model is central to managing signer identity and authentication across the platform.
 * 
 * @keyPoints
 * - Configurable authentication methods per signature type
 * - Support for SSO and email verification
 * - Domain-based restrictions for signers
 * - Recurrent signing capabilities
 * - 2FA delegation options
 * - Version tracking for profile changes
 * 
 * @integrationPoints
 * - Authentication flow configuration
 * - SSO integration setup
 * - Email verification processes
 * - Profile status management
 * - Signer restrictions enforcement
 * - Batch signer operations
 * 
 * @dependencies
 * - class-validator: For DTO validation
 * - signature-methods.public: For signature types
 * - applications.public: For environment types
 * - signers.public: For signer entities
 * - id-proofing.public: For verification methods
 * 
 * @gotchas
 * - SSO configuration requires organization setup
 * - Email verification affects signature flow
 * - Integration mode impacts available features
 * - Auth methods must match signature requirements
 * - Domain restrictions need careful management
 * - Profile versioning is mandatory
 */

import { IsArray, IsBoolean, IsEnum, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { IGNISIGN_SIGNATURE_METHOD_REF } from '../signatures/signature-methods.public';
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF, IGNISIGN_SIGNER_ENTITY_TYPE, IgnisignSigner_CreationRequestDto } from "./signers.public";
import { IGNISIGN_INTEGRATION_MODE } from '../signatures/signatures.public';
import { IGNISIGN_ID_PROOFING_METHOD_REF } from '../id-proofing/id-proofing-methods.public';
import { IGNISIGN_AUTH_FULL_MECHANISM_REF } from '../signatures/signature-auth.public';

/**
 * @enum IGNISIGN_SIGNER_PROFILE_STATUS
 * @description Available states for signer profiles.
 */
export enum IGNISIGN_SIGNER_PROFILE_STATUS {
  /** Profile is active and can be used */
  ACTIVE   = "ACTIVE",
  /** Profile has been archived */
  ARCHIVED = "ARCHIVED",
}

/**
 * @class IgnisignSignerProfile
 * @description Core profile configuration for signers.
 * Defines authentication and verification requirements.
 */
export class IgnisignSignerProfile {
  /** @property MongoDB document ID */
  @IsOptional() 
  @IsString()
  _id                     ?: string;

  /** @property Associated application */
  @IsString()
  appId                    : string;

  /** @property Application environment */
  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv                   : IGNISIGN_APPLICATION_ENV; 

  /** @property Profile display name */
  @IsString()
  name                     : string;

  /** @property Optional description */
  @IsOptional()
  @IsString()
  description             ?: string;

  /** @property Current profile status */
  @IsEnum(IGNISIGN_SIGNER_PROFILE_STATUS)
  status                   : IGNISIGN_SIGNER_PROFILE_STATUS;

  /** @property Profile version number */
  @IsNumber()
  version                  : number;

  /** @property Whether Ignisign sends email proofs */
  @IsBoolean()
  isEmailProofSentByIgnisign : boolean;

  /** @property Whether profile allows recurrent signing */
  @IsBoolean()
  isRecurrent              : boolean;

  /** @property Integration method */
  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode          : IGNISIGN_INTEGRATION_MODE;

  /** @property SSO configuration ID */
  @IsOptional()
  @IsString()
  ssoConfigId             ?: string;

  /** @property Auth methods by signature type */
  @IsObject()
  signatureAuthMethodsConfiguration : { [key in IGNISIGN_SIGNATURE_METHOD_REF] ?: IgnisignSignerProfile_SignatureAuthMethods };

  /** @property Allowed email domains */
  @IsString({ each: true })
  emailDomains           ?: string[];

  /** @property Associated signer IDs */
  @IsString({ each: true })
  signerIds             ?: string[];

  /** @property Allow 2FA delegation */
  @IsOptional()
  @IsBoolean()
  accept2FADelegation   ?: boolean;
}

/**
 * @class IgnisignSignerProfileArchiveDto
 * @description DTO for archiving signer profiles.
 */
export class IgnisignSignerProfileArchiveDto {
  /** @property Target profile ID */
  @IsString()
  signerProfileIdToTransfer : string;
}

/**
 * @class IgnisignSignerProfileDto
 * @description DTO for profile creation/update operations.
 */
export class IgnisignSignerProfileDto {
  /** @property Associated application */
  @IsString()
  appId                    : string;

  /** @property Application environment */
  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv                   : IGNISIGN_APPLICATION_ENV; 

  /** @property Profile display name */
  @IsString()
  name                     : string;

  /** @property Optional description */
  @IsOptional()
  @IsString()
  description             ?: string;

  /** @property Whether Ignisign sends email proofs */
  @IsBoolean()
  isEmailProofSentByIgnisign : boolean;

  /** @property Whether profile allows recurrent signing */
  @IsBoolean()
  isRecurrent              : boolean;

  /** @property Integration method */
  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode          : IGNISIGN_INTEGRATION_MODE;

  /** @property SSO configuration ID */
  @IsOptional()
  @IsString()
  ssoConfigId             ?: string;

  /** @property Auth methods by signature type */
  @IsObject()
  signatureAuthMethodsConfiguration : { [key in IGNISIGN_SIGNATURE_METHOD_REF] ?: IgnisignSignerProfile_SignatureAuthMethods };

  /** @property Allowed email domains */
  @IsString({ each: true })
  emailDomains           ?: string[];

  /** @property Allow 2FA delegation */
  @IsOptional()
  @IsBoolean()
  accept2FADelegation   ?: boolean;
}

/**
 * @class IgnisignSigner_To_SignerProfile
 * @description Links signers to their profiles with history tracking.
 */
export class IgnisignSigner_To_SignerProfile { 
  /** @property Associated application */
  @IsString()
  appId   : string;

  /** @property Application environment */
  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv  : IGNISIGN_APPLICATION_ENV;

  /** @property Signer identifier */
  @IsString()
  signerId      : string;

  /** @property Current profile ID */
  @IsString()
  signerProfileId : string;

  /** @property Profile assignment history */
  history       ?: {
    signerProfileId : string;
    date           : Date;
  }[];
}

/**
 * @class IgnisignSignerProfile_SignatureAuthMethods
 * @description Configures authentication methods for signature types.
 */
export class IgnisignSignerProfile_SignatureAuthMethods {
  /** @property Required ID proofing methods */
  @IsOptional()
  @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, { each: true })
  idProofings ?: IGNISIGN_ID_PROOFING_METHOD_REF[];

  /** @property Required authentication methods */
  @IsOptional()
  @IsEnum(IGNISIGN_AUTH_FULL_MECHANISM_REF, { each: true })
  authMethods ?: IGNISIGN_AUTH_FULL_MECHANISM_REF[];
}

/**
 * @class IgnisignInputNeedsDto
 * @description Defines input requirements for signer profiles.
 */
export class IgnisignInputNeedsDto {
  /** @property Associated profile ID */
  @IsString()
  signerProfileId : string;

  /** @property Required input fields */
  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF)
  inputsNeeded    : IGNISIGN_SIGNER_CREATION_INPUT_REF[];

  /** @property Optional input fields */
  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF)
  optionalInputs  : IGNISIGN_SIGNER_CREATION_INPUT_REF[];
}

/**
 * @class SignerProfileBulkDto
 * @description Handles bulk signer operations for profiles.
 */
export class SignerProfileBulkDto {
  /** @property Batch of signer requests */
  signers : IgnisignSigner_CreationRequestDto[];
}

// Configuration Notes:
// SIGNATURE PROFILE TO APP CONFIG:
// - defaultLanguage
// - languageCanBeChanged
// - extendedAuthSessionEnabled
// - sharingRestricted (may be overridable by signature request)

// SIGNATURE PROFILE TO SIGNATURE REQUEST:
// - individualizeRequests
// - WorkflowType (formerly signatureRequestType)
// - templateDisplayerId
// - fullPrivacy

// SIGNATURE PROFILE ALWAYS ACTIVE:
// - statementsEnabled
// - approverEnabled
// - recipientEnabled