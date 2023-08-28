import { IsNumber, IsOptional, IsString } from "class-validator";
import { IGNISIGN_ORGANIZATION_STATUS } from "../organizations/organizations.public";

export const IGNISIGN_USER_MAX_EMAIL_CHANGE_ATTEMPTS = 5;

export enum IGNISIGN_USER_FEATURES {

}

export enum IGNISIGN_USER_STATUS {
  INVITED               = "INVITED",
  CREATED               = "CREATED",
  PENDING               = "PENDING",
  BLOCKED               = "BLOCKED",
  ACTIVE                = "ACTIVE",
}

export enum IGNISIGN_USER_GLOBAL_ROLES {
  SUPER_ADMIN         = "SUPER_ADMIN",
}

export enum IGNISIGN_USER_GENDER {
  MALE                = "MALE",
  FEMALE              = "FEMALE"
}

export enum IGNISIGN_USER_SETTINGS_LANG {
  EN = "EN",
  FR = "FR",
  DE = "DE"
}

export class IgnisignUser {
  _id                   : string;
  email                 : string;
  emailLC               : string;
  globalRoles           : IGNISIGN_USER_GLOBAL_ROLES[] = [];
  status               ?: IGNISIGN_USER_STATUS;
  fullName             ?: string = '';
  firstName             : string;
  lastName              : string;
  nameSelfValidated    ?: boolean = false;
  lastLoginDate        ?: Date;
  _createdAt           ?: Date;
  termsOfUseAccepted    : boolean;
  privacyPolicyAccepted : boolean;
}

export class IgnisignUserSettings {
  userId                : string;
  darkMode              : boolean = false;
  lang                  : IGNISIGN_USER_SETTINGS_LANG;
  canChangeEmail        : boolean = true;
  nbChangeEmailAttempts : number = 0;
}

export class IgnisignUserConfiguration {
  userId:             string;
  userFeatures:       IGNISIGN_USER_FEATURES[] = [];
}


export class IgnisignUserIdContainerDto {
  @IsString()
  userId: string;
}

export class IgnisignUserRefreshToken {
  _id           : string;
  token         : string;
  userId        : string;
  isConsumed    : boolean;
  dateOfLastUse : Date;
  _createdAt    : Date;
}


export class IgnisignUserRenewJwt_RequestDto {
  @IsString()
  jwtToken     : string;

  @IsString()
  refreshToken : string;
}

export class IgnisignSearchUsersDto {
  @IsNumber()
  page : number;
  
  @IsOptional()
  @IsString()
  email     ?: string;

  @IsOptional()
  @IsString()
  firstName ?: string;
    
  @IsOptional()
  @IsString()
  lastName  ?: string;
    
  @IsOptional()
  @IsString()
  status    ?: IGNISIGN_USER_STATUS;
    
  @IsOptional()
  @IsString()
  orgName   ?: string;
    
  @IsOptional()
  @IsString()
  appName   ?: string;

}

