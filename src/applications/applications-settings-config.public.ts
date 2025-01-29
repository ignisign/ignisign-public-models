import { Type } from "class-transformer";
import { IsBoolean, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { IGNISIGN_LANGUAGES } from "../_commons/languages.public";
import { IGNISIGN_APPLICATION_ENV } from "./applications.public";
import { IsUrlOrEmpty } from "../_utils/custom-validator.public";
import { IGNISIGN_IAM_PERMISSIONS } from "../auth/right_management_v2.public";
import { IGNISIGN_SIGNATURE_PROOF_PROCESSING_MODE, IGNISIGN_SIGNATURE_PROOF_TYPE } from "../signatures/signatures.public";
import 'reflect-metadata';
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";

/******************** GLOBAL CONFIG *******************/

// managed by Ignisign
export class IgnisignApplication_Configuration {
  appId  : string;
  orgId  : string;
}


/******************** ENV Settings *******************/

export class Ignisign_OAuth2_Fields {
  @IsString()
  sub : string;

  @IsString()
  given_name : string;

  @IsString()
  family_name : string;

  @IsString()
  email : string;
  
  @IsString()
  nationality : string;

  @IsString()
  birth_date : string;

  @IsString()
  birth_place : string;

  @IsString()
  birth_country : string;
}

export class Ignisign_SAML_Fields {
  @IsString()
  given_name : string;

  @IsString()
  family_name : string;

  @IsString()
  email : string;
  
  @IsString()
  nationality : string;

  @IsString()
  birth_date : string;

  @IsString()
  birth_place : string;

  @IsString()
  birth_country : string;
}

export class Ignisign_OAuth2_Settings {
  @IsOptional()
  @IsString()
  clientId?: string;

  @IsString()
  @IsOptional()
  clientSecret?: string;

  @IsOptional()
  @IsUrlOrEmpty()
  serverUrl?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Ignisign_OAuth2_Fields)
  fields?: Ignisign_OAuth2_Fields;
}

export const MANDATORY_FIELDS_TO_ACTIVATE_OAUTH2 = ['clientId', 'clientSecret', 'serverUrl'];

export class Ignisign_SAML_Settings {
  @IsOptional()
  @IsString()
  idpMetadataUrl?: string;

  @IsOptional()
  @IsString()
  spEntityId?: string;

  @IsOptional()
  @IsString()
  certificate ? : string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Ignisign_SAML_Fields)
  fields?: Ignisign_SAML_Fields;
}

export const MANDATORY_FIELDS_TO_ACTIVATE_SAML = ['idpMetadataUrl', 'spEntityId', 'certificate'];

export enum IGNISIGN_APPLICATION_ENV_API_KEYS_STATUS {
  ACTIVE    = 'ACTIVE',
  REVOCATED = 'REVOCATED',
}

export class IgnisignApplication_EnvApiKeys {
  _id               ?: string;
  appId              : string;
  appEnv             : IGNISIGN_APPLICATION_ENV;
  name               : string;
  description       ?: string;
  
  isRestricted       : boolean;
  permissions       ?: IGNISIGN_IAM_PERMISSIONS[]; // not used yet, api keys are not restricted to permissions right now
  displayableSecret  : string; // The mechanism is similar to stripe, we display only the 4 first and last digits
  status             : IGNISIGN_APPLICATION_ENV_API_KEYS_STATUS;
}

export enum IGNISIGN_SSO_CONFIG_TYPES {
  OAUTH2 = 'OAUTH2',
  SAML   = 'SAML'
}

export enum IGNISIGN_SSO_CONFIG_STATUS {
  // PENDING  = 'PENDING',
  ACTIVE   = 'ACTIVE',
  ARCHIVED = 'ARCHIVED'
}

export class IgnisignApplicationEnv_SSO_Config {
  _id            ?: string;
  name            : string;
  description    ?: string;
  appId           : string;
  appEnv          : IGNISIGN_APPLICATION_ENV;
  type            : IGNISIGN_SSO_CONFIG_TYPES;
  status          : IGNISIGN_SSO_CONFIG_STATUS;
  // config         : Ignisign_OAuth2_Settings | Ignisign_SAML_Settings;
  settingsOAuth2 ?: Ignisign_OAuth2_Settings;
  settingsSAML   ?: Ignisign_SAML_Settings;
}

export class IgnisignApplicationEnv_SSO_ConfigDto {
  name            : string;
  description    ?: string;
  type            : IGNISIGN_SSO_CONFIG_TYPES;
  settingsOAuth2 ?: Ignisign_OAuth2_Settings;
  settingsSAML   ?: Ignisign_SAML_Settings;
}


export class IgnisignApplication_EnvSettings {
  appId                        : string;
  orgId                        : string;
  appEnv                       : IGNISIGN_APPLICATION_ENV;
  isApiKeyGenerated           ?: boolean; // Only used in appContext
  defaultSignerProfileId      ?: string;
  currentVersion               : number;
  webhooks                     : IgnisignWebhook_SettingsDescription[];
  languageCanBeChanged        ?: boolean;
  extendedAuthSessionEnabled   : boolean;
  apiKeys                      : IgnisignApplication_EnvApiKeys[];
  ssoConfigs                   : IgnisignApplicationEnv_SSO_Config[];
  defaultSignatureLevel       ?: IGNISIGN_SIGNATURE_METHOD_REF;
  defaultApproverIds          ?: string[];
  defaultRecipients           ?: string[];
  onlineProofsEnabled               : boolean;
  originalFileRetentionDurationInDays     ?: number; // TODO remove optional
  highLevelProofsRetentionDurationInDays  ?: number; // TODO remove optional
}

export class IgnisignWebhook_SettingsDescription {
  _id         ?: string;
  _createdAt  ?: Date;
  url          : string;
  description ?: string;
  isDisabled  ?: boolean;
}


/******************** COMMON SETTINGS *******************/
//managed by the application owners
export class IgnisignApplication_Settings {
  appId                  : string;
  orgId                  : string;
  defaultLanguage       ?: IGNISIGN_LANGUAGES;
  customerSupportEmail  ?: string;
  logoB64               ?: string;
  logoDarkB64           ?: string;
  primaryColor          ?: IgnisignApplication_VariationColor
  secondaryColor        ?: IgnisignApplication_VariationColor
}

export class CustomPalette {
  primary   : IgnisignApplication_VariationColor;
  secondary : IgnisignApplication_VariationColor;
};

export class IgnisignApplication_VariationColor {
  50   : string;
  100  : string;
  200  : string;
  300  : string;
  400  : string;
  500  : string;
  600  : string;
  700  : string;
  800  : string;
  900  : string;
  A100 : string;
  A200 : string;
  A400 : string;
  A700 : string;
}


