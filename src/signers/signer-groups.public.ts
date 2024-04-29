import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator";
import { IGNISIGN_SIGNATURE_METHOD_REF } from './../signatures/signature-methods.public';
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNER_ENTITY_TYPE } from "./signers.public";
import { IGNISIGN_INTEGRATION_MODE } from '../signatures/signatures.public';
import { IGNISIGN_ID_PROOFING_METHOD_REF } from '../id-proofing/id-proofing-methods.public';
import { IGNISIGN_AUTH_FULL_MECHANISM_REF } from '../signatures/signature-auth.public';


export class SignerGroup {
  @IsString()
  _id                      : string;

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
  isEmailManagedByIgnisign : boolean; // => mode ultime: => une gestion par EMAIL_TEMPLATE_ID => (avec des groups)

  @IsBoolean()
  isRecurrent              : boolean;

  // @ValidateNested() // TODO class-validator
  signatureMethods         : {[key in IGNISIGN_SIGNATURE_METHOD_REF] : SignerGroup_SignatureMethodsConfig}; 
}

export class Signer_To_SignerGroup { 
  @IsString()
  signerId      : string;

  @IsString()
  signerGroupId : string;
}

export class SignerGroup_SignatureMethodsConfig {
  @IsBoolean()
  isAllowed        : boolean;

  @IsOptional() // TODO => Depends on the signatureMethod ?
  @IsEnum(IGNISIGN_INTEGRATION_MODE)
  integrationMode ?: IGNISIGN_INTEGRATION_MODE;

  @IsOptional()
  @IsEnum(IGNISIGN_SIGNATURE_METHOD_REF, { each: true })
  idProofings     ?: IGNISIGN_ID_PROOFING_METHOD_REF[];

  @IsOptional()
  @IsEnum(IGNISIGN_AUTH_FULL_MECHANISM_REF, { each: true })
  authMethods     ?: IGNISIGN_AUTH_FULL_MECHANISM_REF[];
}

