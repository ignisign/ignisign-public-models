import { IsEmail, IsEnum, IsMongoId, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignDocument } from "./document-entities.public";

export enum IGNISIGN_DOCUMENT_REQUEST_TARGET {
  APPLICATION = 'APPLICATION',
  USER        = 'USER',
}

export enum IGNISIGN_DOCUMENT_REQUEST_STATUS {
  CREATED              = 'CREATED',
  IN_PROGRESS          = 'IN_PROGRESS',
  PROVIDED             = 'PROVIDED',
  WAITING_CONFIRMATION = 'WAITING_CONFIRMATION',
  CANCELLED            = 'CANCELLED',
  VALIDATED            = 'VALIDATED',
  REJECTED             = 'REJECTED', 
}

export enum IGNISIGN_DOCUMENT_REQUEST_ACTION {
  CREATED   = 'CREATED',
  REMOVED   = 'REMOVED',
  VALIDATED = 'VALIDATED',
  REJECTED  = 'REJECTED'
}

export type IGNISIGN_DOCUMENT_REQUEST_VALIDATION_STATUS = IGNISIGN_DOCUMENT_REQUEST_STATUS.VALIDATED | IGNISIGN_DOCUMENT_REQUEST_STATUS.REJECTED;

export class IgnisignDocumentRequest {
  _id                          ?: string;
  appId                         : string;
  appEnv                        : IGNISIGN_APPLICATION_ENV;
  signatureRequestId            : string;
  documentId                    : string;
  target                        : IGNISIGN_DOCUMENT_REQUEST_TARGET;
  status                        : IGNISIGN_DOCUMENT_REQUEST_STATUS;
  externalId                   ?: string;
  externalDocRequestOwnerId    ?: string;
  user                         ?: {
    firstName ?: string;
    lastName  ?: string;
    email      : string;
  }
  // documentNature : IGNISIGN_DOCUMENT_TYPE; // ?
}



export class IgnisignDocumentRequestWithDocument extends IgnisignDocumentRequest {
  document      : IgnisignDocument;
  onlyPdfAllow ?: boolean;
}

export class IgnisignDocumentRequestDto {
  
  @IsEnum(IGNISIGN_DOCUMENT_REQUEST_TARGET)
  target : IGNISIGN_DOCUMENT_REQUEST_TARGET;

  @IsMongoId()
  documentId : string;

  @IsOptional()
  @IsString()
  externalId ?: string;

  @IsOptional()
  @IsString()
  externalDocRequestOwnerId ?: string;

  @IsOptional()
  @IsString()
  firstName ?: string;

  @IsOptional()
  @IsString()
  lastName ?: string;

  @IsOptional()
  @IsEmail()
  email   ?: string;

}

export class IgnisignDocumentRequestValidationDto {
  documentId        : string;
  documentRequestId : string;
  status            : IGNISIGN_DOCUMENT_REQUEST_VALIDATION_STATUS;
}
export class IgnisignDocumentIdContainerDto {
  documentId : string;
}