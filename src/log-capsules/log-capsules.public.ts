import { IsBase64, IsString, Length } from 'class-validator';

export class IgnisignLogCapsule_RequestDto {
  @IsString()
  @IsBase64()
  @Length(44, 44)
  hashSha256_b64: string;
}

export class IgnisignLogCapsule_ResponseDto {
  hashSha256_b64    : string;
  timestamp_b64     : string;
  // proof_b64    : string;
  // proof_timestamp_b64 : string;
}

