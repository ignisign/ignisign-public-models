import {  IsBoolean, IsString } from "class-validator";

export class IgnisignJwtContainer {
  @IsString()
  jwtToken : string;
}

export class IgnisignDocument_AuthenticityValidationContainer {
  @IsString()
  documentId : string;

  @IsBoolean()
  authenticityValidated : boolean;
}

export class IgnisignSignerIdsContainer {
  @IsString({ each: true })
  signerIds : string[];
}

export class IgnisignEmailsContainer {
  @IsString({ each: true })
  emails : string[];
}

export class SSOResctrictedContainer {
  @IsBoolean()
  ssoResctricted : boolean;
}