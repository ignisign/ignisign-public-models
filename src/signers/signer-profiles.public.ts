import { IsArray, IsBoolean, IsEnum, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { IGNISIGN_SIGNATURE_METHOD_REF } from '../signatures/signature-methods.public';
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF, IGNISIGN_SIGNER_ENTITY_TYPE, IgnisignSigner_CreationRequestDto } from "./signers.public";
import { IGNISIGN_INTEGRATION_MODE } from '../signatures/signatures.public';
import { IGNISIGN_ID_PROOFING_METHOD_REF } from '../id-proofing/id-proofing-methods.public';
import { IGNISIGN_AUTH_FULL_MECHANISM_REF } from '../signatures/signature-auth.public';

export enum IGNISIGN_SIGNER_PROFILE_STATUS {
  ACTIVE     = "ACTIVE",
  ARCHIVED   = "ARCHIVED",
}
export class IgnisignSignerProfile {
  @IsOptional() 
  @IsString()
  _id                     ?: string;

  @IsString()
  appId                    : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv                   : IGNISIGN_APPLICATION_ENV; 

  @IsString()
  name                     : string;

  @IsOptional()
  @IsString()
  description             ?: string;

  @IsEnum(IGNISIGN_SIGNER_PROFILE_STATUS)
  status                 : IGNISIGN_SIGNER_PROFILE_STATUS;

  @IsNumber()
  version                  : number;

  @IsBoolean()
  isEmailProofSentByIgnisign    : boolean; // => mode ultime: => une gestion par EMAIL_TEMPLATE_ID => (avec des groups)

  @IsBoolean()
  isRecurrent              : boolean;

  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode  : IGNISIGN_INTEGRATION_MODE;

  @IsOptional()
  @IsString()
  ssoConfigId ?: string;

  @IsObject()
  // @ValidateNested({ each: true })
  // @Type(() => IgnisignSignerProfile_SignatureAuthMethods)
  // TODO add class-validator
  signatureAuthMethodsConfiguration : { [key in IGNISIGN_SIGNATURE_METHOD_REF] ?:  IgnisignSignerProfile_SignatureAuthMethods };

  @IsString({ each: true })
  emailDomains ?: string[];

  @IsString({ each: true })
  signerIds ?: string[];
}

export class IgnisignSignerProfileDto {
  @IsString()
  appId                    : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv                   : IGNISIGN_APPLICATION_ENV; 

  @IsString()
  name                     : string;

  @IsOptional()
  @IsString()
  description             ?: string;

  @IsBoolean()
  isEmailProofSentByIgnisign    : boolean; // => mode ultime: => une gestion par EMAIL_TEMPLATE_ID => (avec des groups)

  @IsBoolean()
  isRecurrent              : boolean;

  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode  : IGNISIGN_INTEGRATION_MODE;

  @IsOptional()
  @IsString()
  ssoConfigId ?: string;

  @IsObject()
  // @ValidateNested({ each: true })
  // @Type(() => IgnisignSignerProfile_SignatureAuthMethods)
  // TODO add class-validator
  signatureAuthMethodsConfiguration : { [key in IGNISIGN_SIGNATURE_METHOD_REF] ?: IgnisignSignerProfile_SignatureAuthMethods };

  @IsString({ each: true })
  emailDomains ?: string[];
}

export class IgnisignSigner_To_SignerProfile { 
  @IsString()
  appId   : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv  : IGNISIGN_APPLICATION_ENV;

  @IsString()
  signerId      : string;

  @IsString()
  signerProfileId : string;

  history       ?: {
    signerProfileId : string;
    date          : Date;
  }[];
}

export class IgnisignSignerProfile_SignatureAuthMethods {
  @IsOptional()
  @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, { each: true })
  idProofings ?: IGNISIGN_ID_PROOFING_METHOD_REF[];

  @IsOptional()
  @IsEnum(IGNISIGN_AUTH_FULL_MECHANISM_REF, { each: true })
  authMethods ?: IGNISIGN_AUTH_FULL_MECHANISM_REF[];
}

// export class IgnisignSignerProfile_SignatureAuthMethods {
//   @IsOptional()
//   @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, { each: true })
//   idProofings ?: {
//     ref          : IGNISIGN_ID_PROOFING_METHOD_REF;
//     ssoConfigId ?: string;
//   }[];

//   @IsOptional()
//   @IsEnum(IGNISIGN_AUTH_FULL_MECHANISM_REF, { each: true })
//   authMethods ?: {
//     ref          : IGNISIGN_AUTH_FULL_MECHANISM_REF;
//     ssoConfigId ?: string;
//   }[];
// }

export class IgnisignInputNeedsDto {
  @IsString()
  signerProfileId : string;

  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF)
  inputsNeeded    : IGNISIGN_SIGNER_CREATION_INPUT_REF[];

  @IsEnum(IGNISIGN_SIGNER_CREATION_INPUT_REF)
  optionalInputs  : IGNISIGN_SIGNER_CREATION_INPUT_REF[];
}

export class SignerProfileBulkDto {
  signers : IgnisignSigner_CreationRequestDto[];
}


//? SIGNATURE PROFILE TO APP CONFIG : Dans appEnvConfig
// defaultLanguage
// languageCanBeChanged
// extendedAuthSessionEnabled
// sharingRestricted // Maybe overridable by the signature request

//? SIGNATURE PROFILE TO SIGNATURE REQUEST : 
// individualizeRequests
// WorkflowType ( ancien signatureRequestType )
// templateDisplayerId
// fullPrivacy

//? SIGNATURE PROFILE TO ALWAYS ACTIVE : 
// statementsEnabled
// approverEnabled
// recipientEnabled