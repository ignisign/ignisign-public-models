/**
 * @module Signatures Public Model
 * 
 * @description
 * Defines the core signature types and structures in the Ignisign platform.
 * Implements signature modes, proof types, statuses, and metadata handling with comprehensive validation.
 * This model is fundamental to all signature operations in the platform.
 * 
 * @keyPoints
 * - Multiple signature modes (SERVER_SIDE, CLIENT_SIDE)
 * - Various proof processing modes and types
 * - Extensive low-level proof type support
 * - Three-state signature status tracking
 * - Rich metadata support for signatures
 * 
 * @integrationPoints
 * - Used in signature creation and validation flows
 * - Referenced in proof generation and processing
 * - Applied in signature metadata handling
 * - Controls signature workflow and states
 * 
 * @dependencies
 * - eidas.public: For eIDAS compliance levels
 * - applications.public: For app types and settings
 * 
 * @gotchas
 * - Some proof types are not yet implemented (C2PA)
 * - OCSP check value is untyped (any)
 * - Multiple signatures per document are supported
 * - Integration mode affects behavior and validation
 * - Careful handling of signature timestamps required
 */

import { IGNISIGN_EIDAS_LEVEL } from "../_commons/eidas.public";
import { CustomPalette, IgnisignApplication_VariationColor } from "../applications/applications-settings-config.public";
import { IGNISIGN_APPLICATION_ENV, IGNISIGN_APPLICATION_TYPE } from "../applications/applications.public";

/** @const Public fields available for signature entities */
export const IGNISIGN_SIGNATURE_PUBLIC_FIELDS = ['_id', 'appId', 'signerId', 'signerKeyId', 'documentId', 'mode', 'status', 'signature', 'contentHash', 'signatureValue', 'signedPropertiesHash', 'signingTime', 'signingIp', 'certificate', ];

/**
 * @enum IGNISIGN_SIGNATURE_MODE
 * @description Available signature creation modes.
 */
export enum IGNISIGN_SIGNATURE_MODE {
  /** Server-side signature generation */
  SERVER_SIDE_SIGNATURE = "SERVER_SIDE_SIGNATURE",
  /** Client-side signature generation */
  CLIENT_SIDE_SIGNATURE = "CLIENT_SIDE_SIGNATURE",
}

/**
 * @enum IGNISIGN_SIGNATURE_PROOF_PROCESSING_MODE
 * @description Supported proof processing mechanisms.
 */
export enum IGNISIGN_SIGNATURE_PROOF_PROCESSING_MODE {
  /** Standard document signature */
  DOCUMENT_SIGNATURE     = "DOCUMENT_SIGNATURE",
  /** Verifiable credential generation */
  VERIFIABLE_CREDENTIAL  = "VERIFIABLE_CREDENTIAL",
  /** Content authenticity proof (not implemented) */
  C2PA                   = "C2PA",
  /** Raw data signature */
  DATA_SIGNATURE         = "DATA_SIGNATURE",
}

/**
 * @const AVAILABLE_SIGNATURE_PROOF_PROCESSING_MODES
 * @description Currently implemented proof processing modes.
 */
export const AVAILABLE_SIGNATURE_PROOF_PROCESSING_MODES = [
  IGNISIGN_SIGNATURE_PROOF_PROCESSING_MODE.DOCUMENT_SIGNATURE,
  IGNISIGN_SIGNATURE_PROOF_PROCESSING_MODE.DATA_SIGNATURE,
];

/**
 * @enum IGNISIGN_SIGNATURE_PROOF_TYPE
 * @description High-level signature proof types.
 */
export enum IGNISIGN_SIGNATURE_PROOF_TYPE {
  /** PDF with embedded signatures */
  PDF_WITH_SIGNATURES = "PDF_WITH_SIGNATURES",
  /** Comprehensive legal proof package */
  ADVANCED_LEGAL_KIT  = "ADVANCED_LEGAL_KIT",
  /** Raw signed data */
  SIGNED_DATA        = "SIGNED_DATA",
  /** Content authenticity proof (pending) */
  C2PA              = "C2PA", // NOT YET IMPLEMENTED
}

/**
 * @enum IGNISIGN_SIGNATURE_LOW_LEVEL_PROOF_TYPE
 * @description Technical signature formats and standards.
 */
export enum IGNISIGN_SIGNATURE_LOW_LEVEL_PROOF_TYPE {
  /** CAdES (CMS Advanced Electronic Signatures) */
  CADES          = "CADES",
  /** PKCS#7 signature format */
  PKCS7          = "PKCS7",
  /** PAdES (PDF Advanced Electronic Signatures) */
  PADES_ATTACHED = "PADES_ATTACHED",

  /** Detached JSON Web Signature (planned) */
  JWS_DETACHED   = "JWSDET",    // Not yet implemented
  /** Attached JSON Web Signature */
  JWS_ATTACHED   = "JWSATT",
  /** Detached JSON Advanced Electronic Signature */
  JADES_DETACHED = "JADESDET",
  /** Attached JSON Advanced Electronic Signature */
  JADES_ATTACHED = "JADESATT",
  
  /** Detached XML Advanced Electronic Signature */
  XADES_DETACHED = "XADESDET",
  /** Attached XML Advanced Electronic Signature */
  XADES_ATTACHED = "XADESATT",
  /** Detached XML Digital Signature */
  XMLDSIG_DETACHED = "XMLDSIGDET",
  /** Attached XML Digital Signature */
  XMLDSIG_ATTACHED = "XMLDSIGATT",
}

/**
 * @enum IGNISIGN_SIGNATURE_STATUS
 * @description Possible states of a signature.
 */
export enum IGNISIGN_SIGNATURE_STATUS {
  /** Initial state */
  INIT   = 'INIT',
  /** Successfully signed */
  SIGNED = 'SIGNED',
  /** Signature failed */
  FAILED = 'FAILED',
}

/**
 * @enum IGNISIGN_INTEGRATION_MODE
 * @description Available integration methods.
 */
export enum IGNISIGN_INTEGRATION_MODE {
  /** Side-by-side integration */
  BY_SIDE            = "BY_SIDE",
  /** Embedded in application */
  EMBEDDED           = "EMBEDDED",
  /** Machine-to-machine integration */
  MACHINE_TO_MACHINE = "MACHINE_TO_MACHINE",
}

/**
 * @class IgnisignSignature
 * @description Core signature entity with comprehensive metadata.
 */
export class IgnisignSignature {
  /** @property MongoDB document ID */
  _id                   ?: string;
  /** @property Associated application */
  appId                  : string;
  /** @property Application environment */
  appEnv                 : IGNISIGN_APPLICATION_ENV;
  /** @property Signer identifier */
  signerId               : string;
  /** @property Signing key identifier */
  signerKeyId            : string;
  /** @property Signature session ID */
  sessionId             ?: string;
  /** @property Associated document */
  documentId             : string;
  /** @property Content hash value */
  contentHash           ?: string;
  /** @property Current status */
  status                 : IGNISIGN_SIGNATURE_STATUS;
  /** @property Signature mode used */
  mode                   : IGNISIGN_SIGNATURE_MODE;
  /** @property OCSP validation data */
  ocspCheckValue        ?: any;
  /** @property Signing IP address */
  signingIp             ?: string;
  /** @property eIDAS compliance level */
  eidasLevel?            : IGNISIGN_EIDAS_LEVEL;
  /** @property Signature reason */
  reasonLabel           ?: string;
  /** @property Signer contact info */
  contactInfoLabel      ?: string;
  /** @property Signing location */
  locationLabel         ?: string;
  /** @property Signer display name */
  signerNameLabel       ?: string;
  /** @property Generated signatures */
  signatures             : { type: IGNISIGN_SIGNATURE_LOW_LEVEL_PROOF_TYPE; signatureFilePath: string; signingTime: Date; }[];
}

/**
 * @class IgnisignApplication_SignatureMetadata
 * @description Application-specific signature configuration.
 */
export class IgnisignApplication_SignatureMetadata {
  /** @property Application identifier */
  appId           : string;
  /** @property Application environment */
  appEnv          : IGNISIGN_APPLICATION_ENV;
  /** @property Application name */
  appName         : string;
  /** @property Organization name */
  orgName         ?: string;
  /** @property Application type */
  appType         : IGNISIGN_APPLICATION_TYPE;
  /** @property Base64 logo */
  logoB64        ?: string;
  /** @property Base64 dark mode logo */
  logoDarkB64    ?: string;
  /** @property UI color scheme */
  colors         ?: CustomPalette;
}

/**
 * @class IgnisignSignatureImages_Dto
 * @description DTO for signature image handling.
 */
export class IgnisignSignatureImages_Dto {
  /** @property Associated document */
  documentId : string;
  /** @property Signature images by signer */
  signatures : { signerId: string, imgB64: string }[];
}

/**
 * @class IgnisignDocumentSignatureProof_CustomizationDto
 * @description DTO for signature proof customization.
 */
export class IgnisignDocumentSignatureProof_CustomizationDto {
  /** @property Custom HTML content */
  html : string;
}
