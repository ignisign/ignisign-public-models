import { IGNISIGN_EIDAS_LEVEL } from "../_commons/eidas.public";
import { CustomPalette, IgnisignApplication_VariationColor } from "../applications/applications-settings-config.public";
import { IGNISIGN_APPLICATION_ENV, IGNISIGN_APPLICATION_TYPE } from "../applications/applications.public";

export const IGNISIGN_SIGNATURE_PUBLIC_FIELDS = ['_id', 'appId', 'signerId', 'signerKeyId', 'documentId', 'mode', 'status', 'signature', 'contentHash', 'signatureValue', 'signedPropertiesHash', 'signingTime', 'signingIp', 'certificate', ];

export enum IGNISIGN_SIGNATURE_MODE {
  SERVER_SIDE_SIGNATURE           = "SERVER_SIDE_SIGNATURE",
  CLIENT_SIDE_SIGNATURE           = "CLIENT_SIDE_SIGNATURE",
}

export enum IGNISIGN_SIGNATURE_PROOF_PROCESSING_MODE {
  DOCUMENT_SIGNATURE     = "DOCUMENT_SIGNATURE",
  VERIFIABLE_CREDENTIAL  = "VERIFIABLE_CREDENTIAL",
  C2PA                   = "C2PA",
  DATA_SIGNATURE         = "DATA_SIGNATURE",
}

export const AVAILABLE_SIGNATURE_PROOF_PROCESSING_MODES = [
  IGNISIGN_SIGNATURE_PROOF_PROCESSING_MODE.DOCUMENT_SIGNATURE,
  IGNISIGN_SIGNATURE_PROOF_PROCESSING_MODE.DATA_SIGNATURE,
];

export enum IGNISIGN_SIGNATURE_PROOF_TYPE {

  PDF_WITH_SIGNATURES      = "PDF_WITH_SIGNATURES",
  ADVANCED_LEGAL_KIT       = "ADVANCED_LEGAL_KIT",
  SIGNED_DATA              = "SIGNED_DATA",
  C2PA                     = "C2PA", // NOT YET IMPLEMENTED
}



export enum IGNISIGN_SIGNATURE_LOW_LEVEL_PROOF_TYPE {

  CADES                    = "CADES",
  PKCS7                    = "PKCS7",
  PADES_ATTACHED           = "PADES_ATTACHED",

  JWS_DETACHED             = "JWSDET",    // Not yet implemented (see https://www.rfc-editor.org/rfc/rfc7515.html#appendix-F)
  JWS_ATTACHED             = "JWSATT",
  JADES_DETACHED           = "JADESDET",
  JADES_ATTACHED           = "JADESATT",
  
  XADES_DETACHED           = "XADESDET",
  XADES_ATTACHED           = "XADESATT",
  XMLDSIG_DETACHED         = "XMLDSIGDET",
  XMLDSIG_ATTACHED         = "XMLDSIGATT",
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
  contentHash           ?: string;
  status                 : IGNISIGN_SIGNATURE_STATUS;
  mode                   : IGNISIGN_SIGNATURE_MODE;
  ocspCheckValue        ?: any;
  signingIp             ?: string;
  eidasLevel?            : IGNISIGN_EIDAS_LEVEL;
  reasonLabel           ?: string;
  contactInfoLabel      ?: string;
  locationLabel         ?: string;
  signerNameLabel       ?: string;
  signatures             : { type: IGNISIGN_SIGNATURE_LOW_LEVEL_PROOF_TYPE; signatureFilePath: string; signingTime: Date; }[];
}

export class IgnisignApplication_SignatureMetadata {
  appId           : string;
  appEnv          : IGNISIGN_APPLICATION_ENV;
  appName         : string;
  orgName         ?: string;
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
