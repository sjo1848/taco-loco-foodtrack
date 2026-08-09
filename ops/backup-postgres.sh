#!/usr/bin/env sh
set -eu

: "${DATABASE_URL:?DATABASE_URL is required}"
BACKUP_DIR="${BACKUP_DIR:-./backups/postgres}"
mkdir -p "$BACKUP_DIR"
STAMP="$(date -u +%Y%m%dT%H%M%SZ)"
OUT="$BACKUP_DIR/taco-loco-$STAMP.sql.gz"
DATABASE_URL_BASE="${DATABASE_URL%%\?*}"
TMP="$OUT.sql"
trap 'rm -f "$TMP"' EXIT HUP INT TERM
pg_dump "$DATABASE_URL_BASE" > "$TMP"
gzip -9 < "$TMP" > "$OUT"
find "$BACKUP_DIR" -type f -name 'taco-loco-*.sql.gz' -mtime +28 -delete
printf 'Backup written: %s\n' "$OUT"
