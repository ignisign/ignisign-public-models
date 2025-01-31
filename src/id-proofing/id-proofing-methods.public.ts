/**
 * ID Proofing Methods Public Model
 * 
 * @summary Defines the available identity proofing methods in the Ignisign platform,
 * implementing various verification levels from simple declarations to qualified electronic signatures.
 * 
 * The ID Proofing domain defines the identity verification methods and standards for the Ignisign platform.
 * It provides structures for various levels of identity verification from simple declarations to qualified
 * electronic signatures, supporting both natural and legal person verification.
 * 
 * @key_points
 * - Multiple verification methods (Video, eID, SSO)
 * - AES and QES level support
 * - Natural person verification
 * - Simple declaration options
 * - Corporate integration support
 * 
 * @verification_methods
 * - Video-based verification (AES level)
 * - Bank account verification
 * - Social security number validation
 * - Corporate SSO integration
 * - Social platform SSO (Google, GitHub)
 * - Simple declarations with optional email/phone verification
 * 
 * @trust_levels
 * - Simple declarations (basic trust)
 * - Advanced Electronic Signatures (AES)
 * - Qualified Electronic Signatures (QES)
 * - Corporate-backed verification
 * 
 * @common_patterns
 * 1. Progressive trust levels
 * 2. Multi-factor verification
 * 3. Provider-specific implementations
 * 4. Regional compliance
 * 5. Corporate integration support
 * 
 * @integration_points
 * - Signer verification flows
 * - Profile configuration
 * - Identity validation
 * - Trust level management
 * - Corporate SSO setup
 * 
 * @dependencies
 * - Signature methods
 * - Authentication mechanisms
 * - External verification providers
 * - Corporate SSO systems
 * 
 * @gotchas
 * - Method names must match exactly
 * - Some methods require specific providers
 * - Trust levels affect method availability
 * - SSO methods need organization setup
 * - Method support varies by region
 */

/**
 * Comprehensive enumeration of identity proofing methods.
 * Defines all supported verification mechanisms.
 * 
 * @remarks
 * - VIDEO_ROBOT methods support automated video verification
 * - E_ID methods integrate with electronic ID systems
 * - RA methods involve Registration Authority processes
 * - SSO methods enable corporate and social authentication
 * - SIMPLE_DECLARATION methods provide basic verification
 */
export enum IGNISIGN_ID_PROOFING_METHOD_REF {
  VIDEO_ROBOT_AES             = "VIDEO_ROBOT_AES",
  VIDEO_ROBOT_QES             = "VIDEO_ROBOT_QES",
  BANK_ACCOUNT_CHECK          = "BANK_ACCOUNT_CHECK",
  E_ID_AES                    = "E_ID_AES",
  E_ID_QES                    = "E_ID_QES",
  RA_NATURAL_QES              = "RA_NATURAL_QES",
  RA_NATURAL_AES              = "RA_NATURAL_AES",
  SOCIAL_SECURITY_NUMBER      = "SOCIAL_SECURITY_NUMBER",
  BIND_ADDITIONAL_AUTH_METHOD = "BIND_ADDITIONAL_AUTH_METHOD",
  ORG_SSO_AES                 = "ORG_SSO_AES",
  ORG_SSO_QES                 = "ORG_SSO_QES",
  SIMPLE_DECLARATION_SES_STD  = "SIMPLE_DECLARATION_SES_STD",
  SIMPLE_DECLARATION_SES_SMS  = "SIMPLE_DECLARATION_SES_SMS",
}