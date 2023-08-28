import { IsBoolean, IsEmail, IsOptional, IsString, Length } from "class-validator";

export enum IGNISIGN_USER_LOGIN_METHOD {
  PASSWORD        = "PASSWORD",
  GOOGLE_OAUTH    = "GOOGLE_OAUTH"
}

export enum IGNISIGN_USER_USER_LOGIN_PLATFORM {
  WEB    = "WEB",
}

export enum USER_TOTP_STATUS {
  UNSET     = "UNSET",
  ENABLED   = "ENABLED",
  DISABLED  = "DISABLED",
}

export class IgnisignUserSignUpDto {
  @IsEmail()
  email: string;
  
  @IsString()
  @Length(10, 256)
  password: string;

  @IsString()
  @Length(1, 256)
  firstName: string;

  @IsString()
  @Length(1, 256)
  lastName: string;

  @IsOptional()
  @IsString()
  organizationName ?: string;

  @IsBoolean()
  termsOfUseAccepted : boolean;

  @IsBoolean()
  privacyPolicyAccepted : boolean;
}

export class IgnisignUserResetPasswordDto {
  @IsString()
  token

  @Length(10, 256)
  password: string;
}


export class IgnisignUserLoginByPasswordRequestDto {
  @IsEmail()
  email    : string;

  @Length(8, 256)
  password : string;

  @IsOptional()
  @IsString()
  totpToken ?: string;
}



export class UserUpdateLoginMethodsDto {
  githubLoginEnabled: boolean;
  googleLoginEnabled: boolean;
}

export class IgnisignTotpTokenContainer {
  @IsString()
  totpToken: string;
}

export class IgnisignUserStartGoogleOauthLoginResponseDto {
  authorizationUrl : string;
}

export class IgnisignUserOauthCodeExchangeDto {
  @IsString()
  code: string;

  // @IsOptional()
  // @IsString()
  // totpToken ?: string;
}

export class IgnisignUserAuthTokenRequestDto {
  @IsEmail()
  email    : string;
}

export class IgnisignUserLoginSecureDto {
  @IsEmail()
  email:    string
  jwtToken: string
}

export class UserPasswordContainerDto {
  @IsString()
  @Length(8, 256)
  password: string;
}

export class loginWithOauthTokenDto {
  @IsString()
  totpToken: string;

  @IsOptional()
  @IsString()
  oauthCode: string;
}