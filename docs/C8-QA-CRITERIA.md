# C8 — Criterios QA

Estado: completado localmente — 2026-08-09.

## Funcional

- [x] Un pedido puede registrarse sin marcarlo automáticamente como confirmado.
- [x] Las líneas conservan cantidades, modificadores y snapshot de precio.
- [x] Solo se permiten transiciones de estado válidas.
- [x] Cada cambio registra usuario y fecha.
- [x] Se puede consultar un pedido por identificador.
- [x] El listado filtra por estado y fecha.
- [x] Cancelar exige motivo cuando la regla operativa lo requiera.
- [x] C7 y el menú público continúan funcionando sin regresiones.

## Seguridad y operación

- [x] Solo administradores autenticados pueden consultar o cambiar pedidos.
- [x] No se exponen datos sensibles innecesarios.
- [x] No se incorporan pagos, webhooks ni credenciales de clientes.
- [x] Los estados y permisos están documentados.

## Responsive y accesibilidad

- [x] El listado funciona en desktop y mobile.
- [x] Estados y acciones no dependen únicamente del color.
- [x] Los cambios de estado tienen feedback visible y accesible.
- [x] Loading, error, vacío y pedido cancelado están diseñados.

## Definition of Done

- [x] Defaults del plan maestro implementados y probados.
- [x] Modelo y máquina de estados cubiertos por tests.
- [x] UX/UI local revisada; comparación final en `pantallas.pen`/pen.dev queda como tarea visual no bloqueante.
- [x] Diseño técnico documentado.
- [x] Tests y smoke local aprobados.
- [x] Demo interna aprobada para el MVP local; no implica publicación.

Evidencia consolidada: [`QA-C8-FINAL.md`](QA-C8-FINAL.md).
