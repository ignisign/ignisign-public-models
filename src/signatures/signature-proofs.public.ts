import { IGNISIGN_APPLICATION_TYPE } from "../applications/applications.public";

export enum IGNISIGN_SIGNATURE_PROOF_TYPE {

    // HIGH LEVEL
    PDF_WITH_SIGNATURES      = "PDF_WITH_SIGNATURES",
    PROOF_WEB_PAGE           = "PROOF_WEB_PAGE",
    C2PA                     = "C2PA",
    ADVANCED_LEGAL_KIT       = "ADVANCED_LEGAL_KIT",

    // LOW LEVEL
    XADES                    = "XADES",
    CADES                    = "CADES",
    PKCS7                    = "PKCS7",
    JWS                      = "JWS",    
}
