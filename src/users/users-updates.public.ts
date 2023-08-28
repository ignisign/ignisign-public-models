
import {IsBoolean, IsEmail, IsMobilePhone, IsOptional, IsString, Length, } from "class-validator";


export class UserUpdateDto {
  @IsOptional()
  @IsString()
  fullName ?: string;

  @IsOptional()
  @IsBoolean()
  termsOfUseAccepted ?: boolean;

  @IsOptional()
  @IsBoolean()
  privacyPolicyAccepted ?: boolean;
}

export class IgnisignUserEmailModificationRequest { 
  oldEmail : {
    email      : string;
    isValidate : boolean;
  };
  newEmail : {
    email      : string;
    isValidate : boolean;
  };
  
  expirationDate : string;
}

export class IgnisignUserNameValidationDto {
  @Length(1, 256)
  firstName: string;

  @Length(1, 256)
  lastName: string;

  @Length(1, 256)
  organizationName : string;

  @IsBoolean()
  termsOfUseAccepted : boolean;

  @IsBoolean()
  privacyPolicyAccepted : boolean;
}


export class UserChangePasswordDto {
  @IsString()
  @Length(8, 256)
  oldPassword: string;

  @IsString()
  @Length(8, 256)
  newPassword: string;
}
export class UserEmailModificationRequestDto {
  @IsEmail()
  email: string;
}

