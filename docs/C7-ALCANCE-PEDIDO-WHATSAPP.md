# C7 — Pedido armado por WhatsApp

Estado: aprobado y cerrado localmente — 2026-08-09.

Este documento propone la evolución natural del MVP de menú digital. No modifica ALC-001 automáticamente ni se implementa hasta cerrar UX, UI, diseño técnico y QA de C7.

## Objetivo

Permitir que una persona consulte libremente el menú y, si quiere, arme una selección opcional de productos para enviarla por WhatsApp como mensaje prellenado.

## Principios

- El menú sigue siendo consultable sin login y sin obligación de iniciar un pedido.
- La selección es opcional y no bloquea la navegación.
- WhatsApp continúa siendo el canal operativo real.
- Foodtrack no confirma, registra ni garantiza el pedido en esta etapa.
- No se agregan pagos, delivery ni operación interna todavía.

## Alcance C7 propuesto

- Acción `Agregar` en cada ProductCard.
- Selector de cantidad dentro de la tarjeta de selección o drawer; no se muestra un stepper permanente en todas las tarjetas.
- Sheet/drawer de pedido con productos, cantidades, modificadores, subtotales y total informativo.
- Edición de cantidades y eliminación de líneas.
- Modificadores disponibles según el catálogo: salsa, carne y sabor de daikiri.
- Persistencia local de la selección durante la navegación.
- Botón `Seguir viendo el menú`.
- Botón `Enviar pedido por WhatsApp`.
- Generación de mensaje prellenado con nombre, cantidad, modificadores y total informativo.
- CTA directo actual de WhatsApp cuando la selección está vacía.
- Estado vacío, carga, error y selección inválida.
- Accesibilidad de teclado, foco y lectores de pantalla.

## UX recomendada

La cantidad no debe aparecer como control permanente en cada tarjeta: agrega ruido visual y compite con la consulta rápida. La tarjeta muestra `Agregar`; al tocarla:

1. Si no tiene modificadores, agrega una unidad y confirma brevemente.
2. Si tiene modificadores, abre un bottom sheet para elegirlos y cantidad.
3. El usuario puede continuar recorriendo categorías.
4. Una barra compacta `Pedido (N)` aparece sobre el CTA inferior.
5. El CTA `Pedir por WhatsApp` sigue visible cuando no hay selección.
6. Con selección activa, el usuario puede abrir el resumen, seguir consultando o enviar el pedido.

## Fuera de alcance C7

- Cuenta o registro de cliente.
- Pedido persistido en Foodtrack.
- Estado interno del pedido.
- Panel de cocina, caja o mozo.
- Pedido asociado a mesa.
- Pagos online.
- Mercado Pago u otra pasarela.
- Delivery, costos de envío o geolocalización.
- Reserva de stock.
- Promociones complejas, cupones o reglas de precios.
- Confirmación automática del pedido.

## Decisiones pendientes antes de construir

- Si el total se muestra como informativo o se omite del mensaje.
- Texto exacto del mensaje de WhatsApp.
- Si se permite mezclar variantes de modificadores en una misma línea.
- Persistencia: `sessionStorage` para una sesión breve o `localStorage` para conservar el pedido al volver.
- Comportamiento ante productos que pasan a agotados mientras están seleccionados.
- Copia y límites máximos de cantidad.

## Criterio de cierre C7

Una persona puede explorar todo el menú sin interrupciones, armar un pedido opcional con cantidades y modificadores, revisarlo, seguir consultando y abrir WhatsApp con un mensaje coherente, sin que Foodtrack se convierta todavía en un sistema interno de pedidos.
