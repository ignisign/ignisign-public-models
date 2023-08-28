import { IsString } from "class-validator";
import { IgnisignApplicationConfiguration, IgnisignApplicationEnvSettings, IgnisignApplicationSettings } from "./applications-settings-config.public";
import { Ignisign_SignatureProfile } from "../signatures/signature-profiles.public";

export enum IGNISIGN_APPLICATION_STATUS {
  ACTIVE       = "ACTIVE",
  BLOCKED      = "BLOCKED",
  ARCHIVED     = "ARCHIVED",
  ORG_ARCHIVED = "ORG_ARCHIVED",
}

export enum IGNISIGN_APPLICATION_ENV {
  DEVELOPMENT   = "DEVELOPMENT",
  STAGING       = "STAGING",
  PRODUCTION    = "PRODUCTION",
}

export class IgnisignApplication {
  appId       ?: string;
  appName      : string;
  status       : IGNISIGN_APPLICATION_STATUS;
  orgId        : string;
  _createdAt  ?: Date;
}

export class IgnisignApplicationContext extends IgnisignApplication {
  config              : IgnisignApplicationConfiguration;
  envSettings         : { [ keys in IGNISIGN_APPLICATION_ENV] : IgnisignApplicationEnvSettings };
  settings            : IgnisignApplicationSettings;
  signatureProfiles   : Ignisign_SignatureProfile[];
}

export class IgnisignApplication_Creation_RequestDto {
  @IsString()
  readonly appName: string;

  @IsString()
  readonly orgId: string;
}


export class IgnisignApplicationDeletionResponseDto {
  appId : string
}

