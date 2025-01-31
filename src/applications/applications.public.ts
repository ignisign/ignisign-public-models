/**
 * Applications Public Model
 * 
 * Defines the core application model for the Ignisign platform. Implements application types,
 * environments, and statuses, along with the base application class and its context extension.
 * This model is fundamental to the platform's multi-tenant architecture.
 * 
 * Key Points:
 * - Supports multiple application types (SIGNATURE, SEAL, LOG_CAPSULE, etc.)
 * - Defines three environments (DEVELOPMENT, STAGING, PRODUCTION)
 * - Implements application lifecycle states through statuses
 * - Uses API versioning (V3, V4) for backward compatibility
 * 
 * Integration Points:
 * - Referenced in application creation and management flows
 * - Used for environment-specific settings and configurations
 * - Linked to signature and signer profiles for each environment
 * - Core part of organization structure and hierarchy
 * 
 * Dependencies:
 * - applications-settings-config: For application configuration and settings
 * - signature-profiles: For signature configuration (deprecated)
 * - signer-profiles: For signer configuration per environment
 * 
 * Gotchas:
 * - Some application types are hidden (e.g., IGNISIGN_RIGHT_DELEGATION)
 * - signatureProfiles is deprecated and will be removed
 * - isDefaultApplication defaults to false if not specified
 * - Environment settings are optional per environment
 * - Status changes may have cascading effects on application access
 */

import { IgnisignApplication_Configuration, IgnisignApplication_EnvSettings, IgnisignApplication_Settings } from "./applications-settings-config.public";
import { IgnisignSignatureProfile } from "../signatures/signature-profiles.public";
import { IgnisignSignerProfile } from "../signers/signer-profiles.public";

/**
 * Supported API versions for backward compatibility.
 * New features may only be available in newer versions.
 */
export enum IGNISIGN_API_VERSION {
  V3 = "V3",
  V4 = "V4"
}

/**
 * Possible application statuses defining its lifecycle state.
 * Status changes affect application accessibility and functionality.
 */
export enum IGNISIGN_APPLICATION_STATUS {
  /** Application is fully operational */
  ACTIVE       = "ACTIVE",
  /** Application access is temporarily suspended */
  BLOCKED      = "BLOCKED",
  /** Application has been archived by admin */
  ARCHIVED     = "ARCHIVED",
  /** Application archived due to organization archival */
  ORG_ARCHIVED = "ORG_ARCHIVED",
}

/**
 * Available application types defining core functionality.
 * Each type provides specific features and capabilities.
 */
export enum IGNISIGN_APPLICATION_TYPE {
  /** Standard electronic signature application */
  SIGNATURE                 = "SIGNATURE",
  /** Electronic seal application for organizational sealing */
  SEAL                     = "SEAL",
  /** Secure logging and audit trail application */
  LOG_CAPSULE              = "LOG_CAPSULE",
  /** Basic signature application without additional features */
  BARE_SIGNATURE           = "BARE_SIGNATURE",
  /** Web3/blockchain integration application */
  WEB3                     = "WEB3",
  /** Internal right delegation application (hidden) */
  IGNISIGN_RIGHT_DELEGATION = "IGNISIGN_RIGHT_DELEGATION",
}

/**
 * List of currently activated application types.
 * Used for validation and UI display filtering.
 */
export const IGNISIGN_APPLICATION_TYPES_ACTIVATED = [
  IGNISIGN_APPLICATION_TYPE.SIGNATURE,
  IGNISIGN_APPLICATION_TYPE.SEAL,
  IGNISIGN_APPLICATION_TYPE.LOG_CAPSULE,
  IGNISIGN_APPLICATION_TYPE.BARE_SIGNATURE,
  IGNISIGN_APPLICATION_TYPE.IGNISIGN_RIGHT_DELEGATION,
];

/**
 * List of application types hidden from standard selection.
 * These types are for internal or special use cases.
 */
export const IGNISIGN_APPLICATION_TYPES_HIDDEN = [
  IGNISIGN_APPLICATION_TYPE.IGNISIGN_RIGHT_DELEGATION
]

/**
 * Available environments for application deployment.
 * Each environment can have different configurations.
 */
export enum IGNISIGN_APPLICATION_ENV {
  /** Development environment for testing */
  DEVELOPMENT   = "DEVELOPMENT",
  /** Staging environment for pre-production validation */
  STAGING       = "STAGING",
  /** Production environment for live operations */
  PRODUCTION    = "PRODUCTION",
}

/**
 * Base application class containing core properties.
 * Used for application creation and basic management.
 */
export class IgnisignApplication {
  /** Creation timestamp */
  _createdAt            ?: Date;
  /** Unique application identifier */
  appId                 ?: string;
  /** Organization ID owning the application */
  orgId                  : string;
  /** Display name of the application */
  appName                : string;
  /** Current lifecycle status */
  status                 : IGNISIGN_APPLICATION_STATUS;
  /** Application type determining features */
  appType                : IGNISIGN_APPLICATION_TYPE;
  /** API version for compatibility */
  ignisignApiVersion     : IGNISIGN_API_VERSION;
  /** Whether this is the default app for the org */
  isDefaultApplication  ?: boolean = false;
}

/**
 * Extended application class with full context.
 * Used for detailed application management and configuration.
 */
export class IgnisignApplication_Context extends IgnisignApplication {
  /** Global application configuration */
  config              : IgnisignApplication_Configuration;
  /** Environment-specific settings */
  envSettings         : { [ keys in IGNISIGN_APPLICATION_ENV] ?: IgnisignApplication_EnvSettings };
  /** Application-wide settings */
  settings            : IgnisignApplication_Settings;
  /** Signer profiles per environment */
  signerProfiles      : { [ keys in IGNISIGN_APPLICATION_ENV] ?: IgnisignSignerProfile[] };
  
  /** @deprecated Use signerProfiles instead */
  signatureProfiles   : { [ keys in IGNISIGN_APPLICATION_ENV] ?: IgnisignSignatureProfile[] };
}

