import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNER_CREATION_INPUT_REF } from "./signers.public";

export enum IGNISIGN_SIGNER_CLAIM_REF {
  EID_POSSESSION               = 'EID_POSSESSION',
  PHONE_NUMBER_POSSESSION      = 'PHONE_NUMBER_POSSESSION',
  PRIVATE_KEY_POSSESSION       = 'PRIVATE_KEY_POSSESSION',
  DAPP_WALLET_POSSESSION       = 'DAPP_WALLET_POSSESSION',
  APP_SIGNER_SECRET_POSSESSION = 'APP_SIGNER_SECRET_POSSESSION',
  TOTP_POSSESSION              = 'TOTP_POSSESSION',
  EMAIL_POSSESSION             = 'EMAIL_POSSESSION',
  ID_DOC_POSSESSION_QES        = 'ID_DOC_POSSESSION_QES',
  ID_DOC_POSSESSION_AES        = 'ID_DOC_POSSESSION_AES',
  RA_PROCESS_VALIDATED_AES     = 'RA_PROCESS_VALIDATED_AES',
  RA_PROCESS_VALIDATED_QES     = 'RA_PROCESS_VALIDATED_QES',
  BANK_ACCOUNT_POSSESSION      = 'BANK_ACCOUNT_POSSESSION',
  NATURAL_PERSON_NAME          = 'NATURAL_PERSON_NAME',
  LEGAL_PERSON_NAME            = 'LEGAL_PERSON_NAME',
  PASS_KEY_POSSESSION          = 'PASS_KEY_POSSESSION',
  NATIONALITY                  = "NATIONALITY",
  BIRTH_INFO                   = "BIRTH_INFO",
}

export const IGNISIGN_SIGNER_CLAIM_REF_UNIQUE = [
  IGNISIGN_SIGNER_CLAIM_REF.PHONE_NUMBER_POSSESSION,
  IGNISIGN_SIGNER_CLAIM_REF.EMAIL_POSSESSION,
]

export const IGNISIGN_SIGNER_CLAIM_REF_SEARCHABLE = [
  IGNISIGN_SIGNER_CLAIM_REF.NATURAL_PERSON_NAME,
  IGNISIGN_SIGNER_CLAIM_REF.LEGAL_PERSON_NAME 
]

export enum IGNISIGN_SIGNER_CLAIM_STATUS {
  DECLARED    = 'DECLARED',
  VERIFIED    = 'VERIFIED',
  REJECTED    = 'REJECTED',
  DEPRECATED  = 'DEPRECATED',
}

export class IgnisignSignerClaim {
  _id             ?: string;
  appId            : string;
  appEnv           : IGNISIGN_APPLICATION_ENV;
  signerId         : string;
  idProofingId    ?: string;

  claimRef         : IGNISIGN_SIGNER_CLAIM_REF;
  status           : IGNISIGN_SIGNER_CLAIM_STATUS;
  searchableValue ?: string;
  effectiveDate   ?: Date;
  expirationDate  ?: Date;
  value           ?: string;
  context         ?: any;
  statusHistory    : { status : IGNISIGN_SIGNER_CLAIM_STATUS, effectiveDate: Date, value : string, expirationDate  ?: Date; context: any}[] = [];
}

export type ClaimProcessing     = { value : string, status : IGNISIGN_SIGNER_CLAIM_STATUS, expirationDate ?: Date, context? : any };
export type ClaimProcessingMap  = { [key in IGNISIGN_SIGNER_CLAIM_REF]? : ClaimProcessing };

export class Ignisign_SignerClaimEvolution {
  ref              : IGNISIGN_SIGNER_CLAIM_REF;
  statusFrom       : IGNISIGN_SIGNER_CLAIM_STATUS;
  statusTo         : IGNISIGN_SIGNER_CLAIM_STATUS;
  inputs          ?: IGNISIGN_SIGNER_CREATION_INPUT_REF[] = [];
}
export class IgnisignSigner_ClaimsConstraint {
  ref       : IGNISIGN_SIGNER_CLAIM_REF;
  minStatus : IGNISIGN_SIGNER_CLAIM_STATUS;
};

export class IgnisignSignerCheckExistence_RequestDto {
  claimsToCheck :  {
    [key in IGNISIGN_SIGNER_CLAIM_REF] ?: string 
  }
  // claimsToCheck :  {
  //    [key in IGNISIGN_SIGNER_CLAIM_REF] ?: string 
  // }[]
}

export class IgnisignSignerCheckExistence_ResponseDto {
  signerExists : boolean;
}
