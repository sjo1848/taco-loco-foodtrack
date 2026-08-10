# C10 — Criterios QA

Estado: C10-01 aprobado; preparado para C10-02.

## Comprensión

- [x] Agregar un producto deja claro qué tarjeta respondió.
- [x] La aparición o actualización del pedido es perceptible.
- [x] El usuario no pierde contexto ni posición en el menú.
- [ ] El resumen y el CTA mantienen prioridad visual.

## Motion

- [x] Las transiciones son breves y coherentes.
- [ ] No hay animaciones permanentes distractoras en el flujo de compra.
- [x] `prefers-reduced-motion` reduce o elimina el movimiento.
- [ ] No aparece overflow horizontal en mobile.

## Accesibilidad y regresión

- [x] El feedback textual sigue disponible para tecnología asistiva.
- [x] Teclado y foco no se alteran negativamente.
- [ ] C7, C8 y C9 no presentan regresiones.
- [x] Typecheck, tests, lint, audit y build aprobados.

## Decisión del ciclo

- [x] Cerrar C10-01.
- [ ] Ajustar C10-01 y repetir evaluación.
- [x] Continuar con C10-02.
