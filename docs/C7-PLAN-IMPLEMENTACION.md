# Plan de implementación C7

Estado: completado localmente — 2026-08-09.

## Secuencia metodológica

1. Alcance y decisiones — este documento y `C7-ALCANCE-PEDIDO-WHATSAPP.md`.
2. Modelo funcional — líneas de selección, cantidades, modificadores y reglas de precio informativo.
3. UX — flujo de agregar, modificar, revisar, continuar y enviar.
4. UI en pen.dev — ProductCard con acción, bottom sheet, barra de selección y estados.
5. Diseño técnico — estado local, serialización del mensaje y validaciones.
6. QA — casos funcionales, responsive, accesibilidad y regresión del menú.
7. Construcción incremental — tickets pequeños con validación local.
8. Release de demo — solo después de aprobar el release candidate local.

## Backlog propuesto

### C7-001 — Modelo de selección local

Definir `SelectionLine`, cantidades, modificadores, identidad de línea y persistencia local.

### C7-002 — Acción Agregar

Agregar acción a ProductCard sin perjudicar la lectura ni el estado agotado.

### C7-003 — Selector de producto y modificadores

Bottom sheet para cantidades y opciones. Validar elecciones requeridas antes de agregar.

### C7-004 — Resumen de pedido

Mostrar líneas, cantidades, modificadores, subtotales y total informativo.

### C7-005 — Edición y eliminación

Permitir modificar cantidades, cambiar opciones y eliminar líneas.

### C7-006 — WhatsApp composer

Generar mensaje prellenado estable, legible y limitado a datos seleccionados por el usuario.

### C7-007 — Estados y continuidad

Implementar vacío, error, producto agotado, selección persistida y volver a consultar.

### C7-008 — Responsive/accessibility

Validar mobile, desktop, teclado, foco, aria labels, contraste y CTA sin solapamientos.

### C7-009 — QA y documentación

Ejecutar pruebas, smoke local, actualizar runbook y registrar decisiones finales.

## Dependencias

- Cierre local del MVP actual.
- Catálogo y modificadores canónicos.
- Decisión sobre persistencia local.
- Mensaje final de WhatsApp.
- Diseño aprobado en pen.dev para los nuevos estados.
