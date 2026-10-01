export enum IGNISIGN_ID_PROOFING_METHOD_REF {
  VIDEO_ROBOT_AES             = "VIDEO_ROBOT_AES",
  VIDEO_ROBOT_QES             = "VIDEO_ROBOT_QES",
  BANK_ACCOUNT_CHECK          = "BANK_ACCOUNT_CHECK",
  E_ID_AES                    = "E_ID_AES",
  E_ID_QES                    = "E_ID_QES",
  /** @deprecated October 2026. Identification delegation is retired. A signer profile that sends this value is rejected with 400 SIGNER_PROFILE_METHODS_NOT_AVAILABLE. */
  RA_NATURAL_QES              = "RA_NATURAL_QES",
  /** @deprecated October 2026. Identification delegation is retired. A signer profile that sends this value is rejected with 400 SIGNER_PROFILE_METHODS_NOT_AVAILABLE. */
  RA_NATURAL_AES              = "RA_NATURAL_AES",
  SOCIAL_SECURITY_NUMBER      = "SOCIAL_SECURITY_NUMBER",
  BIND_ADDITIONAL_AUTH_METHOD = "BIND_ADDITIONAL_AUTH_METHOD",
  /** @deprecated October 2026. SSO identification is retired. Organization SSO as an authentication method is unchanged. A signer profile that sends this value is rejected with 400 SIGNER_PROFILE_METHODS_NOT_AVAILABLE. */
  ORG_SSO_AES                 = "ORG_SSO_AES",
  /** @deprecated October 2026. SSO identification is retired. Organization SSO as an authentication method is unchanged. A signer profile that sends this value is rejected with 400 SIGNER_PROFILE_METHODS_NOT_AVAILABLE. */
  ORG_SSO_QES                 = "ORG_SSO_QES",
  SIMPLE_DECLARATION_SES_STD  = "SIMPLE_DECLARATION_SES_STD",
  SIMPLE_DECLARATION_SES_SMS  = "SIMPLE_DECLARATION_SES_SMS",
}