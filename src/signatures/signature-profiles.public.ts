/**
 * @module Signature Profiles Public Model
 * 
 * @description
 * Defines the configuration profiles for signature processes in the Ignisign platform.
 * Implements settings for integration modes, authentication methods, and signature requirements.
 * This model is being deprecated in favor of the new signer profiles system.
 * 
 * @keyPoints
 * - Environment-specific configurations
 * - Multiple authentication methods support
 * - Language and localization settings
 * - Integration mode configuration
 * - Most functionality moving to signer profiles
 * 
 * @integrationPoints
 * - Used in signature request creation
 * - Referenced in signer setup flows
 * - Applied in authentication processes
 * - Controls signature behavior and requirements
 * 
 * @dependencies
 * - class-validator: For DTO validation
 * - languages.public: For localization
 * - document-entities.public: For document types
 * - id-proofing.public: For verification methods
 * - signature-auth.public: For auth mechanisms
 * 
 * @gotchas
 * - Most classes marked as deprecated
 * - Status limited to PUBLISHED/ARCHIVED
 * - Features being migrated to signer profiles
 * - Document types must be explicitly defined
 * - Use IgnisignSignerProfile for new implementations
 */

import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator";
import { IGNISIGN_LANGUAGES } from "../_commons/languages.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_ID_PROOFING_METHOD_REF } from "../id-proofing/id-proofing-methods.public";
import { IGNISIGN_AUTH_FULL_MECHANISM_REF } from "./signature-auth.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "./signature-methods.public";
import { IGNISIGN_INTEGRATION_MODE } from "./signatures.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF } from "../signers/signers.public";
import { IGNISIGN_SIGNATURE_REQUEST_TYPE } from "./signature-requests.public";

/**
 * @enum IGNISIGN_SIGNATURE_PROFILE_STATUS
 * @description Available states for signature profiles.
 * @deprecated Use IgnisignSignerProfile instead
 */
export enum IGNISIGN_SIGNATURE_PROFILE_STATUS {
  /** Profile is active and published */
  PUBLISHED = "PUBLISHED",
  /** Profile has been archived */
  ARCHIVED  = "ARCHIVED",
}

/**
 * @class IgnisignSignatureProfile
 * @description Core signature profile configuration.
 * @deprecated Use IgnisignSignerProfile instead
 */
export class IgnisignSignatureProfile {
  /** @property MongoDB document ID */
  @IsOptional()
  @IsString()
  _id?                      : string;

  /** @property Associated application */
  @IsString()
  appId                     : string;

  /** @property Application environment */
  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv                    : IGNISIGN_APPLICATION_ENV; 

  /** @property Organization identifier */
  @IsString()
  orgId                     : string;
  
  /** @property Profile display name */
  @IsString()
  name                      : string;

  /** @property Integration method */
  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode           : IGNISIGN_INTEGRATION_MODE;

  /** @property Required signature method */
  @IsEnum(IGNISIGN_SIGNATURE_METHOD_REF)
  signatureMethodRef        : IGNISIGN_SIGNATURE_METHOD_REF;
  
  /** @property Required ID proofing methods */
  @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, {each: true})
  idProofings               : IGNISIGN_ID_PROOFING_METHOD_REF[];
  
  /** @property Required authentication methods */
  @IsEnum(IGNISIGN_AUTH_FULL_MECHANISM_REF, {each: true})
  authMethods               : IGNISIGN_AUTH_FULL_MECHANISM_REF[];

  /** @property Default interface language */
  @IsEnum(IGNISIGN_LANGUAGES)
  defaultLanguage           : IGNISIGN_LANGUAGES;

  /** @property Signature request type */
  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_TYPE)
  signatureRequestType      : IGNISIGN_SIGNATURE_REQUEST_TYPE = IGNISIGN_SIGNATURE_REQUEST_TYPE.STANDARD;

  /** @property Allow language changes */
  @IsBoolean()
  languageCanBeChanged      : boolean;
  
  /** @property Enable extended auth sessions */
  @IsBoolean()
  extendedAuthSessionEnabled    : boolean;

  /** @property Create individual requests */
  @IsBoolean()
  individualizeRequests?    : boolean;

  /** 
   * @property Current profile status 
   * @deprecated Use IgnisignSignerProfile instead
   */
  @IsEnum(IGNISIGN_SIGNATURE_PROFILE_STATUS)
  status                    : IGNISIGN_SIGNATURE_PROFILE_STATUS;

  /** 
   * @property Allow document requests 
   * @deprecated Use IgnisignSignerProfile instead
   */
  @IsBoolean()
  documentRequestActivated  : boolean;

  /** 
   * @property Enable statements 
   * @deprecated Use IgnisignSignerProfile instead
   */
  @IsBoolean()
  statementsEnabled         : boolean;

  /** 
   * @property Supported document types 
   * @deprecated Use IgnisignSignerProfile instead
   */
  @IsEnum(IGNISIGN_DOCUMENT_TYPE, {each: true})
  documentTypes             : IGNISIGN_DOCUMENT_TYPE[];

  /** 
   * @property Template displayer ID 
   * @deprecated Use IgnisignSignerProfile instead
   */
  @IsOptional()
  @IsString()
  templateDisplayerId      ?: string;

  /** 
   * @property Create by default 
   * @deprecated Use IgnisignSignerProfile instead
   */
  @IsOptional()
  @IsBoolean()
  createdByDefault         ?: boolean = false;

  /** 
   * @property Enable approvers 
   * @deprecated Use IgnisignSignerProfile instead
   */
  @IsBoolean()
  approverEnabled?         : boolean;
  
  /** 
   * @property Enable recipients 
   * @deprecated Use IgnisignSignerProfile instead
   */
  @IsBoolean()
  recipientEnabled?        : boolean;
}

/**
 * @class IgnisignSignatureProfile_StatusWrapper
 * @description Status container for profile updates.
 * @deprecated Use IgnisignSignerProfile instead
 */
export class IgnisignSignatureProfile_StatusWrapper {
  /** @property Profile status */
  @IsEnum(IGNISIGN_SIGNATURE_PROFILE_STATUS)
  status: IGNISIGN_SIGNATURE_PROFILE_STATUS;
}

/**
 * @class IgnisignSignatureProfile_SignerInputsConstraints
 * @description Input requirements for signers.
 * @deprecated Use IgnisignSignerProfile instead
 */
export class IgnisignSignatureProfile_SignerInputsConstraints {
  /** @property Required input fields */
  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF, { each: true })
  inputsNeeded: IGNISIGN_SIGNER_CREATION_INPUT_REF[];
}

/**
 * @class IgnisignSignerStatus_FromSignatureProfile
 * @description Signer status relative to profile requirements.
 * @deprecated Use IgnisignSignerProfile instead
 */
export class IgnisignSignerStatus_FromSignatureProfile {
  /** @property Whether signer is configured */
  @IsBoolean()
  signerIsSetup     : boolean;

  /** @property Required input fields */
  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF, { each: true })
  inputsNeeded      : IGNISIGN_SIGNER_CREATION_INPUT_REF[];

  /** @property Required ID proofing methods */
  @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, { each: true })
  idProofingRefs    : IGNISIGN_ID_PROOFING_METHOD_REF[];
}
