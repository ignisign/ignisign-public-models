
export enum IGNISIGN_SIGNATURE_METHOD_REF {
  SIMPLE_STD            = "SIMPLE_STD",
  ADVANCED_STD          = "ADVANCED_STD",
  QUALIFIED_STD         = "QUALIFIED_STD",
  AUTOMATE_AVANCED      = "AUTOMATE_AVANCED",
}


export const IGNISIGN_SIGNATURE_METHODS_WEIGHT : { [key in IGNISIGN_SIGNATURE_METHOD_REF] ?: number } = {
  [IGNISIGN_SIGNATURE_METHOD_REF.SIMPLE_STD]       : 1,
  [IGNISIGN_SIGNATURE_METHOD_REF.ADVANCED_STD]     : 2,
  [IGNISIGN_SIGNATURE_METHOD_REF.QUALIFIED_STD]    : 3,
  // [IGNISIGN_SIGNATURE_METHOD_REF.AUTOMATE_AVANCED] : 4,
}