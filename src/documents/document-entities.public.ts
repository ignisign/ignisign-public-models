/**
 * Document Entities Public Model
 * 
 * Defines the core document entities and types in the Ignisign platform. Implements document types,
 * statuses, validation rules, and data structures for document management and tracking. This model
 * is fundamental to all document-related operations in the platform.
 * 
 * Key Points:
 * - Six document types (PDF, FILE, JSON, etc.) for different content formats
 * - Four document statuses (CREATED, PROVIDED, etc.) for lifecycle tracking
 * - Supports multiple file formats with specific validation rules
 * - Includes metadata and context handling for document management
 * 
 * Integration Points:
 * - Used in document management and storage operations
 * - Referenced in signature requests and workflows
 * - Applied in document validation and verification
 * - Controls document lifecycle and state transitions
 * 
 * Dependencies:
 * - class-validator: For DTO validation
 * - applications.public: For environment types
 * - signature-requests.public: For statement types
 * 
 * Gotchas:
 * - Some fields are environment-specific and must match app environment
 * - Image types must be PDF-insertable for signature visualization
 * - Document hash is required for integrity verification
 * - Template displayer is optional but needed for custom visualization
 * - File size and type restrictions apply based on document nature
 */

import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IgnisignSignatureRequest_Statement } from "../signatures/signature-requests.public";

/**
 * Supported document types in the platform.
 * Each type has specific handling and validation rules.
 */
export enum IGNISIGN_DOCUMENT_TYPE {
  /** Standard PDF document */
  PDF                      = "PDF",
  /** Encrypted PDF document */
  PDF_ENCRYPTED            = "PDF_ENCRYPTED",
  /** Generic file document */
  FILE                     = "FILE",
  /** JSON data document */
  DATA_JSON                = "DATA_JSON",
  /** XML data document */
  DATA_XML                 = "DATA_XML",
  /** Private file with restricted access */
  PRIVATE_FILE             = "PRIVATE_FILE",
}

/**
 * Document lifecycle status states.
 * Controls document availability and processing.
 */
export enum IGNISIGN_DOCUMENT_STATUS {
  /** Initial state after creation */
  CREATED          = "CREATED",
  /** Document content has been provided */
  PROVIDED         = "PROVIDED",
  /** Document has been archived */
  ARCHIVED         = "ARCHIVED",
  /** Document content has been cleaned */
  CLEANED          = "CLEANED",
}

/**
 * Error types for private file access operations.
 */
export enum GET_PRIVATE_FILE_ERRORS {
  /** Hash verification failed */
  DOCUMENT_HASH_DOES_NOT_MATCH_PROVIDED_ONE = 'DOCUMENT_HASH_DOES_NOT_MATCH_PROVIDED_ONE',
  /** Access permission denied */
  NOT_AUTHORIZED_TO_GET                     = 'NOT_AUTHORIZED_TO_GET',
  /** File retrieval failed */
  CANNOT_GET_FILE                           = 'CANNOT_GET_FILE',
}

/** MIME types that can be inserted into PDF documents */
export const IMAGE_MIMETYPE_INSERABLE_IN_PDF = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/bmp",
  "image/tiff"
];

/** Supported file extensions for document uploads */
export const IGNISIGN_ACCEPTED_DOCS = [
  '.ai',   '.bmp',    '.gif', '.ico', '.jpeg',  '.jpg', '.png',   '.ps',  '.psd', '.svg',
  '.tif',  '.tiff',   '.key', '.odp', '.pps',   '.ppt', '.pptx',  '.ods', '.xls', '.xlsm',
  '.xlsx', '.3g2',    '.3gp', '.flv', '.h264',  '.m4v', '.mkv',   '.mov', '.mp4', '.mpg',
  '.mpeg', '.rm',     '.swf', '.vob', '.wmv',   '.doc', '.docx',  '.odt', '.pdf', '.rtf',
  '.tex',  '.wpd',    '.csv', '.tar', '.json',  '.xml', '.7z',    '.arj', '.deb', '.rar',
  '.rpm',  '.z',      '.zip', '.txt', '.md'
]

/**
 * Core document entity class.
 * Contains all properties for document tracking and management.
 */
export class IgnisignDocument {
  /** MongoDB document ID */
  _id                            ?: string;
  /** Associated application ID */
  appId                           : string;
  /** Environment context */
  appEnv                          : IGNISIGN_APPLICATION_ENV;
  /** Document content type */
  documentNature                  : IGNISIGN_DOCUMENT_TYPE;
  /** Current lifecycle status */
  status                          : IGNISIGN_DOCUMENT_STATUS;
  /** Content hash for integrity */
  documentHash                    : string;
  /** Associated signature request */
  signatureRequestId              : string;
  /** Optional external reference ID */
  externalId                     ?: string;
  /** Display label */
  label                          ?: string;
  /** Optional description */
  description                    ?: string;
  /** Original filename */
  fileName                       ?: string;
  /** File size in bytes */
  fileSize                       ?: number;
  /** Content MIME type */
  mimeType                       ?: string;
  /** JSON content if applicable */
  dataJsonContent                ?: string;
  /** Related document reference */
  relatedDocumentId              ?: string;
  /** Related document type */
  relatedDocumentType            ?: IGNISIGN_DOCUMENT_TYPE;
  /** Template displayer ID */
  templateDisplayerId            ?: string;
  /** Template displayer version */
  templateDisplayerVersion       ?: number;
  /** Creation timestamp */
  _createdAt                     ?: Date;
  /** Whether data visualization is available */
  dataVisualizationAvailable          ?: boolean;
}

/**
 * Simple container for document transport.
 */
export class IgnisignDocument_Container {
  document                   : IgnisignDocument;
}

/**
 * Extended document class with signature context.
 * Includes statements and signature summaries.
 */
export class IgnisignDocument_Context extends IgnisignDocument {
  /** Associated signature statements */
  statements         ?: IgnisignSignatureRequest_Statement[];  
  /** Summary of signatures applied */
  signatureSummaries  :  {
    signatureId : string,
    signerId    : string,
    date        : Date,
  } [];
}

/**
 * DTO for document initialization.
 * Validates required and optional fields for creation.
 */
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

/**
 * DTO for document updates.
 * Validates fields that can be modified after creation.
 */
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
