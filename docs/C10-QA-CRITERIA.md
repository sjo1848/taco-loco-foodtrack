# C10 — Criterios QA

Estado: C10-05 implementado; C10-06 implementado; pendiente de QA física y cierre documental — 2026-08-10.

## Comprensión

- [x] La capa activa deja claro qué paso del pedido está abierto.
- [x] El menú de fondo conserva contexto, pero no compite ni recibe interacción.
- [x] Agregar un producto deja claro qué tarjeta respondió.
- [x] La aparición o actualización del pedido es perceptible.
- [x] El usuario no pierde contexto ni posición en el menú.
- [x] El resumen y el CTA mantienen prioridad visual.
- [x] El resumen puede abrirse y cerrarse sin perder la selección.

## Motion

- [x] Las transiciones son breves y coherentes.
- [x] No hay animaciones permanentes distractoras en el flujo de compra.
- [x] `prefers-reduced-motion` reduce o elimina el movimiento.
- [x] No aparece overflow horizontal en mobile.
- [x] Mobile usa sheet inferior y desktop card centrada.

## Accesibilidad y regresión

- [x] El feedback textual sigue disponible para tecnología asistiva.
- [x] Teclado y foco no se alteran negativamente.
- [x] Escape y restauración de foco funcionan en ambas capas.
- [x] El pedido preparado aparece en administración como `Recibido`.
- [x] El servidor revalida catálogo, modificadores y precios.
- [x] El registro es idempotente y tiene protección básica contra abuso.
- [x] C7, C8 y C9 no presentan regresiones.
- [x] Typecheck, tests, lint, audit y build aprobados.

## Decisión del ciclo

- [x] Cerrar C10-01 y C10-02.
- [ ] Ajustar el ciclo actual y repetir evaluación.
- [x] Continuar con C10-04.
- [x] Implementar C10-05: apertura móvil nativa y fallback manual.
- [x] Implementar C10-06: cierre visible y resumen del pedido.
- [ ] Ejecutar QA física final y cerrar C10.
