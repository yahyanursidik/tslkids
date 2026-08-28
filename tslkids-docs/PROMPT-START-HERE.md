# PROMPT-START-HERE.md

Gunakan prompt ini pada percakapan pertama AI coding:

---

Saya ingin Anda mengembangkan website **Tarbiyah Sunnah Learning Kids (TSL Kids)** untuk domain `tslkids.my.id`.

Repository ini sudah memiliki dokumentasi requirement.

## Instruksi

1. Baca `AGENTS.md`.
2. Baca seluruh file `.md` di `/docs`.
3. Jangan coding dulu.
4. Audit repository existing secara menyeluruh.
5. Ringkas pemahaman Anda tentang:
   - tujuan bisnis;
   - audience;
   - tiga program;
   - information architecture;
   - UI/UX;
   - design system;
   - Hallmark / anti-AI-slop constraints;
   - motion;
   - accessibility;
   - Astro architecture;
   - Netlify strategy.
6. Identifikasi conflict, gap, dan risiko implementation.
7. Buat development plan mengikuti `docs/17-DEVELOPMENT-PLAN.md`.
8. Setelah itu kerjakan **Phase 1 Foundation saja**.
9. Jangan mengerjakan seluruh website sekaligus.
10. Setelah Phase 1:
   - run build;
   - audit hasil;
   - laporkan file changed;
   - laporkan keputusan teknis;
   - berhenti dan tunggu instruksi phase berikutnya.

## Stack yang tidak boleh diganti tanpa alasan

- Astro 7
- TypeScript
- Astro Content Collections
- native CSS + design tokens
- Hallmark
- Lucide
- CSS/Web API motion
- Netlify

Jangan install React, Tailwind, GSAP, Framer Motion, component library, atau database hanya karena memudahkan Anda.

Gunakan native Astro/CSS/TypeScript terlebih dahulu.

Website harus **mobile-first, static-first, accessible, cepat, dan anti-AI-slop**.
