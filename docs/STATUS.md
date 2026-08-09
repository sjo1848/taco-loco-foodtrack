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
- Etapa actual: primera implementación local de C7 y validación del flujo.
- C1: implementado y validado localmente.
- C2 catálogo: TL-010 a TL-014 implementados y validados localmente.
- C2 auth: TL-015/016 implementados y validados localmente.
- C2 media: TL-017/018 implementados y validados localmente; R2 queda pendiente solo para producción.
- Media local: 26/31 productos tienen imagen cargada y servida en desarrollo con `.local-media/`; 5 quedan pendientes de referencia real. R2 queda reservado para producción.
- QA visual local: menú verificado en desktop y mobile con Playwright; imágenes, CTA WhatsApp y estados sin imagen verificados.
- C7: primera implementación local realizada: selección opcional, cantidades, modificadores canónicos, resumen editable, sessionStorage y composer de WhatsApp; pendiente revisión final de negocio/UI.
- C3 frontend público: TL-020 a TL-028 implementados y validados localmente.
- C4 administración: TL-030 a TL-039 implementados y validados localmente.
- C5 integración/hardening: automatización base, smoke Playwright local y hardening implementados; pendientes CI browser matrix y evidencia de backup/restore productivo.
- C6 release: preparación operativa local implementada; backup/restore probado sobre base temporal, producción pendiente de dominio/HTTPS, R2, backup offsite, configuración comercial final y QR.
- Bloqueo de cierre: faltan inputs reales de negocio e infraestructura; no se usan placeholders para un release.
- Pendientes no bloqueantes: referencias reales para 5 imágenes y email admin definitivo.
- Seguridad de dependencias: `pnpm audit --audit-level=high` sin vulnerabilidades conocidas.

## Próxima secuencia

1. Cerrar la revisión local del MVP y dejar explícitos los cinco productos sin referencia de imagen.
2. Definir el email admin y validar visualmente `pantallas.pen` en pen.dev.
3. Registrar el cierre del release candidate local; dominio, R2, servidor y QR quedan para cuando se decida publicar.
4. Revisar la primera implementación local de C7 y aprobar texto/UI final.
5. Registrar la revisión visual de `pantallas.pen` en pen.dev.
6. Respaldar en Drive únicamente cuando el usuario lo solicite.

## Próximo ciclo

Cerrar formalmente el MVP local y luego revisar/aprobar C7 antes de iniciar UX/UI y construcción de selección de productos.

## Regla de decisión

La UI principal ya está aprobada visualmente, por lo que se habilita la construcción. No se agregan funcionalidades fuera de `ALC-001` durante la construcción.
