# Plan de implementación C8

Estado: plan operativo cerrado para iniciar implementación — 2026-08-09.

El detalle completo y las decisiones base están en [C8-ANALISIS-PLAN-MAESTRO.md](./C8-ANALISIS-PLAN-MAESTRO.md).

## Secuencia metodológica

1. Contrato y esquema local de pedido, línea y eventos.
2. Máquina de estados y permisos.
3. Alta manual desde administración.
4. Bandeja, filtros y detalle.
5. Historial, errores y robustez.
6. QA y demo interna.

## Backlog propuesto

### C8-001 — Modelo de pedido

Implementar pedido, líneas, snapshot de precios/modificadores, observaciones y datos operativos.

### C8-002 — Máquina de estados

Implementar transiciones válidas, cancelación, corrección y registro de eventos.

### C8-003 — Recepción operativa

Crear el alta manual de un pedido recibido por WhatsApp, sin asumir confirmación automática.

### C8-004 — Listado administrativo

Mostrar pedidos por estado, fecha, identificador y prioridad operativa.

### C8-005 — Detalle y acciones

Consultar líneas, modificadores, observaciones y ejecutar transiciones autorizadas.

### C8-006 — Historial y auditoría

Registrar usuario, fecha, estado anterior, estado nuevo y motivo cuando corresponda.

### C8-007 — Datos operativos

Incorporar retiro, consumo local, delivery o mesa únicamente según decisión del negocio.

### C8-008 — QA y demo interna

Validar estados, permisos, errores, responsive, accesibilidad y regresión de C7.

## Gate de inicio

C8 puede comenzar en local con los defaults del plan maestro. La observación de C7 se realiza en paralelo y solo puede ajustar campos opcionales; no bloquea C8-001 ni C8-002.
