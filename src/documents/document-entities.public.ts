import { IsMongoId, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignSignatureRequest_Statement } from "../signatures/signature-requests.public";
import { IgnisignDocumentRequest } from "./document-request.public";


export enum IGNISIGN_DOCUMENT_TYPE {
  PDF          = "PDF",
  FILE         = "FILE",
  DATA_JSON    = "DATA_JSON",
  PRIVATE_FILE = "PRIVATE_FILE",  
}

export enum IGNISIGN_DOCUMENT_STATUS {
  CREATED          = "CREATED",
  DOCUMENT_REQUEST = "DOCUMENT_REQUEST",
  PROVIDED         = "PROVIDED",
  ARCHIVED         = "ARCHIVED",
}

export enum GET_PRIVATE_FILE_ERRORS {
  DOCUMENT_HASH_DOES_NOT_MATCH_PROVIDED_ONE = 'DOCUMENT_HASH_DOES_NOT_MATCH_PROVIDED_ONE',
  NOT_AUTHORIZED_TO_GET                     = 'NOT_AUTHORIZED_TO_GET',
  CANNOT_GET_FILE                           = 'CANNOT_GET_FILE',
}

export const IGNISIGN_ACCEPTED_DOCS = [
  '.ai',   '.bmp',    '.gif', '.ico', '.jpeg',  '.jpg', '.png',   '.ps',  '.psd', '.svg',
  '.tif',  '.tiff',   '.key', '.odp', '.pps',   '.ppt', '.pptx',  '.ods', '.xls', '.xlsm',
  '.xlsx', '.3g2',    '.3gp', '.flv', '.h264',  '.m4v', '.mkv',   '.mov', '.mp4', '.mpg',
  '.mpeg', '.rm',     '.swf', '.vob', '.wmv',   '.doc', '.docx',  '.odt', '.pdf', '.rtf',
  '.tex',  '.wpd',    '.csv', '.tar', '.json',  '.xml', '.7z',    '.arj', '.deb', '.rar',
  '.rpm',  '.z',   '.zip',
]

export class IgnisignDocument {
  _id                       ?: string;
  _createdAt                ?: Date;
  appId                      : string;
  appEnv                     : IGNISIGN_APPLICATION_ENV;
  documentNature             : IGNISIGN_DOCUMENT_TYPE;
  status                     : IGNISIGN_DOCUMENT_STATUS;
  
  documentRequestId         ?: string;
  signatureRequestId         : string;
  externalId                ?: string;
  
  label                     ?: string;
  description               ?: string;
  fileName                  ?: string;
  fileSize                  ?: number;
  mimeType                  ?: string;
  documentHash               : string;
}

export class IgnisignDocumentContainer {
  document                   : IgnisignDocument;
}

export class IgnisignDocument_Context extends IgnisignDocument {
  statements         ?: IgnisignSignatureRequest_Statement[];  
  documentRequest    ?: IgnisignDocumentRequest;
  signatureSummaries  :  {
    signatureId : string,
    signerId    : string,
    date        : Date,
  } [];
}

export class IgnisignDocument_InitializationDto {
  @IsMongoId()
  signatureRequestId          : string;

  @IsOptional()
  @IsString()
  externalId                 ?: string;

  @IsOptional()
  @IsString()
  label                      ?: string;

  @IsOptional()
  @IsString()
  description                ?: string;
}

export class IgnisignDocument_UpdateDto {
  @IsOptional()
  @IsString()
  externalId                 ?: string;

  @IsOptional()
  @IsString()
  label                      ?: string;

  @IsOptional()
  @IsString()
  description                ?: string;
}