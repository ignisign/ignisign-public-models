import { IsDateString, IsEmail, IsEnum, IsMongoId, IsOptional, IsPhoneNumber, isString, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

import { IgnisignSignatureRequest_WithDocName } from "../signatures/signature-requests.public";

import { IGNISIGN_SIGNER_CLAIM_REF, IGNISIGN_SIGNER_CLAIM_STATUS } from "./signer-claims.public";

import { COUNTRIES } from "../_commons/countries.public";

/*********************************** SIGNER ***********************************/

export enum IGNISIGN_SIGNER_ENTITY_TYPE {
    NATURAL = 'NATURAL',
    LEGAL   = 'LEGAL',
    VIRTUAL = 'VIRTUAL'
}

export enum IGNISIGN_SIGNER_STATUS {
  CREATED = "CREATED",
  PENDING = "PENDING",
  BLOCKED = "BLOCKED",
  ACTIVE  = "ACTIVE",
}
export class IgnisignSigner {
  _id?                              : string;
  appId                             : string;
  appEnv                            : IGNISIGN_APPLICATION_ENV;
  status                            : IGNISIGN_SIGNER_STATUS;
  entityType                        : IGNISIGN_SIGNER_ENTITY_TYPE;
  _createdAt?                       : Date;
  agreedLegalTerms                  ?: boolean
  certificateDisseminationAgreement ?: boolean
  externalId                        ?: string
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
  @IsString()
  signatureProfileId : string;

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

export class IgnisignSigner_UpdateRequestDto {
  @IsOptional()
  @IsMongoId()
  signerId ?: string;

  @IsString()
  signatureProfileId : string;

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

  @IsOptional()
  @IsString()
  authSecret?:  string;
}

export class IgnisignSigners_SearchResultDto {
  signers : IgnisignSigner_Summary[];
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
}


export class IgnisignSigner_Context extends IgnisignSigner_Summary {
  claims    : {
    claimRef : IGNISIGN_SIGNER_CLAIM_REF;
    status   : IGNISIGN_SIGNER_CLAIM_STATUS;
  }[];
  latestSignatureRequests : IgnisignSignatureRequest_WithDocName[];
}
