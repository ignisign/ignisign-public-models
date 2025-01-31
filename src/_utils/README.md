# Utilities Public Models

## Overview
This directory contains utility models and helper functions used across the Ignisign platform. These utilities provide common functionality and validation tools.

## Key Components

### Custom Validators (`custom-validator.public.ts`)
- Custom validation decorators
- Common validation patterns
- Type checking utilities
- Format validation helpers

## Integration Points
- Model validation
- Data type checking
- Format verification
- Error handling support

## Dependencies
- `class-validator`: For core validation functionality
- `class-transformer`: For object transformation
- Various internal type definitions

## Best Practices
1. **Validation Usage**:
   - Use appropriate decorators
   - Handle validation errors gracefully
   - Implement custom validators when needed
   - Document validation rules

2. **Type Safety**:
   - Maintain strict type checking
   - Use TypeScript features effectively
   - Document type constraints
   - Handle edge cases

## Common Patterns
- Decorator-based validation
- Type-safe implementations
- Error handling utilities
- Common format validators

## Files
- `custom-validator.public.ts`: Custom validation utilities and decorators

## Usage Examples
```typescript
// Using custom validators
@IsValidFormat()
format: string;

@IsCustomType()
type: CustomType;

// Implementing validation
const errors = await validate(instance);
```

## Common Gotchas
- Validation timing considerations
- Type inference limitations
- Decorator execution order
- Error message formatting

## Integration Guide
1. **Setup**:
   - Import required validators
   - Configure validation options
   - Set up error handling
   - Define custom rules

2. **Implementation**:
   - Apply appropriate decorators
   - Handle validation results
   - Implement error handling
   - Document usage patterns 