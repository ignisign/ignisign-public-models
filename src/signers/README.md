# Signers Public Models

## Overview
This directory contains the models and types for managing signers in the Ignisign platform. The signer profiles system is becoming the central configuration point for signature processes, replacing the older signature profiles system.

## Key Components

### Signer Profiles
- Comprehensive configuration for signature processes
- Authentication method management
- Domain-based restrictions
- Recurrent signing capabilities
- 2FA delegation options
- Version tracking for profile changes

### Integration Points
- Authentication flow configuration
- SSO integration setup
- Email verification processes
- Profile status management
- Signer restrictions enforcement
- Batch signer operations

## Dependencies
- `class-validator`: For DTO validation
- `signature-methods.public`: Signature types
- `applications.public`: Environment types
- `signers.public`: Signer entities
- `id-proofing.public`: Verification methods

## Best Practices
1. **Profile Configuration**:
   - Define clear authentication requirements
   - Set appropriate domain restrictions
   - Configure proper verification methods
   - Enable necessary features explicitly

2. **Version Management**:
   - Track profile versions
   - Handle profile updates carefully
   - Maintain backward compatibility

3. **Integration**:
   - Validate domain restrictions
   - Handle email verification properly
   - Configure SSO with organization settings

## Common Gotchas
- SSO configuration requires organization setup
- Email verification affects signature flow
- Integration mode impacts available features
- Auth methods must match signature requirements
- Domain restrictions need careful management
- Profile versioning is mandatory

## Migration Guide
When migrating from signature profiles:
1. Review existing signature profile configurations
2. Map authentication methods to new structure
3. Configure domain restrictions if needed
4. Set up email verification requirements
5. Enable/disable features as needed
6. Test all authentication flows

## Security Considerations
- Properly configure authentication methods
- Validate domain restrictions
- Handle 2FA delegation securely
- Manage SSO integration carefully
- Monitor profile version changes

## Common Patterns
1. Status-based lifecycle management
2. Extensive validation using class-validator
3. Hierarchical authentication methods
4. Cryptographic proof generation
5. Flexible document type support

## Integration Points
- Authentication flows
- Identity verification
- Document signing processes
- M2M automation
- Profile-based authorization

## Dependencies
- class-validator
- crypto (for M2M operations)
- Application environment configuration
- Document type definitions
- Signature method specifications

## Documentation Links
- [Core Signatures](../signatures/README.md)
- [ID Proofing](../id-proofing/README.md)
- [Applications](../applications/README.md)

## Gotchas
1. M2M operations require proper key management
2. Claim verification status affects available operations
3. Profile configuration impacts authentication flow
4. SSO integration needs specific organization setup
5. Some claim types are environment-specific 