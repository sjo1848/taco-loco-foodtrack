# C9 — Análisis y plan maestro UX

Estado: planificación propuesta para revisión — 2026-08-09.

## Objetivo

Mejorar la experiencia del menú público y del pedido por WhatsApp sin ampliar innecesariamente el producto ni cambiar el modelo operativo validado en C8.

La persona debe poder consultar el menú libremente, entender si el local está tomando pedidos, armar o editar una selección y enviarla por WhatsApp con la menor fricción posible.

## Decisión ejecutiva

C9 será una etapa corta de UX y contexto operativo. Mantiene WhatsApp como canal externo y C8 como carga manual administrativa. No se implementará todavía una API, webhook, bot, pago, delivery ni publicación productiva.

## Principios

- Consultar el menú nunca exige iniciar un pedido.
- El estado del local debe ser visible y confiable.
- Cada acción debe tener feedback claro.
- Mobile es el contexto principal; desktop sigue soportado.
- La información importante no depende solamente del color.
- Se reutilizan los componentes y tokens existentes.
- Cada bloque se valida localmente antes de iniciar el siguiente.

## Alcance priorizado

### Prioridad P0 — debe entrar en C9

1. Estado abierto/cerrado y horarios visibles.
2. Mejoras del resumen y edición del pedido.
3. Feedback al agregar, modificar y eliminar productos.
4. Revisión responsive y accesibilidad del flujo principal.

### Prioridad P1 — entra si no extiende la etapa

5. Productos destacados o recomendados.
6. Disponibilidad temporal y mensajes de agotado.
7. Búsqueda simple por nombre.

### Fuera de C9

- Integración automática con WhatsApp.
- Interpretación de mensajes o creación automática de pedidos.
- Pagos, delivery, POS o stock.
- Promociones complejas, cupones o precios dinámicos.
- Dominio, HTTPS, R2, backups productivos y deploy.

## Resultado esperado

Una experiencia pública más clara, rápida y confiable, con el mismo flujo operativo: el cliente prepara el mensaje y el local lo registra manualmente en C8.

## Criterio de cierre

C9 queda cerrada cuando el flujo público funciona en mobile y desktop, el estado del local es comprensible, el pedido se puede editar sin fricción, los estados tienen feedback accesible, y la regresión C7+C8 está aprobada.
