/**
 * User Roles Public Model
 * 
 * Defines the basic role types available for users within an Ignisign application. Implements a simple 
 * enum-based role system with three distinct levels of access, providing a clear hierarchy for 
 * permission management.
 * 
 * Key Points:
 * - Three role types: ADMIN (full access), USER (standard access), READER (read-only access)
 * - Enum-based implementation for type safety and validation
 * - Hierarchical access levels with clear boundaries
 * - String-based role values for compatibility and storage
 * 
 * Integration Points:
 * - Used in user management for role assignment and verification
 * - Referenced in permission checks throughout the application
 * - Applied in invitation system for role-based invites
 * - Controls feature access and UI element visibility
 * 
 * Dependencies:
 * - No external dependencies required
 * - Core component used by authentication and authorization systems
 * 
 * Gotchas:
 * - Roles are application-scoped, not platform-wide
 * - Case-sensitive role values (always uppercase)
 * - No default role defined - must be explicitly set
 * - Must match exactly in role comparisons
 * - Cannot be extended without platform updates
 */

export enum IGNISIGN_APPLICATION_ROLES {
  /** Full administrative access with all privileges */
  ADMIN     = "ADMIN",
  /** Standard user access with normal operational privileges */
  USER      = "USER",
  /** Read-only access with limited viewing privileges */
  READER    = "READER", 
}
