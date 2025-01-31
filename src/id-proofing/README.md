# ID Proofing Public Models

## Overview
This directory contains the models and types for identity proofing in the Ignisign platform. These models are essential for verifying signer identities and ensuring compliance with various signature levels (Simple, AES, QES).

## Key Components

### ID Proofing Methods
- Multiple verification methods support
- eID integration for qualified signatures
- Phone number verification
- Email verification
- Document-based verification
- Video identification support

### Integration Points
- Signature profile configuration
- Signer profile requirements
- Authentication flow integration
- Compliance verification
- Audit trail generation

## Dependencies
- `class-validator`: For DTO validation
- `signature-auth.public`: Authentication mechanisms
- `signers.public`: Signer entities
- Various identity provider integrations

## Best Practices
1. **Method Selection**:
   - Choose methods based on signature level requirements
   - Consider regulatory compliance needs
   - Balance security with user experience
   - Plan for fallback verification methods

2. **Integration**:
   - Properly configure identity providers
   - Handle verification timeouts
   - Implement retry mechanisms
   - Store verification evidence securely

3. **Compliance**:
   - Document verification processes
   - Maintain audit trails
   - Handle personal data according to regulations
   - Implement proper data retention policies

## Common Gotchas
- eID methods require specific hardware/software
- Video identification has time limitations
- Some methods are region-specific
- Verification evidence must be stored securely
- Methods must match signature level requirements

## Security Considerations
1. **Data Protection**:
   - Encrypt sensitive verification data
   - Implement proper access controls
   - Follow data minimization principles
   - Handle biometric data with care

2. **Process Security**:
   - Validate all verification responses
   - Implement anti-fraud measures
   - Monitor for suspicious patterns
   - Regular security audits

## Compliance Requirements
- eIDAS compliance for qualified signatures
- GDPR compliance for personal data
- Local regulatory requirements
- Industry-specific standards

## Integration Guide
1. **Setup**:
   - Configure identity providers
   - Set up verification workflows
   - Implement evidence storage
   - Configure audit logging

2. **Testing**:
   - Test all verification methods
   - Validate error handling
   - Check compliance requirements
   - Verify audit trail generation

3. **Monitoring**:
   - Track verification success rates
   - Monitor provider availability
   - Check verification times
   - Audit security events 