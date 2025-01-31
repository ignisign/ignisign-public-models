/**
 * API Authentication Public Model
 * 
 * Defines the structure for API authentication requests in the Ignisign platform. Implements a validated
 * DTO for API authentication containing application ID, environment, and secret. This model ensures
 * proper validation of API authentication requests before processing.
 * 
 * Key Points:
 * - Uses class-validator decorators for runtime validation
 * - Requires appId, appEnv, and secret fields
 * - Environment must be a valid IGNISIGN_APPLICATION_ENV value
 * - All fields are required with no defaults
 * 
 * Integration Points:
 * - Used in API authentication endpoints for request validation
 * - Referenced in API key validation processes
 * - Part of the request validation pipeline
 * - Required for all authenticated API access
 * 
 * Dependencies:
 * - class-validator: For DTO field validation
 * - applications.public: For environment enum
 * 
 * Gotchas:
 * - All fields are strictly typed and validated
 * - Environment must match enum value exactly
 * - No default values are provided for any field
 * - Secret handling requires proper security consideration
 * - Environment-specific API keys must match the provided environment
 */

import {IsEnum, IsString} from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

/**
 * Data Transfer Object for API authentication requests.
 * Validates all required fields for API authentication.
 */
export class IgnisignApiAuth_RequestDto {
  /** Application identifier */
  @IsString()
  appId  : string;

  /** Application environment context */
  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv : IGNISIGN_APPLICATION_ENV;
  
  /** API secret key */
  @IsString()
  secret : string;
}

