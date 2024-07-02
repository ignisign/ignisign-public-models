import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";

export enum IGNISIGN_M2M_STATUS {
  ACTIVE  = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

export class IgnisignM2M {
  _id         ?: string;
  appId        : string;
  appEnv       : IGNISIGN_APPLICATION_ENV;
  signerId     : string;
  publicKey    : string;
  status       : IGNISIGN_M2M_STATUS;
  title        : string;
  _updatedAt   : Date;
  _createdAt   : Date;
}

export class IgniSign_CreateM2MSealRequestDto {
  m2mId                : string;
  documentHash        ?: string;
  documentLabel       ?: string;
  document            ?: any;
  signatureMethodRef  ?: IGNISIGN_SIGNATURE_METHOD_REF;
}


export class IgniSign_CreateM2MSealResponsetDto {
  signatureRequestId  : string;
  documentHash        : string;
}