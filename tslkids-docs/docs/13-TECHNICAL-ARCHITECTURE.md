# 13 — Technical Architecture

## Stack

```text
Astro 7
TypeScript
Astro Content Collections
Native CSS
Hallmark
Lucide
Netlify
```

## Architecture Principle

**Static first.**

```text
Browser
   ↓
Netlify CDN
   ↓
Static Astro pages
   ├── Content Collections
   ├── CSS
   └── Minimal JS islands
```

## JavaScript Boundary

JS hanya untuk:

- Program Finder;
- registration multi-step;
- accordion bila native/detail implementation tidak memenuhi UX;
- analytics event;
- small motion enhancements.

## Framework Islands

React tidak dipasang secara default.

Sebelum menambahkan client framework, jawab:

1. Mengapa native DOM/TS tidak cukup?
2. Apa ukuran dependency?
3. Apakah component ini benar-benar membutuhkan hydration?
4. Apa impact performance?

## Data

V1:

- Programs → Content Collection
- FAQ → Content Collection
- Teachers → Content Collection

Future student data harus dipisah dari public content.

## Security

Tidak menaruh secret di client bundle.

Sensitive submission diproses server/function/API.

## Image

Gunakan Astro image optimization jika memungkinkan.

Set width/height untuk mencegah CLS.

## Dependency Policy

Setiap dependency baru harus memiliki alasan.

Hindari library untuk fitur yang dapat dilakukan dengan platform browser secara sederhana.
