import { IsEnum } from "class-validator";
import { IGNISIGN_ERROR_CODES } from "../_commons/ignisign-errors.public";

export enum IGNISIGN_BROADCASTABLE_ACTIONS {
  NEED_PRIVATE_FILE_URL = 'NEED_PRIVATE_FILE_URL',
  OPEN_URL              = 'OPEN_URL',
  SIGNATURE_FINALIZED   = 'SIGNATURE_FINALIZED',
  SIGNATURE_ERROR       = 'SIGNATURE_ERROR'
}

export type IgnisignBroadcastableAction_Dto = 
  IgnisignBroadcastableAction_PrivateFileRequestDto  |
  IgnisignBroadcastableAction_OpenUrlRequestDto      |
  IgnisignBroadcastableAction_SignatureFinalizedDto  |
  IgnisignBroadcastableAction_SignatureErrorDto;


export class IgnisignBroadcastableAction_PrivateFileRequestDto {
  @IsEnum(IGNISIGN_BROADCASTABLE_ACTIONS)
  type: IGNISIGN_BROADCASTABLE_ACTIONS.NEED_PRIVATE_FILE_URL
  
  data: {
    documentId: string
    externalDocumentId?: string
  }
}

export type IgnisignBroadcastableAction_OpenUrlRequestDto = {
  type: IGNISIGN_BROADCASTABLE_ACTIONS.OPEN_URL,
  data: {
    url: string
  }
}

export type IgnisignBroadcastableAction_SignatureFinalizedDto = {
  type: IGNISIGN_BROADCASTABLE_ACTIONS.SIGNATURE_FINALIZED,
  data: {
    signatureIds: string[]
  }
}

export type IgnisignBroadcastableAction_SignatureErrorDto = {
  type: IGNISIGN_BROADCASTABLE_ACTIONS.SIGNATURE_ERROR,
  data: {
    errorCode     : IGNISIGN_ERROR_CODES;
    errorContext ?: any;
  }
}

