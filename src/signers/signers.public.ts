import { IsDateString, IsEmail, IsEnum, IsMongoId, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

import { IgnisignSignatureRequestWithDocName } from "../signatures/signature-requests.public";

import { IGNISIGN_SIGNER_CLAIM_REF, IGNISIGN_SIGNER_CLAIM_STATUS, IgnisignSignerClaim } from "./signer-claims.public";
import { IgnisignSignerKey } from "./signer-keys.public";
import { COUNTRIES } from "../_commons/countries.public";

/*********************************** SIGNER ***********************************/
export const IGNISIGN_SIGNER_SELF_SESSION_DTO_FIELDS = ['signerId', 'externalId', 'firstName', 'lastName', 'email', 'status', 'phoneNumber', 'agreedLegalTerms', 'certificateDisseminationAgreement'];

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
  // signerSecretBcrypt?               : string; // used in the context => to move inside a claim
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

export type IgnisignSigner_Creation_InputMap = { [key in IGNISIGN_SIGNER_CREATION_INPUT_REF] ?: string };
export class IgnisignSigner_Creation_RequestDto {
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

export class IgnisignSigner_Update_RequestDto {
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

export class IgnisignSigner_Creation_ResponseDto {
  signerId               : string;
  entityType             : IGNISIGN_SIGNER_ENTITY_TYPE;
  authSecret?:  string;
}


export class IgnisignSigner_Details extends IgnisignSigner{
  signerKeys  : IgnisignSignerKey[];
  claims      : IgnisignSignerClaim[];
}

export class IgnisignSignersSearchResultDto {
  signers : IgnisignSignerSummary[];
  total   : number;
}


export class PaginateApplicationSignersDto {
  total         : number;
  signerPerPage : number;
  currentPage   : number;
  signers       : IgnisignSignerSummary[];
}

export class IgnisignSignerSignatureProofDto {
  signerId       : string;
  firstName      : string;
  lastName       : string;
  email          : string;
  verifiedClaims : IGNISIGN_SIGNER_CLAIM_REF[];
}

export class IgnisignSignerSummary {
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


export class IgnisignSignerContext extends IgnisignSignerSummary {
  claims    : {
    claimRef : IGNISIGN_SIGNER_CLAIM_REF;
    status   : IGNISIGN_SIGNER_CLAIM_STATUS;
  }[];
  latestSignatureRequests : IgnisignSignatureRequestWithDocName[];
}


export class IgnisignSignerSelfSessionDto extends IgnisignSignerSummary {
  @IsOptional()
  @IsPhoneNumber()
  phoneNumber ?: string;

  agreedLegalTerms                  : boolean;
  certificateDisseminationAgreement : boolean;
}

