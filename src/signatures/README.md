# Signatures Public Models

## Overview
This directory contains the core models and types for handling digital signatures in the Ignisign platform. These models define the structure and behavior of signature-related operations, authentication mechanisms, and workflow management.

## Key Components

### Signature Authentication (`signature-auth.public.ts`)
- Nine distinct authentication mechanisms (SIMPLE, PHONE_SMS, PHONE_CALL, etc.)
- Support for 2FA methods including SMS and TOTP
- eID integration for advanced (AES) and qualified (QES) signatures
- SSO support for organization-level authentication
- Extended session handling for continuous signing operations

### Broadcastable Actions (`broadcastable-action.public.ts`)
- Four action types for signature workflow communication
- Type-safe action data structures
- Support for private file handling and URL management
- Error reporting with context
- Signature completion notifications

### Signature Profiles (`signature-profiles.public.ts`)
**Note: Being deprecated in favor of Signer Profiles**
- Environment-specific configuration management
- Authentication method configuration
- Language and localization settings
- Document type restrictions
- Integration mode settings

## Integration Points
- Authentication flows and security levels
- Document handling and verification
- Signature request management
- Profile-based configuration
- Error handling and reporting

## Dependencies
- `class-validator`: DTO validation
- `ignisign-errors.public`: Error code management
- Various internal modules for ID proofing, document handling, etc.

## Best Practices
1. **Authentication**:
   - Match authentication methods to signature level requirements
   - Properly configure phone-based methods
   - Handle extended sessions with care

2. **Action Broadcasting**:
   - Validate URLs before processing
   - Secure private file URLs
   - Handle error contexts appropriately

3. **Profile Management**:
   - Migrate to Signer Profiles for new implementations
   - Explicitly define document types
   - Consider language and localization needs

## Common Gotchas
- SSO requires proper organization setup
- eID methods have specific hardware/software requirements
- Error contexts are untyped (any)
- Profile status is limited to PUBLISHED/ARCHIVED
- Document types must be explicitly defined

## Migration Notes
The signature profiles system is being deprecated in favor of the new signer profiles system. When implementing new features:
1. Use `IgnisignSignerProfile` instead of `IgnisignSignatureProfile`
2. Review deprecated properties and plan migration
3. Consider new signer-centric approach for better flexibility

## Files
- `signatures.public.ts`: Core signature types and structures
- `signature-profiles.public.ts`: Signature configuration profiles
- `signature-requests.public.ts`: Request lifecycle management
- `signature-methods.public.ts`: Signature method definitions
- `signature-auth.public.ts`: Authentication mechanisms
- `broadcastable-action.public.ts`: Process control actions

## Common Patterns
- Enum-based type definitions
- Class-validator decorators
- Status-based workflows
- Hierarchical structures

## Models

### Signatures
[Documentation](signatures.public.doc.md)

### Signature Profiles
[Documentation](signature-profiles.public.doc.md)

### Signature Requests
[Documentation](signature-requests.public.doc.md)

### Signature Methods
[Documentation](signature-methods.public.doc.md)

### Signature Authentication
[Documentation](signature-auth.public.doc.md)

### Broadcastable Actions
[Documentation](broadcastable-action.public.doc.md) 