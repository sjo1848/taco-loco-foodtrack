# Plan de implementación C8

Estado: planificación inicial.

## Secuencia metodológica

1. Observación operativa del uso real de C7.
2. Alcance y estados canónicos.
3. Modelo funcional de pedido, línea, estado y eventos.
4. UX del panel operativo.
5. UI en `pantallas.pen` para listado, detalle, estados y estados vacíos.
6. Diseño técnico, permisos y persistencia.
7. QA de transiciones, concurrencia y regresión del menú/C7.
8. Construcción incremental en local.
9. Demo interna antes de producción.

## Backlog propuesto

### C8-001 — Modelo de pedido

Definir pedido, líneas, snapshot de precios/modificadores, observaciones y datos operativos.

### C8-002 — Máquina de estados

Definir transiciones válidas, cancelación, corrección y registro de eventos.

### C8-003 — Recepción operativa

Crear el mecanismo explícito para registrar un pedido recibido por WhatsApp, sin asumir confirmación automática.

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

C8 no comienza a construirse hasta observar el uso real de C7 y confirmar el flujo operativo con Taco Loco.
