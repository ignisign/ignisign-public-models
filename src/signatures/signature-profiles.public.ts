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

/** @deprecated("Use IgnisignSignerProfile instead") */
export enum IGNISIGN_SIGNATURE_PROFILE_STATUS {
  PUBLISHED = "PUBLISHED",
  ARCHIVED  = "ARCHIVED",
}

/** @deprecated("Use IgnisignSignerProfileinstead") */
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

  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode           : IGNISIGN_INTEGRATION_MODE;

  @IsEnum(IGNISIGN_SIGNATURE_METHOD_REF)
  signatureMethodRef        : IGNISIGN_SIGNATURE_METHOD_REF;
  
  @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, {each: true})
  idProofings               : IGNISIGN_ID_PROOFING_METHOD_REF[];
  
  @IsEnum(IGNISIGN_AUTH_FULL_MECHANISM_REF, {each: true})
  authMethods               : IGNISIGN_AUTH_FULL_MECHANISM_REF[];

  @IsEnum(IGNISIGN_LANGUAGES)
  defaultLanguage           : IGNISIGN_LANGUAGES;

  @IsEnum(IGNISIGN_SIGNATURE_REQUEST_TYPE)
  signatureRequestType      : IGNISIGN_SIGNATURE_REQUEST_TYPE = IGNISIGN_SIGNATURE_REQUEST_TYPE.STANDARD;

  @IsBoolean()
  languageCanBeChanged      : boolean;
  
  @IsBoolean()
  extendedAuthSessionEnabled    : boolean;

  @IsBoolean()
  individualizeRequests? : boolean;

  /**
  * @deprecated 
  */
  @IsEnum(IGNISIGN_SIGNATURE_PROFILE_STATUS)
  status                    : IGNISIGN_SIGNATURE_PROFILE_STATUS;

  /**
  * @deprecated 
  */
  @IsBoolean()
  documentRequestActivated  : boolean;

  /**
  * @deprecated 
  */
  @IsBoolean()
  statementsEnabled         : boolean;

  /**
  * @deprecated 
  */
  @IsEnum(IGNISIGN_DOCUMENT_TYPE, {each: true})
  documentTypes             : IGNISIGN_DOCUMENT_TYPE[];

  /**
  * @deprecated 
  */
  @IsOptional()
  @IsString()
  templateDisplayerId      ?: string;

  /**
  * @deprecated 
  */
  @IsOptional()
  @IsBoolean()
  createdByDefault         ?: boolean = false;


  /**
  * @deprecated 
  */
  @IsBoolean()
  approverEnabled?             : boolean;
  
  /**
  * @deprecated 
  */
  @IsBoolean()
  recipientEnabled?    : boolean;




}

/** @deprecated("Use IgnisignSignerProfile instead") */
export class IgnisignSignatureProfile_StatusWrapper {
  @IsEnum(IGNISIGN_SIGNATURE_PROFILE_STATUS)
  status: IGNISIGN_SIGNATURE_PROFILE_STATUS;
}

/** @deprecated("Use IgnisignSignerProfile instead") */
export class IgnisignSignatureProfile_SignerInputsConstraints {
  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF, { each: true })
  inputsNeeded: IGNISIGN_SIGNER_CREATION_INPUT_REF[];
}

// export class IgnisignSignatureProfile_IdContainerDto {
//   @IsString()
//   signatureProfileId: string;
// }

/** @deprecated("Use IgnisignSignerProfile instead") */
export class IgnisignSignerStatus_FromSignatureProfile {
  @IsBoolean()
  signerIsSetup     : boolean;

  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF, { each: true })
  inputsNeeded      : IGNISIGN_SIGNER_CREATION_INPUT_REF[];

  @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, { each: true })
  idProofingRefs       : IGNISIGN_ID_PROOFING_METHOD_REF[];
}
