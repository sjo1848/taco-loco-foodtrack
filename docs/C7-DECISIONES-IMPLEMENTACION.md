# C7 — Decisiones de implementación

Estado: aprobado para primera implementación local — 2026-08-09.

## Decisiones cerradas

- La selección es opcional y nunca bloquea la consulta del menú.
- La cantidad se modifica desde el resumen y no se muestra un stepper permanente en cada tarjeta.
- Los productos sin modificadores se agregan directamente.
- Los productos con modificadores abren un bottom sheet.
- La selección se conserva con `sessionStorage` durante la sesión del navegador.
- El total se muestra como informativo en el resumen.
- El mensaje de WhatsApp no confirma el total: solicita al local disponibilidad y total final.
- Se implementan opciones canónicas con alternativas concretas: `Salsa a elección` y `Sabor de daikiri`.
- `Carne a elección` permanece informativo porque la documentación no define opciones concretas y no se inventan variantes.
- El CTA sigue abriendo WhatsApp directamente cuando no hay selección.
- No se crea un pedido persistido ni se agregan pagos, webhooks, delivery o estados internos.

## Pendientes de validación final

- Revisar el texto comercial del mensaje con Taco Loco.
- Confirmar las opciones reales de carne si se desea hacer seleccionable.
- Validar visualmente `pantallas.pen` en pen.dev y registrar la revisión final.
