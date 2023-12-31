import { IsEmail, IsEnum, IsMongoId, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

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
export class IgnisignDocumentRequest {
  _id                          ?: string;
  appId                         : string;
  appEnv                        : IGNISIGN_APPLICATION_ENV;
  target                        : IGNISIGN_DOCUMENT_REQUEST_TARGET;
  status                        : IGNISIGN_DOCUMENT_REQUEST_STATUS;
  signatureRequestId            : string;
  documentId                    : string;
  externalId                   ?: string;

  user                         ?: {
    firstName ?: string;
    lastName  ?: string;
    email      : string;
  }
}

export class IgnisignDocumentRequest_RequestDto {
  
  @IsEnum(IGNISIGN_DOCUMENT_REQUEST_TARGET)
  target : IGNISIGN_DOCUMENT_REQUEST_TARGET;

  @IsMongoId()
  documentId : string;

  @IsOptional()
  @IsString()
  externalId ?: string;

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
