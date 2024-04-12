import { IsBase64, IsEnum, IsIn, IsMongoId, IsString } from "class-validator";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";


export class IgnisignDocumentSeal_SealDto {
  @IsMongoId()
  documentId: string;

  @IsString()
  @IsBase64()
  toBeSigned: string;

  @IsString()
  @IsIn(["sha256"])
  hashAlg: string;

  @IsEnum(IGNISIGN_APPLICATION_ENV)
  appEnv: IGNISIGN_APPLICATION_ENV;
}
