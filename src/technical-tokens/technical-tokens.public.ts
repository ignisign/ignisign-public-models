import { IsBoolean, IsOptional } from "class-validator";

/**
 * Technical Tokens Public Model
 * 
 * @summary Defines structures for managing technical tokens in the Ignisign platform,
 * enabling secure, one-time-use tokens for various platform operations.
 * 
 * @key_points
 * - Token validation and consumption
 * - Expiration handling
 * - Target verification
 * - Context preservation
 * - Error tracking
 * 
 * @integration_points
 * - Token verification flows
 * - One-time operations
 * - Security validations
 * - Context management
 * - Error handling
 * 
 * @gotchas
 * - Tokens can only be consumed once
 * - Expired tokens are invalid
 * - Target must match exactly
 * - Context is type-agnostic
 * - Related IDs must be valid
 */

/**
 * Data transfer object for token validation.
 * Tracks various validation states and errors.
 */
export class IgnisignTechnicalToken_CheckDto {
  constructor(
    public isValid: boolean = false,
    public context: any     = null
  ) {}

  @IsBoolean()
  notFound          : boolean = false;

  @IsBoolean()
  alreadyConsumed   : boolean = false;

  @IsBoolean()
  badTarget         : boolean = false;

  @IsBoolean()
  isExpired         : boolean = false;

  @IsBoolean()
  badRelatedId      : boolean = false;

  @IsOptional()
  @IsBoolean()
  errorStr?         : string;
}

/**
 * Extended validation DTO that includes consumption tracking.
 * Used for one-time-use token operations.
 */
export class IgnisignTechnicalToken_CheckAndConsumeDto extends IgnisignTechnicalToken_CheckDto {
  @IsBoolean()
  haveBeenConsumed  : boolean = false;
}
