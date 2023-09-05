import { IsArray, IsBoolean, IsEmail, IsOptional, IsString, IsUrl, Validate, ValidateNested } from "class-validator";
import { IGNISIGN_SIGNATURE_LANGUAGES } from "../_commons/languages.public";
import { IGNISIGN_APPLICATION_ENV } from "./applications.public";


export class VariationColor {
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

/******************** GLOBAL CONFIG *******************/

// managed by Ignisign
export class IgnisignApplicationConfiguration {
  appId  : string;
  orgId  : string;
}

export class IgnisignWebhookSettingsDescription {
  _id         ?: string;
  url          : string;
  description ?: string;
  _createdAt  ?: Date;
}

/******************** ENV Settings *******************/
export class IgnisignApplicationEnvSettings {
  appId                     : string;
  orgId                     : string;
  appEnv                    : IGNISIGN_APPLICATION_ENV;
  webhooks                  : IgnisignWebhookSettingsDescription[];
  appRootUrl               ?: string;
  authorizedRedirectionUrls : string[];
  hasKey                   ?: boolean; // Only used in appContext
}



/******************** COMMON SETTINGS *******************/
//managed by the application owners

export class IgnisignApplicationSettings {
  appId                  : string;
  orgId                  : string;
  customerSupportEmail  ?: string;
  defaultLanguage       ?: IGNISIGN_SIGNATURE_LANGUAGES;
  logoB64               ?: string;
  logoDarkB64           ?: string;
  primaryColor          ?: VariationColor
  secondaryColor        ?: VariationColor
  smsSentByEmailInDev    : boolean = true;
  smsSentByEmailInTest   : boolean = true;
}

