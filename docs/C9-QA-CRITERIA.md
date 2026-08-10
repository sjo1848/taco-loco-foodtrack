# C9 — Criterios QA

Estado: preparado para ejecución después de aprobar el alcance.

## Funcional

- [x] El estado abierto/cerrado se configura desde administración.
- [x] Los horarios y excepciones se muestran correctamente mediante configuración semanal y pausa manual.
- [x] El CTA cambia de forma comprensible según el estado del local.
- [ ] El resumen permite editar cantidades, modificadores y eliminar líneas.
- [ ] Agregar un producto produce feedback visible.
- [ ] El pedido conserva su selección mientras se navega por el menú.
- [ ] Destacados y agotados se muestran con texto claro, si P1 entra en la etapa.
- [ ] La búsqueda por nombre funciona, si P1 entra en la etapa.
- [ ] C7 y C8 no presentan regresiones.

## UX, responsive y accesibilidad

- [ ] Flujo validado en 390 × 844 y desktop.
- [ ] No hay overflow horizontal accidental.
- [ ] El resumen no tapa contenido ni acciones.
- [ ] Foco y teclado funcionan en selector, resumen y acciones.
- [ ] Botones, estados y drawers tienen nombres accesibles.
- [ ] Feedback y estados no dependen solo de color o animación.
- [ ] Loading, error, vacío y selección inválida tienen mensajes claros.

## Seguridad y alcance

- [ ] Solo administración autenticada modifica horarios, estado y destacados.
- [ ] No se agregan pagos, webhooks ni credenciales de clientes.
- [ ] El total continúa marcado como informativo.
- [ ] No se crea un pedido interno automáticamente desde el menú.

## Definition of Done

- [ ] Alcance P0 aprobado y P1 decidido.
- [ ] Decisiones UX documentadas.
- [ ] UI revisada en navegador local y contrastada con `pantallas.pen`/pen.dev cuando corresponda.
- [ ] Tests, lint, audit y build aprobados.
- [ ] Smoke C7+C8+C9 aprobado.
- [ ] Demo local aprobada.
- [ ] Acta, estado y roadmap actualizados.
