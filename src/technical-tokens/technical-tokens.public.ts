


export enum PUBLIC_TECHNICAL_TOKEN_TARGETS {
  AUTH_CONFIRMATION_CHALLENGE = "AUTH_CONFIRMATION_CHALLENGE",
  AUTH_CHALLENGE              = "AUTH_CHALLENGE",
  AUTH_INIT_CHALLENGE         = "AUTH_INIT_CHALLENGE",

  AUTH_REGISTRATION           = "AUTH_REGISTRATION",
  ASSOCIATE_DEVICE_CHALLENGE  = "ASSOCIATE_DEVICE_CHALLENGE",

  WEBHOOK_VERIFICATION        = "WEBHOOK_VERIFICATION",
  BYPASS_RIGHT                = "BYPASS_RIGHT",
  
  API_CALL_VERIFICATION       = "API_CALL_VERIFICATION",
  
  ACCOUNT_VERIFICATION            = "ACCOUNT_VERIFICATION",
  
  APP_USER_INVITATION             = "APP_USER_INVITATION",
  ORGANIZATION_USER_INVITATION    = "ORGANIZATION_USER_INVITATION",

  FORGOT_PASSWORD             = "FORGOT_PASSWORD",
  EMAIL_MODIFICATION_REQUEST  = "EMAIL_MODIFICATION_REQUEST",

  LEGAL_SIGNER_CHALLENGE      = "LEGAL_SIGNER_CHALLENGE",
  SIGNER_IDENTITY_PROOFING    = "SIGNER_IDENTITY_PROOFING",
  BANK_ID_IDENTITY_PROOFING   = "BANK_ID_IDENTITY_PROOFING",


  ID_PROOFING = "ID_PROOFING",

  SIGNATURE_TOKEN             = "SIGNATURE_TOKEN",
  SIGNATURE_DETAILS           = "SIGNATURE_DETAILS",
  DOCUMENTS_REQUEST           = "DOCUMENTS_REQUEST",

  SIGNATURE_REQUEST_COMPLETED = "SIGNATURE_REQUEST_COMPLETED",

  DOCUMENT_SIGNATURE_PROOF     = "DOCUMENT_SIGNATURE_PROOF",
  SIGNATURE_REQUEST_ALL_PROOFS = "SIGNATURE_REQUEST_ALL_PROOFS",
}



enum TECHNICAL_TOKEN_ORIGIN {
  CLIENT_SIGN = "CLIENT_SIGN",
  CLIENT_APP  = "CLIENT_APP"
}

//Private ?
export class IgnisignTechnicalToken {
  _id         : string;
  _createdAt  : Date;
  token       : string;
  relatedId   : string;
  target      : string;
  origin      : TECHNICAL_TOKEN_ORIGIN;
  isConsumed  : boolean;
  context?    : any;
}

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
