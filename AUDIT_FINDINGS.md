# Security Audit Findings - IgniSign Public Models

**Audit Date:** 2026-09-15  
**Repository:** ignisign/ignisign-public-models  
**Scope:** Defensive security hardening only

---

## Executive Summary

This security audit identified and resolved **13 dependency vulnerabilities** (1 critical, 8 high, 2 moderate, 2 low) and **2 configuration weaknesses**. All findings have been addressed with minimal, backward-compatible changes.

**Total Issues Fixed:** 15  
**Breaking Changes:** None  
**API Changes:** None

---

## Findings by Severity

### CRITICAL (1)

#### 1. shell-quote Command Injection (CVE-2026-9277)
- **Severity:** CRITICAL (CVSS 8.1)
- **Component:** shell-quote@1.8.2 (devDependency via npm-run-all)
- **Impact:** Shell command injection through `.op` values containing newlines
- **Fix:** Upgraded to shell-quote@1.9.0 via package.json resolutions
- **Status:** ✅ RESOLVED

---

### HIGH (8)

#### 2. validator.js Length Validation Bypass (CVE-2025-12758)
- **Severity:** HIGH (CVSS 7.5)
- **Component:** validator@13.15.0 (transitive via class-validator)
- **Impact:** DoS via Unicode variation selectors in `isLength()`
- **Fix:** Upgraded to validator@13.15.22 via package.json resolutions
- **Status:** ✅ RESOLVED

#### 3-5. minimatch ReDoS Vulnerabilities (CVE-2026-26996, CVE-2026-27903, CVE-2026-27904)
- **Severity:** HIGH (CVSS 7.5)
- **Component:** minimatch@3.1.2 (devDependency via npm-run-all)
- **Impact:** Regular Expression Denial of Service
- **Fix:** Upgraded to minimatch@3.1.4 via package.json resolutions
- **Status:** ✅ RESOLVED

#### 6-8. brace-expansion DoS Vulnerabilities (CVE-2026-13149, CVE-2026-14257, CVE-2026-69152)
- **Severity:** HIGH (CVSS 5.3-7.5)
- **Component:** brace-expansion@1.1.11 (transitive via minimatch)
- **Impact:** Exponential-time expansion and memory exhaustion DoS
- **Fix:** Upgraded to brace-expansion@1.1.18 via package.json resolutions
- **Status:** ✅ RESOLVED

#### 9. shell-quote Quadratic Complexity DoS (CVE-2026-13311)
- **Severity:** HIGH (CVSS 7.5)
- **Component:** shell-quote@1.8.2 (devDependency via npm-run-all)
- **Impact:** O(n²) parse() performance causing event loop starvation
- **Fix:** Upgraded to shell-quote@1.9.0 via package.json resolutions
- **Status:** ✅ RESOLVED

---

### MODERATE (2)

#### 10. validator.js URL Validation Bypass (CVE-2025-56200)
- **Severity:** MODERATE (CVSS 6.1)
- **Component:** validator@13.15.0 (transitive via class-validator)
- **Impact:** XSS and Open Redirect via protocol delimiter parsing difference
- **Fix:** Upgraded to validator@13.15.22 via package.json resolutions
- **Status:** ✅ RESOLVED

#### 11. brace-expansion Zero-step Sequence DoS (CVE-2026-33750)
- **Severity:** MODERATE (CVSS 6.5)
- **Component:** brace-expansion@1.1.11 (transitive via minimatch)
- **Impact:** Process hang and memory exhaustion from {1..2..0} patterns
- **Fix:** Upgraded to brace-expansion@1.1.18 via package.json resolutions
- **Status:** ✅ RESOLVED

---

### LOW (2)

#### 12. brace-expansion ReDoS (CVE-2025-5889)
- **Severity:** LOW (CVSS 3.1)
- **Component:** brace-expansion@1.1.11 (transitive via minimatch)
- **Impact:** Inefficient regex complexity
- **Fix:** Upgraded to brace-expansion@1.1.18 via package.json resolutions
- **Status:** ✅ RESOLVED

#### 13. diff parsePatch DoS (CVE-2026-24001)
- **Severity:** LOW
- **Component:** diff@4.0.2 (transitive via ts-node)
- **Impact:** Infinite loop in parsePatch with crafted line breaks
- **Fix:** Upgraded to diff@4.0.4 via package.json resolutions
- **Status:** ✅ RESOLVED

---

## Configuration Weaknesses

### 14. TypeScript Strict Mode Disabled
- **Severity:** MEDIUM
- **Component:** tsconfig.json
- **Impact:** Reduces type safety, allows implicit any, null/undefined unsafety
- **Fix:** Enabled `"strict": true` and fixed 3 null-handling type errors
- **Status:** ✅ RESOLVED
- **Files Changed:** tsconfig.json, src/signers/signer-m2m.public.ts

### 15. Outdated Development Dependencies
- **Severity:** LOW
- **Component:** package.json devDependencies
- **Impact:** Using EOL versions with known issues
- **Fix:** Updated ts-node (8.6.2 → 10.9.2), tslib (1.9.3 → 2.8.1)
- **Status:** ✅ RESOLVED

---

## Items NOT Addressed (with rationale)

### 1. Prototype Pollution Risk in class-transformer
- **Finding:** No use of `excludeExtraneousValues` option
- **Risk:** Potential for prototype pollution if untrusted objects are transformed
- **Rationale:** This is a **consumer responsibility**. The models library defines types; validation configuration must be set by the consuming application. Added comprehensive guidance in SECURITY.md.
- **Recommendation:** Document in SECURITY.md (✅ DONE)

### 2. Sensitive Field Logging
- **Finding:** Fields like `secret`, `clientSecret`, `authSecret` exist in models
- **Risk:** These could be logged if consumers serialize objects
- **Rationale:** No logging code exists in this models-only library. This is a **consumer implementation concern**.
- **Recommendation:** Document in SECURITY.md (✅ DONE)

### 3. Optional Validation on Sensitive Fields
- **Finding:** `@IsOptional()` decorator used on `clientSecret`, `secret` fields
- **Risk:** These fields might not be required in all contexts
- **Rationale:** The models support multiple use cases. Consumers must validate required fields per their context. Changing this would be a **breaking API change** without clear security benefit.
- **Recommendation:** Document secure validation patterns in SECURITY.md (✅ DONE)

---

## Verification Steps

All fixes have been verified:

1. ✅ Build succeeds with TypeScript strict mode
   ```bash
   pnpm build
   # Output: No errors
   ```

2. ✅ All dependency vulnerabilities resolved
   ```bash
   pnpm audit
   # Output: No known vulnerabilities found
   ```

3. ✅ Type errors fixed
   - Fixed 3 null-assignment errors in signer-m2m.public.ts
   - All existing functionality preserved

4. ✅ No breaking changes
   - Public API unchanged
   - All model definitions unchanged
   - Only internal null-handling improved

---

## Deliverables

1. ✅ **SECURITY.md** - Comprehensive security documentation
2. ✅ **package.json** - Dependency resolutions + devDependency updates
3. ✅ **tsconfig.json** - Strict mode enabled
4. ✅ **signer-m2m.public.ts** - Type-safety fixes
5. ✅ **This audit report** (AUDIT_FINDINGS.md)

---

## Recommendations for Consumers

Consuming applications (@ignisign/sdk, @ignisign/js) should:

1. **Enable validation guards:**
   ```typescript
   validate(dto, {
     whitelist: true,
     forbidNonWhitelisted: true,
     forbidUnknownValues: true
   })
   ```

2. **Use class-transformer securely:**
   ```typescript
   plainToClass(Dto, input, {
     excludeExtraneousValues: true,
     enableImplicitConversion: false
   })
   ```

3. **Never log sensitive fields** like `secret`, `clientSecret`, `authSecret`, `displayableSecret`

4. **Review SECURITY.md** for complete guidance

---

## CVE Reference Links

- CVE-2026-9277: https://github.com/advisories/GHSA-w7jw-789q-3m8p
- CVE-2026-13311: https://github.com/advisories/GHSA-395f-4hp3-45gv
- CVE-2025-56200: https://github.com/advisories/GHSA-9965-vmph-33xx
- CVE-2025-12758: https://github.com/advisories/GHSA-vghf-hv5q-vc2g
- CVE-2026-26996: https://github.com/advisories/GHSA-3ppc-4f35-3m26
- CVE-2026-27903: https://github.com/advisories/GHSA-7r86-cg39-jmmj
- CVE-2026-27904: https://github.com/advisories/GHSA-23c5-xmqv-rm74
- CVE-2025-5889: https://github.com/advisories/GHSA-v6h2-p8h4-qcjw
- CVE-2026-33750: https://github.com/advisories/GHSA-f886-m6hf-6m8v
- CVE-2026-13149: https://github.com/advisories/GHSA-3jxr-9vmj-r5cp
- CVE-2026-14257: https://github.com/advisories/GHSA-mh99-v99m-4gvg
- CVE-2026-69152: https://github.com/advisories/GHSA-rgw5-rvv9-x895
- CVE-2026-24001: https://github.com/advisories/GHSA-73rr-hh4g-fpgx
