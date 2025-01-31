import { IsBase64, IsString, Length } from 'class-validator';

/**
 * Log Capsules Public Model
 * 
 * @summary Defines structures for cryptographic logging and timestamping in the Ignisign platform,
 * enabling secure audit trails and proof of existence for digital operations.
 * 
 * @key_points
 * - Secure hash-based logging
 * - Base64 encoded timestamps
 * - Fixed-length hash validation
 * - Cryptographic proof generation
 * - Audit trail support
 * 
 * @integration_points
 * - Logging service integration
 * - Timestamp verification
 * - Audit trail generation
 * - Hash verification
 * - Proof validation
 * 
 * @gotchas
 * - Hash must be exactly 44 characters
 * - Base64 encoding required
 * - Timestamp format is critical
 * - Proof generation is asynchronous
 * - Hash verification is strict
 */

/**
 * Request structure for creating a log capsule.
 * Requires a base64 encoded SHA-256 hash.
 */
export class IgnisignLogCapsule_RequestDto {
  @IsString()
  @IsBase64()
  @Length(44, 44)
  hashSha256_b64: string;
}

/**
 * Response structure containing the timestamped log capsule.
 * Includes original hash and timestamp proof.
 */
export class IgnisignLogCapsule_ResponseDto {
  hashSha256_b64    : string;
  timestamp_b64     : string;
  // proof_b64    : string;
  // proof_timestamp_b64 : string;
}

