
import {Allow, IsArray, IsBoolean, IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import { IgnisignOrganizationUser } from "../users/users-roles.public";

export enum IGNISIGN_ORGANIZATION_STATUS {
  ACTIVE   = "ACTIVE",
  ARCHIVED = "ARCHIVED",
  BLOCKED  = "BLOCKED"
}

export class IgnisignOrganization {
  _id?            : string;
  name            : string;
  status          : IGNISIGN_ORGANIZATION_STATUS;
  legalSignerId  ?: string;
  _createdAt     ?: Date;
}

export class IgnisignUserOrganization extends IgnisignOrganization {
  orgUser ?: IgnisignOrganizationUser;
}

export enum IGNISIGN_BILLING_DEVISES {
  EUR = 'EUR',
  USD = 'USD',
}

export class IgnisignOrganizationCreationRequestDto {
  @IsNotEmpty()
  @IsString()
  name : string
}

export class IgnisignSearchOrganizationDto {
  @IsNumber()
  page : number;

  @IsOptional()
  @IsString()
  name ?: string;

  @IsOptional()
  @IsDateString()
  startDate ?: Date;

  @IsOptional()
  @IsDateString()
  endDate ?: Date;

  @IsOptional()
  @IsEnum(IGNISIGN_ORGANIZATION_STATUS)
  status ?: IGNISIGN_ORGANIZATION_STATUS;
}

