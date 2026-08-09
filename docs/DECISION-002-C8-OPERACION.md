# Decisión 002 — Inicio de C8

Fecha: 2026-08-09

## Decisión

C8 será una etapa de operación interna de pedidos originados en WhatsApp. Se implementa primero en local con carga manual, estados e historial. La observación de C7 continúa en paralelo y solo puede ajustar campos opcionales; no bloquea el inicio técnico.

## Orden de evolución

1. C7: selección y envío por WhatsApp.
2. C8 local: registro manual, estados y operación interna mínima.
3. Observación y demo controlada.
4. C9: pagos y operación comercial, solo si el volumen y el circuito lo justifican.

## Restricción

Enviar un pedido por WhatsApp no equivale a confirmarlo. La confirmación debe seguir siendo una decisión operativa de Taco Loco hasta que exista un flujo explícito y validado.

Los defaults de construcción y los criterios de salida están en [C8-ANALISIS-PLAN-MAESTRO.md](C8-ANALISIS-PLAN-MAESTRO.md).
