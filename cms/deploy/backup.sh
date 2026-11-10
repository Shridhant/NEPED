#!/usr/bin/env bash
# Nightly backup of the CMS database and uploaded photos; keeps the last 14 days.
# crontab -e  →  30 2 * * * /home/neped/NEPED/cms/deploy/backup.sh >> /home/neped/cms-backup.log 2>&1
set -euo pipefail
CMS_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BACKUP_DIR="${BACKUP_DIR:-$HOME/cms-backups}"
STAMP="$(date +%F)"
set -a; source "$CMS_DIR/.env"; set +a

mkdir -p "$BACKUP_DIR"
PGPASSWORD="$DATABASE_PASSWORD" pg_dump -h "$DATABASE_HOST" -U "$DATABASE_USERNAME" -Fc "$DATABASE_NAME" > "$BACKUP_DIR/db-$STAMP.dump"
tar -czf "$BACKUP_DIR/uploads-$STAMP.tar.gz" -C "$CMS_DIR/public" uploads
find "$BACKUP_DIR" -type f -mtime +14 -delete
echo "$(date) backup ok"
