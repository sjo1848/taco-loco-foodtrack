# Plan de implementación C9

Estado: plan aprobado; C9-01 completado localmente — 2026-08-09.

## Secuencia metodológica

1. Contrato de contexto operativo: estado abierto/cerrado, horarios y excepciones.
2. UX del pedido: resumen, edición, feedback y estados.
3. Señales de catálogo: destacados, agotados y búsqueda P1.
4. Responsive y accesibilidad.
5. QA integral, demo local y cierre.

## Bloques

### C9-01 — Contexto operativo — COMPLETADO LOCALMENTE

Modelado de horarios, estado manual y pausa temporal. El menú muestra el contexto y adapta el CTA. Evidencia en [`QA-C9-01.md`](QA-C9-01.md).

### C9-02 — Flujo de pedido UX — COMPLETADO LOCALMENTE

Resumen mejorado con quitar línea, vaciar pedido, feedback accesible, límite de cantidad y mensajes de CTA coherentes. Evidencia en [`QA-C9-02.md`](QA-C9-02.md).

### C9-03 — Catálogo orientado a decisión

Agregar destacados y mensajes de disponibilidad. Implementar búsqueda solo si el bloque se mantiene acotado.

### C9-04 — Responsive y accesibilidad

Revisar mobile 390 × 844, desktop, foco, teclado, labels, contraste, overflow y feedback no visual.

### C9-05 — QA y demo

Ejecutar tests, lint, audit, build, smoke C7+C8+C9, revisión manual y acta de cierre.

## Gate entre bloques

Cada bloque debe dejar evidencia local y no introducir producción, pagos ni automatización de WhatsApp. Si P1 amenaza el tamaño de C9, se posterga sin reabrir las decisiones P0.
