import { IGNISIGN_EIDAS_LEVEL } from "../_commons/eidas.public";
import { VariationColor } from "../applications/applications-settings-config.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignDocument } from "../documents/document-entities.public";
import { IgnisignSignerSignatureProofDto } from "../signers/signers.public";

export const IGNISIGN_SIGNATURE_PUBLIC_FIELDS = ['_id', 'appId', 'signerId', 'signerKeyId', 'documentId', 'mode', 'status', 'signature', 'contentHash', 'signatureValue', 'signedPropertiesHash', 'signingTime', 'signingIp', 'certificate', ];

export enum IGNISIGN_SIGNATURE_MODE {
  SERVER_SIDE_SIGNATURE           = "SERVER_SIDE_SIGNATURE",
  CLIENT_SIDE_SIGNATURE           = "CLIENT_SIDE_SIGNATURE",
}

export enum IGNISIGN_DOCUMENT_GENERATED_STATUS {
  NOT_INITIALIZED = "NOT_INITIALIZED",
  IN_PROGRESS     = "IN_PROGRESS",
  ON_ERROR        = "ON_ERROR",
  CREATED         = "CREATED",
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

export const SIGNER_MAX_AUTENTHICATION_ATTEMPTS : number = 3; // => private
export const SIGNER_MAX_AUTENTHICATION_ATTEMPTS_TIME : number = 300; // => private


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
export class IgnisignSignatureProof_ResponseDto {
  _id?                  :  string;
  appId                 :  string;
  signerId              :  string;
  signerKeyId           :  string;
  documentId            :  string;
  mode                  :  IGNISIGN_SIGNATURE_MODE;
  status                :  IGNISIGN_SIGNATURE_STATUS;
  signature             ?: string;
  contentHash           ?: string;
  signatureValue        ?: string;
  signedPropertiesHash  ?: string;
  signingTime           ?: string;
  signingIp             ?: string;
  certificate           ?: string;
  signerKey             : { 
    pubKey      : string
    eidasLevel  : IGNISIGN_EIDAS_LEVEL; 
   };// NOT IN SIGNATURE MODEL => GET FROM SIGNER KEY ID
}


export class IgnisignDocumentWithSignatures extends IgnisignDocument{
  signatures : IgnisignSignature[];
}

export class IgnisignDocumentWithSignature extends IgnisignDocument{
  signature : IgnisignSignature;
}

export class IgnisignApplicationSignatureMetadata {
  appName         : string;
  logoB64        ?: string;
  logoDarkB64    ?: string;
  rootUrl        ?: string;
  primaryColor   ?: VariationColor;
  secondaryColor ?: VariationColor;
}

export class SignatureImageB64WrapperDto {
  imgB64 : string;
}

export class DocumentSignatureImagesDto {
  documentId : string;
  signatures : { signerId: string, imgB64: string }[];
}

export class IgnisignDocumentSignatureProofContext {
  document            : IgnisignDocument;
  signatures          : IgnisignSignatureProof[]
  advancedProofStatus : IGNISIGN_DOCUMENT_GENERATED_STATUS;
  applicationMetadata : IgnisignApplicationSignatureMetadata;
}

export class IgnisignSignatureProof {
  signatureDesc : IgnisignSignatureProof_ResponseDto;
  imgB64        : string;
  signer        : IgnisignSignerSignatureProofDto;
}

export class IgnisignSignatureRequestProofsDto {
  signatureRequestId    : string;
  signatureRequestTitle : string;
  documents : {
    name  : string;
    token : string;
  }[]
}

export class IgnisignSignatureAuthentificationAttempt {
  appId                      : string;
  appEnv                     : IGNISIGN_APPLICATION_ENV;
  signatureRequestId         : string;
  signerId                   : string;
  nbAuthentificationAttempts : number;
  lastAuthentificationDate   : Date;
  sessionIds                 : string[];
}
