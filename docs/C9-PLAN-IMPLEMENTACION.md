# Plan de implementación C9

Estado: C9 cerrado como MVP local — 2026-08-09.

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

### C9-03 — Catálogo orientado a decisión — COMPLETADO LOCALMENTE

La infraestructura de destacados y disponibilidad existente se conserva. Se agregó búsqueda simple por nombre, descripción o categoría y estado vacío claro. Evidencia en [`QA-C9-03.md`](QA-C9-03.md).

### C9-04 — Responsive y accesibilidad — COMPLETADO LOCALMENTE

Revisión mobile 390 × 844 y desktop, foco inicial en diálogos, labels, descripciones y movimiento reducido. Evidencia en [`QA-C9-04.md`](QA-C9-04.md).

### C9-05 — QA y demo — COMPLETADO LOCALMENTE

Tests, lint, audit, build, smoke C7+C8+C9, revisión manual y acta de cierre completados. Evidencia en [`QA-C9-FINAL.md`](QA-C9-FINAL.md) y [`C9-ACTA-CIERRE.md`](C9-ACTA-CIERRE.md).

## Gate entre bloques

Cada bloque debe dejar evidencia local y no introducir producción, pagos ni automatización de WhatsApp. Si P1 amenaza el tamaño de C9, se posterga sin reabrir las decisiones P0.
