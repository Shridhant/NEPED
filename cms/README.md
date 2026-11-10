# NEPED CMS (Strapi 5)

Staff edit content at `https://cms.<domain>/admin`. Publishing triggers a Vercel rebuild, which pulls the published content (and photos) into the static site. The public site never calls the CMS, so it stays up even if the VPS is down.

```
Staff ─► Strapi admin (VPS: Node + PostgreSQL + /uploads)
              │ Publish → webhook
              ▼
         Vercel deploy hook ─► npm run build ─► scripts/fetch-cms.mjs (pulls content + photos) ─► live
```

## What is editable

| CMS type      | Shows on                                   | Replaces (fallback when CMS not connected) |
|---------------|--------------------------------------------|--------------------------------------------|
| Project       | Projects table, homepage project timeline  | `src/data/neped/projectList.ts`            |
| Gallery Album | Gallery page, site intro preloader         | `src/data/shared/galleryAlbumsData.ts`     |
| Blog          | Not shown yet (no blog page on the site)   | –                                          |

`order` fields: lower numbers show first. Imported entries use 10, 20, 30… so a new item can go in between (e.g. 15).
Photo alt text is set per photo in **Media Library → edit photo → Alternative text**.

## 1. Server setup (Hostinger KVM 1, Ubuntu)

```bash
# Swap: building the admin panel needs more than 4 GB RAM at peak
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Node 22 LTS, PostgreSQL, nginx, certbot, pm2
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs postgresql nginx certbot python3-certbot-nginx
sudo npm install -g pm2

# Firewall: only SSH + web (Postgres and Strapi stay on localhost)
sudo ufw allow OpenSSH && sudo ufw allow 'Nginx Full' && sudo ufw enable

# Database
sudo -u postgres psql -c "CREATE USER neped_cms WITH PASSWORD '<strong password>';"
sudo -u postgres psql -c "CREATE DATABASE neped_cms OWNER neped_cms;"
```

## 2. Install the CMS

```bash
git clone <repo url> ~/NEPED && cd ~/NEPED/cms
cp .env.example .env        # fill in PUBLIC_URL, DB password, and secrets (openssl rand -base64 32)
npm ci
NODE_ENV=production npm run build
pm2 start deploy/ecosystem.config.cjs && pm2 save && pm2 startup
```

DNS: add an `A` record `cms` → VPS IP. Then nginx + HTTPS:

```bash
sudo cp deploy/nginx-cms.conf /etc/nginx/sites-available/neped-cms   # edit server_name first
sudo ln -s /etc/nginx/sites-available/neped-cms /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d cms.<domain>
```

Open `https://cms.<domain>/admin` and create the first admin account immediately (the first visitor becomes super admin).

## 3. Import the current site content (once)

1. Admin → Settings → API Tokens → create **"import"**, type *Full access*, duration 7 days.
2. On the VPS:
   ```bash
   cd ~/NEPED/cms && CMS_URL=http://127.0.0.1:1337 CMS_IMPORT_TOKEN=<token> npm run import-content
   ```
   Imports the 12 projects and 9 gallery albums (83 photos) exactly as they are on the site. Re-running skips existing entries.
3. Delete the import token.

## 4. Connect the website (Vercel)

1. Admin → Settings → API Tokens → create **"website build"**, type *Read-only*, duration *Unlimited*.
2. Vercel → Project → Settings → Environment Variables (Production):
   - `CMS_URL` = `https://cms.<domain>`
   - `CMS_TOKEN` = the read-only token
3. Vercel → Settings → Git → **Deploy Hooks** → create one for `main`, copy the URL.
4. Strapi Admin → Settings → Webhooks → create **"Rebuild website"** with that URL, events: Entry *publish, unpublish, delete* and Media *update, delete*.
5. Redeploy once in Vercel. Build log should show `[cms] 12 projects, 9 albums, 0 blogs, … images`.

If the CMS can't be reached during a build, the build fails and the previous version stays live.

## 5. Editor accounts

Admin → Settings → Administration panel → Users → *Invite new user*.
- **Editor** role: can create and publish content.
- **Author** role: can create drafts only; an Editor/Super Admin publishes. Use this if every change needs approval.

## Maintenance

- Backups: `crontab -e` → `30 2 * * * /home/<user>/NEPED/cms/deploy/backup.sh >> /home/<user>/cms-backup.log 2>&1` (database + uploads, 14 days kept). Copy backups off the VPS periodically.
- Update code: `git pull && npm ci && NODE_ENV=production npm run build && pm2 restart neped-cms`
- Changing content types (new fields): do it in this repo (`npm run develop` locally edits `src/api/**/schema.json`), commit, then update on the server. The Content-Type Builder is disabled in production.
- Logs: `pm2 logs neped-cms`
