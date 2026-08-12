# C11-02 — Bandeja de pedidos reactiva

## Objetivo

Hacer que la bandeja de pedidos del administrador reaccione a nuevos pedidos y cambios de estado sin F5 y sin consultas periódicas a la base de datos.

## Decisión de arquitectura

- PostgreSQL es la fuente de verdad.
- Cada alta o transición de pedido persiste un `OrderEvent` dentro de la misma transacción que modifica el pedido.
- PostgreSQL `NOTIFY` despierta a los suscriptores después del commit.
- Next.js expone un stream SSE autenticado para la bandeja de Admin.
- Cada evento SSE usa la secuencia persistida de `OrderEvent` como cursor.
- Al conectar o reconectar, el cliente solicita los eventos posteriores al último cursor y hace upsert por `order.id`.
- La reconexión debe ser segura: no perder eventos, no duplicar filas y no requerir recarga manual.

## Fuera de alcance

- WebSockets.
- Polling periódico como mecanismo principal.
- Notificaciones al cliente público.
- Automatización de WhatsApp.

## Criterios de aceptación

- Un pedido nuevo aparece en la bandeja sin recargar la página.
- Una transición de estado actualiza la fila visible sin duplicarla.
- La conexión SSE requiere sesión administrativa válida.
- Una reconexión recupera eventos desde el último cursor recibido.
- Si el stream falla, la bandeja conserva la última lista válida y reintenta.
- La implementación funciona con más de un proceso de Next.js porque la señal viaja por PostgreSQL, no por memoria local.
- No existe polling de 5 segundos en `OrdersBoard`.
