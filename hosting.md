# Hosting + Shareable Link Setup

**v2.0 · 2026-05-12**

Three paths to a clean shareable URL for the India Water Canvas, ordered from fastest to most polished.

---

## Path A · GitHub Pages default (free · instant · ugly URL)

**URL you get:** `https://ashwask.github.io/RFPartnerMap/Water/dashboard.html`

**Setup (5 minutes):**
1. Visit `https://github.com/Ashwask/RFPartnerMap/settings/pages`
2. Source: **Deploy from a branch**
3. Branch: `main` · Folder: `/ (root)`
4. Save · wait ~1 minute for first build
5. URL goes live at `https://ashwask.github.io/RFPartnerMap/Water/dashboard.html`

**Pros:** zero cost · zero DNS work
**Cons:** long URL · ties artefact to your GitHub username

---

## Path B · Custom domain `waterdashboard.in` (the requested path)

**URL you get:** `https://waterdashboard.in/Water/` or (with redirect) `https://waterdashboard.in/`

**Setup (30-60 minutes):**

### Step 1 · Register the domain
- Pick a registrar: Cloudflare Registrar (cheapest · ~$8-10/yr) · Namecheap (~$10-12/yr) · Google Domains
- Check availability: `waterdashboard.in` may or may not be free · if taken, alternates:
  - `indiawatercanvas.org`
  - `water-canvas.in`
  - `canvas-water.org`
  - `india-water.canvas` (newer TLD · pricier)
  - `watercanvas.in`
- Buy. Wait for activation (5-15 min).

### Step 2 · Configure DNS at your registrar
Point your domain at GitHub Pages servers. Use either A records (recommended) or CNAME.

**A record approach (recommended for apex domain):**
Add 4 A records pointing to GitHub Pages IPs:
```
A · @ · 185.199.108.153
A · @ · 185.199.109.153
A · @ · 185.199.110.153
A · @ · 185.199.111.153
```

Plus a CNAME for `www`:
```
CNAME · www · ashwask.github.io
```

### Step 3 · Tell GitHub Pages your custom domain
1. Visit `https://github.com/Ashwask/RFPartnerMap/settings/pages`
2. Under "Custom domain", enter: `waterdashboard.in`
3. Save · wait for DNS check (5-10 min · sometimes 24 hr)
4. Once verified, **enable "Enforce HTTPS"** (Let's Encrypt cert auto-issued)

This also creates the `CNAME` file in the repo automatically (or use the placeholder in this repo at `/CNAME` and replace it with your actual domain).

### Step 4 · (Optional) Clean root URL
If you want `https://waterdashboard.in/` to land directly on the water canvas (not the Partner Map dashboard at root):

**Option (a):** Add a small `index.html` at `/Water/index.html` so `https://waterdashboard.in/Water/` works → already done (see this commit · `Water/index.html` redirect to `dashboard.html`)

**Option (b):** Add a root redirect at `/index.html` that bounces to `/Water/dashboard.html` → conflicts with the existing Partner Map root, so NOT recommended

**Option (c):** Spin up a dedicated repo for the water canvas (`Ashwask/india-water-canvas`) so the domain points to clean root → cleanest but doubles maintenance · save for v3.0

**Pros of Path B:** clean URL · memorable · long-term ownership
**Cons:** ~$10/yr ongoing · DNS setup once · domain availability dependent

---

## Path C · URL shortener (zero setup · zero cost · third-party dependence)

**URL you get:** `https://bit.ly/india-water-canvas` (or similar)

**Setup (2 minutes):**
1. Visit `https://bit.ly` (or Rebrandly · TinyURL)
2. Paste: `https://ashwask.github.io/RFPartnerMap/Water/dashboard.html`
3. Customise slug to `india-water-canvas`
4. Copy short URL · share

**Pros:** fastest of all · no DNS · no domain cost
**Cons:** depends on shortener uptime · not your branding · can break if shortener dies

---

## Recommendation for v2.0 reader-test phase

**Use Path A immediately** (free · instant · ugly but works for reviewers who don't care about URL aesthetics)

**Use Path B once reader-test feedback is positive + anchor commitments arrive** (signals seriousness · clean URL for citation)

Skip Path C unless time pressure is acute.

---

## What's in this repo for hosting

- `/CNAME` · placeholder for custom domain (replace `waterdashboard.in` with your actual domain when you set it up)
- `/Water/index.html` · directory-default redirect to `dashboard.html` · makes `https://<your-domain>/Water/` work cleanly
- This file (`hosting.md`) · setup reference

---

## Common gotchas

- **DNS propagation can take 24 hr** · don't panic if site doesn't load immediately after DNS change
- **HTTPS cert takes ~10 min** after GitHub Pages verifies domain
- **CNAME file in repo gets overwritten** by GitHub Pages when you set custom domain in settings · don't hand-edit it after that
- **Apex domain (waterdashboard.in) vs www (www.waterdashboard.in):** both should work · GitHub auto-redirects between them when configured
- **DNS provider quirks:** Cloudflare's proxy must be **DNS-only mode (grey cloud)** for GitHub Pages, not proxied (orange cloud)
