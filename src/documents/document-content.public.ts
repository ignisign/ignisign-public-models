import {IsDefined, IsOptional, IsString} from "class-validator";

export class IgnisignDocumentContentCreation_DataJsonDto {
  @IsDefined()
  jsonContent : any;
}

export class IgnisignDocumentContentCreation_PrivateContentDto {
  @IsDefined()
  @IsString()
  documentHash                 : string;
}

export class IgnisignPrivateFileDto {
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