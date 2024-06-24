
import { IgnisignApplication_Configuration, IgnisignApplication_EnvSettings, IgnisignApplication_Settings } from "./applications-settings-config.public";
import { IgnisignSignatureProfile } from "../signatures/signature-profiles.public";
import { IgnisignSignerProfile } from "../signers/signer-profiles.public";

export enum IGNISIGN_APPLICATION_STATUS {
  ACTIVE       = "ACTIVE",
  BLOCKED      = "BLOCKED",
  ARCHIVED     = "ARCHIVED",
  ORG_ARCHIVED = "ORG_ARCHIVED",
}

export enum IGNISIGN_APPLICATION_TYPE {
  SIGNATURE   = "SIGNATURE",
  SEAL        = "SEAL",
  LOG_CAPSULE = "LOG_CAPSULE",
}

export enum IGNISIGN_APPLICATION_ENV {
  DEVELOPMENT   = "DEVELOPMENT",
  STAGING       = "STAGING",
  PRODUCTION    = "PRODUCTION",
}

export class IgnisignApplication {
  _createdAt  ?: Date;
  appId       ?: string;
  orgId        : string;
  appName      : string;
  status       : IGNISIGN_APPLICATION_STATUS;
  appType      : IGNISIGN_APPLICATION_TYPE;
}

export class IgnisignApplication_Context extends IgnisignApplication {
  config              : IgnisignApplication_Configuration;
  envSettings         : { [ keys in IGNISIGN_APPLICATION_ENV] ?: IgnisignApplication_EnvSettings };
  settings            : IgnisignApplication_Settings;
  signerProfiles        : { [ keys in IGNISIGN_APPLICATION_ENV] ?: IgnisignSignerProfile[] };
  signatureProfiles   : { [ keys in IGNISIGN_APPLICATION_ENV] ?: IgnisignSignatureProfile[] }; //! TO REMOVE
}

