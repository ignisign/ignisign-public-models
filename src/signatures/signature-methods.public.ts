/**
 * @module Signature Methods Public Model
 * 
 * @description
 * Defines the available signature methods and their relative weights in the Ignisign platform.
 * Implements a hierarchy from simple to qualified signatures with numeric weight values.
 * This model ensures consistent signature level validation across the platform.
 * 
 * @keyPoints
 * - Four signature method types (SIMPLE_STD to QUALIFIED_STD)
 * - Hierarchical weight system (1-4) for validation
 * - Progressive security levels from simple to qualified
 * - Standard and advanced variations available
 * 
 * @integrationPoints
 * - Used in signature level validation flows
 * - Referenced in signature profile configuration
 * - Applied in signature request validation
 * - Controls signature requirement levels
 * 
 * @dependencies
 * - No external dependencies required
 * 
 * @gotchas
 * - Weights are optional in the mapping
 * - Method names must match exactly for validation
 * - No default method is defined - must be specified
 * - Weight affects validation rules and requirements
 * - Higher weights indicate stronger security levels
 */

/**
 * @enum IGNISIGN_SIGNATURE_METHOD_REF
 * @description Available signature methods in the platform.
 * Ordered by increasing security level.
 */
export enum IGNISIGN_SIGNATURE_METHOD_REF {
  /** @member Standard simple signature */
  SIMPLE_STD    = "SIMPLE_STD",
  /** @member SMS-based advanced signature */
  ADVANCED_SMS  = "ADVANCED_SMS",
  /** @member Standard advanced signature */
  ADVANCED_STD  = "ADVANCED_STD",
  /** @member Standard qualified signature */
  QUALIFIED_STD = "QUALIFIED_STD",
}

/**
 * @const IGNISIGN_SIGNATURE_METHODS_WEIGHT
 * @description Weight mapping for signature methods.
 * Higher weights indicate stronger security requirements.
 */
export const IGNISIGN_SIGNATURE_METHODS_WEIGHT : { [key in IGNISIGN_SIGNATURE_METHOD_REF] ?: number } = {
  [IGNISIGN_SIGNATURE_METHOD_REF.SIMPLE_STD]    : 1,  // Basic level
  [IGNISIGN_SIGNATURE_METHOD_REF.ADVANCED_SMS]  : 2,  // SMS verification
  [IGNISIGN_SIGNATURE_METHOD_REF.ADVANCED_STD]  : 3,  // Advanced security
  [IGNISIGN_SIGNATURE_METHOD_REF.QUALIFIED_STD] : 4,  // Highest security
}
