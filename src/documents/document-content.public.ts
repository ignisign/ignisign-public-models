import {IsDefined, IsEmail, IsEnum, IsObject, IsOptional, IsString} from "class-validator";

export class IgnisignDocumentContentCreation_DataJsonDto {
  @IsDefined()
  jsonContent : any;
}

export class IgnisignDocumentContentCreation_PrivateContentDto {
  @IsDefined()
  @IsString()
  documentHash                 : string;
}


export class IgnisignDocumentCreationFileDto {

  @IsString()
  label                       : string;

  @IsOptional()
  @IsString()
  mimeType?                   : string;

  @IsOptional()
  @IsString()
  documentHash?               : string;

  @IsOptional()
  @IsString()
  fileName?                   : string;
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