# QA C5 — Integración y hardening

Actualizado: 2026-08-08

## Evidencia automatizada local

- `pnpm lint`: OK.
- `pnpm typecheck`: OK.
- `pnpm test`: OK — 5 suites / 9 tests.
- `pnpm audit --audit-level=high`: OK — sin vulnerabilidades conocidas.
- `pnpm build`: OK con Next 16.3 y Turbopack.
- PostgreSQL local: migración y seed ejecutados.
- Flujo runtime: login, `/admin`, listado protegido y toggle de disponibilidad verificados contra PostgreSQL.
- `/api/health`: endpoint de healthcheck con consulta real a PostgreSQL.
- Playwright smoke en Chrome a 390×844: menú público, navegación semántica, login admin, listado, filtro y acceso a alta de producto.
- Evidencia visual: [`output/playwright/menu-390.png`](../output/playwright/menu-390.png).

## Hardening implementado

- Cookies de sesión HttpOnly, SameSite Lax y Secure en producción.
- Password hashing con scrypt y comparación timing-safe.
- Rate limit de login.
- Validación server-side con Zod.
- Rechazo de mutaciones cross-origin en middleware y auth.
- Headers: nosniff, frame deny, referrer policy, permissions policy y HSTS.
- Upload limitado a JPEG/PNG/WebP, 5 MB, dimensiones máximas y conversión WebP sin metadata.
- CI con PostgreSQL, migración, seed, audit y build.

## Pendientes antes de release

- E2E Playwright en CI para menú, login, disponibilidad y edición.
- La prueba Playwright local cubre el smoke principal; falta automatizarla dentro de CI.
- Revisión manual responsive/accessibility en Chrome Android, Safari iOS y desktop.
- Configuración R2 real y prueba de upload.
- `pg_dump` offsite, retención y restore documentado.
- HTTPS, dominio, healthcheck post-deploy y smoke test de release.
