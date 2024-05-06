import { IsBoolean, IsEnum, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { IGNISIGN_SIGNATURE_METHOD_REF } from './../signatures/signature-methods.public';
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNER_ENTITY_TYPE } from "./signers.public";
import { IGNISIGN_INTEGRATION_MODE } from '../signatures/signatures.public';
import { IGNISIGN_ID_PROOFING_METHOD_REF } from '../id-proofing/id-proofing-methods.public';
import { IGNISIGN_AUTH_FULL_MECHANISM_REF } from '../signatures/signature-auth.public';
import { Type } from "class-transformer";

export class IgnisignSignerGroup {
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

  @IsEnum(IGNISIGN_SIGNER_ENTITY_TYPE)
  signerTypeAllowed        : IGNISIGN_SIGNER_ENTITY_TYPE[];

  @IsBoolean()
  isEmailSentByIgnisign    : boolean; // => mode ultime: => une gestion par EMAIL_TEMPLATE_ID => (avec des groups)

  @IsBoolean()
  isRecurrent              : boolean;

  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode  : IGNISIGN_INTEGRATION_MODE;

  @IsOptional()
  @IsString()
  ssoConfigId ?: string;

  @IsObject()
  // @ValidateNested({ each: true })
  // @Type(() => IgnisignSignerGroup_SignatureAuthMethods)
  // TODO add class-validator
  signatureAuthMethods : { [key in IGNISIGN_SIGNATURE_METHOD_REF] :  IgnisignSignerGroup_SignatureAuthMethods[] };
}

export class IgnisignSigner_To_SignerGroup { 
  @IsString()
  signerId      : string;

  @IsString()
  signerGroupId : string;
}

export class IgnisignSignerGroup_SignatureAuthMethods {
  @IsBoolean()
  isAllowed : boolean;

  @IsOptional()
  @IsEnum(IGNISIGN_ID_PROOFING_METHOD_REF, { each: true })
  idProofings ?: IGNISIGN_ID_PROOFING_METHOD_REF[];

  @IsOptional()
  @IsEnum(IGNISIGN_AUTH_FULL_MECHANISM_REF, { each: true })
  authMethods ?: IGNISIGN_AUTH_FULL_MECHANISM_REF[];
}



//? SIGNATURE PROFILE TO APP CONFIG : Dans appEnvConfig
// defaultLanguage
// languageCanBeChanged
// extendedAuthSessionEnabled
// sharingRestricted // Maybe overridable by the signature request
// fullPrivacy // documentTypes n'existe plus, c'est juste fullPrivacy ou non

//? SIGNATURE PROFILE TO SIGNATURE REQUEST : 
// individualizeRequests
// WorkflowType ( ancien signatureRequestType )
// templateDisplayerId

//? SIGNATURE PROFILE TO ALWAYS ACTIVE : 
// statementsEnabled
// approverEnabled
// recipientEnabled