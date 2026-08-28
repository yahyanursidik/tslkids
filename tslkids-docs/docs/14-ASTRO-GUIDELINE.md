# 14 — Astro Guideline

## Directory

Recommended:

```text
src/
├── assets/
├── components/
│   ├── global/
│   ├── home/
│   ├── program/
│   ├── ui/
│   └── interactive/
├── content/
│   ├── programs/
│   ├── faq/
│   └── teachers/
├── layouts/
├── pages/
├── scripts/
├── styles/
└── content.config.ts
```

## Components

Gunakan `.astro` untuk static/presentational components.

Gunakan TypeScript modules untuk interaction ringan.

## Hydration

Jangan memakai `client:load` tanpa alasan.

Prefer:

- zero hydration;
- `client:visible`;
- `client:idle`;

jika framework island nanti benar-benar dipakai.

## Content Collections

Program, FAQ, teachers harus memiliki schema.

Content schema membantu mencegah invalid content.

## Layouts

Minimal:

- `BaseLayout.astro`
- `PageLayout.astro`
- `ProgramLayout.astro`

## Global CSS

Recommended:

```text
styles/
├── tokens.css
├── reset.css
├── typography.css
├── global.css
├── motion.css
└── utilities.css
```

Utilities jangan berkembang menjadi pseudo-Tailwind buatan sendiri.

## TypeScript

Strict mode preferred.

Jangan menggunakan `any` tanpa kebutuhan.
