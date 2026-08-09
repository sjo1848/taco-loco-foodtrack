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
- Etapa actual: C7 cerrado; C8 plan operativo cerrado, listo para implementación local.
- C1: implementado y validado localmente.
- C2 catálogo: TL-010 a TL-014 implementados y validados localmente.
- C2 auth: TL-015/016 implementados y validados localmente.
- C2 media: TL-017/018 implementados y validados localmente; R2 queda pendiente solo para producción.
- Media local: 26/31 productos tienen imagen cargada y servida en desarrollo con `.local-media/`; 5 quedan pendientes de referencia real. R2 queda reservado para producción.
- QA visual local: menú verificado en desktop y mobile con Playwright; imágenes, CTA WhatsApp y estados sin imagen verificados.
- C7: cerrado localmente; selección opcional, cantidades, modificadores canónicos, resumen editable, sessionStorage, composer de WhatsApp y motion UI validados.
- C8-01: contrato y esquema de pedidos implementado y validado localmente; evidencia en [`QA-C8-01.md`](QA-C8-01.md). C8-02 es el próximo bloque.
- C3 frontend público: TL-020 a TL-028 implementados y validados localmente.
- C4 administración: TL-030 a TL-039 implementados y validados localmente.
- C5 integración/hardening: automatización base, smoke Playwright local y hardening implementados; pendientes CI browser matrix y evidencia de backup/restore productivo.
- C6 release: preparación operativa local implementada; backup/restore probado sobre base temporal, producción pendiente de dominio/HTTPS, R2, backup offsite, configuración comercial final y QR.
- Bloqueo de cierre: faltan inputs reales de negocio e infraestructura; no se usan placeholders para un release.
- Pendientes no bloqueantes: referencias reales para 5 imágenes y email admin definitivo.
- Seguridad de dependencias: `pnpm audit --audit-level=high` sin vulnerabilidades conocidas.

## Próxima secuencia

1. Implementar C8-01: contrato y esquema local de pedido.
2. Implementar C8-02: máquina de estados y auditoría.
3. Implementar C8-03/C8-04: alta manual, bandeja y detalle.
4. Ejecutar QA y demo interna de C8.
5. Respaldar en Drive únicamente cuando el usuario lo solicite.

## Próximo ciclo

Comenzar C8-01 con los defaults definidos en [C8-ANALISIS-PLAN-MAESTRO.md](./C8-ANALISIS-PLAN-MAESTRO.md). La observación operativa se incorpora como validación paralela.

## Regla de decisión

La UI principal ya está aprobada visualmente, por lo que se habilita la construcción. No se agregan funcionalidades fuera de `ALC-001` durante la construcción.
