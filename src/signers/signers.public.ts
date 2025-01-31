import { IsBoolean, IsDateString, IsEmail, IsEnum, IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

import { IgnisignSignatureRequest_WithDocName } from "../signatures/signature-requests.public";

import { IGNISIGN_SIGNER_CLAIM_REF, IGNISIGN_SIGNER_CLAIM_STATUS } from "./signer-claims.public";

import { COUNTRIES } from "../_commons/countries.public";
import { IGNISIGN_AUTH_FULL_MECHANISM_REF } from "../signatures/signature-auth.public";

/**
 * Signers Public Model
 * 
 * @summary Defines core signer types and structures in the Ignisign platform, including entity types,
 * statuses, and metadata handling for digital signature processes.
 * 
 * @key_points
 * - Multiple entity types (NATURAL_PERSON, LEGAL_PERSON) for different signer categories
 * - Extensive status tracking (CREATED, ACTIVE, ARCHIVED) for lifecycle management
 * - Rich metadata support for signer identification and verification
 * - Flexible creation and update operations with validation
 * 
 * @integration_points
 * - Signer creation and management
 * - Profile association and updates
 * - Status transitions and lifecycle events
 * - Identity verification flows
 * - Signature request association
 * 
 * @gotchas
 * - Entity type affects available operations and required fields
 * - Status transitions follow strict rules
 * - Some fields are environment-specific
 * - Profile changes may impact existing signature requests
 * - Validation rules vary by entity type
 */

/*********************************** SIGNER ***********************************/

export enum IGNISIGN_SIGNER_ENTITY_TYPE {
    NATURAL = 'NATURAL',
    SEAL   = 'SEAL',
}

export enum IGNISIGN_SIGNER_STATUS { 
  CREATED   = "CREATED",
  PENDING   = "PENDING",
  BLOCKED   = "BLOCKED",
  ACTIVE    = "ACTIVE",
  CORRUPTED = "CORRUPTED",
}

/**
 * Represents a signer entity in the Ignisign platform.
 * Core class for managing signer identity and metadata.
 */
export class IgnisignSigner { 
  _id?                              : string;
  appId                             : string;
  appEnv                            : IGNISIGN_APPLICATION_ENV;
  status                            : IGNISIGN_SIGNER_STATUS;
  entityType                        : IGNISIGN_SIGNER_ENTITY_TYPE;
  _createdAt?                       : Date;
  agreedLegalTerms                  ?: boolean;
  certificateDisseminationAgreement ?: boolean;
  externalId                        ?: string;
  isRecurrent                       ?: boolean;
  fromUserId                        ?: string;
  authMethodPreffered               ?: IGNISIGN_AUTH_FULL_MECHANISM_REF;
}

export enum IGNISIGN_SIGNER_CREATION_INPUT_REF {  
  FIRST_NAME    = "firstName",
  LAST_NAME     = "lastName",
  EMAIL         = "email",
  PHONE         = "phoneNumber",
  NATIONALITY   = "nationality",
  BIRTH_DATE    = "birthDate",
  BIRTH_PLACE   = "birthPlace", 
  BIRTH_COUNTRY = "birthCountry",
}

/**
 * Data transfer object for creating new signers.
 * Enforces validation rules for signer creation.
 */
export class IgnisignSigner_CreationRequestDto {
  @IsOptional()
  @IsString()
  signerProfileId ?: string;

  @IsOptional()
  @IsString()
  firstName ?: string;

  @IsOptional()
  @IsString()
  lastName ?: string;

  @IsOptional()
  @IsEmail()
  email ?: string;

  @IsOptional()
  @IsString()
  phoneNumber ?: string;

  @IsOptional()
  @IsEnum(COUNTRIES)
  nationality ?: string;

  @IsOptional()
  @IsDateString()
  birthDate ?: string;

  @IsOptional()
  @IsString()
  birthPlace ?: string;

  @IsOptional()
  @IsEnum(COUNTRIES)
  birthCountry ?: string;

  @IsOptional()
  @IsString()
  externalId ?: string;
}

/**
 * Data transfer object for updating existing signers.
 * Supports partial updates with validation.
 */
export class IgnisignSigner_UpdateRequestDto {
  @IsOptional()
  @IsMongoId()
  signerId ?: string;

  @IsOptional()
  @IsString()
  signerProfileId ?: string;

  @IsOptional()
  @IsString()
  firstName ?: string;

  @IsOptional()
  @IsString()
  lastName ?: string;

  @IsOptional()
  @IsEmail()
  email ?: string;

  @IsOptional()
  @IsString()
  // @IsPhoneNumber()
  phoneNumber ?: string;

  @IsOptional()
  @IsEnum(COUNTRIES)
  nationality ?: string;

  @IsOptional()
  @IsDateString()
  birthDate ?: string;

  @IsOptional() 
  @IsString()
  birthPlace ?: string;

  @IsOptional()
  @IsEnum(COUNTRIES)
  birthCountry ?: string;

  @IsOptional()
  @IsString()
  externalId ?: string;
}

export class IgnisignSigner_CreationResponseDto {
  @IsString()
  signerId               : string;

  @IsEnum(IGNISIGN_SIGNER_ENTITY_TYPE)
  entityType             : IGNISIGN_SIGNER_ENTITY_TYPE;

  @IsBoolean()
  success : boolean;

  @IsBoolean()
  alreadyExists : boolean;
  
  @IsOptional()
  @IsString()
  authSecret?:  string;
}

export class IgnisignSigners_SearchResultDto {
  signers : IgnisignSigner_Summary[];

  @IsNumber()
  total   : number;
}

export class IgnisignSigner_Summary {
  @IsOptional()
  @IsString()
  signerId ?: string;

  @IsOptional()
  @IsString()
  externalId?: string

  @IsOptional()
  @IsString()
  firstName ?: string;

  @IsOptional()
  @IsString()
  lastName ?: string;

  @IsOptional()
  @IsEmail()
  email ?: string;

  @IsOptional()
  @IsEnum(IGNISIGN_SIGNER_STATUS)
  status ?: IGNISIGN_SIGNER_STATUS;

  @IsOptional()
  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF, { each: true })
  alreadyProvidedInputs ?: IGNISIGN_SIGNER_CREATION_INPUT_REF[];

  @IsOptional()
  @IsBoolean()
  isRecurrent ?: boolean;

  @IsOptional()
  @IsString()
  signerProfileId ?: string;

  @IsOptional()
  @IsEnum(IGNISIGN_SIGNER_CLAIM_REF, { each: true })
  sealClaims ?: IGNISIGN_SIGNER_CLAIM_REF[];

  @IsString()
  fromUserId ?: string;

  @IsOptional()
  @IsBoolean()
  certificateDisseminationAgreement ?: boolean;
}

/**
 * Extended signer information including claims and requests.
 * Used for detailed signer context in operations.
 */
export class IgnisignSigner_Context extends IgnisignSigner_Summary {
  claims    : {
    claimRef : IGNISIGN_SIGNER_CLAIM_REF;
    status   : IGNISIGN_SIGNER_CLAIM_STATUS;
  }[];
  latestSignatureRequests : IgnisignSignatureRequest_WithDocName[];
}

export class IgnisignSigner_SelfProvideNameDto {
  @IsString()
  firstName : string;

  @IsString()
  lastName : string;
}