export class IgnisignError {
  errorCode : IGNISIGN_ERROR_CODES;
  message?  : string;
  context?  : object;
}

export enum IGNISIGN_ERROR_CODES {
  // General errors
  BAD_REQUEST                         = "BAD_REQUEST",
  INTERNAL_ERROR                      = "INTERNAL_ERROR",
  UNAUTHORIZED_ERROR                  = "UNAUTHORIZED_ERROR",
  NOT_YET_IMPLEMENTED                 = "NOT_YET_IMPLEMENTED",
  FIELD_IN_INPUT_REQUIRED             = "FIELD_IN_INPUT_REQUIRED",
  BODY_VALIDATION_FAILED              = "BODY_VALIDATION_FAILED",
  PARAMS_VALIDATION_FAILED            = "PARAMS_VALIDATION_FAILED",
  QUERY_VALIDATION_FAILED             = "QUERY_VALIDATION_FAILED",
  INVALID_TOKEN                       = "INVALID_TOKEN",
  UNKNOWN_ERROR                       = "UNKNOWN_ERROR",

  // Context errors
  AUTH_HEADER_NOT_FOUND                 = "AUTH_HEADER_NOT_FOUND",
  AUTH_HEADER_NOT_BEARER                = "AUTH_HEADER_NOT_BEARER",
  AUTH_HEADER_NO_TOKEN                  = "AUTH_HEADER_NO_TOKEN",
  AUTH_NO_X_IGNISIGN_APP_ID_HEADER      = "AUTH_NO_X_IGNISIGN_APP_ID_HEADER",
  AUTH_NO_X_IGNISIGN_APP_ENV_HEADER     = "AUTH_NO_X_IGNISIGN_APP_ENV_HEADER",
  INVALID_CONTEXT                       = "INVALID_CONTEXT",

  // Rights errors
  INVALID_CONTEXT_TWO_DOCUMENT_ID_FORBIDDEN     = "INVALID_CONTEXT_TWO_DOCUMENT_ID_FORBIDDEN",
  INVALID_CONTEXT_DOCUMENT_ID_REQUIRED          = "INVALID_CONTEXT_DOCUMENT_ID_REQUIRED",
  INVALID_CONTEXT_SIGNER_ID_REQUIRED            = "INVALID_CONTEXT_SIGNER_ID_REQUIRED",
  INVALID_CONTEXT_APPLICATION_ADMIN_REQUIRED    = "INVALID_CONTEXT_APPLICATION_ADMIN_REQUIRED",
  INVALID_CONTEXT_APP_ID_REQUIRED               = "INVALID_CONTEXT_APP_ID_REQUIRED",
  INVALID_CONTEXT_APP_ENV_REQUIRED              = "INVALID_CONTEXT_APP_ENV_REQUIRED",
  INVALID_CONTEXT_DOCUMENT_ID_NOT_ALLOWED       = "INVALID_CONTEXT_DOCUMENT_ID_NOT_ALLOWED",
  OUTDATED_AUTH_JWT_TOKEN                       = "OUTDATED_AUTH_JWT_TOKEN",
  INVALID_AUTH_JWT_TOKEN                        = "INVALID_AUTH_JWT_TOKEN",
  REFRESH_TOKEN_INVALID_OR_EXPIRATED            = "REFRESH_TOKEN_INVALID_OR_EXPIRATED",
  REFRESH_TOKEN_EXPIRATED                       = "REFRESH_TOKEN_EXPIRATED",
  AUTH_TOKEN_NOT_ALLOWED_TO_SIGN                = "AUTH_TOKEN_NOT_ALLOWED_TO_SIGN",
  INVALID_CONTEXT_DOCUMENT_PROVIDER_DOCUMENT_ID_REQUIRED  = "INVALID_CONTEXT_DOCUMENT_PROVIDER_DOCUMENT_ID_REQUIRED",
  INVALID_CONTEXT_DOCUMENT_READER_DOCUMENT_ID_REQUIRED    = "INVALID_CONTEXT_DOCUMENT_READER_DOCUMENT_ID_REQUIRED",
  INVALID_CONTEXT_RIGHT_NOT_ALLOWED          = "INVALID_CONTEXT_RIGHT_NOT_ALLOWED",
  DOCUMENTID_AND_TOKEN_DO_NOT_MATCH          = "DOCUMENTID_AND_TOKEN_DO_NOT_MATCH",
  USER_BLOCKED                               = "USER_BLOCKED",

  // APP errors
  APP_NOT_FOUND                       = "APP_NOT_FOUND",
  APP_NOT_ACTIVATED                   = "APP_NOT_ACTIVATED",
  APP_BLOCKED                         = "APP_BLOCKED",
  APP_ENV_CONFIG_NOT_FOUND            = "APP_ENV_CONFIG_NOT_FOUND",
  APP_OPT_CONFIG_NOT_FOUND            = "APP_OPT_CONFIG_NOT_FOUND",
  APP_SETTINGS_NOT_FOUND              = "APP_SETTINGS_NOT_FOUND",
  APP_CONFIG_NOT_VALID                = "APP_CONFIG_NOT_VALID",
  APP_CONFIG_NOT_FOUND                = "APP_CONFIG_NOT_FOUND",
  INVALID_SIGNATURE_PROFILE_CREATION  = "INVALID_SIGNATURE_PROFILE_CREATION",
  AT_LEAST_ONE_APP_MUST_BE_ACTIVE_PER_ORG = "AT_LEAST_ONE_APP_MUST_BE_ACTIVE_PER_ORG",

  // ORGANIZATION errors

  ORGANIZATION_BILLING_CONFIGURATION_MISSING  = 'ORGANIZATION_BILLING_CONFIGURATION_MISSING',
  ORGANIZATION_NOT_FOUND                      = "ORGANIZATION_NOT_FOUND",
  ORGANIZATION_NOT_ACTIVATED                  = "ORGANIZATION_NOT_ACTIVATED",
  ORGANIZATION_CONFIGURATION_NOT_FOUND        = "ORGANIZATION_CONFIGURATION_NOT_FOUND",
  ORGANIZATION_BLOCKED                        = "ORGANIZATION_BLOCKED",
  ORGANIZATION_USER_NOT_FOUND                 = "ORGANIZATION_USER_NOT_FOUND",
  WEBHOOK_NOT_FOUND                           = "WEBHOOK_NOT_FOUND",  
  WEBHOOK_EVENT_NOT_FOUND                     = "WEBHOOK_EVENT_NOT_FOUND",
  ORGANIZATION_MEMBER_NOT_FOUND               = "ORGANIZATION_MEMBER_NOT_FOUND",
  TOKEN_AND_USER_DO_NOT_MATCH                 = "TOKEN_AND_USER_DO_NOT_MATCH",
  USER_NOT_ALLOWED_TO_GET_APPLICATIONS        = "USER_NOT_ALLOWED_TO_GET_APPLICATIONS",
  ORGANIZATION_DELEGATED_RIGHTS_NOT_VALIDATED = "ORGANIZATION_DELEGATED_RIGHTS_NOT_VALIDATED",
  ORG_BLOCKED                                 = "ORG_BLOCKED",
  // Auth errors
  AUTHENTICATION_FAILED               = "AUTHENTICATION_FAILED",
  SIGNATURE_AUTH_TOO_MANY_ATTEMPTS    = "SIGNATURE_AUTH_TOO_MANY_ATTEMPTS",
  SIGNATURE_PROFILE_NEED_BILLING_BUT_ORGANIZATION_BILLING_NOT_ACTIVE = "SIGNATURE_PROFILE_NEED_BILLING_BUT_ORGANIZATION_BILLING_NOT_ACTIVE",
  ORGANIZATION_BILLING_NOT_ACTIVE    = "ORGANIZATION_BILLING_NOT_ACTIVE",
  

  // Certificate errors
  CERTIFICATE_NOT_FOUND                 = "CERTIFICATE_NOT_FOUND",
  FAILED_TO_CREATE_CERTIFICATE          = "FAILED_TO_CREATE_CERTIFICATE",
  FAILED_TO_REVOKE_CERTIFICATE          = "FAILED_TO_REVOKE_CERTIFICATE",

  // Document errors
  DOCUMENT_NOT_FOUND                  = "DOCUMENT_NOT_FOUND",
  DOCUMENT_BAD_NATURE                 = "DOCUMENT_BAD_NATURE",
  DOCUMENT_NOT_OWNED_BY_APP           = "DOCUMENT_NOT_OWNED_BY_APP",
  DOCUMENT_BAD_ENV                    = "DOCUMENT_BAD_ENV",
  DOCUMENT_BAD_STATUS                 = "DOCUMENT_BAD_STATUS",
  DOCUMENT_NOT_ALLOWED_TO_SIGN_BY_SIGNER = "DOCUMENT_NOT_ALLOWED_TO_SIGN_BY_SIGNER",
  DOCUMENT_LOCKED                     = "DOCUMENT_LOCKED",
  DOCUMENT_NOT_PROVIDED               = "DOCUMENT_NOT_PROVIDED",
  FAILED_TO_DOWNLOAD_DOCUMENT         = "FAILED_TO_DOWNLOAD_DOCUMENT",
  JSON_INVALID                        = "JSON_INVALID",
  ONLY_ONE_JSON_PER_SIGNATURE_REQUEST_IS_ALLOWED = "ONLY_ONE_JSON_PER_SIGNATURE_REQUEST_IS_ALLOWED",
  DOCUMENT_INFECTED                   = "DOCUMENT_INFECTED",

  // Document request errors 
  DOCUMENT_REQUEST_CANCELLED           = "DOCUMENT_REQUEST_CANCELLED",
  DOCUMENT_REQUEST_VALIDATED           = "DOCUMENT_REQUEST_VALIDATED",
  DOCUMENT_REQUEST_NOT_FOUND           = "DOCUMENT_REQUEST_NOT_FOUND",
  DOCUMENT_HAVE_NO_REQUEST             = "DOCUMENT_HAVE_NO_REQUEST",

  // ID_PROOFING errors
  ID_PROOFING_FAILED                  = "ID_PROOFING_FAILED",
  ID_PROOFING_BAD_RESULT              = "ID_PROOFING_BAD_RESULT",
  ID_PROOFING_NOT_FOUND               = "ID_PROOFING_NOT_FOUND",
  ID_PROOFING_PROCESSING_FAILED        = "ID_PROOFING_PROCESSING_FAILED",
  CANNOT_REJECT_ID_PROOFING           = "CANNOT_REJECT_ID_PROOFING",

  ID_PROOFING_PROVIDER_BAD_PROCESSING  = "ID_PROOFING_PROVIDER_BAD_PROCESSING",
  ACTION_ONLY_AVAILABLE_ON_MOBILE     = "ACTION_ONLY_AVAILABLE_ON_MOBILE",

  SINGLE_AUTH_CANNOT_FIND_METHOD_IMPLEMENTATION   = "SINGLE_AUTH_CANNOT_FIND_METHOD_IMPLEMENTATION",

  ID_PROOFING_CANNOT_FIND_METHOD_IMPLEMENTATION   = "ID_PROOFING_CANNOT_FIND_METHOD_IMPLEMENTATION",
  ID_PROOFING_METHOD_REQUIREMENTS_MISMATCH        = "ID_PROOFING_METHOD_REQUIREMENTS_MISMATCH",

  ID_PROOFING_EXECUTION_MODE_FORBIDDEN              = "ID_PROOFING_EXECUTION_MODE_FORBIDDEN",
  ID_PROOFING_EXECUTION_MODE_NEED_TO_BE_IMPLEMENTED = "ID_PROOFING_EXECUTION_MODE_NEED_TO_BE_IMPLEMENTED",
  ID_PROOFING_SIGNER_CONFIRMATION_NO_REQUIRED       = "ID_PROOFING_SIGNER_CONFIRMATION_NO_REQUIRED",

  ID_PROOFING_PHONE_NUMBER_ALREADY_VERIFIED        = "ID_PROOFING_PHONE_NUMBER_ALREADY_VERIFIED",

  TOKEN_ALREADY_CONSUMED = 'TOKEN_ALREADY_CONSUMED',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TOKEN_NOT_FOUND = 'TOKEN_NOT_FOUND',
  TOKEN_INVALID = 'TOKEN_INVALID',

  TOO_MANY_SIGNAURE_ATTEMPTS = 'TOO_MANY_SIGNAURE_ATTEMPTS',

  // OPT errors
  OTP_NOT_FOUND                       = "OTP_NOT_FOUND",
  OTP_ALREADY_CONSUMED                = "OTP_ALREADY_CONSUMED",
  OTP_EXPIRED                         = "OTP_EXPIRED",
  OTP_INVALID_ACTION                  = "OTP_INVALID_ACTION",
  OTP_SEND_METHOD_NOT_SUPPORTED       = "OTP_SEND_METHOD_NOT_SUPPORTED",
  OTP_INVALID_VALUE                   = "OTP_INVALID_VALUE",
  OTP_SEND_METHOD_DISMISS             = "OTP_SEND_METHOD_DISMISS",

  // Signature errors
  SIGNATURE_NOT_FOUND                   = "SIGNATURE_NOT_FOUND",
  INVALID_SIGNATURE                     = "INVALID_SIGNATURE",
  SIGNATURE_STEP_NOT_FOUND              = "SIGNATURE_STEP_NOT_FOUND",
  PHONE_SIGNATURE_IS_INVALID            = "PHONE_SIGNATURE_IS_INVALID",
  DOCUMENT_SIGNATURE_FAILED             = "DOCUMENT_SIGNATURE_FAILED",
  ASICS_GENERATE_SIGNATURES_FILE_FAILED = "ASICS_GENERATE_SIGNATURES_FILE_FAILED",

  SIGNATURE_SESSION_CREATION_FAILED     = "SIGNATURE_SESSION_CREATION_FAILED",

  SIGNATURE_AUTH_REGISTRATION_MODE_FORBIDDEN         = "SIGNATURE_AUTH_REGISTRATION_MODE_FORBIDDEN",
  SIGNATURE_AUTH_REGISTRATION_NEED_TO_BE_IMPLEMENTED = "SIGNATURE_AUTH_REGISTRATION_NEED_TO_BE_IMPLEMENTED",

  SIGNATURE_AUTH_NEED_TO_BE_IMPLEMENTED   = "SIGNATURE_AUTH_NEED_TO_BE_IMPLEMENTED",
  SIGNATURE_AUTH_EXECUTION_MODE_FORBIDDEN = "SIGNATURE_AUTH_EXECUTION_MODE_FORBIDDEN",

  SIGNATURE_AUTH_BAD_RESPONSE_TOKEN       = "SIGNATURE_AUTH_BAD_RESPONSE_TOKEN",
  SIGNATURE_AUTH_BAD_RESPONSE             = "SIGNATURE_AUTH_BAD_RESPONSE",
  SIGNATURE_AUTH_FAILED                   = "SIGNATURE_AUTH_FAILED",
  SIGNATURE_AUTH_CANNOT_FIND_ON_SESSION   = "SIGNATURE_AUTH_CANNOT_FIND_ON_SESSION",
  SIGNATURE_SESSION_NOT_FOUND             = "SIGNATURE_SESSION_NOT_FOUND",
  SIGNATURE_SESSION_NOT_VALID             = "SIGNATURE_SESSION_NOT_VALID",
  SIGNATURE_SESSION_ALREADY_COMPLETED     = "SIGNATURE_SESSION_ALREADY_COMPLETED",
  SIGNATURE_SESSION_FAILED                = "SIGNATURE_SESSION_FAILED",
  SIGNATURE_SESSION_CANCELLED             = "SIGNATURE_SESSION_CANCELLED",
  SIGNATURE_SESSION_EXPIRED= "SIGNATURE_SESSION_EXPIRED",
  SIGNATURE_BAD_FORMAT                    = "SIGNATURE_BAD_FORMAT",

  SIGNATURE_TOKEN_INVALID = "SIGNATURE_TOKEN_INVALID",
  SIGNATURE_FAILED        = "SIGNATURE_FAILED",

  INVALID_SIGNATURE_REQUEST   = "INVALID_SIGNATURE_REQUEST",
  SIGNATURE_REQUEST_NOT_FOUND = "SIGNATURE_REQUEST_NOT_FOUND",
  
  SIGNATURE_REQUEST_COMPLETED  = "SIGNATURE_REQUEST_COMPLETED",
  SIGNATURE_REQUEST_CANCELLED  = "SIGNATURE_REQUEST_CANCELLED",
  SIGNATURE_REQUEST_FAILED     = "SIGNATURE_REQUEST_FAILED",
  SIGNATURE_REQUEST_BAD_STATUS = "SIGNATURE_REQUEST_BAD_STATUS",
  CANNOT_PUBLISH_SIGNATURE_REQUEST = "CANNOT_PUBLISH_SIGNATURE_REQUEST",

  // Signer errors
  SIGNER_NOT_FOUND                    = "SIGNER_NOT_FOUND",
  SIGNER_BAD_STATUS                   = "SIGNER_BAD_STATUS",
  SIGNER_METADATA_NOT_FOUND           = "SIGNER_METADATA_NOT_FOUND",
  SIGNER_NOT_OWNED_BY_APP             = "SIGNER_NOT_OWNED_BY_APP",
  SIGNER_BAD_ENV                      = "SIGNER_BAD_ENV",

  SIGNATURE_PROFILE_NOT_FOUND         = "SIGNATURE_PROFILE_NOT_FOUND",
  SIGNATURE_PROFILE_ARCHIVED          = "SIGNATURE_PROFILE_ARCHIVED",

  SIGNER_STATUS_CANNOT_BE_CREATED     = "SIGNER_STATUS_CANNOT_BE_CREATED",
  SIGNER_STATUS_CANNOT_BE_ACTIVE      = "SIGNER_STATUS_CANNOT_BE_ACTIVE",
  SIGNER_STATUS_CANNOT_BE_BLOCKED     = "SIGNER_STATUS_CANNOT_BE_BLOCKED",
  SIGNER_STATUS_CANNOT_BE_PENDING     = "SIGNER_STATUS_CANNOT_BE_PENDING",

  SIGNER_ALREADY_EXIST_ON_THIS_DEVICE = "SIGNER_ALREADY_EXIST_ON_THIS_DEVICE",

  SIGNER_MISMATCH_APP_OTP_CONFIG      = "SIGNER_MISMATCH_APP_OTP_CONFIG",

  SIGNER_INITIALIZATION_FAILED        = "SIGNER_INITIALIZATION_FAILED",
  FAILED_TO_CREATE_SIGNER             = "FAILED_TO_CREATE_SIGNER",

  SIGNER_NOT_ALLOWED                  = "SIGNER_NOT_ALLOWED",

  SIGNER_INCOMPATIBLE_WITH_SIGNATURE_METHOD = "SIGNER_INCOMPATIBLE_WITH_SIGNATURE_METHOD",

  SEARCH_APPLICATION_SIGNERS_INVALID_FILTER = "SEARCH_APPLICATION_SIGNERS_INVALID_FILTER",

  SIGNER_CLAIMS_CONSTRAINTS_NOT_VALIDATED   = "SIGNER_CLAIMS_CONSTRAINTS_NOT_VALIDATED",
  SIGNER_WEBAUTHN_INVALID                   = "SIGNER_WEBAUTHN_INVALID",

  SIGNER_MISING_CLAIMS                      = "SIGNER_MISING_CLAIMS",
  SIGNER_ALREADY_SIGNED                     = "SIGNER_ALREADY_SIGNED",
  SIGNER_ID_PROOF_ALREADY_DONE = "SIGNER_ID_PROOF_ALREADY_DONE",

  // Signature request errors
  CANNOT_PUBLISH_SIGNATURE_REQUEST__REQUEST_ALREADY_PUBLISHED = "CANNOT_PUBLISH_SIGNATURE_REQUEST__REQUEST_ALREADY_PUBLISHED",
  CANNOT_PUBLISH_SIGNATURE_REQUEST__DIFFUSION_DATE_IN_THE_PAST = "CANNOT_PUBLISH_SIGNATURE_REQUEST__DIFFUSION_DATE_IN_THE_PAST",
  CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_SIGNATURE_PROFILE = "CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_SIGNATURE_PROFILE",
  CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_DOCUMENTS = "CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_DOCUMENTS",
  CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_SIGNERS = "CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_SIGNERS",
  CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_DIFFUSION_MODE = "CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_DIFFUSION_MODE",
  CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_TITLE = "CANNOT_PUBLISH_SIGNATURE_REQUEST__NO_TITLE",
  CANNOT_PUBLISH_SIGNATURE_REQUEST__EXPIRATION_DATE_IS_ACTIVATED_BUT_EXPIRATION_DATE_IS_MISSING = "CANNOT_PUBLISH_SIGNATURE_REQUEST__EXPIRATION_DATE_IS_ACTIVATED_BUT_EXPIRATION_DATE_IS_MISSING",
  CANNOT_PUBLISH_SIGNATURE_REQUEST__DIFFUSION_MODE_IS_SCHEDULED_BUT_DIFFUSION_DATE_IS_MISSING = "CANNOT_PUBLISH_SIGNATURE_REQUEST__DIFFUSION_MODE_IS_SCHEDULED_BUT_DIFFUSION_DATE_IS_MISSING",
  FAILED_TO_LAUNCH_SIGNATURE_REQUEST_BECAUSE_ALL_DOCUMENTS_ARE_NOT_PROVIDED = "FAILED_TO_LAUNCH_SIGNATURE_REQUEST_BECAUSE_ALL_DOCUMENTS_ARE_NOT_PROVIDED",
  FAILED_TO_LAUNCH_SIGNATURE_REQUEST_DOCUMENT_GENERATION_FROM_DATA_FAILED  = "FAILED_TO_LAUNCH_SIGNATURE_REQUEST_DOCUMENT_GENERATION_FROM_DATA_FAILED",
  CANNOT_UPDATE_OR_PUBLISH_SIGNATURE_REQUEST__AT_LEAST_ONE_DOCUMENT_ARE_NOT_CREATED_OR_IS_INVALID = "CANNOT_UPDATE_OR_PUBLISH_SIGNATURE_REQUEST__AT_LEAST_ONE_DOCUMENT_ARE_NOT_CREATED_OR_IS_INVALID",
  CANNOT_UPDATE_OR_PUBLISH_SIGNATURE_REQUEST__AT_LEAST_ONE_DOCUMENT_IS_IN_FULL_PRIVACY_MODE_OR_HAVE_A_DOCUMENT_REQUEST_BUT_HAVE_NO_LABEL = "CANNOT_UPDATE_OR_PUBLISH_SIGNATURE_REQUEST__AT_LEAST_ONE_DOCUMENT_IS_IN_FULL_PRIVACY_MODE_OR_HAVE_A_DOCUMENT_REQUEST_BUT_HAVE_NO_LABEL",
  CANNOT_UPDATE_OR_PUBLISH_SIGNATURE_REQUEST__AT_LEAST_ONE_DOCUMENT_HAVE_NO_CONTENT_AND_NO_DOCUMENT_REQUEST = "CANNOT_UPDATE_OR_PUBLISH_SIGNATURE_REQUEST__AT_LEAST_ONE_DOCUMENT_HAVE_NO_CONTENT_AND_NO_DOCUMENT_REQUEST",
  CANNOT_UPDATE_OR_PUBLISH_SIGNATURE_REQUEST__AT_LEAST_ONE_DOCUMENT_HAVE_ALREADY_A_SIGNATURE = "CANNOT_UPDATE_OR_PUBLISH_SIGNATURE_REQUEST__AT_LEAST_ONE_DOCUMENT_HAVE_ALREADY_A_SIGNATURE",

  CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNATURE_METHODS_NOT_FOUND = "CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNATURE_METHODS_NOT_FOUND",
  CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNATURE_METHODS_NOT_ACTIVATED = "CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNATURE_METHODS_NOT_ACTIVATED",
  CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNATURE_METHODS_EXECUTION_MODE_NOT_DEFINED_IN_SIGNATURE_METHOD = "CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNATURE_METHODS_EXECUTION_MODE_NOT_DEFINED_IN_SIGNATURE_METHOD",
  CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNATURE_METHODS_EXECUTION_MODE_NOT_AUTHORIZED_IN_SIGNATURE_METHOD = "CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNATURE_METHODS_EXECUTION_MODE_NOT_AUTHORIZED_IN_SIGNATURE_METHOD",
  CANNOT_UPDATE_SIGNATURE_REQUEST__FIRSTNAME_AND_LASTNAME_ARE_MANDARYTORY_FOR_ALL_SIGNER_WITH_THE_SIGNATURE_PROFILE_REQUESTED = "CANNOT_UPDATE_SIGNATURE_REQUEST__FIRSTNAME_AND_LASTNAME_ARE_MANDARYTORY_FOR_ALL_SIGNER_WITH_THE_SIGNATURE_PROFILE_REQUESTED",

  CANNOT_UPDATE_SIGNATURE_REQUEST__EMAIL_IS_MANDATORY_FOR_ALL_SIGNERS_FOR_THE_SIGNATURE_PROFILE_REQUESTED = "CANNOT_UPDATE_SIGNATURE_REQUEST__EMAIL_IS_MANDATORY_FOR_ALL_SIGNERS_FOR_THE_SIGNATURE_PROFILE_REQUESTED",
  CANNOT_UPDATE_SIGNATURE_REQUEST__PHONE_NUMBER_IS_MANDATORY_FOR_ALL_SIGNERS_FOR_THE_SIGNATURE_PROFILE_REQUESTED = "CANNOT_UPDATE_SIGNATURE_REQUEST__PHONE_NUMBER_IS_MANDATORY_FOR_ALL_SIGNERS_FOR_THE_SIGNATURE_PROFILE_REQUESTED",

  CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNER_CANNOT_BE_CREATED__MISSING_LASTNAME_FIRST_NAME = "CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNER_CANNOT_BE_CREATED__MISSING_LASTNAME_FIRST_NAME", 
  CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNER_CANNOT_BE_CREATED__MISSING_EMAIL = "CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNER_CANNOT_BE_CREATED__MISSING_EMAIL",
  CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNER_CANNOT_BE_CREATED__PHONE_NUMBER = "CANNOT_UPDATE_SIGNATURE_REQUEST__SIGNER_CANNOT_BE_CREATED__PHONE_NUMBER",

  SIGNATURE_REQUEST_DTO_NOT_MATCH_WITH_SIGNATURE_PROFILE__LANGUAGE_CANNOT_BE_CHANGED = "SIGNATURE_REQUEST_DTO_NOT_MATCH_WITH_SIGNATURE_PROFILE__LANGUAGE_CANNOT_BE_CHANGED",
  SIGNATURE_REQUEST_DTO_NOT_MATCH_WITH_SIGNATURE_PROFILE__STATEMENTS_NOT_ALLOWED = "SIGNATURE_REQUEST_DTO_NOT_MATCH_WITH_SIGNATURE_PROFILE__STATEMENTS_NOT_ALLOWED",
  SIGNATURE_REQUEST_DTO_NOT_MATCH_WITH_SIGNATURE_PROFILE__DOCUMENT_TYPES_USED_NOT_INCLUDED_IN_SIGNATURE_PROFILE = "SIGNATURE_REQUEST_DTO_NOT_MATCH_WITH_SIGNATURE_PROFILE__DOCUMENT_TYPES_USED_NOT_INCLUDED_IN_SIGNATURE_PROFILE",
  SIGNATURE_REQUEST_DTO_NOT_MATCH_WITH_SIGNATURE_PROFILE__DOCUMENT_REQUEST_NOT_ALLOWED = "SIGNATURE_REQUEST_DTO_NOT_MATCH_WITH_SIGNATURE_PROFILE__DOCUMENT_REQUEST_NOT_ALLOWED",

  
  SIGNATURE_REQUEST_ALREADY_COMPLETED = "SIGNATURE_REQUEST_ALREADY_COMPLETED",
  SIGNATURE_REQUEST_NOT_IN_PROGRESS = "SIGNATURE_REQUEST_NOT_IN_PROGRESS",

  // Signer key errors
  SIGNER_KEY_NOT_FOUND                = "SIGNER_KEY_NOT_FOUND",
  SIGNER_APP_KEY_NOT_FOUND            = "SIGNER_APP_KEY_NOT_FOUND",
  SIGNER_KEY_PHONE_UUID_INVALID       = "SIGNER_KEY_PHONE_UUID_INVALID",
  FAILED_TO_CREATE_SIGNER_KEY         = "FAILED_TO_CREATE_SIGNER_KEY",
  SIGNER_KEY_NOT_OWNED_BY_SIGNER      = "SIGNER_KEY_NOT_OWNED_BY_SIGNER",
  SIGNER_KEY_NOT_ACTIVE               = "SIGNER_KEY_NOT_ACTIVE",
  FAILED_TO_CREATE_PUBKEY             = "FAILED_TO_CREATE_PUBKEY",
  FAILED_TO_DELETE_KEY                = "FAILED_TO_DELETE_KEY",
  FAILED_TO_GET_KEY_INFOS             = "FAILED_TO_GET_KEY_INFOS",
  EIDAS_STATUS_NOT_AUTHORIZED         = "EIDAS_STATUS_NOT_AUTHORIZED",

  SIGNER_ASSOCIATE_DEVICE_BAD_TOKEN   = "SIGNER_ASSOCIATE_DEVICE_BAD_TOKEN",
  SIGNER_ASSOCIATE_DEVICE_FAILED      = "SIGNER_ASSOCIATE_DEVICE_FAILED",
  // SIGNER_CREATION

  SIGNER_CREATION__SIGNER_ALREADY_EXISTS                                   = "SIGNER_CREATION__SIGNER_ALREADY_EXISTS",
  SIGNER_CREATION__BASIC_ADVANCED__FULL_NAME_MUST_BE_VERIFIED              = "SIGNER_CREATION__BASIC_ADVANCED__FULL_NAME_MUST_BE_VERIFIED",
  SIGNER_CREATION__NOT_YET_IMPLEMENTED                                     = "SIGNER_CREATION__NOT_YET_IMPLEMENTED",
  SIGNER_CREATION__NOT_YET_IMPLEMENTED__IGNISIGN_EIDAS_LEVEL__QES          = "SIGNER_CREATION__NOT_YET_IMPLEMENTED__IGNISIGN_EIDAS_LEVEL__QES",
  SIGNER_CREATION__NOT_YET_IMPLEMENTED__ORGANIZATION_ENTITY_TYPE__LEGAL    = "SIGNER_CREATION__NOT_YET_IMPLEMENTED__ORGANIZATION_ENTITY_TYPE__LEGAL",
  SIGNER_CREATION__NOT_YET_IMPLEMENTED__ORGANIZATION_ENTITY_TYPE__VIRTUAL  = "SIGNER_CREATION__NOT_YET_IMPLEMENTED__ORGANIZATION_ENTITY_TYPE__VIRTUAL",
  SIGNER_CREATION__SIGNATURE_PROFILE_ARCHIVED = 'SIGNER_CREATION__SIGNATURE_PROFILE_ARCHIVED',

  SIGNER_CREATION__INPUT_FIELD_MISSING        = "SIGNER_CREATION__INPUT_FIELD_MISSING",
  SIGNER_CREATION__INPUT_FIELD_VALUE_MISSING  = "SIGNER_CREATION__INPUT_FIELD_VALUE_MISSING",
  SIGNER_CREATION__INPUT_FIELD_VALUE_INVALID  = "SIGNER_CREATION__INPUT_FIELD_VALUE_INVALID",
  SIGNER_CREATION__INPUT_FIELD_ALREADY_VERIFIED_MISSING = "SIGNER_CREATION__INPUT_FIELD_ALREADY_VERIFIED_MISSING",
  SIGNER_CREATION__ID_PROOFING_METHODS_NOT_MATCHING_CONTRAINTS = "SIGNER_CREATION__ID_PROOFING_METHODS_NOT_MATCHING_CONTRAINTS",

  PASSKEY_ALREADY_REGISTERED = "PASSKEY_ALREADY_REGISTERED",

  // user errors
  INVITED_USER_HAS_NO_ACCOUNT = "INVITED_USER_HAS_NO_ACCOUNT",
  USER_ALREADY_INVITED_BY_ORGANIZATION = "USER_ALREADY_INVITED_BY_ORGANIZATION",
  INVITED_USER_EMAIL_NOT_MATCHING_CURRENT_USER = "INVITED_USER_EMAIL_NOT_MATCHING_CURRENT_USER",
  NO_PENDING_USER_INVITATION  = "NO_PENDING_USER_INVITATION",
  USER_ALREADY_IN_ORGANIZATION   = "USER_ALREADY_IN_ORGANIZATION",
  USER_ALREADY_IN_APP         = "USER_ALREADY_IN_APP",
  USER_NOT_FOUND              = "USER_NOT_FOUND",
  USER_MUST_HAVE_ORGANIZATIONS   = "USER_MUST_HAVE_ORGANIZATIONS",
  EMAIL_OR_PASSWORD_INVALID   = "EMAIL_OR_PASSWORD_INVALID",
  USER_ALREADY_EXIST          = "USER_ALREADY_EXIST",
  CREDENTIAL_NOT_FOUND        = "CREDENTIAL_NOT_FOUND",
  INVITED_USER_NOT_FOUND      = "INVITED_USER_NOT_FOUND",
  USER_PASSWORD_ALREADY_SET   = "USER_PASSWORD_ALREADY_SET",
  GOOGLE_LOGIN_DISABLED       = "GOOGLE_LOGIN_DISABLED",
  GITHUB_LOGIN_DISABLED       = "GITHUB_LOGIN_DISABLED",
  USER_TOTP_DISABLED          = "USER_TOTP_DISABLED",
  USER_TOTP_INVALID           = "USER_TOTP_INVALID",
  USER_HAVE_NO_TOTP_SECRET    = "USER_HAVE_NO_TOTP_SECRET",
  TOTP_TOKEN_REQUIRED         = "TOTP_TOKEN_REQUIRED",
  TOTP_NOT_SETUP              = "TOTP_NOT_SETUP",
  EMAIL_CANT_BE_USED           = "EMAIL_CANT_BE_USED",
  TOO_MANY_ATTEMPTS_TO_CHANGE_EMAIL = "TOO_MANY_ATTEMPTS_TO_CHANGE_EMAIL",
  // OAUTH_LOGIN_WAITING_TOTP_CONFIRMATION = "OAUTH_LOGIN_WAITING_TOTP_CONFIRMATION",
  TOO_MUCH_CONNECTION_ATTEMPS = "TOO_MUCH_CONNECTION_ATTEMPS",
  APPLICATION_MEMBER_NOT_FOUND = "APPLICATION_MEMBER_NOT_FOUND",

  // password errors
  PASSWORD_MUST_CONTAIN_AT_LEAST_10_CHARACTERS = "PASSWORD_MUST_CONTAIN_AT_LEAST_10_CHARACTERS",
  PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_NUMBER = "PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_NUMBER",
  PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_SPECIAL_CHAR = "PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_SPECIAL_CHAR",
  PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_CAPITAL_LETTER = "PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_CAPITAL_LETTER",
  PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LOWERCASE_LETTER = "PASSWORD_MUST_CONTAIN_AT_LEAST_ONE_LOWERCASE_LETTER",
  PASSWORD_MUST_NOT_EXCEED_256_CHARACTERS = "PASSWORD_MUST_NOT_EXCEED_256_CHARACTERS",
 

  // AUTH_ERRORS
  GOOGLE_OAUTH_ACCESS_TOKEN_NOT_FOUND = "GOOGLE_OAUTH_ACCESS_TOKEN_NOT_FOUND",
  GITHUB_OAUTH_ACCESS_TOKEN_NOT_FOUND = "GITHUB_OAUTH_ACCESS_TOKEN_NOT_FOUND",
  
  // SIGNER AUTHENTICATION
  SIGNER_AUTH_REGISTRATION_NOT_FOUND = "SIGNER_AUTH_REGISTRATION_NOT_FOUND",
  SIGNER_TOTP_INVALID                = "SIGNER_TOTP_INVALID",
  SIGNER_OTP_INVALID                 = "SIGNER_OTP_INVALID",
  SIGNER_CLAIM_NOT_FOUND             = "SIGNER_CLAIM_NOT_FOUND",
  SIGNER_CODE_INVALID                = "SIGNER_CODE_INVALID",
  AUTHORIZATION_OF_CERTIFICATE_DISEMINTATION_IS_MANDATORY = "AUTHORIZATION_OF_CERTIFICATE_DISEMINTATION_IS_MANDATORY",

  // API_AUTH
  API_AUTH_BAD_REQUEST  = "API_AUTH_BAD_REQUEST",


  SEND_SMS = "SEND_SMS",

  // SDK ERROR

  SDK_GENERIC_ERROR               = "SDK_GENERIC_ERROR",
  SDK_NOT_INITIALIZED             = "SDK_NOT_INITIALIZED",
  SDK_BAD_CREDENTIALS             = "SDK_BAD_CREDENTIALS",
  SDK_WEBHOOK_BAD_APP_ID          = "SDK_WEBHOOK_BAD_APP_ID",
  SDK_WEBHOOK_BAD_APP_ENV         = "SDK_WEBHOOK_BAD_APP_ENV",
  SDK_WEBHOOK_BAD_FORMATTED       = "SDK_WEBHOOK_BAD_FORMATTED",
  SDK_WEBHOOK_VERIFICATION_FAILED = "SDK_WEBHOOK_VERIFICATION_FAILED",

  // IGNISIGN_JS_ERROR

  IGNISIGN_JS_EVENT_MALFORMED = "IGNISIGN_JS_EVENT_MALFORMED",
  IGNISIGN_JS_HANDLE_EVENT_ERROR = "IGNISIGN_JS_HANDLE_EVENT_ERROR",


  // DOCUMENTS PROOF 
  DOCUMENT_PROOF_NOT_FOUND        = "DOCUMENT_PROOF_NOT_FOUND",
  DOCUMENT_PROOF_NOT_CREATED      = "DOCUMENT_PROOF_NOT_CREATED",
  SIGNATURE_IMAGE_NOT_FOUND       = "SIGNATURE_IMAGE_NOT_FOUND",
  NO_SIGNATURE_IMAGES_FOUND       = "NO_SIGNATURE_IMAGES_FOUND",
  SIGNATURE_IMAGE_NOT_CREATED     = "SIGNATURE_IMAGE_NOT_CREATED",
  SIGNATURE_IMAGE_NOT_ON_ERROR    = "SIGNATURE_IMAGE_NOT_ON_ERROR",
  SIGNATURE_PROOF_NOT_ON_ERROR    = "SIGNATURE_PROOF_NOT_ON_ERROR",
  TOKEN_AND_DOCUMENT_DO_NOT_MATCH = "TOKEN_AND_DOCUMENT_DO_NOT_MATCH",
  ADVANCED_PROOF_NOT_GENERATED    = "ADVANCED_PROOF_NOT_GENERATED",
  PDF_TOO_SMALL_FOR_ADDING_BINDER = "PDF_TOO_SMALL_FOR_ADDING_BINDER",
  PDF_ENCRYPTED_OR_CORRUPTED      = "PDF_ENCRYPTED_OR_CORRUPTED",
  // SIGNATURE PROOF
  EMBEDDED_NOT_ENABLED            = "EMBEDDED_NOT_ENABLED",
  DATA_JSON_NOT_ENABLED           = "DATA_JSON_NOT_ENABLED",
  FULL_PRIVACY_NOT_ENABLED        = "FULL_PRIVACY_NOT_ENABLED",
  QUALIFIED_SIGNATURE_NOT_ENABLED = "QUALIFIED_SIGNATURE_NOT_ENABLED",
  FEATURE_NOT_AVAILABLE           = "FEATURE_NOT_AVAILABLE",
  INVALID_SIGNER_AUTH_REGISTRATION = "INVALID_SIGNER_AUTH_REGISTRATION",

  GET_PRIVATE_FILE_ERRORS__DOCUMENT_HASH_DOES_NOT_MATCH_PROVIDED_ONE = "GET_PRIVATE_FILE_ERRORS__DOCUMENT_HASH_DOES_NOT_MATCH_PROVIDED_ONE",
  GET_PRIVATE_FILE_ERRORS__NOT_AUTHORIZED_TO_GET = "GET_PRIVATE_FILE_ERRORS__NOT_AUTHORIZED_TO_GET",
  GET_PRIVATE_FILE_ERRORS__CANNOT_GET_FILE = "GET_PRIVATE_FILE_ERRORS__CANNOT_GET_FILE",

  // TEMPLATE DISPLAYER
  TEMPLATE_DISPLAYER_CREATION_INVALID_STATUS                = "TEMPLATE_DISPLAYER_CREATION_INVALID_STATUS",
  TEMPLATE_DISPLAYER_CREATION_INVALID_OUTPUT_PDF_DIMENSION  = "TEMPLATE_DISPLAYER_CREATION_INVALID_OUTPUT_PDF_DIMENSION",
  TEMPLATE_DISPLAYER_CREATION_INVALID_OUTPUT_HTML_DIMENSION = "TEMPLATE_DISPLAYER_CREATION_INVALID_OUTPUT_HTML_DIMENSION",
  TEMPLATE_DISPLAYER_NOT_FOUND                              = "TEMPLATE_DISPLAYER_NOT_FOUND",
  TEMPLATE_DISPLAYER_UPDATE_INVALID_STATUS                  = "TEMPLATE_DISPLAYER_UPDATE_INVALID_STATUS",
  TEMPLATE_DISPLAYER_ARCHIVE_INVALID_STATUS                 = "TEMPLATE_DISPLAYER_ARCHIVE_INVALID_STATUS",
  CANNOT_IMPORT_TEMPLATE_DISPLAYER_IN_DEVELOPMENT           = "CANNOT_IMPORT_TEMPLATE_DISPLAYER_IN_DEVELOPMENT",
  JSON_PROVIDED_DOES_NOT_MATCH_THE_JSON_SCHEMA              = "JSON_PROVIDED_DOES_NOT_MATCH_THE_JSON_SCHEMA",
}



