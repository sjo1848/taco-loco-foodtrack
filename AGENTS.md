# Taco Loco Foodtrack — instrucciones de trabajo

## Fuente de verdad local

Usar `docs/drive/` como espejo local de la documentación del proyecto. Drive es respaldo cloud; no modificar Google Docs salvo pedido explícito.

Documentos prioritarios:

- `docs/drive/00-documento-maestro.md`
- `docs/drive/02-pre-dev-002.md`
- `docs/drive/03-alc-001.md`
- `docs/drive/04-men-001.md`
- `docs/drive/05-ux-001.md`
- `docs/drive/06-ui-001.md`
- `docs/drive/07-ui-002.md`
- `docs/drive/08-penpot-001.md`
- `docs/drive/09-tec-001.md`
- `docs/drive/10-qa-001.md`
- `docs/drive/11-blg-001.md`

## Estado actual

- Fases 0–3 cerradas.
- Fase 4 UI aprobada visualmente y materializada en `taco-loco-ui.pen`.
- Fases 5 y 6 cerradas.
- Gate de construcción abierto; C1 validado. Continuar por tickets de `BLG-001`.

## Reglas de implementación

- Mantener el alcance de ALC-001; no agregar carrito, pedidos, POS, KDS, stock, pagos, delivery ni analytics.
- Mobile-first: validar primero 360–390 px.
- Usar tokens y componentes de `taco-loco-ui.pen`.
- Mantener estados loading, error, empty, agotado, focus y disabled.
- El estado agotado siempre debe comunicar texto, no solo color.
- El CTA de WhatsApp debe respetar safe-area y no ocultar contenido.
- Antes de cambiar una decisión canónica, actualizar el documento local correspondiente.
- Usar Node 22 LTS y pnpm 11; el lockfile canónico es `pnpm-lock.yaml`.
- Usar Node 22 LTS y pnpm 11; no regenerar dependencias con npm.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
