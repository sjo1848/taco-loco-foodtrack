# Decisiones C11

## DEC-C11-001 — Confirmación manual asistida

Durante C11-01 Taco Loco no integra WhatsApp Cloud API. El admin confirma el pedido dentro de Foodtrack, genera un mensaje basado en datos canónicos, lo copia y responde manualmente en la conversación correspondiente.

## DEC-C11-002 — Código como vínculo operativo

El código legible `TL-XXXX` vincula humanamente el pedido web con la conversación de WhatsApp. No se usa el UUID interno ni se infiere el teléfono del cliente.

## DEC-C11-003 — Teléfono opcional

`customerPhone` sigue siendo opcional para el menú web. La ausencia de teléfono oculta únicamente la acción de apertura directa; nunca bloquea el pedido ni el copiado del mensaje.

## DEC-C11-004 — Bandeja reactiva orientada a eventos

La bandeja administrativa no usará polling periódico como solución definitiva. Los cambios de pedidos se persistirán junto con un `OrderEvent`, PostgreSQL emitirá una notificación transaccional y el Admin recibirá snapshots mediante SSE autenticado. La secuencia persistida del evento será el cursor para reconectar y recuperar cambios sin perderlos ni duplicarlos.
