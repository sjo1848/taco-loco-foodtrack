# Plan de implementación C10

Estado: C10-03 completado; C10-03.1 implementado; C10-04 implementado con CI verde y pendiente de revisión visual final — 2026-08-10.

## Secuencia

1. C10-01 — motion base y feedback de selección.
2. C10-02 — flujo por capas, cantidades y resumen móvil — COMPLETADO.
3. C10-03 — registro de intención y confirmación previa a WhatsApp — COMPLETADO.
4. C10-03.1 — semántica y trazabilidad de intención — IMPLEMENTADO; pendiente de CI/revisión.
5. C10-04 — hardening UX y firma visual — IMPLEMENTADO; pendiente de QA/CI.

## Gate de ciclo

Cada bloque debe tener código acotado, evidencia QA, revisión visual local y una decisión explícita sobre el siguiente paso. Si una animación no mejora comprensión, confianza o identidad, se retira.

## C10-01 — COMPLETADO

- Tokens de duración y easing.
- Feedback de producto agregado.
- Transición de la barra de selección.
- Revisión de accesibilidad y movimiento reducido.
- Documento de evaluación `QA-C10-01.md`.

Resultado: aprobado. El siguiente ciclo aborda cantidades y resumen móvil.

## C10-02 — Entregables

- Selector y resumen tratados como capas de flujo.
- Diferencia responsive entre sheet mobile y card desktop.
- Overlay, blur y bloqueo del fondo.
- Handle mobile y encabezado de paso.
- Foco, Escape, restauración de foco y `prefers-reduced-motion`.
- Evidencia en `QA-C10-02.md`.

Resultado: aprobado. El siguiente ciclo aborda el registro de intención y la confirmación previa a WhatsApp.

## C10-03 — COMPLETADO

- Registro público server-side de la intención.
- Snapshot de catálogo validado en servidor.
- Idempotencia y rate limit básico.
- Estado `Recibido` visible en administración.
- Apertura de WhatsApp sin confirmación automática.
- Evidencia en `QA-C10-03.md`.

Resultado: aprobado. El siguiente ciclo aborda narrativa visual, descubrimiento y refinamiento de marca.

## C10-03.1 — PLANIFICADO

- Corregir `OrderSource` para distinguir menú web de WhatsApp.
- Mostrar `Menú web · WhatsApp pendiente` en la bandeja.
- Mantener `RECEIVED` sin expiración automática durante el piloto.
- Documentar y medir manualmente intenciones abandonadas.
- Agregar migración, pruebas de source, idempotencia y copy.

Alcance completo y criterios: `docs/C10-03.1-ALCANCE.md`.
