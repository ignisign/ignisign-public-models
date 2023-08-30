import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_APPLICATION_USER_STATUS } from "./users-invitations-app.public";
import { IGNISIGN_ORGANIZATION_USER_STATUS } from "./users-invitations-org.public";
import { IGNISIGN_USER_GLOBAL_ROLES, IGNISIGN_USER_STATUS } from "./users.public";

export enum IGNISIGN_APPLICATION_ROLES {
  ADMIN     = "ADMIN",
  USER      = "USER",
  READER    = "READER", 
}

export enum IGNISIGN_ORGANIZATION_ROLES {
  ADMIN        = "ADMIN",
  BILLING      = "BILLING",
  READER       = "READER", //! Only used by api => Don't use it directly

  OWNER        = "OWNER", //! DEPRECATED => TO REMOVE
}

export type  IgnisignAppRolesType = {[key in IGNISIGN_APPLICATION_ENV] : IGNISIGN_APPLICATION_ROLES[]};

export class IgnisignApplicationUser {
  _id     ?: string;
  appId    : string;
  userId   : string;
  roles    : IgnisignAppRolesType;
  status  ?: IGNISIGN_APPLICATION_USER_STATUS;
}

export class IgnisignApplicationUserDetails {
  userId          : string;
  email           : string;
  userStatus     ?: IGNISIGN_USER_STATUS;
  status         ?: IGNISIGN_APPLICATION_USER_STATUS;
  fullName       ?: string = '';
  lastLoginDate  ?: Date;
  appId           : string;
  appRoles        : IgnisignAppRolesType = {
    [IGNISIGN_APPLICATION_ENV.DEVELOPMENT] : [],
    [IGNISIGN_APPLICATION_ENV.STAGING]     : [],
    [IGNISIGN_APPLICATION_ENV.PRODUCTION]  : []
  };
}

export class IgnisignOrganizationUser {
  _id              ?: string;
  userId            : string;
  orgId             : string;
  isDefault         : boolean;
  roles             : IGNISIGN_ORGANIZATION_ROLES[] = [];
  userStatus       ?: IGNISIGN_USER_STATUS;
  status           ?: IGNISIGN_ORGANIZATION_USER_STATUS;
}

export class IgnisignOrganizationUserDetails {
  userId         : string;
  email          : string;
  globalRoles    : IGNISIGN_USER_GLOBAL_ROLES[] = [];
  userStatus    ?: IGNISIGN_USER_STATUS;
  status        ?: IGNISIGN_ORGANIZATION_USER_STATUS;
  fullName      ?: string = '';
  lastLoginDate ?: Date;
  orgId          : string;
  orgRoles       : IGNISIGN_ORGANIZATION_ROLES[] = [];
}
