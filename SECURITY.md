# Security Policy

## Supported Versions

We actively maintain security updates for the latest major version of @ignisign/public.

| Version | Supported          |
| ------- | ------------------ |
| 4.x.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Do NOT** open a public GitHub issue
2. Email security details to: security@ignisign.io
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

We aim to respond to security reports within 48 hours and will work with you to understand and address the issue promptly.

## Security Considerations for Consumers

This package contains TypeScript model definitions used by IgniSign SDK and client libraries. When using these models:

### 1. Validation
- All DTOs use `class-validator` decorators
- **Always validate** input data before using it with these models
- Enable `class-validator` options:
  - `whitelist: true` - Strip unknown properties
  - `forbidNonWhitelisted: true` - Throw on unknown properties
  - `forbidUnknownValues: true` - Prevent prototype pollution

Example secure validation:
```typescript
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

const dto = plainToClass(IgnisignApiAuth_RequestDto, untrustedInput, {
  excludeExtraneousValues: true,
  enableImplicitConversion: false
});

const errors = await validate(dto, {
  whitelist: true,
  forbidNonWhitelisted: true,
  forbidUnknownValues: true
});

if (errors.length > 0) {
  throw new Error('Validation failed');
}
```

### 2. Sensitive Data Handling
- Fields like `secret`, `clientSecret`, `authSecret` contain sensitive data
- **Never log** these fields in plain text
- **Never commit** real credentials to version control
- Use environment variables or secure vaults for production secrets
- The `displayableSecret` field is intentionally redacted (shows only first/last 4 chars)

### 3. URL Validation
- The `IsUrlOrEmpty` custom validator allows empty strings OR valid URLs
- Be aware that this accepts both values - validate context-specific requirements

### 4. Dependencies
- We maintain security updates for dependencies
- Review the audit section below for current status
- Use `pnpm audit` or `npm audit` to check for vulnerabilities

## Dependency Security

This project uses `resolutions` in package.json to ensure vulnerable transitive dependencies are upgraded:

```json
"resolutions": {
  "validator": ">=13.15.22",
  "minimatch": ">=3.1.4", 
  "brace-expansion": ">=1.1.18",
  "shell-quote": ">=1.9.0",
  "diff": ">=4.0.4"
}
```

These resolutions address:
- CVE-2025-56200, CVE-2025-12758 (validator - XSS, DoS)
- CVE-2026-26996, CVE-2026-27903, CVE-2026-27904 (minimatch - ReDoS)
- CVE-2025-5889, CVE-2026-33750, CVE-2026-13149, CVE-2026-14257, CVE-2026-69152 (brace-expansion - DoS)
- CVE-2026-9277, CVE-2026-13311 (shell-quote - Command injection, DoS)
- CVE-2026-24001 (diff - DoS)

## TypeScript Strict Mode

This project uses TypeScript strict mode (`"strict": true`) to catch potential runtime errors at compile time:
- Prevents implicit `any` types
- Enforces null/undefined checks
- Improves type safety for consumers

## Changelog

### v4.2.2 (Upcoming)
- Enable TypeScript strict mode
- Add dependency security resolutions
- Add SECURITY.md documentation
- Update devDependencies to resolve CVEs

## Additional Resources

- [IgniSign Security Documentation](https://docs.ignisign.io/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
