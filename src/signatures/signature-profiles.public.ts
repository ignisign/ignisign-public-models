import { IsBoolean, IsEnum, IsString } from "class-validator";
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
  _id?                      : string;
  appId                     : string;
  appEnv                    : IGNISIGN_APPLICATION_ENV; 
  orgId                     : string;
  
  name                      : string;
  status                    : IGNISIGN_SIGNATURE_PROFILE_STATUS;
  integrationMode           : IGNISIGN_INTEGRATION_MODE;
  signatureMethodRef        : IGNISIGN_SIGNATURE_METHOD_REF;
  idProofings               : IGNISIGN_ID_PROOFING_METHOD_REF[];
  authMethods               : IGNISIGN_AUTH_FULL_MECHANISM_REF[];
  documentTypes             : IGNISIGN_DOCUMENT_TYPE[];
  defaultLanguage           : IGNISIGN_SIGNATURE_LANGUAGES;
  documentRequestActivated  : boolean;
  languageCanBeChanged      : boolean;
  authSessionEnabled        : boolean;
  statementsEnabled         : boolean;
  createdByDefault         ?: boolean = false;
}

export class IgnisignSignatureProfile_StatusWrapper {
  @IsEnum(IGNISIGN_SIGNATURE_PROFILE_STATUS)
  status: IGNISIGN_SIGNATURE_PROFILE_STATUS;
}

export class IgnisignSignatureProfile_SignerInputsConstraints {
  additionalInputsNeeded: IGNISIGN_SIGNER_CREATION_INPUT_REF[];
}

export class IgnisignSignatureProfile_IdContainerDto {
  @IsString()
  signatureProfileId: string;
}