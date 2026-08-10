# QA final C9

Fecha: 2026-08-09

## Resultado

C9 aprobado como MVP local. La etapa queda cerrada sin despliegue productivo, pagos, webhooks, R2 ni automatización de WhatsApp.

## Validación técnica

- `pnpm typecheck`: aprobado.
- `pnpm test`: 10 suites y 22 tests aprobados.
- `pnpm lint`: aprobado.
- `pnpm audit --audit-level=high`: sin vulnerabilidades conocidas.
- `pnpm build`: aprobado con Next.js 16.3.0.

## Smoke funcional local

- Menú público: logo, catálogo, disponibilidad, estado operativo y CTA de WhatsApp.
- C9-01: estado abierto, pausa manual y configuración de horarios disponibles en administración; el CTA público conserva una consulta clara cuando corresponde.
- C9-02: selector de modificadores, validación de opción obligatoria, feedback accesible, resumen, edición, quitar línea y vaciar pedido.
- C9-03: búsqueda por nombre, descripción y categoría; navegación sincronizada y estado sin resultados.
- C9-04: revisión responsive en 390 × 844 y 1440 × 900; foco inicial en `Cerrar`, descripciones de diálogo y `prefers-reduced-motion`.
- C7: selección persistida en la sesión, cantidades, modificadores y mensaje prellenado de WhatsApp.
- C8: login admin, productos, configuración, bandeja y pedido demo `TL-0001` sin regresiones.

## Evidencia de navegador

La prueba se ejecutó en local con Playwright sobre `http://localhost:3014`. El menú público no presentó errores de consola; el panel admin cargó correctamente y mantuvo la sesión durante productos, pedidos y configuración. La advertencia de desarrollo de Next.js sobre `scroll-behavior: smooth` no afecta el comportamiento funcional y queda fuera del alcance de C9.

## Estado de datos

La configuración operativa quedó restaurada en modo manual abierto, sin mensaje de pausa ni horario semanal activo. La credencial de desarrollo quedó normalizada a `admin@example.com` / `change-me-in-development` únicamente para la demo local.

## Pendientes fuera de C9

Email admin definitivo, dominio y HTTPS, R2 para media productiva, backup offsite, cinco referencias reales de imágenes y decisión de salida a producción. Pagos y automatizaciones comerciales permanecen documentados para otra etapa.
