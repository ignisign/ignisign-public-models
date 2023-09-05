import {IsDefined, IsOptional, IsString} from "class-validator";

export class IgnisignDocument_ContentCreation_DataJsonDto {
  @IsDefined()
  jsonContent : any;
}

export class IgnisignDocument_ContentCreation_PrivateContentDto {
  @IsDefined()
  @IsString()
  documentHash                 : string;
}

export class IgnisignDocument_PrivateFileDto {
  @IsOptional()
  @IsString()
  documentId ?: string;

  @IsString()
  fileUrl  : string;   
  
  @IsString()
  mimeType : string;     
  
  @IsString()
  fileName : string;     
  
  @IsOptional()
  @IsString()
  bearer  ?: string;   
  
}