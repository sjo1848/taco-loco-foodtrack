#!/usr/bin/env sh
set -eu

: "${MENU_URL:?MENU_URL is required}"
OUTPUT_FILE="${OUTPUT_FILE:-./menu-qr.svg}"

case "$MENU_URL" in
  https://*) : ;;
  *) echo "MENU_URL must use HTTPS for a release QR." >&2; exit 1 ;;
esac

if ! command -v qrencode >/dev/null 2>&1; then
  echo "qrencode is required to generate the QR asset." >&2
  exit 1
fi

qrencode -t SVG -o "$OUTPUT_FILE" "$MENU_URL"
printf 'QR written: %s\n' "$OUTPUT_FILE"
