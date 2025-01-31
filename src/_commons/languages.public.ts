/**
 * Languages Public Model
 * 
 * @summary Defines supported languages in the Ignisign platform using ISO 639-1 codes.
 * Provides both an enum of all possible languages and an array of currently available
 * languages for runtime checks.
 * 
 * @key_points
 * - Uses ISO 639-1 two-letter codes
 * - Supports 37 languages including major EU languages
 * - Available languages list for feature enablement
 * 
 * @integration_points
 * - Used in UI language selection
 * - Referenced in document templates
 * - Used for signature interface localization
 * - Applied in email notifications
 * 
 * @gotchas
 * - Language codes are uppercase (differs from some i18n libraries)
 * - Available languages list must be kept in sync with translations
 * - Some RTL languages (AR) require special UI handling
 */

/**
 * Enumeration of all supported languages.
 * Uses ISO 639-1 two-letter codes in uppercase.
 * 
 * @remarks
 * - Includes all EU official languages
 * - Supports major world languages (AR, ZH, JA, KO)
 * - RTL languages (AR) require special handling
 */
export enum IGNISIGN_LANGUAGES {
  AR = "AR", // Arabic
  BG = "BG", // Bulgarian
  BN = "BN", // Bengali
  CS = "CS", // Czech
  DA = "DA", // Danish
  DE = "DE", // German
  EL = "EL", // Greek
  EN = "EN", // English
  ES = "ES", // Spanish
  ET = "ET", // Estonian
  FI = "FI", // Finnish
  FR = "FR", // French
  GA = "GA", // Irish
  HI = "HI", // Hindi
  HR = "HR", // Croatian
  HU = "HU", // Hungarian
  IS = "IS", // Icelandic
  IT = "IT", // Italian
  JA = "JA", // Japanese
  KO = "KO", // Korean
  LT = "LT", // Lithuanian
  LV = "LV", // Latvian
  MT = "MT", // Maltese
  NL = "NL", // Dutch
  NO = "NO", // Norwegian
  PL = "PL", // Polish
  PT = "PT", // Portuguese
  RO = "RO", // Romanian
  RU = "RU", // Russian
  SK = "SK", // Slovak
  SL = "SL", // Slovenian
  SQ = "SQ", // Albanian
  SR = "SR", // Serbian
  SV = "SV", // Swedish
  TR = "TR", // Turkish
  UK = "UK", // Ukrainian
  ZH = "ZH", // Chinese
}

/**
 * Array of currently available languages.
 * Used for runtime checks and feature enablement.
 * 
 * @remarks
 * - Must be kept in sync with available translations
 * - Used to validate language selection
 * - Controls language availability in UI
 */
export const IGNISIGN_LANGUAGES_AVAILABLE = [
  IGNISIGN_LANGUAGES.AR,
  IGNISIGN_LANGUAGES.BG,
  IGNISIGN_LANGUAGES.BN,
  IGNISIGN_LANGUAGES.CS,
  IGNISIGN_LANGUAGES.DA,
  IGNISIGN_LANGUAGES.DE,
  IGNISIGN_LANGUAGES.EL,
  IGNISIGN_LANGUAGES.EN,
  IGNISIGN_LANGUAGES.ES,
  IGNISIGN_LANGUAGES.ET,
  IGNISIGN_LANGUAGES.FI,
  IGNISIGN_LANGUAGES.FR,
  IGNISIGN_LANGUAGES.GA,
  IGNISIGN_LANGUAGES.HI,
  IGNISIGN_LANGUAGES.HR,
  IGNISIGN_LANGUAGES.HU,
  IGNISIGN_LANGUAGES.IS,
  IGNISIGN_LANGUAGES.IT,
  IGNISIGN_LANGUAGES.JA,
  IGNISIGN_LANGUAGES.KO,
  IGNISIGN_LANGUAGES.LT,
  IGNISIGN_LANGUAGES.LV,
  IGNISIGN_LANGUAGES.MT,
  IGNISIGN_LANGUAGES.NL,
  IGNISIGN_LANGUAGES.NO,
  IGNISIGN_LANGUAGES.PL,
  IGNISIGN_LANGUAGES.PT,
  IGNISIGN_LANGUAGES.RO,
  IGNISIGN_LANGUAGES.RU,
  IGNISIGN_LANGUAGES.SK,
  IGNISIGN_LANGUAGES.SL,
  IGNISIGN_LANGUAGES.SQ,
  IGNISIGN_LANGUAGES.SR,
  IGNISIGN_LANGUAGES.SV,
  IGNISIGN_LANGUAGES.TR,
  IGNISIGN_LANGUAGES.UK,
  IGNISIGN_LANGUAGES.ZH,
]
