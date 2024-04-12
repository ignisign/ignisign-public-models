import { IsBase64, IsIn, IsMongoId, IsString } from "class-validator";

export class IgnisignDocumentSeal_SealDto {
  @IsMongoId()
  documentId: string;

  @IsString()
  @IsBase64()
  toBeSigned: string;

  @IsString()
  @IsIn(["sha256"])
  hashAlg: string;
}
