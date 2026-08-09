# Runbook de release y recuperación

## Producción

1. Copiar `.env.production.example` a `.env.production` fuera del repositorio y completar secretos reales.
2. Construir y levantar con `PROD_ENV_FILE=.env.production docker compose --env-file .env.production -f docker-compose.prod.yml up -d --build`.
3. Ejecutar migraciones controladas con `PROD_ENV_FILE=.env.production docker compose --env-file .env.production -f docker-compose.prod.yml exec app ./node_modules/.bin/prisma migrate deploy`.

En una máquina donde el puerto 3000 ya esté ocupado, usar temporalmente `APP_PORT=3013` y ajustar el upstream de Caddy para esa prueba.
4. Verificar `GET /api/health` y el smoke de [`QA-C5.md`](QA-C5.md).
5. Publicar detrás de Caddy/HTTPS; PostgreSQL permanece sin puerto público.

## Backup

`DATABASE_URL=... ./ops/backup-postgres.sh` genera un dump comprimido local. En producción debe ejecutarse diariamente y copiarse a storage offsite con retención mínima de 7 diarios y 4 semanales.

Los scripts requieren `pg_dump` y `psql` disponibles en el host o dentro de una imagen PostgreSQL de operaciones.

## Restore

No ejecutar sobre producción sin una ventana aprobada. Probar primero en un entorno controlado:

`DATABASE_URL=... BACKUP_FILE=... CONFIRM_RESTORE=YES ./ops/restore-postgres.sh`

Luego verificar conteo de categorías/productos, login admin y `/api/health`.
