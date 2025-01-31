# Webhooks Public Models

## Overview
This directory contains the models and types for webhook handling in the Ignisign platform. These models define webhook configurations, event types, and delivery mechanisms.

## Key Components

### Webhook Configuration (`webhooks.public.ts`)
- Event type definitions
- Delivery settings
- Retry policies
- Security configurations
- Response handling

### Event Types
- Signature events
- Document events
- User events
- System events
- Error events

## Integration Points
- Event delivery system
- Security validation
- Retry mechanism
- Error handling
- Monitoring system

## Dependencies
- `class-validator`: For DTO validation
- `ignisign-errors.public`: For error handling
- `technical-tokens`: For security
- Various internal event types

## Best Practices
1. **Configuration**:
   - Set appropriate timeouts
   - Configure retry policies
   - Implement proper validation
   - Handle failures gracefully

2. **Security**:
   - Validate webhook URLs
   - Implement signature verification
   - Use HTTPS endpoints
   - Monitor delivery status

3. **Event Handling**:
   - Process events asynchronously
   - Implement idempotency
   - Handle out-of-order delivery
   - Maintain event logs

## Common Patterns
- Event-driven architecture
- Retry mechanisms
- Security validation
- Error handling

## Files
- `webhooks.public.ts`: Core webhook definitions and types
- `webhook-events.public.ts`: Event type definitions

## Common Gotchas
- Timeout handling
- Network failures
- Event ordering
- Duplicate deliveries
- Security validation failures

## Security Considerations
1. **Endpoint Security**:
   - HTTPS requirement
   - Signature verification
   - IP whitelisting
   - Rate limiting

2. **Data Protection**:
   - Sensitive data handling
   - Event data encryption
   - Access control
   - Audit logging

## Implementation Guide
1. **Webhook Setup**:
   ```typescript
   import { WebhookConfig } from './webhooks.public';
   const config = new WebhookConfig({
     url: 'https://api.example.com/webhooks',
     events: ['SIGNATURE_COMPLETED', 'DOCUMENT_UPLOADED'],
     retryPolicy: {
       maxAttempts: 3,
       backoff: 'exponential'
     }
   });
   ```

2. **Event Handling**:
   ```typescript
   import { WebhookEvent } from './webhook-events.public';
   
   function handleWebhookEvent(event: WebhookEvent) {
     switch (event.type) {
       case 'SIGNATURE_COMPLETED':
         // Handle signature completion
         break;
       case 'DOCUMENT_UPLOADED':
         // Handle document upload
         break;
     }
   }
   ```

## Monitoring Guide
1. **Health Checks**:
   - Monitor delivery rates
   - Track failure patterns
   - Check response times
   - Analyze retry rates

2. **Maintenance**:
   - Regular URL validation
   - Security audit
   - Performance optimization
   - Log rotation 