import { IgnisignApplication_Configuration, IgnisignApplication_EnvSettings, IgnisignApplication_Settings } from "./applications-settings-config.public";
import { IgnisignSignatureProfile } from "../signatures/signature-profiles.public";
import { IgnisignSignerProfile } from "../signers/signer-profiles.public";

export enum IGNISIGN_API_VERSION {
  V3 = "V3",
  V4 = "V4"
}

export enum IGNISIGN_APPLICATION_STATUS {
  ACTIVE       = "ACTIVE",
  BLOCKED      = "BLOCKED",
  ARCHIVED     = "ARCHIVED",
  ORG_ARCHIVED = "ORG_ARCHIVED",
}

export enum IGNISIGN_APPLICATION_TYPE {
  SIGNATURE                 = "SIGNATURE",
  SEAL                      = "SEAL",
  LOG_CAPSULE               = "LOG_CAPSULE",
  BARE_SIGNATURE            = "BARE_SIGNATURE",
  WEB3                      = "WEB3",
  IGNISIGN_RIGHT_DELEGATION = "IGNISIGN_RIGHT_DELEGATION",
}

export const IGNISIGN_APPLICATION_TYPES_ACTIVATED = [
  IGNISIGN_APPLICATION_TYPE.SIGNATURE,
  IGNISIGN_APPLICATION_TYPE.SEAL,
  IGNISIGN_APPLICATION_TYPE.LOG_CAPSULE,
  IGNISIGN_APPLICATION_TYPE.BARE_SIGNATURE,
  IGNISIGN_APPLICATION_TYPE.IGNISIGN_RIGHT_DELEGATION,
];

export const IGNISIGN_APPLICATION_TYPES_HIDDEN = [
  IGNISIGN_APPLICATION_TYPE.IGNISIGN_RIGHT_DELEGATION
]

export enum IGNISIGN_APPLICATION_ENV {
  DEVELOPMENT   = "DEVELOPMENT",
  STAGING       = "STAGING",
  PRODUCTION    = "PRODUCTION",
}

export class IgnisignApplication {
  _createdAt            ?: Date;
  appId                 ?: string;
  orgId                  : string;
  appName                : string;
  status                 : IGNISIGN_APPLICATION_STATUS;
  appType                : IGNISIGN_APPLICATION_TYPE;
  ignisignApiVersion     : IGNISIGN_API_VERSION;
  isDefaultApplication  ?: boolean = false;
}

export class IgnisignApplication_Context extends IgnisignApplication {
  config              : IgnisignApplication_Configuration;
  envSettings         : { [ keys in IGNISIGN_APPLICATION_ENV] ?: IgnisignApplication_EnvSettings };
  settings            : IgnisignApplication_Settings;
  signerProfiles      : { [ keys in IGNISIGN_APPLICATION_ENV] ?: IgnisignSignerProfile[] };
  
  /** @deprecated */
  signatureProfiles   : { [ keys in IGNISIGN_APPLICATION_ENV] ?: IgnisignSignatureProfile[] }; //! TO REMOVE
}

