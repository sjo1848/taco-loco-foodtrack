# Decisiones UX C10

## DEC-C10-001 — Motion comunica estado

Las animaciones solo se incorporan cuando explican una transición, confirman una acción o refuerzan la identidad de Taco Loco. No se agregan efectos por decoración.

## DEC-C10-002 — Feedback duplicado

Toda acción crítica tendrá feedback visual y textual accesible. Si el usuario reduce el movimiento o usa un lector de pantalla, debe comprender lo mismo.

## DEC-C10-003 — Ritmo corto

Las transiciones de interacción deben sentirse inmediatas. Se priorizan duraciones breves y curvas suaves; no se retiene artificialmente al usuario.

## DEC-C10-004 — El pedido es el eje

El motion de marca no puede competir con la selección ni con el CTA de WhatsApp. La energía visual aumenta cerca de las acciones de conversión y baja en el contenido informativo.

## DEC-C10-005 — Evaluación antes de escalar

No se implementa toda la capa de motion de una vez. Cada bloque se valida y puede cerrarse, ajustarse o descartarse antes del siguiente.

## DEC-C10-006 — Capas sobre contexto, no rutas innecesarias

La personalización y la revisión se resuelven con `Sheet`/`Dialog` sobre el menú existente. No se crean rutas intermedias porque el catálogo debe seguir siendo consultable y la selección debe conservarse.

## DEC-C10-007 — Patrón shadcn, identidad propia

Se adoptan patrones de interacción conocidos —Dialog, Sheet, Card, Button y ScrollArea— como referencia conceptual. La implementación mantiene los tokens, colores, textos y personalidad de Taco Loco; no se agrega una dependencia solo por replicar estilos.

## DEC-C10-008 — Profundidad proporcional

El overlay debe enfocar sin borrar el contexto. En mobile se prioriza una capa inferior casi completa; en desktop una card centrada. El fondo queda visible, pero no interactivo.

## DEC-C10-009 — Registrar intención, no confirmar

Al iniciar el envío a WhatsApp se crea un registro administrativo `RECEIVED` con snapshot server-side. El registro permite cerrar el circuito de seguimiento, pero la confirmación continúa siendo manual porque WhatsApp es un canal externo.

## DEC-C10-010 — Precios y disponibilidad se validan en servidor

El navegador solo envía identificadores, cantidades y opciones. El servidor resuelve nombres, precios, disponibilidad y modificadores antes de crear la intención.
