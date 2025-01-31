# Applications Public Model

## Summary
Defines the core application model for the Ignisign platform. Implements application types, environments, and statuses, along with the base application class and its context extension.

## Key Points
- Supports multiple application types (SIGNATURE, SEAL, etc.)
- Defines three environments (DEV, STAGING, PROD)
- Implements application lifecycle states
- Uses API versioning (V3, V4)

## Integration
- Referenced in application creation/management
- Used for environment-specific settings
- Linked to signature and signer profiles
- Core part of organization structure

## Gotchas
- Some application types are hidden (IGNISIGN_RIGHT_DELEGATION)
- signatureProfiles is deprecated
- isDefaultApplication defaults to false
- Environment settings are optional per environment 