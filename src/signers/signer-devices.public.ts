import { IGNISIGN_APPLICATION_ENV } from "../applications/applications.public";
import { IGNISIGN_SIGNER_KEY_STATUS } from "./signer-keys.public";

export enum IGNISIGN_SIGNER_KEY_DEVICE_TYPES {
  IOS     = "IOS",
  ANDROID = "ANDROID"
}

export class IgnisignSignerDevice {
  _id?            : string;
  appId           : string;
  appEnv          : IGNISIGN_APPLICATION_ENV;
  signerId        : string;
  status          : IGNISIGN_SIGNER_KEY_STATUS;
  signerKeyId     : string;
  uuidAuthBCrypt  : string; //
  deviceType      : IGNISIGN_SIGNER_KEY_DEVICE_TYPES;
  deviceId?       : string;
}

export class IgnisignSigner_AssociateDevice_RequestDto {
  devicePubKey            : string;
  deviceId                : string;
  uuidAuth                : string;
  deviceType              : string;
  signedChallenge         : string;
  submissionToken         : string;
  // currentUuidAuth?        : string;
}

export class IgnisignSigner_AssociateDevice_ResponseDto {
  signerId      : string;
  phoneKeyId    : string;
}

// export class IgnisignSigner_MobileAuthentication_ResponseDto {
//   signerId          : string;
//   isAuthenticated  : boolean;
// }