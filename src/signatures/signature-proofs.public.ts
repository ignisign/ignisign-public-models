import {IsBoolean, IsEnum, IsOptional, IsString} from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_EIDAS_LEVEL } from "../_commons/eidas.public";

export class IgnisignSignatureProof_ImgRequestDto {
  appId              : string;
  appEnv             : IGNISIGN_APPLICATION_ENV;
  signatureRequestId : string;
  signatureImageId   : string;
  signer          : {
    fullName      : string;
    signatureId   : string;
    signatureDate : Date;
    eidasLevel    : IGNISIGN_EIDAS_LEVEL
  }
  color           ?: string;
}

export class IgnisignSignatureProof_AsicsRequestDto {
  appId               : string;
  appEnv              : IGNISIGN_APPLICATION_ENV;
  signatureRequestId  : string;
  advancedProofId     : string;
  documentId          : string;
  // signatures          : IgnisignSignatureProof_AsicsSignatureDto[];
}

// export class IgnisignSignatureProof_AsicsSignatureDto extends IgnisignSignature {
//   signerKey : string;
// }

export class IgnisignSignatureProof_RequestDto {
  @IsString()
  filename             : string;

  @IsString()
  documentId           : string;

  @IsBoolean()
  signedDocIsPdf       : boolean;

  @IsString()
  appId                : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv               : IGNISIGN_APPLICATION_ENV;

  @IsOptional()
  @IsString()
  color                ?: string;

  @IsOptional()
  @IsString()
  logo                 ?: string;

  @IsOptional()
  @IsString()
  customHtmlField      ?: string;
}
