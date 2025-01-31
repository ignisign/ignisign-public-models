/**
 * Signer Claims Public Model
 * 
 * @summary Defines verifiable claims about signer identity and capabilities,
 * supporting various levels of identity proofing and possession verification.
 * 
 * @key_points
 * - Extensive claim types for identity verification
 * - Multiple possession proof methods
 * - Support for AES and QES levels
 * - Identity document verification
 * - Corporate and social account integration
 * 
 * @integration_points
 * - Identity verification flows
 * - Authentication method validation
 * - Signature level requirements
 * - Corporate SSO integration
 * - Session management
 * 
 * @gotchas
 * - Claim verification affects signature levels
 * - Some claims require external verification
 * - Status transitions are strict
 * - Environment affects available claims
 * - SSO claims need organization setup
 */

/**
 * Comprehensive enumeration of verifiable signer claims.
 * Defines all possible claims that can be made about a signer.
 */
export enum IGNISIGN_SIGNER_CLAIM_REF {
  EID_POSSESSION_AES                = "EID_POSSESSION_AES",
  EID_POSSESSION_QES                = "EID_POSSESSION_QES",
  PHONE_NUMBER_POSSESSION           = 'PHONE_NUMBER_POSSESSION',
  PRIVATE_KEY_POSSESSION            = 'PRIVATE_KEY_POSSESSION',
  DAPP_WALLET_POSSESSION            = 'DAPP_WALLET_POSSESSION',
  APP_SIGNER_SECRET_POSSESSION      = 'APP_SIGNER_SECRET_POSSESSION',
  TOTP_POSSESSION                   = 'TOTP_POSSESSION',
  EMAIL_POSSESSION                  = 'EMAIL_POSSESSION',
  ID_DOC_POSSESSION_QES             = 'ID_DOC_POSSESSION_QES',
  ID_DOC_POSSESSION_AES             = 'ID_DOC_POSSESSION_AES',
  SOCIAL_SECURITY_NUMBER_POSSESSION = "SOCIAL_SECURITY_NUMBER_POSSESSION",
  RA_PROCESS_VALIDATED_AES          = 'RA_PROCESS_VALIDATED_AES',
  RA_PROCESS_VALIDATED_QES          = 'RA_PROCESS_VALIDATED_QES',
  BANK_ACCOUNT_POSSESSION           = 'BANK_ACCOUNT_POSSESSION',
  NATURAL_PERSON_NAME               = 'NATURAL_PERSON_NAME',
  LEGAL_PERSON_NAME                 = 'LEGAL_PERSON_NAME',
  PASS_KEY_POSSESSION               = 'PASS_KEY_POSSESSION',
  NATIONALITY                       = "NATIONALITY",
  CORPORATE_SSO_ACCOUNT_POSSESSION  = "CORPORATE_SSO_ACCOUNT_POSSESSION",
  GOOGLE_ACCOUNT_POSSESSION         = "GOOGLE_ACCOUNT_POSSESSION",
  GITHUB_ACCOUNT_POSSESSION         = "GITHUB_ACCOUNT_POSSESSION",
  BIRTH_COUNTRY                     = "BIRTH_COUNTRY",
  BIRTH_DATE                        = "BIRTH_DATE",
  BIRTH_PLACE                       = "BIRTH_PLACE",
  CAN_APPROVE_SEAL_SES              = "CAN_APPROVE_SEAL_SES",
  CAN_APPROVE_SEAL_AES              = "CAN_APPROVE_SEAL_AES",
  CAN_APPROVE_SEAL_QES              = "CAN_APPROVE_SEAL_QES",
  EXTENDED_SESSION                  = "EXTENDED_SESSION",
}

/**
 * Defines possible states for signer claims.
 * Tracks verification status of each claim.
 */
export enum IGNISIGN_SIGNER_CLAIM_STATUS {
  DECLARED    = 'DECLARED',
  VERIFIED    = 'VERIFIED',
  REJECTED    = 'REJECTED',
  DEPRECATED  = 'DEPRECATED',
}
