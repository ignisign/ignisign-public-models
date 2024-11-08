import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignSignatureRequest_Statement } from "../signatures/signature-requests.public";


export enum IGNISIGN_DOCUMENT_TYPE {
  PDF                      = "PDF",
  PDF_ENCRYPTED            = "PDF_ENCRYPTED",
  FILE                     = "FILE",
  DATA_JSON                = "DATA_JSON",
  DATA_XML                 = "DATA_XML",
  PRIVATE_FILE             = "PRIVATE_FILE",
  // VERIFIABLE_CREDENTIAL    = "VERIFIABLE_CREDENTIAL",
  // WEB3_FILE                = "WEB3_FILE",

}

export enum IGNISIGN_DOCUMENT_STATUS {
  CREATED          = "CREATED",
  PROVIDED         = "PROVIDED",
  ARCHIVED         = "ARCHIVED",
}

export enum GET_PRIVATE_FILE_ERRORS {
  DOCUMENT_HASH_DOES_NOT_MATCH_PROVIDED_ONE = 'DOCUMENT_HASH_DOES_NOT_MATCH_PROVIDED_ONE',
  NOT_AUTHORIZED_TO_GET                     = 'NOT_AUTHORIZED_TO_GET',
  CANNOT_GET_FILE                           = 'CANNOT_GET_FILE',
}

// Duplicated in ig-private-proof-generator
export const IMAGE_MIMETYPE_INSERABLE_IN_PDF = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/bmp",
  "image/tiff"
];


export const IGNISIGN_ACCEPTED_DOCS = [
  '.ai',   '.bmp',    '.gif', '.ico', '.jpeg',  '.jpg', '.png',   '.ps',  '.psd', '.svg',
  '.tif',  '.tiff',   '.key', '.odp', '.pps',   '.ppt', '.pptx',  '.ods', '.xls', '.xlsm',
  '.xlsx', '.3g2',    '.3gp', '.flv', '.h264',  '.m4v', '.mkv',   '.mov', '.mp4', '.mpg',
  '.mpeg', '.rm',     '.swf', '.vob', '.wmv',   '.doc', '.docx',  '.odt', '.pdf', '.rtf',
  '.tex',  '.wpd',    '.csv', '.tar', '.json',  '.xml', '.7z',    '.arj', '.deb', '.rar',
  '.rpm',  '.z',      '.zip', '.txt', '.md'
]

export class IgnisignDocument {
  _id                            ?: string;
  appId                           : string;
  appEnv                          : IGNISIGN_APPLICATION_ENV;
  documentNature                  : IGNISIGN_DOCUMENT_TYPE;
  status                          : IGNISIGN_DOCUMENT_STATUS;
  documentHash                    : string;
  signatureRequestId              : string;
  externalId                     ?: string;
  label                          ?: string;
  description                    ?: string;
  fileName                       ?: string;
  fileSize                       ?: number;
  mimeType                       ?: string;
  dataJsonContent                ?: string;
  relatedDocumentId              ?: string;
  relatedDocumentType            ?: IGNISIGN_DOCUMENT_TYPE;
  templateDisplayerId            ?: string;
  templateDisplayerVersion       ?: number;
  _createdAt                     ?: Date;
  dataVisualizationAvailable          ?: boolean;
}

export class IgnisignDocument_Container {
  document                   : IgnisignDocument;
}

export class IgnisignDocument_Context extends IgnisignDocument {
  statements         ?: IgnisignSignatureRequest_Statement[];  
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

  @IsOptional()
  @IsString()
  templateDisplayerId       ?: string;

  @IsOptional()
  @IsNumber()
  templateDisplayerVersion  ?: number;
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


  @IsOptional()
  @IsString()
  templateDisplayerId       ?: string;

  @IsOptional()
  @IsNumber()
  templateDisplayerVersion  ?: number;
}
