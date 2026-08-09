# Decisión 001 — Selección de productos y pagos

Fecha: 2026-08-09

## Decisión

La selección de productos se planifica como C7, posterior al cierre del MVP de menú consultable. Los pagos no se incorporan todavía y se evaluarán después de observar el flujo real de pedidos por WhatsApp.

## Motivo para incorporar selección en C7

La selección mejora el pedido sin reemplazar el menú: el usuario puede seguir consultando categorías, revisar productos y enviar un resumen ordenado por el canal que Taco Loco ya utiliza.

## Motivo para postergar pagos

Los pagos agregarían decisiones y riesgos que todavía no están definidos:

- medios aceptados y titularidad de las cuentas;
- conciliación y comprobantes;
- cancelaciones y devoluciones;
- precios finales, promociones y costos de envío;
- confirmación operativa del pedido;
- seguridad, webhooks y estados de transacción;
- dependencia de una pasarela externa.

Agregar pagos antes de validar el flujo básico podría convertir un menú en un sistema de checkout sin evidencia de que Taco Loco lo necesite todavía.

## Condición para reevaluar pagos

Revisar pagos después de observar pedidos reales por WhatsApp y definir quién confirma, cobra, prepara, entrega y resuelve cancelaciones.

## Alternativa futura

Si el volumen lo justifica, evaluar primero un enlace de pago externo asociado al pedido, antes de construir checkout propio. La decisión deberá tener alcance, modelo de estados, QA y tratamiento de errores propios.
