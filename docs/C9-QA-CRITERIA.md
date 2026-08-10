# C9 — Criterios QA

Estado: ejecutado y aprobado localmente — 2026-08-09.

## Funcional

- [x] El estado abierto/cerrado se configura desde administración.
- [x] Los horarios y excepciones se muestran correctamente mediante configuración semanal y pausa manual.
- [x] El CTA cambia de forma comprensible según el estado del local.
- [x] El resumen permite editar cantidades, modificadores y eliminar líneas.
- [x] Agregar un producto produce feedback visible.
- [x] El pedido conserva su selección mientras se navega por el menú.
- [x] Destacados y agotados se muestran con texto claro, si P1 entra en la etapa.
- [x] La búsqueda por nombre, descripción o categoría funciona.
- [x] C7 y C8 no presentan regresiones.

## UX, responsive y accesibilidad

- [x] Flujo validado en 390 × 844 y desktop.
- [x] No hay overflow horizontal accidental.
- [x] El resumen no tapa contenido ni acciones.
- [x] Foco inicial y teclado funcionan en selector, resumen y acciones.
- [x] Botones, estados y drawers tienen nombres accesibles.
- [x] Feedback y estados no dependen solo de color o animación.
- [x] Loading, error, vacío y selección inválida tienen mensajes claros.

## Seguridad y alcance

- [x] Solo administración autenticada modifica horarios, estado y destacados.
- [x] No se agregan pagos, webhooks ni credenciales de clientes.
- [x] El total continúa marcado como informativo.
- [x] No se crea un pedido interno automáticamente desde el menú.

## Definition of Done

- [x] Alcance P0 aprobado y P1 decidido.
- [x] Decisiones UX documentadas.
- [x] UI revisada en navegador local y contrastada con la fuente editable local cuando correspondía.
- [x] Tests, lint, audit y build aprobados.
- [x] Smoke C7+C8+C9 aprobado.
- [x] Demo local aprobada.
- [x] Acta, estado y roadmap actualizados.
