# C10-06 — Cierre visible del pedido

Estado: IMPLEMENTADO — pendiente de QA manual final — 2026-08-10

## Objetivo

Cerrar el recorrido público después de registrar la intención, separando la selección activa del pedido ya preparado y evitando que el usuario vuelva a enviar accidentalmente el mismo pedido.

## Alcance

- Mostrar una pantalla de éxito con el número `TL-XXXX`.
- Mostrar un resumen de productos, cantidades y total informativo.
- Informar que el mensaje está preparado en WhatsApp y requiere confirmación dentro de la aplicación.
- Permitir volver a WhatsApp.
- Permitir iniciar otro pedido, limpiando la selección anterior.
- Permitir volver a consultar el menú sin presentar el pedido cerrado como selección activa.
- Conservar el resumen durante la sesión si el usuario vuelve desde WhatsApp.

## Decisión de lenguaje

Se usa “Pedido preparado” y no “Pedido enviado” o “Pedido confirmado”. Foodtrack registra la intención y prepara el mensaje, pero no puede verificar el envío final ni la respuesta del local sin una integración oficial de WhatsApp.

## Fuera de alcance

- Confirmación automática de envío o recepción.
- Lectura de respuestas de WhatsApp.
- Estados de seguimiento para el cliente.
- Pagos, delivery o WhatsApp Business Cloud API.

## Criterios de aceptación

- El pedido preparado deja de aparecer como carrito activo.
- La pantalla muestra número, líneas y total informativo.
- Volver a WhatsApp conserva el mensaje correspondiente al pedido cerrado.
- Realizar otro pedido inicia una selección vacía.
- Seguir viendo el menú cierra la pantalla sin duplicar la intención.
- Al recargar durante la misma sesión, el resumen cerrado se conserva.
