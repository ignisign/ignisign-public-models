# Log Capsules Public Models

## Overview
This directory contains the models and types for log capsule management in the Ignisign platform. These models define secure, immutable logging structures for audit trails, system events, and operational tracking.

## Key Components

### Log Capsule Management (`log-capsules.public.ts`)
- Capsule creation
- Event recording
- Immutability guarantees
- Timestamp management
- Chain validation

### Capsule Types
- Signature audit logs
- Document processing logs
- Authentication events
- System operations
- Security events

## Integration Points
- Audit trail system
- Compliance reporting
- Security monitoring
- Event tracking
- Legal evidence

## Dependencies
- `class-validator`: For DTO validation
- `ignisign-errors.public`: For error handling
- `technical-tokens`: For security
- Cryptographic utilities

## Best Practices
1. **Capsule Creation**:
   - Include precise timestamps
   - Maintain chain integrity
   - Add sufficient context
   - Ensure completeness

2. **Security**:
   - Cryptographic verification
   - Immutable storage
   - Access control
   - Chain validation

3. **Integration**:
   - Regular validation
   - Proper serialization
   - Efficient querying
   - Retention policies

## Common Patterns
- Immutable records
- Chained integrity
- Timestamp precision
- Event correlation

## Files
- `log-capsules.public.ts`: Core capsule definitions
- `capsule-events.public.ts`: Event type specifications

## Common Gotchas
- Timestamp synchronization
- Chain validation complexity
- Storage requirements
- Query performance
- Retention compliance

## Security Considerations
1. **Data Integrity**:
   - Cryptographic chaining
   - Immutable storage
   - Access logging
   - Validation checks

2. **Compliance**:
   - Retention requirements
   - Access controls
   - Audit capabilities
   - Evidence preservation

## Implementation Guide
1. **Capsule Creation**:
   ```typescript
   import { LogCapsule } from './log-capsules.public';
   const capsule = new LogCapsule({
     type: 'SIGNATURE_AUDIT',
     timestamp: Date.now(),
     data: {
       signatureId: 'sig123',
       action: 'COMPLETED',
       context: {
         documentId: 'doc456',
         userId: 'user789'
       }
     },
     previousHash: 'hash123'
   });
   ```

2. **Event Recording**:
   ```typescript
   import { CapsuleEvent } from './capsule-events.public';
   
   async function recordEvent(event: CapsuleEvent) {
     try {
       const capsule = await createCapsule({
         type: event.type,
         data: event.data,
         metadata: {
           source: 'SYSTEM',
           severity: 'INFO'
         }
       });
       return capsule;
     } catch (error) {
       // Handle recording error
     }
   }
   ```

## Monitoring Guide
1. **Chain Health**:
   - Validate integrity
   - Check completeness
   - Monitor storage
   - Track access patterns

2. **Maintenance**:
   - Regular validation
   - Optimize storage
   - Update retention
   - Review access logs 