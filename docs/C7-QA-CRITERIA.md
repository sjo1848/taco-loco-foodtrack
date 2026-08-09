# C7 — Criterios QA y Definition of Done

Estado: preparado para completar después de aprobar el alcance y la UI.

## Funcional

- [ ] El menú se puede consultar sin agregar ningún producto.
- [ ] `Agregar` funciona en productos sin modificadores.
- [ ] Productos con modificadores solicitan las elecciones necesarias.
- [ ] Las cantidades aceptan límites razonables y no valores inválidos.
- [ ] El resumen muestra producto, cantidad, modificadores y subtotal.
- [ ] Se puede editar una línea.
- [ ] Se puede eliminar una línea.
- [ ] El total informativo coincide con los precios visibles del catálogo.
- [ ] `Seguir viendo el menú` conserva la selección.
- [ ] WhatsApp recibe un mensaje legible y completo.
- [ ] Con selección vacía, el CTA actual abre WhatsApp directamente.
- [ ] Un producto agotado no puede agregarse.
- [ ] La selección se comporta correctamente si un producto cambia de disponibilidad.

## Navegación y continuidad

- [ ] Las categorías siguen funcionando con el pedido abierto.
- [ ] El usuario puede cerrar el resumen sin perder datos.
- [ ] El CTA no tapa tarjetas, precios ni controles.
- [ ] Recargar respeta la decisión de persistencia aprobada.
- [ ] No se crea pedido dentro de Foodtrack.

## Accesibilidad y responsive

- [ ] El drawer tiene nombre accesible y foco controlado.
- [ ] Los botones tienen labels claros.
- [ ] Los modificadores son operables por teclado.
- [ ] El resumen funciona en 390 × 844 y desktop.
- [ ] No hay overflow horizontal accidental.
- [ ] Contraste y estados no dependen únicamente del color.

## Seguridad y límites

- [ ] No se guardan credenciales ni datos sensibles del cliente.
- [ ] El mensaje no incorpora datos fuera de la selección.
- [ ] El total se presenta como informativo mientras no exista confirmación interna.
- [ ] No se agregan endpoints de pago ni webhooks en C7.

## Definition of Done

- [ ] Alcance aprobado.
- [ ] UX aprobada.
- [ ] UI materializada y revisada en pen.dev.
- [ ] Diseño técnico documentado.
- [ ] Criterios implementados y cubiertos por tests.
- [ ] Smoke local aprobado.
- [ ] Revisión manual mobile/desktop aprobada.
- [ ] Documentación y estado local actualizados.
