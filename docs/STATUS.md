# Estado operativo — Taco Loco Foodtrack

Actualizado: 2026-08-09

## Política vigente

La documentación de trabajo y las decisiones operativas se mantienen en el repositorio local. Google Drive funciona únicamente como respaldo cloud bajo decisión explícita del usuario.

## Estado

- Fases 0–3: cerradas.
- Fase 4 UI: baseline aprobada para el código; fuente editable Taco Loco en pen.dev pendiente de reconciliar porque el canvas/file actual muestra otro proyecto.
- Fase 5 técnica: cerrada en la documentación espejo.
- Fase 6 QA/backlog: cerrada en la documentación espejo.
- Gate de construcción: abierto.
- Etapa actual: cierre del MVP local y planificación C7.
- C1: implementado y validado localmente.
- C2 catálogo: TL-010 a TL-014 implementados y validados localmente.
- C2 auth: TL-015/016 implementados y validados localmente.
- C2 media: TL-017/018 implementados y validados localmente; R2 queda pendiente solo para producción.
- Media local: 26/31 productos tienen imagen cargada y servida en desarrollo con `.local-media/`; 5 quedan pendientes de referencia real. R2 queda reservado para producción.
- QA visual local: menú verificado en desktop y mobile con Playwright; imágenes, CTA WhatsApp y estados sin imagen verificados.
- C7: propuesta de selección opcional y pedido armado por WhatsApp documentada; todavía no implementada ni incorporada al alcance canónico del MVP.
- C3 frontend público: TL-020 a TL-028 implementados y validados localmente.
- C4 administración: TL-030 a TL-039 implementados y validados localmente.
- C5 integración/hardening: automatización base, smoke Playwright local y hardening implementados; pendientes CI browser matrix y evidencia de backup/restore productivo.
- C6 release: preparación operativa local implementada; backup/restore probado sobre base temporal, producción pendiente de dominio/HTTPS, R2, backup offsite, configuración comercial final y QR.
- Bloqueo de cierre: faltan inputs reales de negocio e infraestructura; no se usan placeholders para un release.
- Pendientes no bloqueantes: referencias reales para 5 imágenes y email admin definitivo.
- Seguridad de dependencias: `pnpm audit --audit-level=high` sin vulnerabilidades conocidas.

## Próxima secuencia

1. Cerrar la revisión local del MVP y dejar explícitos los cinco productos sin referencia de imagen.
2. Definir el email admin y resolver el archivo visual canónico de Taco Loco en pen.dev.
3. Registrar el cierre del release candidate local; dominio, R2, servidor y QR quedan para cuando se decida publicar.
4. Revisar y aprobar formalmente el alcance C7.
5. Ejecutar UX → UI en pen.dev → diseño técnico → QA → construcción incremental de selección y pedido por WhatsApp.
6. Respaldar en Drive únicamente cuando el usuario lo solicite.

## Próximo ciclo

Cerrar formalmente el MVP local y luego revisar/aprobar C7 antes de iniciar UX/UI y construcción de selección de productos.

## Regla de decisión

La UI principal ya está aprobada visualmente, por lo que se habilita la construcción. No se agregan funcionalidades fuera de `ALC-001` durante la construcción.
