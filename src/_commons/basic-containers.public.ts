import {  IsString } from "class-validator";

export class IgnisignJwtContainer {
  @IsString()
  jwtToken : string;
}
