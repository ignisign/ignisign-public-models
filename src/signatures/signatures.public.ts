import { IGNISIGN_EIDAS_LEVEL } from "../_commons/eidas.public";
import { CustomPalette, IgnisignApplication_VariationColor } from "../applications/applications-settings-config.public";
import { IGNISIGN_APPLICATION_ENV, IGNISIGN_APPLICATION_TYPE } from "../applications/applications.public";

export const IGNISIGN_SIGNATURE_PUBLIC_FIELDS = ['_id', 'appId', 'signerId', 'signerKeyId', 'documentId', 'mode', 'status', 'signature', 'contentHash', 'signatureValue', 'signedPropertiesHash', 'signingTime', 'signingIp', 'certificate', ];

export enum IGNISIGN_SIGNATURE_MODE {
  SERVER_SIDE_SIGNATURE           = "SERVER_SIDE_SIGNATURE",
  CLIENT_SIDE_SIGNATURE           = "CLIENT_SIDE_SIGNATURE",
}

export enum IGNISIGN_SIGNATURE_PROOF_TYPE {

  // HIGH LEVEL
  PDF_WITH_SIGNATURES      = "PDF_WITH_SIGNATURES",
  PROOF_WEB_PAGE           = "PROOF_WEB_PAGE",
  C2PA                     = "C2PA",
  ADVANCED_LEGAL_KIT       = "ADVANCED_LEGAL_KIT",

  // LOW LEVEL
  XADES                    = "XADES",
  CADES                    = "CADES",
  PKCS7                    = "PKCS7",
  JWS                      = "JWS",    
}


export enum IGNISIGN_SIGNATURE_STATUS {
  INIT       = 'INIT',
  SIGNED     = 'SIGNED',
  FAILED     = 'FAILED',
}

export enum IGNISIGN_INTEGRATION_MODE {
  BY_SIDE            = "BY_SIDE",
  EMBEDDED           = "EMBEDDED",
  MACHINE_TO_MACHINE = "MACHINE_TO_MACHINE",
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
  eidasLevel?            : IGNISIGN_EIDAS_LEVEL;
}

export class IgnisignApplication_SignatureMetadata {
  appId           : string;
  appEnv          : IGNISIGN_APPLICATION_ENV;
  appName         : string;
  appType         : IGNISIGN_APPLICATION_TYPE;
  logoB64        ?: string;
  logoDarkB64    ?: string;
  colors         ?: CustomPalette;
}
export class IgnisignSignatureImages_Dto {
  documentId : string;
  signatures : { signerId: string, imgB64: string }[];
}


export class IgnisignDocumentSignatureProof_CustomizationDto {
  html : string;
}