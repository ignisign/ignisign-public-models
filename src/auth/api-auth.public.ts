import {IsEnum, IsString} from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

export class IgnisignApiAuth_RequestDto {
  @IsString()
  appId  : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv : IGNISIGN_APPLICATION_ENV;
  
  @IsString()
  secret : string;
  
}

