import { IsBoolean, IsEmail, IsEnum, IsString } from "class-validator";
import { IGNISIGN_ORGANIZATION_ROLES } from "./users-roles.public";

export enum IGNISIGN_ORGANIZATION_INVITED_USER_STATUS {
  PENDING  = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
  CANCELED = 'CANCELED'
 }


export enum IGNISIGN_ORGANIZATION_USER_STATUS {
  ACTIVE  = 'ACTIVE',
  BLOCKED = 'BLOCKED'
 }
 
 export class IgnisignOrganizationInvitedUser {
   _id       ? : string
   email       : string
   orgId       : string;
   status      : IGNISIGN_ORGANIZATION_INVITED_USER_STATUS = IGNISIGN_ORGANIZATION_INVITED_USER_STATUS.PENDING
   roles       : IGNISIGN_ORGANIZATION_ROLES[] = [];
 }


export class IgnisignOrganizationInvitedUserCreationRequestDto {
  @IsEmail()
  readonly email: string;

  @IsEnum(IGNISIGN_ORGANIZATION_ROLES, { each: true })
  readonly roles : IGNISIGN_ORGANIZATION_ROLES[]
}

export class IgnisignOrganizationUserEditRequestDto {
  @IsEnum(IGNISIGN_ORGANIZATION_ROLES, { each: true })
  readonly roles   : IGNISIGN_ORGANIZATION_ROLES[];
  
/*   @IsString()
  readonly userId: string;

  @IsString()
  readonly orgId: string; */
}

/* export class IgnisignOrganizationInvitedUserEditRequestDto {
  @IsEnum(IGNISIGN_ORGANIZATION_ROLES, { each: true })
  readonly roles   : IGNISIGN_ORGANIZATION_ROLES[];
  
  @IsString()
  readonly userId: string;

  @IsString()
  readonly invitedUserId: string;
} */

export class IgnisignOrganizationInvitedUserResponseRequestDto {
  @IsString()
  readonly token: string;

  @IsEmail()
  readonly email : string;

  @IsBoolean()
  readonly isAccepted : boolean;
}

export class IgnisignOrganizationInvitedUserResponseAndUserCreationRequestDto {
  @IsString()
  readonly token: string;

  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly password: string;

  @IsBoolean()
  termsOfUseAccepted  : boolean;

  @IsBoolean()
  privacyPolicyAccepted : boolean;
}

export class IgnisignOrganizationInvitedUserSpecificationsRequestDto {
  @IsString()
  readonly orgName: string

  @IsEmail()
  readonly invitedUserEmail: string

  @IsEnum(IGNISIGN_ORGANIZATION_ROLES, { each: true })
  readonly roles: IGNISIGN_ORGANIZATION_ROLES[]
}
