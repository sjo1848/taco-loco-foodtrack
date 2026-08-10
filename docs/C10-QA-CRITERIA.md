# C10 — Criterios QA

Estado: C10-02 aprobado; preparado para C10-03 — 2026-08-10.

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
- [x] C7, C8 y C9 no presentan regresiones.
- [x] Typecheck, tests, lint, audit y build aprobados.

## Decisión del ciclo

- [x] Cerrar C10-01.
- [ ] Ajustar C10-01 y repetir evaluación.
- [x] Continuar con C10-03.
