import { IGNISIGN_SIGNER_CLAIM_REF } from "../signers/signer-claims.public";

export enum IGNISIGN_ID_PROOFING_INPUT_CONTRAINT {
  VERIFIED = "VERIFIED",
  TO_CHECK = "TO_CHECK"
}


export class IdProofingInput  {
  value : string;
  context? : any
};

export type IdProofingInputsMap       = { [key in IGNISIGN_SIGNER_CLAIM_REF]? : IdProofingInput };
