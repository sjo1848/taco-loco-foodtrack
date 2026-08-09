#!/usr/bin/env sh
set -eu

: "${DATABASE_URL:?DATABASE_URL is required}"
: "${BACKUP_FILE:?BACKUP_FILE is required}"
if [ "${CONFIRM_RESTORE:-}" != "YES" ]; then
  echo "Refusing restore. Set CONFIRM_RESTORE=YES explicitly." >&2
  exit 1
fi
DATABASE_URL_BASE="${DATABASE_URL%%\?*}"
gzip -dc "$BACKUP_FILE" | psql "$DATABASE_URL_BASE"
printf 'Restore completed from: %s\n' "$BACKUP_FILE"
