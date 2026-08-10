# Alcance UX C10

## C10-01 — Motion base y feedback de selección

### Incluye

- Tokens CSS para duración y curvas de motion.
- Respuesta visual al agregar un producto.
- Actualización perceptible de la barra de selección.
- Movimiento coherente del panel de selección existente.
- `prefers-reduced-motion` conservado como requisito.
- Feedback accesible independiente de la animación.

### No incluye

- Rediseño completo de tarjetas.
- Nuevo flujo de confirmación de WhatsApp.
- Cambios en el modelo de selección.
- Animaciones permanentes que compitan con el contenido.

### Criterio observable

Después de agregar un producto, la persona identifica la tarjeta afectada y ve aparecer o actualizarse el pedido sin perder su posición en el menú.

## Próximos bloques propuestos

- C10-02: flujo por capas, cantidades y resumen móvil.
- C10-03: registro de intención y confirmación previa a WhatsApp.
- C10-04: narrativa visual de marca y descubrimiento.

## C10-02 — Flujo por capas y resumen móvil

### Hipótesis

Si la personalización y la revisión aparecen como capas enfocadas sobre el menú, la experiencia dejará de sentirse como una landing larga y se entenderá como un flujo de pedido, sin perder la posibilidad de consultar el catálogo.

### Incluye

- Selector de producto como sheet/card con jerarquía propia.
- Resumen del pedido como segunda capa de decisión.
- Overlay con opacidad y blur moderado para preservar contexto sin competir.
- Diferencia visual mobile/desktop: sheet inferior en mobile y card centrada en desktop.
- Bloqueo del scroll del fondo mientras una capa está abierta.
- Handle visual en mobile y encabezados de paso.
- Focus, Escape, cierre, restauración de foco y movimiento reducido.
- Controles `+ / −` y acciones del resumen dentro de la capa.

### No incluye

- Rutas nuevas para cada paso.
- Checkout interno.
- Pago o confirmación automática del local.
- Rediseño completo del catálogo.
- Instalación obligatoria de shadcn/ui; se tomarán sus patrones como referencia.

### Criterio observable

Con una capa abierta, la persona identifica qué está haciendo, puede volver al menú sin perder la selección y no confunde la apertura de WhatsApp con una confirmación del local.

## C10-03 — Cierre del flujo con intención de pedido

### Hipótesis

Si Foodtrack registra una intención de pedido antes de abrir WhatsApp, el cliente tendrá un cierre visible y el local podrá ver el pedido en administración sin asumir que ya fue confirmado.

### Incluye

- Registro público server-side de productos, cantidades y modificadores.
- Revalidación de disponibilidad, modificadores y precios contra la base.
- Estado inicial `Recibido` en la bandeja administrativa.
- Referencia idempotente para no duplicar el pedido por doble clic o reintento.
- Mensaje claro: pedido registrado para seguimiento, confirmación pendiente por WhatsApp.
- Apertura del mensaje prellenado de WhatsApp después de preparar la intención.
- Administración conserva la decisión de confirmar, preparar, cancelar o cerrar.

### No incluye

- Confirmación automática del pedido.
- Lectura de respuestas de WhatsApp.
- Webhook, bot, pago o reserva de stock.
- Datos obligatorios de cliente que todavía no fueron definidos.

### Decisión operativa

El pedido aparecerá en admin como `Recibido`, con origen WhatsApp y nota de seguimiento. Ese estado significa “intención registrada”, no “pedido aceptado por el local”.
