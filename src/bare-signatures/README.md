# Bare Signatures Public Models

## Overview
This directory contains the models and types for bare signature handling in the Ignisign platform. These models define lightweight signature operations without the full workflow overhead, suitable for simple signing needs.

## Key Components

### Bare Signature Management (`bare-signatures.public.ts`)
- Simple signature creation
- Basic validation rules
- Minimal metadata
- Quick verification
- Lightweight processing

### Signature Types
- Basic electronic signatures
- Simple document signatures
- Quick approvals
- Lightweight validations
- Minimal metadata signatures

## Integration Points
- Simple signing flows
- Basic document handling
- Quick verification
- Minimal workflow
- Direct integration

## Dependencies
- `class-validator`: For DTO validation
- `ignisign-errors.public`: For error handling
- `documents`: For basic document handling
- Minimal cryptographic utilities

## Best Practices
1. **Signature Creation**:
   - Validate basic requirements
   - Keep metadata minimal
   - Ensure quick processing
   - Maintain simplicity

2. **Security**:
   - Basic validation checks
   - Simple authenticity proof
   - Minimal audit trail
   - Essential logging

3. **Integration**:
   - Streamlined implementation
   - Quick verification
   - Simple error handling
   - Basic tracking

## Common Patterns
- Minimal validation
- Quick processing
- Simple verification
- Basic tracking

## Files
- `bare-signatures.public.ts`: Core signature definitions
- `bare-validation.public.ts`: Basic validation utilities

## Common Gotchas
- Limited functionality
- Basic validation only
- Minimal audit trail
- Simple security model
- Limited metadata

## Security Considerations
1. **Basic Security**:
   - Simple validation
   - Essential logging
   - Basic authenticity
   - Minimal tracking

2. **Limitations**:
   - No advanced features
   - Basic security model
   - Simple audit trail
   - Limited verification

## Implementation Guide
1. **Simple Signature**:
   ```typescript
   import { BareSignature } from './bare-signatures.public';
   const signature = new BareSignature({
     documentId: 'doc123',
     signerId: 'user456',
     timestamp: Date.now(),
     type: 'BASIC',
     metadata: {
       location: 'Remote',
       device: 'Web Browser'
     }
   });
   ```

2. **Quick Verification**:
   ```typescript
   import { verifyBareSignature } from './bare-validation.public';
   
   async function quickVerify(signatureId: string) {
     try {
       const verified = await verifyBareSignature(signatureId, {
         checkBasics: true,
         requireMetadata: false
       });
       return verified;
     } catch (error) {
       // Handle verification error
     }
   }
   ```

## Usage Guide
1. **When to Use**:
   - Simple signing needs
   - Quick approvals
   - Basic validation
   - Minimal overhead

2. **Limitations**:
   - No advanced features
   - Basic security only
   - Simple audit trail
   - Limited metadata 