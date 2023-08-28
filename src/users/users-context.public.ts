import { IgnisignOrganization, IgnisignUserOrganization } from "../organizations/organizations.public";
import { USER_TOTP_STATUS } from "./users-login-signup.public";
import { IgnisignApplicationUser, IgnisignOrganizationUser } from "./users-roles.public";
import { IgnisignUser, IgnisignUserConfiguration, IgnisignUserSettings } from "./users.public";



export class IgnisignUserContext extends IgnisignUser {
  settings            : IgnisignUserSettings;
  configuration       : IgnisignUserConfiguration;
  orgs                : IgnisignUserOrganization[];
  apps                : (IgnisignApplicationUser & { appName: string, orgName: string, orgId: string })[];
  securityInformation : {
    twoFaIsRequired    : boolean;
    googleLoginEnabled : boolean;
    githubLoginEnabled : boolean;
    passwordIsDefined  : boolean;
    totpStatus         : USER_TOTP_STATUS;
  }
}
