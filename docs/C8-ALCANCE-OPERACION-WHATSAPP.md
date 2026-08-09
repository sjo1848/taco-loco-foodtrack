# C8 — Operación de pedidos originados en WhatsApp

Estado: propuesta de alcance, pendiente de aprobación operativa.

## Objetivo

Convertir los pedidos que llegan por WhatsApp en una operación interna mínima y trazable, sin transformar todavía Taco Loco Foodtrack en una plataforma de pagos, delivery o POS.

## Alcance propuesto

- Registro interno de un pedido con sus líneas, cantidades, modificadores y observaciones.
- Identificador legible y fecha/hora de recepción.
- Estados operativos: recibido, confirmado, en preparación, listo, entregado y cancelado.
- Panel administrativo para consultar pedidos y cambiar estados.
- Historial básico de cambios con fecha y usuario administrador.
- Datos mínimos de contacto y modalidad de entrega/retiro solo si Taco Loco los confirma.
- Asociación a mesa como extensión opcional, no como requisito inicial.

## Principios

- WhatsApp sigue siendo el canal de comunicación con el cliente.
- Foodtrack registra y ordena la operación; no reemplaza WhatsApp automáticamente.
- Ningún pedido se considera confirmado solo por haber sido enviado desde el menú.
- El precio final y la disponibilidad se verifican en la operación real.
- Los estados deben ser claros y reversibles según permisos definidos.

## Fuera de alcance

- Pagos online o links de pago.
- Reembolsos y conciliación financiera.
- Delivery propio, geolocalización o cálculo de envíos.
- POS, KDS o integración con cocina.
- Stock en tiempo real.
- Cuentas de clientes o fidelización.
- Multi-sucursal.
- Automatización de respuestas de WhatsApp.

## Datos que deben relevarse antes de construir

- Quién recibe y confirma los pedidos.
- Qué estados usa realmente el local.
- Si existe retiro, consumo en local, delivery o combinación.
- Qué datos mínimos se solicitan al cliente.
- Quién puede cancelar o corregir un pedido.
- Si las mesas necesitan identificarse y en qué momento.

## Criterio de cierre C8

El equipo puede recibir, confirmar, preparar, completar o cancelar un pedido desde el panel, con una trazabilidad suficiente para la operación diaria y sin introducir pagos ni automatizaciones no validadas.
