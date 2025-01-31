/**
 * @module Broadcastable Actions Public Model
 * 
 * @description
 * Defines the action types that can be broadcast during signature processes in the Ignisign platform.
 * Implements DTOs for file requests, URL handling, signature completion, and error reporting.
 * This model ensures type-safe communication during signature workflows.
 * 
 * @keyPoints
 * - Four distinct action types
 * - Type-safe action data structures
 * - Error code integration with context
 * - Private file handling support
 * - URL action management
 * 
 * @integrationPoints
 * - Used in signature workflow management
 * - Referenced in UI interaction handling
 * - Applied in error reporting and handling
 * - Controls process flow and state changes
 * 
 * @dependencies
 * - class-validator: For DTO validation
 * - ignisign-errors.public: For error codes
 * 
 * @gotchas
 * - Error context is untyped (any)
 * - URL actions require proper validation
 * - File requests need external handling
 * - Action type must match enum exactly
 * - Private file URLs must be secure
 */

import { IsEnum } from "class-validator";
import { IGNISIGN_ERROR_CODES } from "../_commons/ignisign-errors.public";

/**
 * @enum IGNISIGN_BROADCASTABLE_ACTIONS
 * @description Available action types that can be broadcast.
 */
export enum IGNISIGN_BROADCASTABLE_ACTIONS {
  /** Request for private file URL */
  NEED_PRIVATE_FILE_URL = 'NEED_PRIVATE_FILE_URL',
  /** Request to open a URL */
  OPEN_URL             = 'OPEN_URL',
  /** Signature process completed */
  SIGNATURE_FINALIZED  = 'SIGNATURE_FINALIZED',
  /** Error during signature process */
  SIGNATURE_ERROR      = 'SIGNATURE_ERROR'
}

/**
 * @type IgnisignBroadcastableAction_Dto
 * @description Union type of all possible broadcastable actions.
 */
export type IgnisignBroadcastableAction_Dto = 
  IgnisignBroadcastableAction_PrivateFileRequestDto  |
  IgnisignBroadcastableAction_OpenUrlRequestDto      |
  IgnisignBroadcastableAction_SignatureFinalizedDto  |
  IgnisignBroadcastableAction_SignatureErrorDto;

/**
 * @class IgnisignBroadcastableAction_PrivateFileRequestDto
 * @description Request for a private file URL with document context.
 */
export class IgnisignBroadcastableAction_PrivateFileRequestDto {
  /** @property Action type identifier */
  @IsEnum(IGNISIGN_BROADCASTABLE_ACTIONS)
  type: IGNISIGN_BROADCASTABLE_ACTIONS.NEED_PRIVATE_FILE_URL
  
  /** @property Request data */
  data: {
    /** Internal document ID */
    documentId: string;
    /** Optional external reference */
    externalDocumentId?: string;
  }
}

/**
 * @type IgnisignBroadcastableAction_OpenUrlRequestDto
 * @description Request to open a specific URL.
 */
export type IgnisignBroadcastableAction_OpenUrlRequestDto = {
  /** @property Action type identifier */
  type: IGNISIGN_BROADCASTABLE_ACTIONS.OPEN_URL;
  /** @property URL data */
  data: {
    /** Target URL to open */
    url: string;
  }
}

/**
 * @type IgnisignBroadcastableAction_SignatureFinalizedDto
 * @description Notification of completed signatures.
 */
export type IgnisignBroadcastableAction_SignatureFinalizedDto = {
  /** @property Action type identifier */
  type: IGNISIGN_BROADCASTABLE_ACTIONS.SIGNATURE_FINALIZED;
  /** @property Completion data */
  data: {
    /** List of completed signature IDs */
    signatureIds: string[];
  }
}

/**
 * @type IgnisignBroadcastableAction_SignatureErrorDto
 * @description Error notification during signature process.
 */
export type IgnisignBroadcastableAction_SignatureErrorDto = {
  /** @property Action type identifier */
  type: IGNISIGN_BROADCASTABLE_ACTIONS.SIGNATURE_ERROR;
  /** @property Error data */
  data: {
    /** Specific error code */
    errorCode: IGNISIGN_ERROR_CODES;
    /** Optional error context */
    errorContext?: any;
  }
}

