
import {Allow, IsArray, IsBoolean, IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import { IgnisignOrganizationUser } from "../users/users-roles.public";

export enum IGNISIGN_ORGANIZATION_STATUS {
  ACTIVE   = "ACTIVE",
  ARCHIVED = "ARCHIVED",
  BLOCKED  = "BLOCKED"
}

export enum IGNISIGN_ORGANIZATION_DELEGATED_RIGHTS {
  AUTH_DELEGATION_SERVER_SIDE_MANAGED = "AUTH_DELEGATION_SERVER_SIDE_MANAGED",
  AUTH_DELEGATION_CLIENT_SIDE_MANAGED = "AUTH_DELEGATION_CLIENT_SIDE_MANAGED",
  RA_NATURAL_AES                      = "RA_NATURAL_AES",
  RA_NATURAL_QES                      = "RA_NATURAL_QES",
}

export enum IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF {
  LEGAL_SIGNER_RA_AES_AUTH              = "LEGAL_SIGNER_RA_AES_AUTH",
  LEGAL_SIGNER_RA_QES_AUTH              = "LEGAL_SIGNER_RA_QES_AUTH",
  LEGAL_SIGNER_EMBEDDED_AES_QES_AUTH    = "LEGAL_SIGNER_EMBEDDED_AES_QES_AUTH",
}

export enum IGNISIGN_ORGANIZATION_SETUP_METHODS {
  ORGANIZATION_VERIFIED = "ORGANIZATION_VERIFIED",
  TVA_PROVIDED = "TVA_PROVIDED"
}

export class IgnisignOrganizationLegalSignerAuthProcessMode {
  isAvailable
  ref: IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF
  delegatedRights: IGNISIGN_ORGANIZATION_DELEGATED_RIGHTS[]
  unlockRequirements: IGNISIGN_ORGANIZATION_SETUP_METHODS[]
}

export const IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODES : {[key in IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF] : IgnisignOrganizationLegalSignerAuthProcessMode } = {
  [IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF.LEGAL_SIGNER_RA_AES_AUTH]: {
    isAvailable: true,
    ref: IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF.LEGAL_SIGNER_RA_AES_AUTH,
    delegatedRights: [
      IGNISIGN_ORGANIZATION_DELEGATED_RIGHTS.RA_NATURAL_AES
    ],
    unlockRequirements: []
  },
  [IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF.LEGAL_SIGNER_RA_QES_AUTH]: {
    isAvailable: true,
    ref: IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF.LEGAL_SIGNER_RA_QES_AUTH,
    delegatedRights: [
      IGNISIGN_ORGANIZATION_DELEGATED_RIGHTS.RA_NATURAL_QES
    ],
    unlockRequirements: [
      IGNISIGN_ORGANIZATION_SETUP_METHODS.TVA_PROVIDED,
      IGNISIGN_ORGANIZATION_SETUP_METHODS.ORGANIZATION_VERIFIED,
    ]
  },
  [IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF.LEGAL_SIGNER_EMBEDDED_AES_QES_AUTH]: {
    isAvailable: true,
    ref: IGNISIGN_ORGANIZATION_LEGAL_SIGNER_AUTH_PROCESS_MODE_REF.LEGAL_SIGNER_EMBEDDED_AES_QES_AUTH,
    delegatedRights: [IGNISIGN_ORGANIZATION_DELEGATED_RIGHTS.AUTH_DELEGATION_CLIENT_SIDE_MANAGED, IGNISIGN_ORGANIZATION_DELEGATED_RIGHTS.AUTH_DELEGATION_SERVER_SIDE_MANAGED],
    unlockRequirements: [
      IGNISIGN_ORGANIZATION_SETUP_METHODS.TVA_PROVIDED
    ]
  },
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

export class IgnisignOrganizationConfiguration {
  _id                   ?: string;
  orgId                  : string;
  delegatedRights        : IGNISIGN_ORGANIZATION_DELEGATED_RIGHTS[];
  completedSetupMethods  : IGNISIGN_ORGANIZATION_SETUP_METHODS[];
  stripeCustomerId      ?: string;
  features               : { [key in IGNISIGN_ORGANIZATION_FEATURES] : boolean };
}

export enum IGNISIGN_ORGANIZATION_FEATURES {
  // ORG_SETTINGS         = 'ORG_SETTINGS',
  EMBEDDED_SIGNING     = 'EMBEDDED_SIGNING',
  PRIVATE_FILE         = 'PRIVATE_FILE',
  DATA_JSON            = 'DATA_JSON',
  APP_ENV_SETTINGS     = 'APP_ENV_SETTINGS',
  SIGNATURE_SESSION    = 'SIGNATURE_SESSION',
  SIGNATURE_METHOD_QES = 'SIGNATURE_METHOD_QES'
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

