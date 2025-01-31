# Commons Public Models

## Overview
This directory contains common models and utilities used across the Ignisign platform. These models provide fundamental types, error handling, and standardization for the entire system.

## Key Components

### Basic Containers (`basic-containers.public.ts`)
- Common data structures
- Reusable type definitions
- Generic containers
- Utility types

### Countries (`countries.public.ts`)
- Country code definitions
- Regional settings
- Locale management
- Geographic validations

### Error Handling (`ignisign-errors.public.ts`)
- Error code definitions
- Error type hierarchy
- Error message templates
- Error handling utilities

### Languages (`languages.public.ts`)
- Supported languages
- Localization settings
- Language codes
- Translation helpers

### eIDAS (`eidas.public.ts`)
- eIDAS compliance types
- Trust service definitions
- Certification levels
- Validation requirements

## Integration Points
- Error handling system
- Localization framework
- Geographic validation
- Compliance checking
- Data structure standardization

## Dependencies
- `class-validator`: For validation
- Various internal type systems
- Localization libraries
- Compliance frameworks

## Best Practices
1. **Error Handling**:
   - Use predefined error codes
   - Maintain error hierarchies
   - Implement proper logging
   - Handle internationalization

2. **Data Structures**:
   - Use common containers
   - Follow type guidelines
   - Implement validation
   - Document usage patterns

3. **Compliance**:
   - Follow eIDAS requirements
   - Validate geographic rules
   - Handle regional differences
   - Document compliance needs

## Common Patterns
- Enum-based definitions
- Class-validator decorators
- Error code hierarchies
- Standardized containers

## Files
- `basic-containers.public.ts`: Common data structures
- `countries.public.ts`: Country and region definitions
- `ignisign-errors.public.ts`: Error handling system
- `languages.public.ts`: Language support
- `eidas.public.ts`: eIDAS compliance types

## Common Gotchas
- Error code uniqueness
- Language code standards
- Regional compliance
- Container limitations
- Type safety considerations

## Usage Guide
1. **Error System**:
   ```typescript
   import { IGNISIGN_ERROR_CODES } from './ignisign-errors.public';
   throw new Error(IGNISIGN_ERROR_CODES.INVALID_INPUT);
   ```

2. **Localization**:
   ```typescript
   import { IGNISIGN_LANGUAGES } from './languages.public';
   const userLang: IGNISIGN_LANGUAGES = IGNISIGN_LANGUAGES.EN;
   ```

3. **Containers**:
   ```typescript
   import { BasicContainer } from './basic-containers.public';
   const container = new BasicContainer<string>();
   ``` 