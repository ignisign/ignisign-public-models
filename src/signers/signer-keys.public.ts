import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_EIDAS_LEVEL } from "../_commons/eidas.public";

export enum IGNISIGN_SIGNER_KEY_STATUS {
  PENDING       = "PENDING",
  CREATED       = "CREATED",
  ACTIVE        = "ACTIVE",
  DEACTIVATED   = "DEACTIVATED",
  DEPRECATED    = "DEPRECATED", // A signer key is DEPRECATED if a newer key with the same behaviour exist for the signer and the app associated with the key
  SUSPENDED     = "SUSPENDED",
  FAILED        = "FAILED", // failed to be created in the HSM
  REVOKED       = "REVOKED",
}

export enum IGNISIGN_SIGNER_KEY_LOCATIONS {

  HSM                     = "HSM",
  HSM_APPLICATION_SCOPED  = "HSM_APPLICATION_SCOPED",
  HSM_SAM_PROTECTED       = "HSM_SAM_PROTECTED",
  PHONE_SE                = "PHONE_SE",
  WEB3_SIGNER             = "WEB3_SIGNER",
  SIGNER_OWNER_MANAGED    = "SIGNER_OWNER_MANAGED",
}

export enum IGNISIGN_SIGNER_KEY_ROLES {
  AUTH = "AUTH",
  SIGN = "SIGN"
}

export class IgnisignSignerKey {
  _id?                       : string;
  appId                      : string;
  appEnv                     : IGNISIGN_APPLICATION_ENV;
  signerId                   : string;
  sessionId                  : string;
  certificateId?             : string;

  eidasLevel                 : IGNISIGN_EIDAS_LEVEL;
  status                     : IGNISIGN_SIGNER_KEY_STATUS;
  roles                      : IGNISIGN_SIGNER_KEY_ROLES[];
  location                   : IGNISIGN_SIGNER_KEY_LOCATIONS;
  activationSecret          ?: string;
  relatedDeepSignAppKeyId   ?: string;
  pubKey                     : string;

  _createdAt       ?: Date;
}
