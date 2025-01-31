/**
 * @module Signature Authentication Public Model
 * 
 * @description
 * Defines the authentication mechanisms available for signature processes in the Ignisign platform.
 * Implements various authentication methods from simple to qualified eID-based authentication.
 * This model ensures proper security levels for different signature types.
 * 
 * @keyPoints
 * - Nine distinct authentication mechanisms
 * - Multiple 2FA options (SMS, TOTP)
 * - eID support for advanced and qualified signatures
 * - SSO integration support for organization-level auth
 * - Extended session support for continuous signing
 * 
 * @integrationPoints
 * - Used in signature authentication flows
 * - Referenced in profile security settings
 * - Applied in authentication workflows
 * - Controls access security levels
 * 
 * @dependencies
 * - No external dependencies required
 * 
 * @gotchas
 * - EXTENDED_SESSION requires special handling and setup
 * - Phone-based methods need additional configuration
 * - SSO requires proper organization configuration
 * - eID methods have specific hardware/software requirements
 * - Auth method must match signature level requirements
 */

/**
 * @enum IGNISIGN_AUTH_FULL_MECHANISM_REF
 * @description Available authentication mechanisms for signature processes.
 */
export enum IGNISIGN_AUTH_FULL_MECHANISM_REF {
  /** Basic authentication without 2FA */
  SIMPLE                = 'SIMPLE',
  /** SMS-based two-factor authentication */
  PHONE_SMS             = 'PHONE_SMS',
  /** Phone call verification */
  PHONE_CALL            = 'PHONE_CALL',
  /** Time-based one-time password */
  TOTP                  = "TOTP",
  /** Hardware key possession proof */
  PASS_KEY_POSSESSION   = 'PASS_KEY_POSSESSION',
  /** Advanced electronic signature with eID */
  AES_EID               = "AES_EID",
  /** Qualified electronic signature with eID */
  QES_EID               = "QES_EID",
  /** Organization SSO-based authentication */
  ORG_SSO               = "ORG_SSO",
  /** Extended session for continuous signing */
  EXTENDED_SESSION       = "EXTENDED_SESSION",
}



