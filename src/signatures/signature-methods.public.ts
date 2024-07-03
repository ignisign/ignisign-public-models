
export enum IGNISIGN_SIGNATURE_METHOD_REF {
  SIMPLE_STD            = "SIMPLE_STD",
  ADVANCED_STD          = "ADVANCED_STD",
  QUALIFIED_STD         = "QUALIFIED_STD",

  M2M_AVANCED       = "M2M_AVANCED",
  M2M_QUALIFIED     = "M2M_QUALIFIED",
  M2M_SIMPLE        = "M2M_SIMPLE",
}


export const IGNISIGN_SIGNATURE_METHODS_WEIGHT : { [key in IGNISIGN_SIGNATURE_METHOD_REF] ?: number } = {
  [IGNISIGN_SIGNATURE_METHOD_REF.SIMPLE_STD]       : 1,
  [IGNISIGN_SIGNATURE_METHOD_REF.ADVANCED_STD]     : 2,
  [IGNISIGN_SIGNATURE_METHOD_REF.QUALIFIED_STD]    : 3,
  // [IGNISIGN_SIGNATURE_METHOD_REF.M2M_AVANCED] : 4,
}