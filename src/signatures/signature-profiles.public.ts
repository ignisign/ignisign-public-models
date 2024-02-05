import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator";
import { IGNISIGN_SIGNATURE_LANGUAGES } from "../_commons/languages.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_ID_PROOFING_METHOD_REF } from "../id-proofing/id-proofing-methods.public";
import { IGNISIGN_AUTH_FULL_MECHANISM_REF } from "./signature-auth.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "./signature-methods.public";
import { IGNISIGN_INTEGRATION_MODE } from "./signatures.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF } from "../signers/signers.public";

export enum IGNISIGN_SIGNATURE_PROFILE_STATUS {
  PUBLISHED = "PUBLISHED",
  ARCHIVED  = "ARCHIVED",
}

export class IgnisignSignatureProfile {
  @IsOptional()
  @IsString()
  _id?                      : string;

  @IsString()
  appId                     : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv                    : IGNISIGN_APPLICATION_ENV; 

  @IsString()
  orgId                     : string;
  
  @IsString()
  name                      : string;

  @IsEnum(IGNISIGN_SIGNATURE_PROFILE_STATUS)
  status                    : IGNISIGN_SIGNATURE_PROFILE_STATUS;

  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode           : IGNISIGN_INTEGRATION_MODE;

  @IsEnum(IGNISIGN_SIGNATURE_METHOD_REF)
  signatureMethodRef        : IGNISIGN_SIGNATURE_METHOD_REF;
  
  @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, {each: true})
  idProofings               : IGNISIGN_ID_PROOFING_METHOD_REF[];
  
  @IsEnum(IGNISIGN_AUTH_FULL_MECHANISM_REF, {each: true})
  authMethods               : IGNISIGN_AUTH_FULL_MECHANISM_REF[];

  @IsEnum(IGNISIGN_DOCUMENT_TYPE, {each: true})
  documentTypes             : IGNISIGN_DOCUMENT_TYPE[];

  @IsEnum(IGNISIGN_SIGNATURE_LANGUAGES)
  defaultLanguage           : IGNISIGN_SIGNATURE_LANGUAGES;

  @IsBoolean()
  documentRequestActivated  : boolean;

  @IsBoolean()
  languageCanBeChanged      : boolean;

  @IsBoolean()
  authSessionEnabled        : boolean;

  @IsBoolean()
  statementsEnabled         : boolean;

  @IsBoolean()
  forceRecurrentSigners     : boolean = false;

  @IsOptional()
  @IsString()
  templateDisplayerId      ?: string;

  @IsOptional()
  @IsBoolean()
  createdByDefault         ?: boolean = false;

}

export class IgnisignSignatureProfile_StatusWrapper {
  @IsEnum(IGNISIGN_SIGNATURE_PROFILE_STATUS)
  status: IGNISIGN_SIGNATURE_PROFILE_STATUS;
}

export class IgnisignSignatureProfile_SignerInputsConstraints {
  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF, { each: true })
  inputsNeeded: IGNISIGN_SIGNER_CREATION_INPUT_REF[];
}

export class IgnisignSignatureProfile_IdContainerDto {
  @IsString()
  signatureProfileId: string;
}

