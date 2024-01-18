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