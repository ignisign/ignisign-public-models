import { IGNISIGN_ERROR_CODES } from "../_commons/ignisign-errors.public";

export enum IGNISIGN_AUTH_FULL_MECHANISM_REF {
  SIMPLE                = 'SIMPLE',
  PHONE_SMS             = 'PHONE_SMS',
  PHONE_CALL            = 'PHONE_CALL',
  TOTP                  = "TOTP",
  PASS_KEY_POSSESSION   = 'PASS_KEY_POSSESSION',
  EID                   = 'EID',
}



export enum IGNISIGN_BROADCASTABLE_ACTIONS {
  NEED_PRIVATE_FILE_URL                                 = 'NEED_PRIVATE_FILE_URL',
  OPEN_URL                                              = 'OPEN_URL',
  SIGNATURE_FINALIZED                                   = 'SIGNATURE_FINALIZED',
  SIGNATURE_ERROR                                       = 'SIGNATURE_ERROR'
}

export type IGNISIGN_BROADCASTABLE_ACTIONS_TYPE = 
  IGNISIGN_BROADCASTABLE_ACTIONS_NEED_PRIVATE_FILE   |
  IGNISIGN_BROADCASTABLE_ACTIONS_OPEN_URL            |
  IGNISIGN_BROADCASTABLE_ACTIONS_SIGNATURE_FINALIZED |
  IGNISIGN_BROADCASTABLE_ACTIONS_SIGNATURE_ERROR;



export type IGNISIGN_BROADCASTABLE_ACTIONS_NEED_PRIVATE_FILE = {
  type: IGNISIGN_BROADCASTABLE_ACTIONS.NEED_PRIVATE_FILE_URL,
  data: {
    documentId: string
    externalDocumentId?: string
  }
}

export type IGNISIGN_BROADCASTABLE_ACTIONS_OPEN_URL = {
  type: IGNISIGN_BROADCASTABLE_ACTIONS.OPEN_URL,
  data: {
    url: string
  }
}

export type IGNISIGN_BROADCASTABLE_ACTIONS_SIGNATURE_FINALIZED = {
  type: IGNISIGN_BROADCASTABLE_ACTIONS.SIGNATURE_FINALIZED,
  data: {
    signatureIds: string[]
  }
}

export type IGNISIGN_BROADCASTABLE_ACTIONS_SIGNATURE_ERROR = {
  type: IGNISIGN_BROADCASTABLE_ACTIONS.SIGNATURE_ERROR,
  data: {
    errorCode     : IGNISIGN_ERROR_CODES;
    errorContext ?: any;
  }
}

