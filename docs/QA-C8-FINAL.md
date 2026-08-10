# QA C8 final — cierre de MVP local

Estado: aprobado localmente — 2026-08-09.

## Validación técnica

- `pnpm typecheck`: aprobado.
- `pnpm test`: 8 suites, 17 tests aprobados.
- `pnpm lint`: aprobado sin errores ni warnings.
- `pnpm audit --audit-level=high`: sin vulnerabilidades conocidas.
- `pnpm build`: aprobado; 14 rutas generadas.
- PostgreSQL local: contenedor saludable y esquema operativo.

## Smoke funcional en navegador

Entorno: `http://localhost:3014`, navegador real, sesión admin local.

- `/menu`: logo Taco Loco, categorías, catálogo, imágenes, disponibilidad, modificadores y CTA de WhatsApp visibles; sin errores de consola.
- Login admin: acceso exitoso con sesión autenticada.
- `/admin/orders`: listado muestra el pedido demo, búsqueda por cliente devuelve el resultado esperado y el filtro de estados está disponible.
- `/admin/orders/new`: alta manual de pedido con producto sin modificador requerido.
- Detalle: cliente, teléfono, modalidad, línea, cantidad, precio snapshot y total informativo visibles.
- Máquina completa probada desde la UI: `RECIBIDO → CONFIRMADO → EN_PREPARACION → LISTO → ENTREGADO`.
- Historial: cada transición mostró usuario, fecha y relación entre estado anterior y nuevo.
- Pedido cerrado: la UI informó que no admite más cambios.
- El pedido de prueba `C8 FINAL QA` fue eliminado después de la prueba; quedó únicamente el pedido demo `TL-0001`.

## Resultado

C8 queda aprobado como MVP local y listo para observación interna. No habilita producción, pagos, webhook de WhatsApp, delivery, POS, R2 ni backup offsite.

La comparación visual final contra `pantallas.pen` en pen.dev queda como tarea no bloqueante de diseño; la UI implementada fue revisada en navegador local.
