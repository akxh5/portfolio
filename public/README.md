# SEO Implementation Guide — akxh5.me

## Files in this package

| File | Destination in your repo | What it does |
|---|---|---|
| `index.html` | `/index.html` (replace existing) | Full meta, OG, Twitter cards, JSON-LD |
| `robots.txt` | `/public/robots.txt` | Tells crawlers to index everything |
| `sitemap.xml` | `/public/sitemap.xml` | Tells Google all your URLs |
| `route-head-configs.tsx` | Merge into each `src/routes/*.tsx` | Per-route meta/canonical tags |
| `vite.config.ts` | `/vite.config.ts` (merge plugins) | Pre-renders routes at build time |

---

## Step 1 — Copy static files

```bash
cp robots.txt  your-repo/public/robots.txt
cp sitemap.xml your-repo/public/sitemap.xml
```

---

## Step 2 — Replace index.html

Replace your existing `index.html` with the one provided.

> **Note:** The `og-image.png` is referenced in OG/Twitter tags.
> Create a 1200×630px image (screenshot of your hero, or your name on a dark bg)
> and place it at `public/og-image.png`.

---

## Step 3 — Add prerendering (CRITICAL for SPA SEO)

Your site is a Vite SPA. Googlebot struggles with client-rendered React.
Prerendering generates real HTML at build time for each route.

```bash
npm i -D vite-plugin-prerender
```

Then merge the plugin config from `vite.config.ts` into your existing one.

---

## Step 4 — Add per-route head tags

Open each route file and add/update the `head` property from `route-head-configs.tsx`.
TanStack Router's `head` injects these into `<head>` at render time.

---

## Step 5 — Submit to Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `https://akxh5.me`
3. Verify ownership (HTML file method or DNS TXT record)
4. Submit sitemap: `https://akxh5.me/sitemap.xml`
5. Request indexing on each URL

---

## Step 6 — Submit to Bing Webmaster Tools

https://www.bing.com/webmasters — same process, reaches Bing + DuckDuckGo.

---

## What this makes you rank for

| Search query | Why you'll rank |
|---|---|
| `Akshansh Sharma` | Name in title, JSON-LD Person schema, canonical |
| `Akshansh` | First name appears in title + meta across all pages |
| `akxh5` | Username in meta keywords, alternateName in JSON-LD, GitHub/Twitter sameAs |
| `akxh_5` | Twitter handle in JSON-LD alternateName + twitter:creator tag |
| `syn8x` | Project name in /projects title, meta description, JSON-LD ItemList |
| `Oper8a` | Same |
| `TerraLedger` | Same |
| `Arch1v` | Same |
| `Superteam India developer` | Mentioned in /about meta description |
| `Wormhole Foundation` | Same |
| `Solana Turbine` | Same |

---

## Ongoing tips

- **Write regularly** on `/writing` — each post is a new indexed URL and builds authority
- **Link back to akxh5.me** from your GitHub profile, Twitter bio, and LinkedIn
- **Get backlinks** — share your projects on Twitter, Superteam forums, Solana dev Discord
- **Core Web Vitals** — run `npx lighthouse https://akxh5.me` and fix any LCP/CLS issues (GSAP + Framer Motion can cause layout shift)
- Keep `sitemap.xml` updated whenever you add new writing posts
