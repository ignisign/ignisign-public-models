import { IsEnum, IsOptional, IsString, Length } from "class-validator";
import { IGNISIGN_USER_STATUS } from "../users/users.public";
import { IGNISIGN_APPLICATION_USER_STATUS } from "../users/users-invitations-app.public";
import { IGNISIGN_ORGANIZATION_USER_STATUS } from "../users/users-invitations-org.public";
import { IGNISIGN_ORGANIZATION_STATUS } from "../organizations/organizations.public";
import { IGNISIGN_APPLICATION_STATUS } from "../applications/applications.public";

export class IgnisignUrlContainerDto {
  @IsString()
  url: string;
}

export class IgnisignTotpSetupData {
  url     : string;
  secret  : string;
}
export class IgnisignJwtContainer {
  @IsString()
  jwtToken : string;
}

export class IgnisignLogin_ResponseDto {
  @IsString()
  jwtToken : string;

  @IsString()
  refreshToken : string;
}

export class Ignisign_EmailContainerDto {
  @IsString()
  email : string;
}

export class IgnisignSelectedIdentityIdContainerDto {
  @IsOptional()
  @IsString()
  selectedIdentityId ?: string;
}

export class IgnisignBankIdResultContainerDto { 
  @IsString()
  originVarName : string;

  @IsString()
  state : string;
}

export class IgnisignPhoneNumberContainerDto { 
  @IsString()
  signerId : string;

  @IsString()
  phoneNumber : string;
}

export class IgnisignAuthInputsContainerDto {
  inputs : any;
}

export class IgnisignUserStatusContainerDto {
  @IsEnum(IGNISIGN_USER_STATUS)
  status : IGNISIGN_USER_STATUS.ACTIVE | IGNISIGN_USER_STATUS.BLOCKED;
}

export class IgnisignAppUserStatusContainerDto {
  @IsEnum(IGNISIGN_APPLICATION_USER_STATUS)
  status : IGNISIGN_APPLICATION_USER_STATUS;
}

export class IgnisignOrgUserStatusContainerDto {
  @IsEnum(IGNISIGN_ORGANIZATION_USER_STATUS)
  status : IGNISIGN_ORGANIZATION_USER_STATUS;
}

export class IgnisignOrganizationStatusContainer {
  @IsEnum(IGNISIGN_ORGANIZATION_STATUS)
  status : IGNISIGN_ORGANIZATION_STATUS;
}

export class IgnisignApplicationStatusContainer {
  @IsEnum(IGNISIGN_APPLICATION_STATUS)
  status : IGNISIGN_APPLICATION_STATUS;
}

export class IgnisignNameContainerDto {
  @IsString()
  @Length(1, 256) 
  name : string;
}
