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

/**
 * Signer M2M (Machine-to-Machine) Public Model
 * 
 * @summary Defines structures and operations for machine-to-machine signature processes,
 * enabling automated document signing and sealing with cryptographic verification.
 * 
 * @key_points
 * - Supports multiple document types (PDF, XML, JSON)
 * - Implements cryptographic verification
 * - Manages M2M signer lifecycle
 * - Handles document sealing and proofs
 * - Supports various content formats
 * 
 * @integration_points
 * - Document sealing operations
 * - Cryptographic verification
 * - Proof generation and validation
 * - Content hash verification
 * - Response handling
 * 
 * @gotchas
 * - Key management is critical
 * - Hash verification must be exact
 * - Content encoding matters
 * - Proof types vary by document
 * - Status affects available operations
 */

/**
 * Core M2M signer entity with cryptographic capabilities.
 * Manages key pairs and signature operations.
 */
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

/**
 * Base class for document sealing requests.
 * Handles common document properties and hashing.
 */
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

/**
 * Specialized request for hash-based document sealing.
 * Used when document content is external.
 */
export class IgnisignSealM2M_DocumentHashRequestDto extends IgnisignSealM2M_DocumentRequestDto {
  constructor(documentHash : string, label? : string, mimeType? : string){
    super(IGNISIGN_DOCUMENT_TYPE.PRIVATE_FILE, documentHash, label, mimeType);
  }
}

/**
 * Handles binary content document sealing.
 * Supports PDF and general file types.
 */
export class IgnisignSealM2M_DocumentContentRequestDto extends IgnisignSealM2M_DocumentRequestDto {
  
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

/**
 * Specialized handling for XML document sealing.
 * Includes XML-specific content processing.
 */
export class IgnisignSealM2M_DocumentXMLRequestDto extends IgnisignSealM2M_DocumentRequestDto {

  xmlContent                 : string;

  constructor(xmlContent : string, label? : string){
    super(IGNISIGN_DOCUMENT_TYPE.DATA_XML, null, label, "application/xml");
    this.xmlContent = xmlContent;

    this.documentHash = crypto.createHash('sha256').update(xmlContent).digest('hex');
  }
}

/**
 * Specialized handling for JSON document sealing.
 * Includes JSON-specific content processing.
 */
export class IgnisignSealM2M_DocumentJSONRequestDto extends IgnisignSealM2M_DocumentRequestDto {
  
  jsonContent                : any;

  constructor(jsonContent : any, label? : string){
    super(IGNISIGN_DOCUMENT_TYPE.DATA_JSON, null, label, "application/json" );
    this.jsonContent         = jsonContent;
    
    this.documentHash = crypto.createHash('sha256').update(JSON.stringify(jsonContent)).digest('hex');
  }
}

/**
 * Complete M2M sealing request with verification.
 * Combines document and cryptographic proof.
 */
export class IgnisignSealM2M_RequestDto {
  m2mId           : string;
  title          ?: string;
  document        : IgnisignSealM2M_DocumentHashRequestDto | IgnisignSealM2M_DocumentContentRequestDto | IgnisignSealM2M_DocumentXMLRequestDto | IgnisignSealM2M_DocumentJSONRequestDto;
  externalId     ?: string;
  documentHashSignedByM2MPrivateKey : string;
}

/**
 * Response containing seal results and proofs.
 * Provides verification materials and references.
 */
export class IgnisignSealM2M_ResponseDto {
  signatureRequestId  : string;
  documentId          : string;
  documentHash        : string;
  proofBase64?        : string;
  proofType          ?: IGNISIGN_SIGNATURE_PROOF_TYPE;
}