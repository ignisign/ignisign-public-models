import { IGNISIGN_SIGNER_ENTITY_TYPE } from "./signers.public";





export class SignerGroup {
  _id         : string;
  name        : string;
  description : string;
  signerTypeAllowed : IGNISIGN_SIGNER_ENTITY_TYPE[];
  isEmailManagedByIgnisign : boolean; // => mode ultime: => une gestion par EMAIL_TEMPLATE_ID => (avec des groups)
  isRecurrent : boolean;

  

  signerGroup_Identification_And_AuthenticationConfig : string;
}

export class Signer_To_SignerGroup { 
  signerId      : string;
  signerGroupId : string;
}




