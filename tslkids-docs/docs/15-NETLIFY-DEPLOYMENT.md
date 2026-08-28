# 15 — Netlify Deployment

## Host

Netlify.

Domain:

`tslkids.my.id`

## Deployment Model

V1 static site.

Recommended pipeline:

```text
Git
↓
Netlify Build
↓
Astro Build
↓
dist/
↓
Netlify CDN
```

## Preview Deployment

Gunakan deploy preview untuk:

- QA;
- stakeholder review;
- mobile checking;
- copy review.

## Environment Variables

Secret hanya melalui Netlify environment variables.

Jangan commit `.env`.

## Forms

Jika menggunakan Netlify Forms atau Functions:

- validate server-side;
- anti-spam;
- clear success/error state;
- jangan expose secret.

## Redirects

Buat redirect hanya jika diperlukan.

Gunakan canonical URL untuk menjaga konsistensi domain.

## Build Gate

Deploy production hanya setelah:

- build clean;
- links checked;
- form checked;
- SEO metadata checked;
- analytics checked;
- responsive QA;
- performance QA.
