import { IgnisignApplication_VariationColor } from "../applications/applications-settings-config.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

export const IGNISIGN_SIGNATURE_PUBLIC_FIELDS = ['_id', 'appId', 'signerId', 'signerKeyId', 'documentId', 'mode', 'status', 'signature', 'contentHash', 'signatureValue', 'signedPropertiesHash', 'signingTime', 'signingIp', 'certificate', ];

export enum IGNISIGN_SIGNATURE_MODE {
  SERVER_SIDE_SIGNATURE           = "SERVER_SIDE_SIGNATURE",
  CLIENT_SIDE_SIGNATURE           = "CLIENT_SIDE_SIGNATURE",
}

export enum IGNISIGN_SIGNATURE_STATUS {
  INIT       = 'INIT',
  SIGNED     = 'SIGNED',
  FAILED     = 'FAILED',
}


export enum IGNISIGN_INTEGRATION_MODE {
  MANAGED   = "MANAGED",
  EMBEDDED  = "EMBEDDED"
}

export class IgnisignSignature {
  _id                   ?: string;
  appId                  : string;
  appEnv                 : IGNISIGN_APPLICATION_ENV;
  signerId               : string;
  signerKeyId            : string;
  sessionId             ?: string;
  documentId             : string;
  status                 : IGNISIGN_SIGNATURE_STATUS;
  mode                   : IGNISIGN_SIGNATURE_MODE;

  ocspCheckValue        ?: any;
  contentHash           ?: string;

  signature             ?: string;
  signatureValue        ?: string;
  signedProperties      ?: string
  signedPropertiesHash  ?: string;
  signingIp             ?: string;
  signingTime?           : string;
  certificate?           : string;
}

export class IgnisignApplication_SignatureMetadata {
  appName         : string;
  logoB64        ?: string;
  logoDarkB64    ?: string;
  rootUrl        ?: string;
  primaryColor   ?: IgnisignApplication_VariationColor;
  secondaryColor ?: IgnisignApplication_VariationColor;
}
export class IgnisignSignatureImages_Dto {
  documentId : string;
  signatures : { signerId: string, imgB64: string }[];
}

