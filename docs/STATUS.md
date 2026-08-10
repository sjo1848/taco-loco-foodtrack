# Estado operativo — Taco Loco Foodtrack

Actualizado: 2026-08-09

## Política vigente

La documentación de trabajo y las decisiones operativas se mantienen en el repositorio local. Google Drive funciona únicamente como respaldo cloud bajo decisión explícita del usuario.

## Estado

- Fases 0–3: cerradas.
- Fase 4 UI: `pantallas.pen` identificado como fuente editable local de Taco Loco; queda validación visual final en pen.dev.
- Fase 5 técnica: cerrada en la documentación espejo.
- Fase 6 QA/backlog: cerrada en la documentación espejo.
- Gate de construcción: abierto.
- Etapa actual: C9 cerrado como MVP UX local; no es un release productivo.
- C1: implementado y validado localmente.
- C2 catálogo: TL-010 a TL-014 implementados y validados localmente.
- C2 auth: TL-015/016 implementados y validados localmente.
- C2 media: TL-017/018 implementados y validados localmente; R2 queda pendiente solo para producción.
- Media local: 26/31 productos tienen imagen cargada y servida en desarrollo con `.local-media/`; 5 quedan pendientes de referencia real. R2 queda reservado para producción.
- QA visual local: menú verificado en desktop y mobile con Playwright; imágenes, CTA WhatsApp y estados sin imagen verificados.
- C7: cerrado localmente; selección opcional, cantidades, modificadores canónicos, resumen editable, sessionStorage, composer de WhatsApp y motion UI validados.
- C8-01: contrato y esquema de pedidos implementado y validado localmente; evidencia en [`QA-C8-01.md`](QA-C8-01.md).
- C8-02: transiciones transaccionales y auditoría implementadas y validadas localmente; evidencia en [`QA-C8-02.md`](QA-C8-02.md).
- C8-03: alta manual protegida por admin, snapshots server-side y evento inicial implementados y validados localmente; evidencia en [`QA-C8-03.md`](QA-C8-03.md).
- C8-04: bandeja, filtros, alta visual, detalle, timeline y acciones operativas implementados y validados localmente; evidencia en [`QA-C8-04.md`](QA-C8-04.md).
- C8-05: estados de carga/error, bloqueo de doble envío, sesión expirada, errores de red y regresión C7 implementados y validados; evidencia en [`QA-C8-05.md`](QA-C8-05.md).
- C8-06: QA integral, demo interna y cierre del MVP local aprobados; evidencia en [`QA-C8-FINAL.md`](QA-C8-FINAL.md) y [`C8-ACTA-CIERRE.md`](C8-ACTA-CIERRE.md).
- C9: planificación UX implementada y cerrada como MVP local; evidencia final en [`QA-C9-FINAL.md`](QA-C9-FINAL.md) y [`C9-ACTA-CIERRE.md`](C9-ACTA-CIERRE.md).
- C9-01: contexto operativo implementado y validado localmente; evidencia en [`QA-C9-01.md`](QA-C9-01.md).
- C9-02: resumen editable, quitar/vaciar pedido, feedback accesible y CTA contextual implementados y validados localmente; evidencia en [`QA-C9-02.md`](QA-C9-02.md).
- C9-03: búsqueda por nombre, descripción o categoría y estado vacío implementados y validados localmente; evidencia en [`QA-C9-03.md`](QA-C9-03.md).
- C9-04: responsive, foco accesible, descripciones de diálogos y movimiento reducido implementados y validados localmente; evidencia en [`QA-C9-04.md`](QA-C9-04.md).
- C9-05: QA integral, demo local y regresión C7+C8+C9 aprobadas; evidencia en [`QA-C9-FINAL.md`](QA-C9-FINAL.md) y [`C9-ACTA-CIERRE.md`](C9-ACTA-CIERRE.md).
- C10: planificación iterativa UX creada; C10-01, C10-02 y C10-03 aprobados. C10-03 registra la intención en admin como `Recibido` antes de abrir WhatsApp, sin confirmación automática; evidencia en [`QA-C10-03.md`](QA-C10-03.md). Próximo ciclo: C10-04 narrativa visual y descubrimiento.
- C3 frontend público: TL-020 a TL-028 implementados y validados localmente.
- C4 administración: TL-030 a TL-039 implementados y validados localmente.
- C5 integración/hardening: automatización base, smoke Playwright local y hardening implementados; pendientes CI browser matrix y evidencia de backup/restore productivo.
- C6 release: preparación operativa local implementada; backup/restore probado sobre base temporal, producción pendiente de dominio/HTTPS, R2, backup offsite, configuración comercial final y QR.
- Bloqueo de cierre: faltan inputs reales de negocio e infraestructura; no se usan placeholders para un release.
- Pendientes no bloqueantes: referencias reales para 5 imágenes y email admin definitivo.
- Seguridad de dependencias: `pnpm audit --audit-level=high` sin vulnerabilidades conocidas.

## Próxima secuencia

1. Observar la demo local y recoger feedback real de uso.
2. Completar únicamente cuando corresponda los inputs de producción: email, dominio/HTTPS, R2, backup offsite y referencias de 5 imágenes.
3. Respaldar en Drive únicamente cuando el usuario lo solicite.

## Próximo ciclo

La observación operativa queda como validación posterior al cierre. No se inicia producción ni pagos automáticamente.

## Regla de decisión

La UI principal ya está aprobada visualmente, por lo que se habilita la construcción. No se agregan funcionalidades fuera de `ALC-001` durante la construcción.
