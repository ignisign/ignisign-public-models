import { IsBoolean, IsOptional } from "class-validator";

export class IgnisignTechnicalToken_CheckDto {
  constructor(
    public isValid: boolean = false,
    public context: any     = null
  ) {}

  @IsBoolean()
  notFound          : boolean = false;

  @IsBoolean()
  alreadyConsumed   : boolean = false;

  @IsBoolean()
  badTarget         : boolean = false;

  @IsBoolean()
  isExpired         : boolean = false;

  @IsBoolean()
  badRelatedId      : boolean = false;

  @IsOptional()
  @IsBoolean()
  errorStr?         : string;
}

export class IgnisignTechnicalToken_CheckAndConsumeDto extends IgnisignTechnicalToken_CheckDto{
  @IsBoolean()
  haveBeenConsumed  : boolean = false;
}
