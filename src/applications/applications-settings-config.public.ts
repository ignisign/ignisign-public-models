import { IsBoolean, IsOptional, IsString } from "class-validator";
import { IGNISIGN_SIGNATURE_LANGUAGES } from "../_commons/languages.public";
import { IGNISIGN_APPLICATION_ENV } from "./applications.public";
import { IsUrlOrEmpty } from "../_utils/custom-validator.public";

/******************** GLOBAL CONFIG *******************/

// managed by Ignisign
export class IgnisignApplication_Configuration {
  appId  : string;
  orgId  : string;
}


/******************** ENV Settings *******************/
export class Ignisign_OAuth2_Settings {
  @IsOptional()
  @IsBoolean()
  isActivated?: boolean;

  @IsOptional()
  @IsString()
  clientId?: string;

  @IsString()
  @IsOptional()
  clientSecret?: string;

  @IsOptional()
  @IsUrlOrEmpty()
  serverUrl?: string;
}

export const MANDATORY_FIELDS_TO_ACTIVATE_OAUTH2 = ['clientId', 'clientSecret', 'serverUrl'];

export class Ignisign_SAML_Settings {
  @IsOptional()
  @IsBoolean()
  isActivated?: boolean;

  @IsOptional()
  @IsString()
  idpMetadataUrl?: string;

  @IsOptional()
  @IsString()
  spEntityId?: string;
}

export const MANDATORY_FIELDS_TO_ACTIVATE_SAML = ['idpMetadataUrl', 'spEntityId'];

export class IgnisignApplication_EnvSettings {
  appId                        : string;
  orgId                        : string;
  appEnv                       : IGNISIGN_APPLICATION_ENV;
  isApiKeyGenerated           ?: boolean; // Only used in appContext
  // defaultSignatureProfileId   ?: string;
  currentVersion               : number;
  webhooks                     : IgnisignWebhook_SettingsDescription[];
  authorizedRedirectionUrls    : string[];
  appRootUrl                  ?: string;
  defaultLanguage             ?: IGNISIGN_SIGNATURE_LANGUAGES;
  languageCanBeChanged        ?: boolean;
  extendedAuthSessionEnabled   : boolean;
  sharingRestricted            : boolean;
  fullPrivacy                 ?: boolean;

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
  defaultLanguage       ?: IGNISIGN_SIGNATURE_LANGUAGES;
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


