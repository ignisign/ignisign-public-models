
export class IgnisignTechnicalTokenCheckDto {
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

export class IgnisignTechnicalTokenCheckAndConsumeDto extends IgnisignTechnicalTokenCheckDto{
  haveBeenConsumed  : boolean = false;
}
