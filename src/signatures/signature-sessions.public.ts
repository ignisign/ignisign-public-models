
import {IsBoolean, IsDefined, IsEnum, IsMongoId, IsOptional, IsString, ValidateNested} from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import {IGNISIGN_AUTH_FULL_MECHANISM_REF, IGNISIGN_AUTH_REGISTRATION_REF, IGNISIGN_AUTH_REGISTRATION_STATUS, IGNISIGN_SINGLE_AUTH_METHOD_REF} from "./signature-auth.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "./signature-methods.public";
import { IGNISIGN_SIGNATURE_MODE, IgnisignSignatureAuthentificationAttempt } from "./signatures.public";
import { IgnisignDocument, IgnisignDocumentContext } from "../documents/document-entities.public";
import { IGNISIGN_ID_PROOFING_METHOD_REF } from "../id-proofing/id-proofing-methods.public";
import { IGNISIGN_ID_PROOFING_STATUS } from "../id-proofing/id-proofing.public";
import { IgnisignSignatureRequest, Ignisign_SignatureRequest_Statement } from "./signature-requests.public";
import { IgnisignApplicationSignatureMetadata } from "./signatures.public";
import { Type } from "class-transformer";
import { IsNonPrimitiveArray } from "../_utils/custom-validator.public";
import { IgnisignSignerSelfSessionDto } from "../signers/signers.public";
import { IgnisignApplicationEnvSettings } from "../applications/applications-settings-config.public";


const MAX_AUTH_ATTEMPTS = 3;


export enum IGNISIGN_SIGNATURE_SESSION_STATUS {
  CREATED                         = "CREATED",
  IN_PROGRESS                     = "IN_PROGRESS",
  COMPLETED                       = "COMPLETED",
  CANCELLED                       = "CANCELLED",
  FAILED                          = "FAILED",
}

export enum IGNISIGN_SIGNATURE_SESSION_AUTH_STATUS {
  // CREATED                         = "CREATED",
  AUTH_NOT_PROCESSED              = "AUTH_NOT_PROCESSED",
  CHALLENGE_CAN_BE_REQUESTED      = "CHALLENGE_CAN_BE_REQUESTED",
  IN_PROGRESS                     = "IN_PROGRESS",
  COMPLETED                       = "COMPLETED",
  FAILED                          = "FAILED",
}

export class IgnisignClientSideSignatureCache {
  documentId: string;
  toBeSigned: string;
  identifier: number;
}

export class Ignisign_SignatureSession_AuthState {
  priority                 : number;
  attempts                 : number;
  authMethodRef            : IGNISIGN_SINGLE_AUTH_METHOD_REF;
  fullAuthMethodRefs       : IGNISIGN_AUTH_FULL_MECHANISM_REF[];
  status                   : IGNISIGN_SIGNATURE_SESSION_AUTH_STATUS;
  responseToken           ?: string;
  challengeRequestToken   ?: string;
  privateContext          ?: any;
  publicContext           ?: any;
  error                   ?: any;
}

export class Ignisign_SignatureSession_IdProofing_State {
  idProofingId    : string;
  priority        : number;
  attempts        : number;
  idProofingRef   : IGNISIGN_ID_PROOFING_METHOD_REF;
  status          : IGNISIGN_ID_PROOFING_STATUS;
  token           : string;
  privateContext ?: any;
  publicContext  ?: any;
}

export class Ignisign_SignatureSession_AuthRegistration_State {
  priority             : number;
  attempts             : number;
  authRegistrationRef  : IGNISIGN_AUTH_REGISTRATION_REF;
  status               : IGNISIGN_AUTH_REGISTRATION_STATUS;
  token                : string;
  privateContext      ?: any;
  publicContext       ?: any;
}

export class Ignisign_SignatureSession {

  _id?                        : string;
  appId                       : string;
  appEnv                      : IGNISIGN_APPLICATION_ENV;
  signerId                    : string;
  signatureRequestId          : string;
  status                      : IGNISIGN_SIGNATURE_SESSION_STATUS;
  authFullMethodsRefsSkipped  : IGNISIGN_AUTH_FULL_MECHANISM_REF[];
  clientSideSignatureDone     : boolean;
  serverSideSignatureDone     : boolean;
  signatureToken              ?: string;
  signerKeyId                 ?: string;
  authStates                  ?: Ignisign_SignatureSession_AuthState[];
  idProofingStates            ?: Ignisign_SignatureSession_IdProofing_State[];
  authRegistrationStates      ?: Ignisign_SignatureSession_AuthRegistration_State[];
  clientSignatureCache        ?: IgnisignClientSideSignatureCache[];
  authCache                   ?: any;
  redirectUrl                 ?: string;
  lastAccessDate              ?: Date
  signingIp                   ?: string
}

/************************************************************* SIGNATURE SESSION CONTEXT **************************************************************/

export class Ignisign_SignatureSession_IdProofing_Info {
  idProofingId    : string;
  priority        : number;
  idProofingRef   : IGNISIGN_ID_PROOFING_METHOD_REF;
  status          : IGNISIGN_ID_PROOFING_STATUS;
  token           : string;
  publicContext  ?: any;
}

export class Ignisign_SignatureSession_AuthRegistration_Info {
  priority            : number;
  authRegistrationRef : IGNISIGN_AUTH_REGISTRATION_REF;
  status              : IGNISIGN_AUTH_REGISTRATION_STATUS;
  token               : string;
  publicContext      ?: any;
}

export class Ignisign_SignatureSession_AuthInfo{
  priority               : number;
  authMethodRef          : IGNISIGN_SINGLE_AUTH_METHOD_REF;
  fullAuthMethodRefs     : IGNISIGN_AUTH_FULL_MECHANISM_REF[];
  status                 : IGNISIGN_SIGNATURE_SESSION_AUTH_STATUS;
  isSuccessfull          : boolean;
  responseToken?         : string;
  context               ?: any;
  publicContext         ?: any;
  challengeRequestToken ?: string;
  error?                 : any;
}

export class Ignisign_SignatureSession_ExecutionContext{
  sessionId                  : string;
  signatureModes             : IGNISIGN_SIGNATURE_MODE[];

  authAttempt                : IgnisignSignatureAuthentificationAttempt;
  authInfos                 ?: Ignisign_SignatureSession_AuthInfo[];
  idProofingInfos           ?: Ignisign_SignatureSession_IdProofing_Info[];
  authRegistrationInfos     ?: Ignisign_SignatureSession_AuthRegistration_Info[];

  signerIsFullyIdentified    : boolean;
  isFullyAuthenticated       : boolean;
  authsAreInitialized        : boolean;

  signatureToken            ?: string;

  isEmbedded                 : boolean;
  authMethodRefConfirmation ?: IGNISIGN_AUTH_REGISTRATION_REF[]
}

export class Ignisign_SignatureSessionContext {
  sessionId             : string;
  signatureRequest      : IgnisignSignatureRequest;
  signer                : IgnisignSignerSelfSessionDto;
  documents             : IgnisignDocument[];
  statements           ?: Ignisign_SignatureRequest_Statement[];
  executionContext      : Ignisign_SignatureSession_ExecutionContext;
  applicationMetadata  ?: IgnisignApplicationSignatureMetadata;
}


/************************************************************* SIGNATURE SESSION INIT **************************************************************/
export class Ignisign_SignatureSession_Init_RequestDto{
  @IsString()
  signerId: string;

  @IsString()
  signatureRequestId : string;

  // @IsEnum(IGNISIGN_SIGNATURE_METHOD_REF)
  // signatureMethodRef : IGNISIGN_SIGNATURE_METHOD_REF;

  @IsString()
  token : string;

  @IsOptional()
  @IsString()
  signerSecret ?: string;
}





/************************************************************* AUTH **************************************************************/

export class Ignisign_SignatureSession_AuthChallengeRequestDto {
  @IsString()
  @IsMongoId()
  sessionId       : string;

  @IsString()
  @IsEnum(IGNISIGN_SINGLE_AUTH_METHOD_REF)
  authMethodRef   : IGNISIGN_SINGLE_AUTH_METHOD_REF;

  @IsString()
  challengeRequestToken       : string;
}

export class Ignisign_SignatureSession_Auth_RequestDto {
  @IsString()
  @IsMongoId()
  sessionId      : string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Ignisign_SignatureSession_AuthAnswer)
  @IsNonPrimitiveArray()
  authAnswers    : Ignisign_SignatureSession_AuthAnswer[];
}
export class Ignisign_SignatureSession_AuthAnswer {

  @IsString()
  @IsEnum(IGNISIGN_SINGLE_AUTH_METHOD_REF)
  authMethodRef    : IGNISIGN_SINGLE_AUTH_METHOD_REF;

  @IsString()
  responseToken    : string;

  @IsDefined()
  value            : any;

  @IsOptional()
  context         ?: any;

  @IsOptional()
  authState       ?: any;
}

export class Ignisign_Add_AuthMethod_RequestDto extends Ignisign_SignatureSession_Auth_RequestDto {
  isFromIframe       ?: boolean;
  signatureInitToken ?: string;
}

export class Ignisign_Add_AuthMethod_ReponseDto {
  status : IGNISIGN_SIGNATURE_SESSION_AUTH_STATUS;
}

// export class Ignisign_SignatureSession_Auth_ResponseDto {
//   sessionId             : string;
//   signatureToken?       : string;
//   isFullyAuthenticated  : boolean;
//   authResults           : Ignisign_SignatureSession_AuthState[];
// }

// export class Ignisign_SignatureSession_AuthState {
//   authMethodRef   : IGNISIGN_SINGLE_AUTH_METHOD_REF;
//   status          : IGNISIGN_SIGNATURE_SESSION_AUTH_STATUS;
//   isSuccessfull       : boolean;
//   error?          : any;
// }

/************************************************************* SIGN SERVER SIDE **************************************************************/


export class Ignisign_SignatureSession_SignServerSide_RequestDto {
  sessionId       : string;
  signatureToken? : string;
  agreedLegalTerms?: boolean;
}


export class Ignisign_SignatureSession_InitSignServerSide_ResponseDto {
  sessionId       : string;
  isInitialized   : boolean;
  error?          : string;
}

export class Ignisign_SignatureSession_SignServerSide_ResponseDto {
  sessionId       : string;
  isSuccessfull   : boolean;
  error?          : string;
  signatureIds    : string[];
}

/************************************************************* SIGN CLIENT SIDE **************************************************************/

export class Ignisign_SignatureSession_SignClientSideInit_RequestDto {
  sessionId       : string;
  signatureToken  : string;
}

export class Ignisign_SignatureSession_SignClientSideInit_ResponseDto{
  sessionId       : string;
  docsToBeSigned  : {documentId: string, toBeSigned: string }[];
}

export class Ignisign_SignatureSession_SignClientSide_RequestDto {
  sessionId       : string;
  signatureToken  : string;
  signatures      : { documentId: string, clientSideSignature: string }[];
}

export class Ignisign_SignatureSession_SignClientSide_ResponseDto{
  sessionId       : string;
  isSuccessfull       : boolean;
  error?          : string;
  signatureIds    : string[];
}






