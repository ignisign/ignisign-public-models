# Ignisign Public Models Documentation

## Repository Structure

```
ignisign-public-models/
├── src/
│   ├── _commons/          # Common types and utilities
│   ├── _utils/           # Utility functions and helpers
│   ├── applications/     # Application-related models
│   ├── auth/            # Authentication models
│   ├── documents/       # Document-related models
│   ├── signatures/      # Signature-related models
│   ├── signers/         # Signer-related models
│   └── webhooks/        # Webhook-related models
└── tests/              # Test files
```

## Core Models Documentation

### Common Models
- [Basic Containers](_commons/basic-containers.doc.md)
- [Countries](_commons/countries.doc.md)
- [Error Types](_commons/ignisign-errors.doc.md)
- [Languages](_commons/languages.doc.md)

### Application Models
- [Application Types](applications/applications.doc.md)
- [Application Settings](applications/applications-settings-config.doc.md)

### Document Models
- [Document Content](documents/document-content.doc.md)
- [Document Entities](documents/document-entities.doc.md)
- [Document Seals](documents/document-seal.doc.md)

### Signature Models
- [Signature Profiles](signatures/signature-profiles.doc.md)
- [Signature Methods](signatures/signature-methods.doc.md)
- [Signature Requests](signatures/signature-requests.doc.md)
- [Signatures](signatures/signatures.doc.md)

### Signer Models
- [Signer Claims](signers/signer-claims.doc.md)
- [Signer Profiles](signers/signer-profiles.doc.md)
- [M2M Signing](signers/signer-m2m.doc.md)

## Type System

### Core Types
- eIDAS Levels
- Signature Modes
- Document Types
- Authentication Methods

### Type Safety
- TypeScript Strict Mode
- Required vs Optional Fields
- Union Types Usage
- Type Guards

## Integration Guidelines

### Using the Models
- Import Strategy
- Type Extensions
- Error Handling
- Validation

### Version Compatibility
- Breaking Changes
- Migration Guide
- Version Matrix
- Deprecation Policy

## Development Guidelines

### Adding New Models
1. Model Definition
2. Documentation
3. Tests
4. Migration Guide

### Documentation Standards
- Model Purpose
- Field Descriptions
- Usage Examples
- Security Implications

### Testing Requirements
- Type Tests
- Validation Tests
- Integration Tests
- Migration Tests

## Security Considerations

### Data Validation
- Input Validation
- Type Checking
- Security Constraints
- Data Sanitization

### Sensitive Data
- PII Handling
- Encryption Requirements
- Data Access Patterns
- Audit Requirements

## Related Components
- [API Implementation](../ig-core/packages/ignisign-api)
- [Console Implementation](../ig-core/packages/ignisign-console)
- [PKI Integration](../ignisign-pki) 