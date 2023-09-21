import { IsArray, IsBoolean, IsEmail, IsOptional, IsString, IsUrl, Validate, ValidateNested } from "class-validator";
import { IGNISIGN_SIGNATURE_LANGUAGES } from "../_commons/languages.public";
import { IGNISIGN_APPLICATION_ENV } from "./applications.public";



/******************** GLOBAL CONFIG *******************/

// managed by Ignisign
export class IgnisignApplication_Configuration {
  appId  : string;
  orgId  : string;
}


/******************** ENV Settings *******************/
export class IgnisignApplication_EnvSettings {
  appId                      : string;
  orgId                      : string;
  appEnv                     : IGNISIGN_APPLICATION_ENV;
  webhooks                   : IgnisignWebhook_SettingsDescription[];
  appRootUrl                ?: string;
  authorizedRedirectionUrls  : string[];
  isApiKeyGenerated         ?: boolean; // Only used in appContext
  defaultSignatureProfileId ?: string;
}
export class IgnisignWebhook_SettingsDescription {
  _id         ?: string;
  _createdAt  ?: Date;
  url          : string;
  description ?: string;
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


