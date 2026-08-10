# C10-04 — Hardening UX y firma visual

Estado: IMPLEMENTADO — pendiente de QA local y CI — 2026-08-10  
Origen: `REV-C10-XPROD-001` de Drive

## Hipótesis

Una interfaz con foco contenido, controles táctiles cómodos, capas que respetan safe-area y menos motion permanente mejora comprensión y confianza sin convertir Taco Loco en una landing ni ampliar el producto.

## Alcance ejecutado

### P0 — Calidad y accesibilidad

- focus trap básico en sheets de personalización y resumen;
- foco inicial en cerrar y restauración del foco anterior;
- controles principales con objetivo aproximado de 44×44 px;
- stacking móvil con safe-area para CTA, selección y feedback;
- espacio inferior del menú ajustado para evitar ocultar contenido.

### P1 — Marca y narrativa

- se conserva el queso como gesto de marca principal;
- se eliminan shimmer y pulsos permanentes del tagline;
- se mantiene el feedback de acciones y transiciones de capas porque comunican estado;
- no se agrega hero, carrusel, promociones ni nuevas taxonomías.

## Fuera de alcance

Pagos, delivery, tracking, login de clientes, marketplace, bot/webhook de WhatsApp, analytics, integración con UspaYa y rediseño integral de tipografía.

## Criterios de aceptación

- [ ] Tab no escapa del sheet mientras está abierto.
- [ ] Escape cierra el sheet y el foco vuelve al disparador.
- [ ] CTA, cerrar, agregar, categorías y cantidad son utilizables por toque.
- [ ] En 390×844 y un viewport con safe-area no se solapan CTA, selección ni feedback.
- [ ] El último contenido del menú no queda oculto por elementos fijos.
- [ ] El motion permanente queda reducido a la firma de marca; feedback y sheets conservan transición.
- [ ] `prefers-reduced-motion` continúa respetándose.
- [ ] Typecheck, lint, tests, audit y build pasan.
