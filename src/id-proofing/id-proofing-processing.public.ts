
import { IGNISIGN_ID_PROOFING_CONTEXT_USAGE, IGNISIGN_ID_PROOFING_STATUS } from "./id-proofing.public";
import { IdProofingInputsMap } from "./id-proofing-inputs.public";
import { IGNISIGN_ID_PROOFING_METHOD_REF, IGNISIGN_ID_PROOFING_METHOD_PROCESSING_KIND } from "./id-proofing-methods.public";
import { ClaimProcessingMap } from "../signers/signer-claims.public";


export const IGNISIGN_ID_PROOFING_GROUPS : { [key in IGNISIGN_ID_PROOFING_METHOD_PROCESSING_KIND] : IGNISIGN_ID_PROOFING_STATUS[] } = {
  [IGNISIGN_ID_PROOFING_METHOD_PROCESSING_KIND.VALID] : [
    IGNISIGN_ID_PROOFING_STATUS.VALID
  ],
  [IGNISIGN_ID_PROOFING_METHOD_PROCESSING_KIND.IN_PROGRESS] : [
    IGNISIGN_ID_PROOFING_STATUS.CREATED,
    IGNISIGN_ID_PROOFING_STATUS.PENDING,
    IGNISIGN_ID_PROOFING_STATUS.VALIDATION_IN_PROGRESS,
    IGNISIGN_ID_PROOFING_STATUS.UNKNOWN,
    IGNISIGN_ID_PROOFING_STATUS.WAITING_SIGNER_CONFIRMATION,
  ],
  [IGNISIGN_ID_PROOFING_METHOD_PROCESSING_KIND.ERROR] : [
    IGNISIGN_ID_PROOFING_STATUS.NOT_INITIALIZED,
    IGNISIGN_ID_PROOFING_STATUS.ABORTED,
    IGNISIGN_ID_PROOFING_STATUS.EXPIRED,
    IGNISIGN_ID_PROOFING_STATUS.ERROR,
    IGNISIGN_ID_PROOFING_STATUS.INVALID,
  ]
};



export class IgnisignIdProofing_Result {
  signerId           : string;
  idProofingId       : string;
  methodRef          : IGNISIGN_ID_PROOFING_METHOD_REF;
  error?             : any;
  executionContext  ?: any;
}

export class IgnisignIdProofing_Init_Result extends IgnisignIdProofing_Result {
  resultSubmissionToken? : string;
  context?               : any;

}

export class IgnisignIdProofing_Processing_Result extends IgnisignIdProofing_Result {
  claimResultMap      ?: ClaimProcessingMap;
  newIdProofingStatus ?: IGNISIGN_ID_PROOFING_STATUS;
  proofContent        ?: any;
}

export class IgnisignIdProofing_RequestDto {
  signerId            : string;
  inputs              : IdProofingInputsMap;
  contextUsage        : IGNISIGN_ID_PROOFING_CONTEXT_USAGE;
  methodRef           : IGNISIGN_ID_PROOFING_METHOD_REF;
}

export class IgnisignIdProofing_ResultSubmissionRequestDto {
  resultSubmissionToken : string;
  value                 : string;
  context?              : any;
}
