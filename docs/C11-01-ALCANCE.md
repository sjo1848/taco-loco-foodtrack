# C11-01 — Confirmación administrativa por WhatsApp sin Cloud API

Estado: IMPLEMENTADO — QA automatizado y smoke admin local aprobados; pendiente prueba física final — 2026-08-10

## Decisión

Los pedidos creados desde el menú web pueden tener `customerPhone = null`. Esto es válido: WhatsApp no devuelve el número del cliente al sistema web. Durante este ticket, el vínculo operativo entre el pedido y la conversación será el código legible `TL-XXXX`.

No se implementan Cloud API, webhooks, tokens de Meta, plantillas, opt-in, captura obligatoria de teléfono ni inferencia automática del contacto.

## Flujo

1. El menú crea la intención y recibe el número definitivo del pedido.
2. El mensaje inicial incorpora ese código, productos y total informativo.
3. El cliente envía el mensaje al comercio por WhatsApp.
4. El admin visualiza código, origen, líneas, total, estado y teléfono opcional.
5. Al confirmar, el admin puede generar el mensaje administrativo con el total canónico vigente.
6. El admin copia el mensaje y lo pega en la conversación identificada por `TL-XXXX`.
7. Si existe teléfono utilizable, también puede abrir WhatsApp con destinatario y texto prellenado.

## Mensajes

El mensaje nunca afirma que fue enviado automáticamente. `CONFIRMED` significa que el local revisó y aceptó el pedido; “mensaje preparado” y “mensaje enviado” son conceptos distintos.

El total se obtiene del `totalAmount` canónico del pedido. No se duplica el cálculo en frontend.

## Estados y teléfono

- `customerPhone = null` no bloquea creación, confirmación ni copiado.
- Sin teléfono: se oculta `Abrir WhatsApp` y se muestra ayuda breve para responder en la conversación del cliente.
- Con teléfono: `Abrir WhatsApp` utiliza el teléfono del cliente, no el WhatsApp del comercio.
- Las acciones requieren sesión administrativa y conservan el historial existente.

## Fuera de alcance

WhatsApp Business Cloud API, automatización, webhooks, estados de entrega/lectura, plantillas de Meta, opt-in, CRM, captura obligatoria de teléfono, pagos, delivery y asociación automática entre usuario y pedido.

## Criterio de cierre

`crear → identificar por TL-XXXX → visualizar en admin → confirmar → generar mensaje correcto → copiar → responder manualmente por WhatsApp`, sin requerir teléfono.
