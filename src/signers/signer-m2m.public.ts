import { IGNISIGN_EIDAS_LEVEL } from "../_commons/eidas.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";

const crypto = require('crypto');

export enum IGNISIGN_M2M_STATUS {
  ACTIVE  = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

export class IgnisignM2M {
  _id           ?: string;
  appId          : string;
  appEnv         : IGNISIGN_APPLICATION_ENV;
  signerId       : string;
  publicKey      : string;
  status         : IGNISIGN_M2M_STATUS;
  title          : string;
  lastRenewal    : Date;
  _updatedAt     : Date;
  _createdAt     : Date;
  expirationDate : Date;
}

export class IgniSign_SignM2MDocumentRequestDto {
  documentType : IGNISIGN_DOCUMENT_TYPE;
  documentHash : string;
  label?       : string;

  constructor(documentType : IGNISIGN_DOCUMENT_TYPE, documentHash : string, label? : string){
    this.documentType = documentType;
    this.documentHash = documentHash;
    if(label)
      this.label = label;
  }
}
export class IgniSign_SignM2MDocumentHashRequestDto extends IgniSign_SignM2MDocumentRequestDto {
  constructor(documentHash : string, label? : string){
    super(IGNISIGN_DOCUMENT_TYPE.PRIVATE_FILE, documentHash, label);
  }
}

export class IgniSign_SignM2MDocumentContentRequestDto  extends IgniSign_SignM2MDocumentRequestDto {
  
  contentB64 : string;
  mimeType  ?: string;

  constructor(contentBinary: Buffer, mimeType : string, label? : string){
    super(
      (mimeType === "application/pdf")? IGNISIGN_DOCUMENT_TYPE.PDF : IGNISIGN_DOCUMENT_TYPE.FILE, 
      null, 
      label);

    this.mimeType     = mimeType;
    this.contentB64   = contentBinary.toString('base64');
    this.documentHash = crypto.createHash('sha256').update(contentBinary).digest('hex');
  }
}

export class IgniSign_SignM2MDocumentXMLRequestDto  extends IgniSign_SignM2MDocumentRequestDto {

  xmlContent                 : string;

  constructor(xmlContent : string, label? : string){
    super(IGNISIGN_DOCUMENT_TYPE.DATA_XML, null, label);
    this.xmlContent = xmlContent;
    this.documentHash = crypto.createHash('sha256').update(xmlContent).digest('hex');
  }
}

export class IgniSign_SignM2MDocumentJSONRequestDto extends IgniSign_SignM2MDocumentRequestDto {
  
  jsonContent                : any;
  templateDisplayerId       ?: string;
  templateDisplayerVersion  ?: number;

  constructor(jsonContent : any, templateDisplayerId? : string, templateDisplayerVersion? : number, label? : string){
    super(IGNISIGN_DOCUMENT_TYPE.DATA_JSON, null, label);
    this.jsonContent         = jsonContent;
    
    if(templateDisplayerId)
      this.templateDisplayerId      = templateDisplayerId;

    if(templateDisplayerVersion)
      this.templateDisplayerVersion = templateDisplayerVersion;

    this.documentHash = crypto.createHash('sha256').update(JSON.stringify(jsonContent)).digest('hex');
  }
}

export class IgniSign_SignM2MRequestDto {
  m2mId           : string;
  title          ?: string;
  document        : IgniSign_SignM2MDocumentHashRequestDto | IgniSign_SignM2MDocumentContentRequestDto | IgniSign_SignM2MDocumentXMLRequestDto | IgniSign_SignM2MDocumentJSONRequestDto;
  externalId     ?: string;
  documentHashSignedByM2MPrivateKey : string;
}

export class IgniSign_SignM2MResponseDto {
  signatureRequestId  : string;
  documentId          : string;
  documentHash        : string;
}