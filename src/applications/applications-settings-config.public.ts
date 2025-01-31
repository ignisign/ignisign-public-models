/**
 * Application Settings Configuration Public Model
 * 
 * Defines the configuration structure for Ignisign applications, including environment-specific settings,
 * SSO configurations, and application customization options. Uses class-validator for runtime validation
 * of all settings and provides type-safe configuration management.
 * 
 * Key Points:
 * - Supports OAuth2 and SAML SSO configurations with field mapping
 * - Implements webhook settings and API key management with status tracking
 * - Provides UI customization options (colors, logos, language)
 * - Uses class-validator decorators for comprehensive validation
 * 
 * Integration Points:
 * - Used in application configuration and management
 * - Referenced in SSO setup and authentication flows
 * - Applied in webhook management and event handling
 * - Controls environment-specific feature enablement
 * 
 * Dependencies:
 * - class-validator: For runtime validation
 * - class-transformer: For object transformation
 * - reflect-metadata: For decorator support
 * - custom-validator: For URL validation
 * 
 * Gotchas:
 * - Some retention durations are marked as optional (pending update)
 * - API key permissions system not yet implemented
 * - OAuth2 and SAML configurations have mandatory field requirements
 * - Color variations must follow material design pattern
 * - SSO configuration changes require careful handling
 */

import { Type } from "class-transformer";
import { IsBoolean, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { IGNISIGN_LANGUAGES } from "../_commons/languages.public";
import { IGNISIGN_APPLICATION_ENV } from "./applications.public";
import { IsUrlOrEmpty } from "../_utils/custom-validator.public";
import { IGNISIGN_IAM_PERMISSIONS } from "../auth/right_management_v2.public";
import { IGNISIGN_SIGNATURE_PROOF_PROCESSING_MODE, IGNISIGN_SIGNATURE_PROOF_TYPE } from "../signatures/signatures.public";
import 'reflect-metadata';
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";

/******************** GLOBAL CONFIG *******************/

/**
 * Core application configuration managed by Ignisign.
 * Contains immutable identifiers for the application.
 */
export class IgnisignApplication_Configuration {
  /** Unique application identifier */
  appId  : string;
  /** Organization identifier owning the application */
  orgId  : string;
}

/******************** ENV Settings *******************/

/**
 * OAuth2 field mapping configuration.
 * Maps OAuth2 provider fields to Ignisign user properties.
 */
export class Ignisign_OAuth2_Fields {
  @IsString()
  sub : string;

  @IsString()
  given_name : string;

  @IsString()
  family_name : string;

  @IsString()
  email : string;
  
  @IsString()
  nationality : string;

  @IsString()
  birth_date : string;

  @IsString()
  birth_place : string;

  @IsString()
  birth_country : string;
}

/**
 * OAuth2 provider configuration settings.
 * Required for OAuth2-based SSO integration.
 */
export class Ignisign_OAuth2_Settings {
  @IsOptional()
  @IsString()
  clientId?: string;

  @IsString()
  @IsOptional()
  clientSecret?: string;

  @IsOptional()
  @IsUrlOrEmpty()
  serverUrl?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Ignisign_OAuth2_Fields)
  fields?: Ignisign_OAuth2_Fields;
}

/** Required fields to enable OAuth2 integration */
export const MANDATORY_FIELDS_TO_ACTIVATE_OAUTH2 = ['clientId', 'clientSecret', 'serverUrl'];

/**
 * SAML provider configuration settings.
 * Required for SAML-based SSO integration.
 */
export class Ignisign_SAML_Settings {
  @IsOptional()
  @IsString()
  idpMetadataUrl?: string;

  @IsOptional()
  @IsString()
  spEntityId?: string;
}

/** Required fields to enable SAML integration */
export const MANDATORY_FIELDS_TO_ACTIVATE_SAML = ['idpMetadataUrl', 'spEntityId'];

/**
 * Possible states for environment-specific API keys.
 */
export enum IGNISIGN_APPLICATION_ENV_API_KEYS_STATUS {
  /** Key is active and can be used */
  ACTIVE    = 'ACTIVE',
  /** Key has been revoked and cannot be used */
  REVOCATED = 'REVOCATED',
}

/**
 * API key configuration for environment-specific access.
 * Includes security and permission settings.
 */
export class IgnisignApplication_EnvApiKeys {
  /** Unique key identifier */
  _id               ?: string;
  /** Associated application ID */
  appId              : string;
  /** Environment the key is valid for */
  appEnv             : IGNISIGN_APPLICATION_ENV;
  /** Display name for the key */
  name               : string;
  /** Optional description */
  description       ?: string;
  
  /** Whether the key has restricted permissions */
  isRestricted       : boolean;
  /** Permission list (not implemented yet) */
  permissions       ?: IGNISIGN_IAM_PERMISSIONS[];
  /** Partially masked key for display */
  displayableSecret  : string;
  /** Current key status */
  status             : IGNISIGN_APPLICATION_ENV_API_KEYS_STATUS;
}

/**
 * Available SSO configuration types.
 */
export enum IGNISIGN_SSO_CONFIG_TYPES {
  OAUTH2 = 'OAUTH2',
  SAML   = 'SAML'
}

/**
 * SSO configuration status options.
 */
export enum IGNISIGN_SSO_CONFIG_STATUS {
  /** Configuration is active and can be used */
  ACTIVE   = 'ACTIVE',
  /** Configuration has been archived */
  ARCHIVED = 'ARCHIVED'
}

/**
 * Environment-specific SSO configuration.
 * Supports both OAuth2 and SAML providers.
 */
export class IgnisignApplicationEnv_SSO_Config {
  /** Unique configuration identifier */
  _id            ?: string;
  /** Display name */
  name            : string;
  /** Optional description */
  description    ?: string;
  /** Associated application ID */
  appId           : string;
  /** Environment this config applies to */
  appEnv          : IGNISIGN_APPLICATION_ENV;
  /** SSO provider type */
  type            : IGNISIGN_SSO_CONFIG_TYPES;
  /** Current configuration status */
  status          : IGNISIGN_SSO_CONFIG_STATUS;
  /** OAuth2-specific settings */
  settingsOAuth2 ?: Ignisign_OAuth2_Settings;
  /** SAML-specific settings */
  settingsSAML   ?: Ignisign_SAML_Settings;
}

/**
 * DTO for SSO configuration creation/updates.
 */
export class IgnisignApplicationEnv_SSO_ConfigDto {
  name            : string;
  description    ?: string;
  type            : IGNISIGN_SSO_CONFIG_TYPES;
  settingsOAuth2 ?: Ignisign_OAuth2_Settings;
  settingsSAML   ?: Ignisign_SAML_Settings;
}

/**
 * Environment-specific application settings.
 * Controls features and behavior per environment.
 */
export class IgnisignApplication_EnvSettings {
  appId                        : string;
  orgId                        : string;
  appEnv                       : IGNISIGN_APPLICATION_ENV;
  isApiKeyGenerated           ?: boolean;
  defaultSignerProfileId      ?: string;
  currentVersion               : number;
  webhooks                     : IgnisignWebhook_SettingsDescription[];
  languageCanBeChanged        ?: boolean;
  extendedAuthSessionEnabled   : boolean;
  apiKeys                      : IgnisignApplication_EnvApiKeys[];
  ssoConfigs                   : IgnisignApplicationEnv_SSO_Config[];
  defaultSignatureLevel       ?: IGNISIGN_SIGNATURE_METHOD_REF;
  defaultApproverIds          ?: string[];
  defaultRecipients           ?: string[];
  onlineProofsEnabled               : boolean;
  originalFileRetentionDurationInDays     ?: number;
  highLevelProofsRetentionDurationInDays  ?: number;
}

/**
 * Webhook configuration settings.
 * Defines endpoints for event notifications.
 */
export class IgnisignWebhook_SettingsDescription {
  _id         ?: string;
  _createdAt  ?: Date;
  /** Webhook endpoint URL */
  url          : string;
  /** Optional description */
  description ?: string;
  /** Whether the webhook is currently disabled */
  isDisabled  ?: boolean;
}

/******************** COMMON SETTINGS *******************/

/**
 * Application-wide settings managed by application owners.
 * Controls UI/UX and general application behavior.
 */
export class IgnisignApplication_Settings {
  appId                  : string;
  orgId                  : string;
  defaultLanguage       ?: IGNISIGN_LANGUAGES;
  customerSupportEmail  ?: string;
  logoB64               ?: string;
  logoDarkB64           ?: string;
  primaryColor          ?: IgnisignApplication_VariationColor
  secondaryColor        ?: IgnisignApplication_VariationColor
}

/**
 * Color palette configuration for UI customization.
 */
export class CustomPalette {
  primary   : IgnisignApplication_VariationColor;
  secondary : IgnisignApplication_VariationColor;
}

/**
 * Material Design color variation structure.
 * Defines shades and accents for a color theme.
 */
export class IgnisignApplication_VariationColor {
  50   : string;
  100  : string;
  200  : string;
  300  : string;
  400  : string;
  500  : string;
  600  : string;
  700  : string;
  800  : string;
  900  : string;
  A100 : string;
  A200 : string;
  A400 : string;
  A700 : string;
}


