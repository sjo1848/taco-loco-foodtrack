# C9 — Decisiones UX

Estado: decisiones base propuestas — 2026-08-09.

| Tema | Decisión C9 | Motivo |
|---|---|---|
| Estado del local | Configurable desde administración | Evita recibir pedidos fuera de operación |
| Horarios | Semanales simples + pausa manual + excepciones | Resuelve el caso real sin calendario complejo |
| Canal | WhatsApp sigue siendo externo | C8 ya valida la operación manual |
| Pedido | Resumen editable y persistente durante la sesión | Reduce errores y permite seguir consultando |
| Cantidad | Control principal en resumen o selector, no en cada tarjeta | Mantiene limpia la consulta del menú |
| Total | Informativo | No hay pago ni confirmación automática |
| Destacados | Etiqueta administrable simple | Mejora descubrimiento sin promociones complejas |
| Agotados | Estado textual y acción bloqueada | Evita falsas expectativas |
| Mobile | Prioridad de diseño y prueba | Es el contexto más probable del cliente |
| Accesibilidad | Feedback textual, foco y labels | La interacción no depende del color o la animación |
| Persistencia | Mantener el criterio vigente de C7 | Evita cambiar comportamiento sin necesidad |

## Decisión sobre integración con WhatsApp

No se automatiza en C9. El flujo seguirá siendo:

```text
Cliente arma selección → genera mensaje → envía por WhatsApp → operador registra en C8
```

Una futura integración podrá crear un pedido como `RECIBIDO`, pero antes deberá existir una bandeja de mensajes sugeridos, revisión humana, manejo de duplicados y reglas de seguridad. Esa decisión queda para una etapa específica posterior.
