# C9 — Alcance UX y mejoras naturales

Estado: propuesto para revisión — 2026-08-09.

## 1. Contexto del local

### Estado abierto/cerrado

El administrador podrá indicar si el local está tomando pedidos. El menú mostrará ese estado de forma visible y el CTA se adaptará:

- abierto: `Pedir por WhatsApp`;
- cerrado: `Consultar disponibilidad` o mensaje equivalente;
- fuera de horario: próximo horario visible.

Debe existir una pausa manual para casos excepcionales, aunque el horario diga que el local está abierto.

### Horarios

Se configurarán horarios semanales simples y excepciones manuales. La primera versión no necesita calendarios complejos ni múltiples turnos por sucursal.

## 2. Flujo de selección

- Mantener `Agregar` como acción principal de la tarjeta.
- Mostrar confirmación breve al agregar un producto sin modificadores.
- Abrir selector claro cuando haya modificadores requeridos.
- Permitir aumentar, reducir, editar y eliminar líneas desde el resumen.
- Mantener el pedido al seguir recorriendo categorías.
- Mostrar cantidad de productos y total informativo de manera consistente.
- Evitar que el resumen tape controles importantes en mobile.

## 3. Catálogo y descubrimiento

- Marcar productos recomendados o nuevos sin convertirlo en un sistema de promociones.
- Mostrar disponibilidad temporal con texto claro.
- Considerar búsqueda por nombre como P1.
- Mantener categorías y CTA de WhatsApp accesibles durante la navegación.

## 4. Accesibilidad y confianza

- Foco visible y orden lógico de teclado.
- Labels y nombres accesibles para botones, drawers y estados.
- Feedback textual además de animación o color.
- Mensaje explícito de que el total es informativo y la confirmación final ocurre por WhatsApp.
- Estados de carga, error, vacío y selección inválida comprensibles.

## 5. Fuera de alcance

No se modifica la operación manual de C8 ni se persiste el pedido del cliente en Foodtrack. No se agregan cuentas, pagos, delivery, automatización de WhatsApp ni infraestructura productiva.
