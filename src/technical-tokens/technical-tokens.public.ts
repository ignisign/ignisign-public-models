
export class IgnisignTechnicalToken_CheckDto {
  constructor(
    public isValid: boolean = false,
    public context: any     = null
  ) {}

  notFound          : boolean = false;
  alreadyConsumed   : boolean = false;
  badTarget         : boolean = false;
  isExpired         : boolean = false;
  badRelatedId      : boolean = false;
  errorStr?         : string;
}

export class IgnisignTechnicalToken_CheckAndConsumeDto extends IgnisignTechnicalToken_CheckDto{
  haveBeenConsumed  : boolean = false;
}
