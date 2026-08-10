# C10-05 — WhatsApp adaptativo en móvil

Estado: IMPLEMENTADO — QA automatizado local aprobado; pendiente de prueba física — 2026-08-10

## Objetivo

Reducir la fricción del cierre del pedido: en celulares el CTA debe llevar al usuario directamente al flujo de WhatsApp, sin abrir una pestaña en blanco intermedia. En escritorio se conserva una pestaña nueva para no perder el menú.

## Alcance

- Detectar viewport/dispositivo táctil en cliente.
- En móvil, intentar primero el esquema nativo `whatsapp://send` con el mensaje prellenado.
- Si no hay aplicación disponible, mostrar un fallback manual a `wa.me` sin abandonar el menú.
- En escritorio, abrir WhatsApp Web en una pestaña nueva después de registrar la intención.
- Mantener el registro de intención antes de abrir el chat cuando hay productos y el local está operativo.
- Mantener la consulta directa cuando no hay productos o el local no toma pedidos.
- Adaptar el texto del CTA móvil a “Abrir WhatsApp”.

## Fuera de alcance

- Envío automático del mensaje.
- WhatsApp Business Cloud API, bot o webhook.
- Garantizar que el sistema operativo abra la aplicación si WhatsApp no está instalado.

## Criterios de aceptación

- En viewport móvil, el CTA no crea una pestaña en blanco.
- En viewport móvil, un pedido válido registra la intención y navega a WhatsApp con el texto prellenado.
- En escritorio, el pedido conserva la apertura en pestaña nueva.
- El CTA de consulta sigue funcionando con el local cerrado o sin selección.
- El feedback mantiene claro que el usuario debe confirmar el envío dentro de WhatsApp.
