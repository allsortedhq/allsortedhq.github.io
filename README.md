# AllSorted HQ — marketing site

Static one-page marketing site for **AllSorted HQ** (tagline: *Tech, business & AI, all sorted.*).

Built for **GitHub Pages** — no build step. HTML / CSS / vanilla JS only.

## Local preview

```bash
cd allsortedhq-site
python3 -m http.server 8080
# open http://127.0.0.1:8080
```

## Contact config

Edit `js/main.js` → `CONFIG`:

| Field | Purpose |
|-------|---------|
| `WHATSAPP_URL` | Full `https://wa.me/…` link for buttons — number **never shown as text** |
| `FORM_ACCESS_KEY` | Web3Forms public access key (UUID). Forwards submissions without putting an email in the page source |
| `FORM_ENDPOINT` | Default `https://api.web3forms.com/submit` |
| `BOOKING_URL` | Optional Calendly; empty falls back to WhatsApp |

No email, phone or street address is displayed on the site.

## Regional pricing

Also in `CONFIG`:

- `packages` — ZAR base “from” prices
- `tiers.A/B/C.multiplier` — currently **2.75 / 1.4 / 1.0**
- `fxZarPerUnit` — approximate ZAR per 1 unit of each display currency (not live FX)
- `currencies` — display currencies and which tier each maps to when switched manually
- Country → currency / tier maps for geo detection

Detection order: geo-IP (`geojs`) → browser language → **Tier A / USD**.

Currency switcher changes **display currency** and selects the tier for that currency’s main region.

## GitHub Pages

1. Create a repo (e.g. `allsortedhq.github.io` or project Pages).
2. Push this folder’s contents to the default branch.
3. Enable Pages → Deploy from branch → root.
4. Optional later: add a `CNAME` file with your custom domain (none included yet).
5. `.nojekyll` is included so GitHub Pages serves files as-is.

## Structure

```
index.html
privacy.html
css/styles.css
js/main.js          # CONFIG (contact + pricing) + interactions
assets/logo.svg
assets/favicon.svg
screenshots/
README.md
.nojekyll
```
