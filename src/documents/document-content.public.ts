/**
 * @module Document Content Public Model
 * 
 * @description
 * Defines the data structures for document content creation and handling in the Ignisign platform.
 * Implements DTOs for JSON content, private content, and private file handling with validation.
 * This model ensures proper content format and validation for all document types.
 * 
 * @keyPoints
 * - Supports JSON content creation with flexible structure
 * - Handles private content with secure hashing
 * - Manages private file metadata and access
 * - Uses class-validator for runtime validation
 * 
 * @integrationPoints
 * - Used in document creation and upload flows
 * - Referenced in content validation processes
 * - Applied in file handling operations
 * - Controls document access and security
 * 
 * @dependencies
 * - class-validator: For DTO field validation
 * 
 * @gotchas
 * - JSON content type is 'any' for flexibility
 * - Document hash is required for private content
 * - File URL is required for private files
 * - Bearer token is optional but recommended
 * - File metadata must be complete and valid
 */

import {IsDefined, IsOptional, IsString} from "class-validator";

/**
 * @class IgnisignDocument_ContentCreation_DataJsonDto
 * @description DTO for creating documents with JSON content.
 * Allows any valid JSON structure as content.
 */
export class IgnisignDocument_ContentCreation_DataJsonDto {
  /** @property The JSON content to be stored */
  @IsDefined()
  jsonContent : any;
}

/**
 * @class IgnisignDocument_ContentCreation_PrivateContentDto
 * @description DTO for creating documents with private content.
 * Requires a hash for content verification.
 */
export class IgnisignDocument_ContentCreation_PrivateContentDto {
  /** @property Hash of the document content for verification */
  @IsDefined()
  @IsString()
  documentHash : string;
}

/**
 * @class IgnisignDocument_PrivateFileDto
 * @description DTO for handling private file documents.
 * Contains file metadata and access information.
 */
export class IgnisignDocument_PrivateFileDto {
  /** @property Optional document identifier */
  @IsOptional()
  @IsString()
  documentId ?: string;

  /** @property URL where the file can be accessed */
  @IsString()
  fileUrl : string;   
  
  /** @property MIME type of the file */
  @IsString()
  mimeType : string;     
  
  /** @property Original filename */
  @IsString()
  fileName : string;     
  
  /** @property Optional bearer token for authentication */
  @IsOptional()
  @IsString()
  bearer ?: string;   
}