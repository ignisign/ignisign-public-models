import { IsBoolean, IsDefined, IsEmail, IsNotEmptyObject, IsObject, IsString, ValidateNested } from "class-validator";
import { IGNISIGN_APPLICATION_ROLES } from "./users-roles.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { Type } from "class-transformer";
import 'reflect-metadata';


export enum IGNISIGN_APPLICATION_INVITED_USER_STATUS {
  PENDING  = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
  CANCELED = 'CANCELED'
}

export class IgnisignApplicationInvitedUser {
  _id        ?: string;
  email       : string;
  appId       : string;
  status      : IGNISIGN_APPLICATION_INVITED_USER_STATUS = IGNISIGN_APPLICATION_INVITED_USER_STATUS.PENDING;
  roles       : {[key in IGNISIGN_APPLICATION_ENV] : IGNISIGN_APPLICATION_ROLES[]};
} 

export class IgnisignAppRoles {
  [IGNISIGN_APPLICATION_ENV.DEVELOPMENT] : IGNISIGN_APPLICATION_ROLES[];
  [IGNISIGN_APPLICATION_ENV.STAGING]     : IGNISIGN_APPLICATION_ROLES[];
  [IGNISIGN_APPLICATION_ENV.PRODUCTION]  : IGNISIGN_APPLICATION_ROLES[];
}
export class IgnisignApplicationInvitedUserCreationRequestDto {
  @IsEmail()
  readonly email: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()  
  @Type(() => IgnisignAppRoles)
  readonly roles: IgnisignAppRoles;
}

export class IgnisignApplicationUserEditRequestDto {
  // @IsString()
  // _id: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()  
  @Type(() => IgnisignAppRoles)
  readonly roles: IgnisignAppRoles;
}
