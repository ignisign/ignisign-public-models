
import {IsBoolean, IsEnum, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import 'reflect-metadata';
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";

// PUBLIC
export class IgnisignApiAuth_RequestDto {
  @IsString()
  appId  : string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv : IGNISIGN_APPLICATION_ENV;
  
  @IsString()
  secret : string;
}

