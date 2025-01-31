/**
 * Document Seal Public Model
 * 
 * Defines the structure for document sealing operations in the Ignisign platform. Implements a validated
 * DTO for sealing documents with specific hash algorithms and content, ensuring data integrity and
 * proper format validation.
 * 
 * Key Points:
 * - Uses MongoDB IDs for document identification
 * - Requires base64 encoded content for consistent handling
 * - Supports SHA-256 hashing algorithm for security
 * - Validates all input fields using class-validator
 * 
 * Integration Points:
 * - Used in document sealing operations
 * - Referenced in electronic signature processes
 * - Applied in content validation workflows
 * - Controls seal creation and verification
 * 
 * Dependencies:
 * - class-validator: For DTO field validation
 * 
 * Gotchas:
 * - Only SHA-256 hash algorithm is currently supported
 * - Content must be properly base64 encoded
 * - Document ID must be a valid MongoDB ObjectId
 * - All fields are required - no optional fields
 * - Base64 validation is strict - padding must be correct
 */

import { IsBase64, IsIn, IsMongoId, IsString } from "class-validator";

/**
 * Data Transfer Object for document sealing operations.
 * Validates and structures the input for creating document seals.
 */
export class IgnisignDocumentSeal_SealDto {
  /** MongoDB ObjectId of the document to seal */
  @IsMongoId()
  documentId: string;

  /** Base64 encoded content to be signed */
  @IsString()
  @IsBase64()
  toBeSigned: string;

  /** Hash algorithm to use (currently only sha256) */
  @IsString()
  @IsIn(["sha256"])
  hashAlg: string;
}
