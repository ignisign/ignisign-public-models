/**
 * User Invitations Public Model
 * 
 * Defines the invitation system for users in Ignisign applications. Implements invitation status tracking,
 * role assignments per environment, and validated DTOs for invitation creation and user editing.
 * 
 * Key Points:
 * - Four invitation statuses: PENDING (default), ACCEPTED, DECLINED, CANCELED
 * - Environment-specific role assignments (development, staging, production)
 * - Validated creation and edit DTOs using class-validator
 * - Type-safe role assignments with nested validation
 * 
 * Integration Points:
 * - Used in user invitation flows for new team members
 * - Referenced in user management for role updates
 * - Applied in role assignments across environments
 * - Validates invitation requests and role modifications
 * 
 * Dependencies:
 * - class-validator: For DTO validation
 * - class-transformer: For object transformation
 * - reflect-metadata: For decorator support
 * 
 * Gotchas:
 * - Roles must be defined for all environments (development, staging, production)
 * - Email validation follows strict RFC standards
 * - Status changes are one-way (e.g., ACCEPTED cannot return to PENDING)
 * - Role objects cannot be empty and must be properly structured
 * - All role arrays must contain valid IGNISIGN_APPLICATION_ROLES values
 */

import { IsBoolean, IsDefined, IsEmail, IsNotEmptyObject, IsObject, IsString, ValidateNested } from "class-validator";
import { IGNISIGN_APPLICATION_ROLES } from "./users-roles.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { Type } from "class-transformer";
import 'reflect-metadata';

/**
 * Defines the possible states of an invitation in the system.
 * Status transitions are one-way and follow a specific flow.
 */
export enum IGNISIGN_APPLICATION_INVITED_USER_STATUS {
  /** Initial state when invitation is created */
  PENDING  = 'PENDING',
  /** User has accepted the invitation */
  ACCEPTED = 'ACCEPTED',
  /** User has declined the invitation */
  DECLINED = 'DECLINED',
  /** Invitation was canceled by the admin */
  CANCELED = 'CANCELED'
}

/**
 * Represents an invited user in the system with their status and role assignments.
 */
export class IgnisignApplication_InvitedUser {
  /** Optional ID, present after creation */
  _id        ?: string;
  /** Email address of the invited user */
  email       : string;
  /** ID of the application the user is invited to */
  appId       : string;
  /** Current status of the invitation */
  status      : IGNISIGN_APPLICATION_INVITED_USER_STATUS = IGNISIGN_APPLICATION_INVITED_USER_STATUS.PENDING;
  /** Role assignments per environment */
  roles       : {[key in IGNISIGN_APPLICATION_ENV] : IGNISIGN_APPLICATION_ROLES[]};
} 

/**
 * Defines the structure for role assignments across all environments.
 * Each environment must have an array of roles defined.
 */
export class IgnisignApplication_Roles {
  [IGNISIGN_APPLICATION_ENV.DEVELOPMENT] : IGNISIGN_APPLICATION_ROLES[];
  [IGNISIGN_APPLICATION_ENV.STAGING]     : IGNISIGN_APPLICATION_ROLES[];
  [IGNISIGN_APPLICATION_ENV.PRODUCTION]  : IGNISIGN_APPLICATION_ROLES[];
}

/**
 * DTO for creating a new user invitation.
 * Includes validation for email and role assignments.
 */
export class IgnisignApplication_InvitedUser_CreationRequestDto {
  @IsEmail()
  readonly email: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()  
  @Type(() => IgnisignApplication_Roles)
  readonly roles: IgnisignApplication_Roles;
}

/**
 * DTO for editing an existing user's roles.
 * Includes validation for role assignments.
 */
export class IgnisignApplicationUser_EditRequestDto {
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()  
  @Type(() => IgnisignApplication_Roles)
  readonly roles: IgnisignApplication_Roles;
}
