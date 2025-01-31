# Documents Public Models

## Overview
This directory contains the models and types for document handling in the Ignisign platform. These models define document types, metadata, and processing requirements for signature operations.

## Key Components

### Document Types
- PDF documents
- XML documents
- JSON documents
- Plain text documents
- Support for custom document types

### Document Processing
- Document validation
- Metadata extraction
- Hash generation
- Size and format validation
- Version control

## Files
- `document-content.public.ts`: Content creation and handling
- `document-entities.public.ts`: Core document types and entities
- `document-seal.public.ts`: Document sealing operations

## Integration Points
- Signature request creation
- Document verification
- Template management
- Audit trail generation
- Archive management

## Dependencies
- `class-validator`: For DTO validation
- `signature-methods.public`: For signature type compatibility
- `technical-tokens`: For document access control
- Various document processing libraries

## Best Practices
1. **Document Handling**:
   - Validate document formats before processing
   - Handle large files appropriately
   - Implement proper error handling
   - Maintain document versioning

2. **Security**:
   - Secure document storage
   - Implement access controls
   - Track document modifications
   - Handle sensitive content appropriately

3. **Integration**:
   - Proper error handling for invalid documents
   - Implement retry mechanisms for processing
   - Cache document metadata when appropriate
   - Handle document lifecycle events

## Common Gotchas
- File size limitations
- Format compatibility issues
- Processing timeout handling
- Version control conflicts
- Access token expiration

## Security Considerations
1. **Access Control**:
   - Implement proper authorization
   - Handle temporary access tokens
   - Track document access
   - Secure storage implementation

2. **Data Protection**:
   - Encrypt sensitive documents
   - Implement secure deletion
   - Handle personal data appropriately
   - Maintain access logs

## Compliance Requirements
- GDPR compliance for personal data
- Industry-specific retention rules
- Audit trail requirements
- Secure storage standards

## Integration Guide
1. **Document Upload**:
   - Validate format and size
   - Generate metadata
   - Create access tokens
   - Handle processing errors

2. **Processing**:
   - Implement validation checks
   - Handle document conversion
   - Generate preview versions
   - Track processing status

3. **Storage**:
   - Implement secure storage
   - Handle versioning
   - Manage access controls
   - Configure retention policies

## Common Patterns
- Class-validator decorators
- Enum-based type definitions
- MongoDB ID validation
- Content type handling

## Models

### Document Content
[Documentation](document-content.public.doc.md)

### Document Entities
[Documentation](document-entities.public.doc.md)

### Document Seal
[Documentation](document-seal.public.doc.md) 