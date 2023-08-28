import { IsBoolean, IsEnum, IsString } from "class-validator";
import { IGNISIGN_SIGNATURE_LANGUAGES } from "../_commons/languages.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_ID_PROOFING_METHOD_REF } from "../id-proofing/id-proofing-methods.public";
import { IGNISIGN_AUTH_FULL_MECHANISM_REF } from "./signature-auth.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "./signature-methods.public";
import { IGNISIGN_INTEGRATION_MODE } from "./signatures.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

export enum IGNISIGN_SIGNATURE_PROFILE_STATUS {
  PUBLISHED = "PUBLISHED",
  ARCHIVED  = "ARCHIVED",
}

export class Ignisign_SignatureProfile {
  _id?                            : string;
  appId                           : string;
  appEnv                          : IGNISIGN_APPLICATION_ENV; 
  orgId                           : string;
  name                            : string;
  status                          : IGNISIGN_SIGNATURE_PROFILE_STATUS;
  integrationMode                 : IGNISIGN_INTEGRATION_MODE;
  signatureMethodRef              : IGNISIGN_SIGNATURE_METHOD_REF;
  idProofings                     : IGNISIGN_ID_PROOFING_METHOD_REF[];
  authMethods                     : IGNISIGN_AUTH_FULL_MECHANISM_REF[];
  documentTypes                   : IGNISIGN_DOCUMENT_TYPE[];
  documentRequestActivated        : boolean;
  defaultLanguage                 : IGNISIGN_SIGNATURE_LANGUAGES;
  languageCanBeChanged            : boolean;
  authSessionEnabled              : boolean;
  statementsEnabled               : boolean;
  createdByDefault               ?: boolean = false;
}

export class Ignisign_SignatureProfile_CreationDto {
  @IsString()
  name                            : string;
  
  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode                 : IGNISIGN_INTEGRATION_MODE;

  @IsEnum(IGNISIGN_SIGNATURE_METHOD_REF)
  signatureMethodRef              : IGNISIGN_SIGNATURE_METHOD_REF;

  @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, { each: true })
  idProofings                     : IGNISIGN_ID_PROOFING_METHOD_REF[];

  @IsEnum(IGNISIGN_AUTH_FULL_MECHANISM_REF, { each: true })
  authMethods                     : IGNISIGN_AUTH_FULL_MECHANISM_REF[];

  @IsEnum(IGNISIGN_DOCUMENT_TYPE, { each: true })
  documentTypes                   : IGNISIGN_DOCUMENT_TYPE[];

  @IsBoolean()
  documentRequestActivated        : boolean;

  @IsEnum(IGNISIGN_SIGNATURE_LANGUAGES)
  defaultLanguage                 : IGNISIGN_SIGNATURE_LANGUAGES;

  @IsBoolean()
  languageCanBeChanged            : boolean;

  @IsBoolean()
  authSessionEnabled              : boolean;

  @IsBoolean()
  statementsEnabled               : boolean;
}

export class Ignisign_SignatureProfile_StatusWrapper {
  @IsEnum(IGNISIGN_SIGNATURE_PROFILE_STATUS)
  status                          : IGNISIGN_SIGNATURE_PROFILE_STATUS;
}

export class Ignisign_SignatureProfile_ImportDto {
  signatureProfilesIds            : string[];
}