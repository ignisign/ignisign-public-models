import { IsArray, IsBoolean, IsEmail, IsOptional, IsString, IsUrl, Validate, ValidateNested } from "class-validator";
import { IGNISIGN_SIGNATURE_LANGUAGES } from "../_commons/languages.public";
import { IGNISIGN_APPLICATION_ENV } from "./applications.public";
import { Type } from "class-transformer";

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
  // onBoardingIdProofRedirectUrl?: string;
  // revocationIdProofRedirectUrl?: string;
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
  // TODO integrate Options
}


/******************** Options *******************/

export enum IGNISIGN_APPLICATION_OPTION_TYPE {
  BOOLEAN     = "BOOLEAN",
  URL         = "URL",
  TINY_TEXT   = "TINY_TEXT",
  TEXT        = "TEXT",
}
export class Ignisign_ApplicationOption {
  ref        : string
  value      : string|boolean|number|Date;
}


export class Ignisign_Application_OptionsDescriptor {
  ref: string;
  type: IGNISIGN_APPLICATION_OPTION_TYPE;
  isRequired: boolean;
  availableVariables : string[];
}

export class Ignisign_Application_SettingsWithOptions<T> {
  ref        : T;
  //priority   : number;
  isActivated: boolean;
  options    : Ignisign_ApplicationOption[];
}

/******************** APP ENV SECRETS DTO Request *******************/
export class IgnisignApplicationSecretEnvDto {
  secret : string
}

export class IgnisignApplicationSettings_UpdateRequestDto {
  @IsString()
  @IsOptional()
  readonly appName ?: string;

  @IsEmail()
  @IsOptional()
  readonly customerSupportEmail? : string;

  @IsOptional()
  @IsString()
  readonly logoB64? : string;

  @IsOptional()
  @IsString()
  readonly logoDarkB64? : string;

  @IsOptional()
  @Type(() => VariationColor)
  @ValidateNested()
  primaryColor ?: VariationColor;

  @IsOptional()
  @Type(() => VariationColor)
  @ValidateNested()
  secondaryColor ?: VariationColor;
} 

export class IgnisignApplicationEnvSettings_UpdateRequestDto {
  @IsUrl({require_tld: process.env.NODE_ENV !== 'development'})
  @IsOptional()
  readonly appRootUrl? : string;
}


// export class IgnisignApplicationSetting_UpdateRequestDto {
//   settings            : IgnisignApplicationSettings;
// }
