/**
 * Custom Validator Public Model
 * 
 * Provides additional validation decorators extending class-validator functionality. Implements custom
 * validators for array type checking and URL validation with empty string support. These validators
 * enhance the built-in validation capabilities of class-validator.
 * 
 * Key Points:
 * - IsNonPrimitiveArray: Validates arrays containing only objects
 * - IsUrlOrEmpty: Validates URLs while allowing empty strings
 * - Built on class-validator's decorator system
 * - Type-safe implementation with proper metadata
 * 
 * Integration Points:
 * - Used alongside standard class-validator decorators
 * - Applied to class properties via decorators
 * - Works with validation pipes in frameworks
 * - Compatible with class-transformer for serialization
 * 
 * Dependencies:
 * - class-validator: For decorator registration and base validation
 * 
 * Gotchas:
 * - IsNonPrimitiveArray doesn't validate array contents, only structure
 * - Empty string is considered valid in IsUrlOrEmpty validator
 * - Must be used within class-validator's validation system
 * - Requires proper decorator metadata configuration
 * - Validation options are passed through to class-validator
 */

import { registerDecorator, ValidationOptions, ValidationArguments, ValidateBy, isURL } from 'class-validator';

/**
 * Validates that a property is an array containing only non-primitive objects.
 * Arrays of arrays or primitive values will fail validation.
 * 
 * @example
 * ```typescript
 * class Example {
 *   @IsNonPrimitiveArray()
 *   items: object[];
 * }
 * ```
 * 
 * @param validationOptions - Standard class-validator options
 * @returns PropertyDecorator - A decorator function for the property
 */
export function IsNonPrimitiveArray(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsNonPrimitiveArray',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return Array.isArray(value) && value.reduce((a, b) => a && typeof b === 'object' && !Array.isArray(b), true);
        },
      },
    });
  };
}

/**
 * Validates that a property is either a valid URL or an empty string.
 * Uses class-validator's isURL function for URL validation.
 * 
 * @example
 * ```typescript
 * class Example {
 *   @IsUrlOrEmpty()
 *   website?: string;
 * }
 * ```
 * 
 * @param validationOptions - Standard class-validator options
 * @returns PropertyDecorator - A decorator function for the property
 */
export function IsUrlOrEmpty(validationOptions?: ValidationOptions) {
  return ValidateBy({
    name: 'isUrlOrEmpty',
    validator: {
      validate: (value, args): boolean => {
        return typeof value === 'string' && (value === '' || isURL(value));
      },
      defaultMessage: () => `The value must be a valid URL or an empty string`,
    },
  }, validationOptions);
}
