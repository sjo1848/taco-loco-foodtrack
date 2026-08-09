# Taco Loco Foodtrack — documentación local

La documentación de trabajo vive en este repositorio. La carpeta `docs/drive/` es un espejo de respaldo de los Google Docs de Taco Loco Foodtrack.

## Política de fuentes

- Fuente de trabajo: estos archivos locales.
- Respaldo cloud: carpeta [Taco Loco Foodtrack](https://drive.google.com/drive/folders/1mKR29pVVxtEX328DxpTsfsu_ohwgY9AM).
- Los documentos de Drive no se modifican automáticamente durante la implementación.
- Si una decisión canónica cambia, se actualiza primero el archivo local y luego se sincroniza explícitamente con Drive.

## Estado de la documentación

- Fases 0–3: cerradas.
- Fase 4 UI: `pantallas.pen` identificado como fuente editable local de Taco Loco; queda validación visual final en pen.dev.
- Fase 5: cerrada.
- Fase 6: cerrada.
- Gate de construcción: abierto; C1 validado localmente.
- Runtime: Node 22 LTS + pnpm 11; el lockfile operativo es `pnpm-lock.yaml`.
- Runtime fijado: Node 22 LTS + pnpm 11; el lockfile operativo es `pnpm-lock.yaml`.
- C2 completo (TL-010 a TL-018) implementado; upload local validado y R2 reservado para producción.
- C3 frontend público (TL-020 a TL-028) implementado y validado con PostgreSQL local.
- C4 administración (TL-030 a TL-039) implementado y validado con sesión y PostgreSQL local.
- C5 QA/hardening: base automatizada y checklist local en [`QA-C5.md`](QA-C5.md).
- C6 release: preparación local en [`RELEASE-RUNBOOK.md`](RELEASE-RUNBOOK.md), con Docker/Compose, healthcheck, backup/restore y Caddy de ejemplo.
- Desarrollo local: media usa `.local-media/`; producción usará R2 mediante el mismo adaptador.
- Checklist de inputs y cierre C6 en [`C6-RELEASE-CHECKLIST.md`](C6-RELEASE-CHECKLIST.md).
- Plantilla de cierre en [`RELEASE-ACTA.md`](RELEASE-ACTA.md).
- Prompt canónico para generar imágenes del catálogo en [`IMAGE-GENERATION-PROMPT.md`](IMAGE-GENERATION-PROMPT.md).
- Propuesta C7: [`C7-ALCANCE-PEDIDO-WHATSAPP.md`](C7-ALCANCE-PEDIDO-WHATSAPP.md), [`C7-PLAN-IMPLEMENTACION.md`](C7-PLAN-IMPLEMENTACION.md), [`DECISION-001-SELECCION-Y-PAGOS.md`](DECISION-001-SELECCION-Y-PAGOS.md) y [`ROADMAP-NATURAL.md`](ROADMAP-NATURAL.md).
- Criterios QA C7 en [`C7-QA-CRITERIA.md`](C7-QA-CRITERIA.md).
- Decisiones de implementación C7 en [`C7-DECISIONES-IMPLEMENTACION.md`](C7-DECISIONES-IMPLEMENTACION.md).
- Evidencia de QA C7 en [`QA-C7.md`](QA-C7.md).
- Evidencia de QA C8-01 en [`QA-C8-01.md`](QA-C8-01.md).
- Evidencia de QA C8-02 en [`QA-C8-02.md`](QA-C8-02.md).
- Evidencia de QA C8-03 en [`QA-C8-03.md`](QA-C8-03.md).
- Planificación C8: [`C8-ANALISIS-PLAN-MAESTRO.md`](C8-ANALISIS-PLAN-MAESTRO.md), [`C8-ALCANCE-OPERACION-WHATSAPP.md`](C8-ALCANCE-OPERACION-WHATSAPP.md), [`C8-PLAN-IMPLEMENTACION.md`](C8-PLAN-IMPLEMENTACION.md), [`C8-QA-CRITERIA.md`](C8-QA-CRITERIA.md) y [`DECISION-002-C8-OPERACION.md`](DECISION-002-C8-OPERACION.md).

## Especificación visual local

- [`pantallas.pen`](../pantallas.pen): fuente editable local identificada para Taco Loco; contiene Foundations, Components, UI pública y Admin.
- `taco-loco-ui.pen`: archivo local descartado y excluido del repositorio porque corresponde a otro proyecto.

## Espejo de Drive

Los archivos numerados en `docs/drive/` conservan el título y la URL de origen en frontmatter para poder rastrear cada documento y sincronizar cambios de forma controlada.
