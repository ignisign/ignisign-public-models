# ChangeLogs

- [4.2.2] 2026-09-30 `ORGANIZATION_FEATURE_FORBIDDEN` (HTTP 403). A restricted organization feature that was denied as 401 `UNAUTHORIZED_ERROR` is now 403 with this code. `context.missing[]` is `{ feature, claims }`. A client that re-authenticates on 401 will not recover: the caller is already authenticated and is missing claims. Existing codes are unchanged.
- [1.0.0] 2023-08-30 first public release of Ignisign models
