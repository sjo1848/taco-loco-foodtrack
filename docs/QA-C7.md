# QA-C7 — Selección y pedido por WhatsApp

Fecha: 2026-08-09
Estado: C7 cerrado localmente — 2026-08-09.

## Evidencia automática

- `pnpm lint`: PASS.
- `pnpm typecheck`: PASS.
- `pnpm test`: PASS — 6 suites, 11 tests.
- `pnpm audit --audit-level=high`: PASS — sin vulnerabilidades conocidas.
- `pnpm build`: PASS.
- GitHub Actions CI: PASS — [workflow del PR](https://github.com/sjo1848/taco-loco-foodtrack/actions/runs/31323097746).

## Smoke funcional local

- [x] Consultar el menú sin iniciar una selección.
- [x] Agregar un producto sin modificadores.
- [x] Abrir selector para un producto con modificador obligatorio.
- [x] Seleccionar una salsa y agregar el producto.
- [x] Mostrar cantidad, subtotal y total informativo.
- [x] Incrementar y disminuir cantidades.
- [x] Eliminar una línea al llegar a cero.
- [x] Editar el modificador de una línea desde el resumen.
- [x] Seguir consultando el menú con selección activa.
- [x] Generar URL de WhatsApp con producto, cantidad y modificador.
- [x] Mantener la selección durante la sesión con `sessionStorage`.
- [x] Cerrar sheets con botón, Escape o backdrop.
- [x] Mantener CTA directo a WhatsApp cuando la selección está vacía.

## Responsive y accesibilidad básica

- [x] Vista mobile revisada a 390 × 844.
- [x] CTA inferior y barra de selección sin tapar el contenido principal.
- [x] Dialogs con `role="dialog"` y `aria-modal`.
- [x] Botones de cantidad y cierre con labels accesibles.
- [x] Estados de modificadores con `aria-pressed`.
- [ ] Validación visual final contra `pantallas.pen` dentro de pen.dev — seguimiento no bloqueante por MCP desconectado.

## Datos deliberadamente no inventados

- `Carne a elección` sigue informativa porque no existen variantes concretas confirmadas.
- No se incorporan pagos, pedidos internos, webhooks, delivery, stock ni usuarios.
- R2, dominio, email definitivo y producción siguen fuera del release candidate local.

## Criterio de aprobación

C7 queda cerrado como release candidate local. El texto comercial, variantes de carne y comparación visual con `pantallas.pen` quedan como ajustes de seguimiento antes de una publicación productiva.
