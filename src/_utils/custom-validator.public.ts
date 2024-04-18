import { registerDecorator, ValidationOptions, ValidationArguments, ValidateBy, isURL } from 'class-validator';

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
