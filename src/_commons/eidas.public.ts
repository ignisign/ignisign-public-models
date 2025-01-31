/**
 * eIDAS Public Model
 * 
 * @summary Core definitions for eIDAS signature levels (SES, AES, QES) and their relative weights,
 * used for signature level comparison and validation throughout the platform.
 * 
 * @key_points
 * - Three eIDAS levels implemented: SES (Simple), AES (Advanced), QES (Qualified)
 * - Numerical weights (1,2,3) enable programmatic level comparison
 * - Direct mapping to EU eIDAS regulation signature levels
 * 
 * @integration_points
 * - Used by signature profiles to define minimum required levels
 * - Referenced in signature validation processes
 * - Used in signature creation workflows to enforce level requirements
 * 
 * @gotchas
 * - Weight values are used in comparison logic, changing them impacts validation flows
 * - QES (3) is the highest level and has strict compliance requirements
 * - Level names differ from some eIDAS docs (SES vs Basic) for clarity
 */

/**
 * Enumeration of eIDAS signature levels.
 * Defines the three standard levels of electronic signatures.
 * 
 * @remarks
 * - SES (Simple): Basic electronic signature
 * - AES (Advanced): Enhanced security and signer authentication
 * - QES (Qualified): Highest level with legal equivalence to handwritten signatures
 */
export enum IGNISIGN_EIDAS_LEVEL {
  SES = "SES",
  AES = "AES",
  QES = "QES"
}

/**
 * Numerical weights for eIDAS levels.
 * Used for programmatic comparison of signature levels.
 * 
 * @remarks
 * Higher weights indicate stronger signature levels:
 * - SES: Weight 1 (Basic level)
 * - AES: Weight 2 (Enhanced level)
 * - QES: Weight 3 (Maximum level)
 */
export const IGNISIGN_EIDAS_LEVEL_WEIGHTS = {
  [IGNISIGN_EIDAS_LEVEL.SES]  : 1,
  [IGNISIGN_EIDAS_LEVEL.AES]  : 2,
  [IGNISIGN_EIDAS_LEVEL.QES]  : 3
};  