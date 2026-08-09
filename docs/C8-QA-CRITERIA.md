# C8 — Criterios QA

Estado: preparado para completar después del relevamiento operativo.

## Funcional

- [ ] Un pedido puede registrarse sin marcarlo automáticamente como confirmado.
- [ ] Las líneas conservan cantidades, modificadores y snapshot de precio.
- [ ] Solo se permiten transiciones de estado válidas.
- [ ] Cada cambio registra usuario y fecha.
- [ ] Se puede consultar un pedido por identificador.
- [ ] El listado filtra por estado y fecha.
- [ ] Cancelar exige motivo cuando la regla operativa lo requiera.
- [ ] C7 y el menú público continúan funcionando sin regresiones.

## Seguridad y operación

- [ ] Solo administradores autenticados pueden consultar o cambiar pedidos.
- [ ] No se exponen datos sensibles innecesarios.
- [ ] No se incorporan pagos, webhooks ni credenciales de clientes.
- [ ] Los estados y permisos están documentados.

## Responsive y accesibilidad

- [ ] El listado funciona en desktop y mobile.
- [ ] Estados y acciones no dependen únicamente del color.
- [ ] Los cambios de estado tienen feedback visible y accesible.
- [ ] Loading, error, vacío y pedido cancelado están diseñados.

## Definition of Done

- [ ] Flujo operativo confirmado con Taco Loco.
- [ ] Modelo y máquina de estados aprobados.
- [ ] UX/UI revisada en `pantallas.pen`.
- [ ] Diseño técnico documentado.
- [ ] Tests y smoke local aprobados.
- [ ] Demo interna aprobada antes de cualquier publicación.
