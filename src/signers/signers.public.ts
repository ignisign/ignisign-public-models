import { IsBoolean, IsDateString, IsEmail, IsEnum, IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

import { IgnisignSignatureRequest_WithDocName } from "../signatures/signature-requests.public";

import { IGNISIGN_SIGNER_CLAIM_REF, IGNISIGN_SIGNER_CLAIM_STATUS } from "./signer-claims.public";

import { COUNTRIES } from "../_commons/countries.public";

/*********************************** SIGNER ***********************************/

export enum IGNISIGN_SIGNER_ENTITY_TYPE {
    NATURAL = 'NATURAL',
    LEGAL   = 'LEGAL',
    M2M = 'M2M'
}

export enum IGNISIGN_SIGNER_STATUS { 
  CREATED   = "CREATED",
  PENDING   = "PENDING",
  BLOCKED   = "BLOCKED",
  ACTIVE    = "ACTIVE",
  CORRUPTED = "CORRUPTED",
}
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
}

export enum IGNISIGN_M2M_STATUS {
  ACTIVE  = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

export class IgnisignM2M {
  _id         ?: string;
  appId        : string;
  appEnv       : IGNISIGN_APPLICATION_ENV;
  signerId     : string;
  publicKey    : string;
  status       : IGNISIGN_M2M_STATUS;
  title        : string;
  _updatedAt   : Date;
  _createdAt   : Date;
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


export class IgnisignSigner_CreationRequestDto {
  @IsOptional()
  @IsString()
  signerGroupId ?: string;

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

  /**
  * @deprecated this field is not used anymore
  **/
  @IsOptional()
  @IsBoolean()
  isRecurrent ?: boolean;
}

export class IgnisignSigner_UpdateRequestDto {
  @IsOptional()
  @IsMongoId()
  signerId ?: string;

  @IsOptional()
  @IsString()
  signerGroupId ?: string;

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

  /**
  * @deprecated this field is not used anymore
  **/
  @IsOptional()
  @IsBoolean()
  isRecurrent ?: boolean;
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
  signerGroupId ?: string;
}


export class IgnisignSigner_Context extends IgnisignSigner_Summary {
  claims    : {
    claimRef : IGNISIGN_SIGNER_CLAIM_REF;
    status   : IGNISIGN_SIGNER_CLAIM_STATUS;
  }[];
  latestSignatureRequests : IgnisignSignatureRequest_WithDocName[];
}
