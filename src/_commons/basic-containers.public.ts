import {  IsBoolean, IsString } from "class-validator";

/**
 * Basic Containers Public Model
 * 
 * @summary Defines fundamental data transfer objects used across the platform,
 * with built-in validation using class-validator decorators. These containers handle
 * common data patterns like JWT tokens, document validation results, and ID collections.
 * 
 * @key_points
 * - Uses class-validator for runtime validation
 * - All containers are classes (not interfaces) for validation
 * - String validation for IDs and tokens
 * - Array validation with element-level checks
 * 
 * @integration_points
 * - Used in API request/response payloads
 * - Referenced in authentication flows
 * - Used for bulk operations (emails, signer IDs)
 * - Part of document validation processes
 * 
 * @gotchas
 * - Containers require class-validator to be properly configured
 * - Arrays use `each: true` for element-level validation
 * - JWT container only validates string format, not token validity
 * - Document authenticity container uses boolean flag pattern
 */

/**
 * Container for JWT tokens.
 * Validates token string format.
 * 
 * @remarks
 * Only validates string format, not token validity.
 * Token validation should be handled separately.
 */
export class IgnisignJwtContainer {
  @IsString()
  jwtToken : string;
}

/**
 * Container for document authenticity validation results.
 * Tracks document validation status with boolean flag.
 * 
 * @remarks
 * Used in document validation workflows to track authenticity state.
 * The boolean flag pattern allows for simple status tracking.
 */
export class IgnisignDocument_AuthenticityValidationContainer {
  @IsString()
  documentId : string;

  @IsBoolean()
  authenticityValidated : boolean;
}

/**
 * Container for collections of signer IDs.
 * Validates each ID in the array.
 * 
 * @remarks
 * Used in bulk operations involving multiple signers.
 * Each ID is validated individually using `each: true`.
 */
export class IgnisignSignerIdsContainer {
  @IsString({ each: true })
  signerIds : string[];
}

/**
 * Container for collections of email addresses.
 * Validates each email in the array.
 * 
 * @remarks
 * Used in bulk operations involving multiple email addresses.
 * Each email is validated individually using `each: true`.
 */
export class IgnisignEmailsContainer {
  @IsString({ each: true })
  emails : string[];
}