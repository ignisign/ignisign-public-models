import { IGNISIGN_EIDAS_LEVEL } from "../_commons/eidas.public";
import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_DOCUMENT_TYPE } from "../documents/document-entities.public";
import { IGNISIGN_SIGNATURE_METHOD_REF } from "../signatures/signature-methods.public";
import { IGNISIGN_SIGNATURE_PROOF_TYPE } from "../signatures/signatures.public";

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
  expirationDate : Date;
  
}

export class IgnisignSealM2M_DocumentRequestDto {
  documentType : IGNISIGN_DOCUMENT_TYPE;
  documentHash : string;
  label?       : string;
  mimeType     ?: string;

  constructor(documentType : IGNISIGN_DOCUMENT_TYPE, documentHash : string, label? : string, mimeType? : string){
    this.documentType = documentType;
    this.documentHash = documentHash;
    if(label)
      this.label = label;
    if(mimeType)
      this.mimeType = mimeType;
  }
}
export class IgnisignSealM2M_DocumentHashRequestDto extends IgnisignSealM2M_DocumentRequestDto {
  constructor(documentHash : string, label? : string, mimeType? : string){
    super(IGNISIGN_DOCUMENT_TYPE.PRIVATE_FILE, documentHash, label, mimeType);
  }
}

export class IgnisignSealM2M_DocumentContentRequestDto  extends IgnisignSealM2M_DocumentRequestDto {
  
  contentB64 : string;

  constructor(contentBinary: Buffer, mimeType : string, label? : string){
    super(
      (mimeType === "application/pdf")? IGNISIGN_DOCUMENT_TYPE.PDF : IGNISIGN_DOCUMENT_TYPE.FILE, 
      null, 
      label, 
      mimeType
    );

    this.contentB64   = contentBinary.toString('base64');
    this.documentHash = crypto.createHash('sha256').update(contentBinary).digest('hex');
  }
}

export class IgnisignSealM2M_DocumentXMLRequestDto  extends IgnisignSealM2M_DocumentRequestDto {

  xmlContent                 : string;

  constructor(xmlContent : string, label? : string){
    super(IGNISIGN_DOCUMENT_TYPE.DATA_XML, null, label, "application/xml");
    this.xmlContent = xmlContent;

    this.documentHash = crypto.createHash('sha256').update(xmlContent).digest('hex');
  }
}

export class IgnisignSealM2M_DocumentJSONRequestDto extends IgnisignSealM2M_DocumentRequestDto {
  
  jsonContent                : any;

  constructor(jsonContent : any, label? : string){
    super(IGNISIGN_DOCUMENT_TYPE.DATA_JSON, null, label, "application/json" );
    this.jsonContent         = jsonContent;
    
    this.documentHash = crypto.createHash('sha256').update(JSON.stringify(jsonContent)).digest('hex');
  }
}

export class IgnisignSealM2M_RequestDto {
  m2mId           : string;
  title          ?: string;
  document        : IgnisignSealM2M_DocumentHashRequestDto | IgnisignSealM2M_DocumentContentRequestDto | IgnisignSealM2M_DocumentXMLRequestDto | IgnisignSealM2M_DocumentJSONRequestDto;
  externalId     ?: string;
  documentHashSignedByM2MPrivateKey : string;
}

export class IgnisignSealM2M_ResponseDto {
  signatureRequestId  : string;
  documentId          : string;
  documentHash        : string;
  proofBase64?        : string;
  proofType          ?: IGNISIGN_SIGNATURE_PROOF_TYPE;
}