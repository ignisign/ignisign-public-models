# Users Public Models

## Overview
This directory contains the models and types for user management in the Ignisign platform. These models define user roles, permissions, and invitation workflows.

## Key Components

### User Roles (`users-roles.public.ts`)
- Role definitions
- Permission management
- Access control
- Role hierarchies
- Organization context

### User Invitations (`users-invitations-app.public.ts`)
- Invitation workflow
- Email templates
- Validation rules
- Status tracking
- Organization onboarding

## Integration Points
- Authentication system
- Organization management
- Permission checking
- Email notifications
- User onboarding

## Dependencies
- `class-validator`: For DTO validation
- `auth`: For authentication integration
- `applications`: For app context
- Various internal modules

## Best Practices
1. **Role Management**:
   - Define clear permissions
   - Implement role hierarchies
   - Handle inheritance properly
   - Document access patterns

2. **Invitation Handling**:
   - Validate email formats
   - Set proper expiration
   - Handle retry scenarios
   - Track invitation status

3. **Security**:
   - Validate permissions
   - Secure role changes
   - Audit access changes
   - Monitor suspicious activity

## Common Patterns
- Role-based access control
- Email validation
- Status tracking
- Event notifications

## Files
- `users-roles.public.ts`: Role and permission definitions
- `users-invitations-app.public.ts`: Invitation system implementation

## Common Gotchas
- Role inheritance complexity
- Permission conflicts
- Invitation expiration
- Email delivery issues
- Organization constraints

## Security Considerations
1. **Access Control**:
   - Validate all role changes
   - Implement proper checks
   - Maintain audit logs
   - Handle edge cases

2. **Invitation Security**:
   - Secure token generation
   - Limited-time validity
   - Proper email validation
   - Rate limiting

## Implementation Guide
1. **Role Setup**:
   ```typescript
   import { UserRole } from './users-roles.public';
   const adminRole = new UserRole({
     permissions: ['READ', 'WRITE', 'ADMIN'],
     context: 'ORGANIZATION'
   });
   ```

2. **Invitation Flow**:
   ```typescript
   import { UserInvitation } from './users-invitations-app.public';
   const invitation = new UserInvitation({
     email: 'user@example.com',
     role: 'ADMIN',
     expiration: '24h'
   });
   ``` 