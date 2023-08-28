import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNER_CLAIM_REF } from "../signers/signer-claims.public";
import { IGNISIGN_ID_PROOFING_METHOD_REF } from "./id-proofing-methods.public";


export enum ID_PROOFING_DOCUMENT_TYPE {
  ID_CARD     = "ID_CARD",
  PASSPORT    = "PASSPORT",
  CAR_LICENCE = "CAR_LICENCE"
}


export enum IGNISIGN_ID_PROOFING_STATUS {
  NOT_INITIALIZED             = "NOT_INITIALIZED",
  CREATED                     = "CREATED",
  PENDING                     = "PENDING",
  VALIDATION_IN_PROGRESS      = "VALIDATION_IN_PROGRESS",
  WAITING_SIGNER_CONFIRMATION = "WAITING_SIGNER_CONFIRMATION",
  VALID                       = "VALID",
  REJECTED                    = "REJECTED",
  ABORTED                     = "ABORTED",
  EXPIRED                     = "EXPIRED",
  ERROR                       = "ERROR",
  INVALID                     = "INVALID",
  UNKNOWN                     = "UNKNOWN"
}

export const IGNISIGN_ID_PROOFING_STATUS_TO_LEVEL_OF_PROGRESS = {
  ABORTED                 : -1,
  EXPIRED                 : -1,
  ERROR                   : -1,
  INVALID                 : -1,
  UNKNOWN                 : -1,  
  NOT_INITIALIZED         : 0,
  CREATED                 : 1,
  PENDING                 : 2,
  VALIDATION_IN_PROGRESS  : 3,
  VALID                   : 4,
}


export const IGNISIGN_ID_PROOFING_INPROGRESS_STATUS = [ 
  // IGNISIGN_ID_PROOFING_STATUS.CREATED, 
  IGNISIGN_ID_PROOFING_STATUS.PENDING, 
  IGNISIGN_ID_PROOFING_STATUS.VALIDATION_IN_PROGRESS,
  IGNISIGN_ID_PROOFING_STATUS.WAITING_SIGNER_CONFIRMATION
];
export const IGNISIGN_ID_PROOFING_COMPLETED_STATUS  = [ 
  IGNISIGN_ID_PROOFING_STATUS.VALID, 
  IGNISIGN_ID_PROOFING_STATUS.INVALID, 
  IGNISIGN_ID_PROOFING_STATUS.ERROR, 
  IGNISIGN_ID_PROOFING_STATUS.ABORTED, 
  IGNISIGN_ID_PROOFING_STATUS.EXPIRED ,
  IGNISIGN_ID_PROOFING_STATUS.REJECTED
];

export enum IGNISIGN_ID_PROOFING_CONTEXT_USAGE {
  ONBOARDING = "ONBOARDING",
  REVOCATION = "REVOCATION"
}


export enum IGNISIGN_ID_PROOFING_EXECUTION_MODE {
  SYNC  = "SYNC",
  ASYNC = "ASYNC"
}

export class IgnisignIdProof {
  _id              ?: string;
  appId             : string;
  appEnv            : IGNISIGN_APPLICATION_ENV;
  signerId          : string;
  externalId       ?: string;
  status            : IGNISIGN_ID_PROOFING_STATUS;
  contextUsage      : IGNISIGN_ID_PROOFING_CONTEXT_USAGE;
  methodRef         : IGNISIGN_ID_PROOFING_METHOD_REF;
  inputs            : any;
  results          ?: any;
  error            ?: any;
  proofContent     ?: any;
  executionContext ?: any;
  _createdAt       ?: Date;
}


export class IgnisignIdProofing_Summary {
  appId        : string;
  appEnv       : string;
  signerId     : string;
  idProofs     : {
    _id       : string;
    methodRef : IGNISIGN_ID_PROOFING_METHOD_REF;
    status    : IGNISIGN_ID_PROOFING_STATUS;
  }[];
}

export class IgnisignIdProofing_MetadataDto {
  
}
