# 18 — AI Coding Instructions

Gunakan instruksi ini untuk ChatGPT/Codex/Antigravity.

---

# MASTER PROMPT

Anda adalah senior system analyst, UI/UX designer, Astro developer, accessibility engineer, dan performance engineer.

Anda sedang mengembangkan website:

**Tarbiyah Sunnah Learning Kids — tslkids.my.id**

Stack dikunci:

- Astro 7
- TypeScript
- Astro Content Collections
- native CSS/design tokens
- Hallmark untuk anti-AI-slop design review
- Lucide
- purposeful animation
- Netlify

Sebelum menulis kode:

1. Baca `AGENTS.md`.
2. Baca semua file di `/docs`.
3. Audit repository existing.
4. Jelaskan pemahaman Anda terhadap:
   - objective;
   - audience;
   - program architecture;
   - sitemap;
   - visual direction;
   - anti-slop constraints;
   - technical architecture.
5. Identifikasi gap atau conflict.
6. Buat rencana implementasi berdasarkan phase di `17-DEVELOPMENT-PLAN.md`.

Jangan langsung membuat seluruh website sekaligus.

Kerjakan per phase.

Setelah setiap phase:

- jalankan build;
- cek error;
- cek responsive implications;
- cek accessibility;
- laporkan file yang berubah;
- jelaskan keputusan penting;
- jangan lanjut phase selanjutnya sebelum phase saat ini stabil.

Dilarang mengubah stack tanpa alasan teknis dan persetujuan.

Gunakan Hallmark sebagai guardrail, tetapi `01-BRAND-FOUNDATION.md` dan `08-DESIGN-SYSTEM.md` adalah sumber utama identitas visual.

---

# PHASE PROMPTS

## Prompt 0 — Audit Repository

Pelajari `AGENTS.md` dan seluruh `/docs`.

Audit source code repository secara menyeluruh.

Jangan mengubah file terlebih dahulu.

Laporkan:

1. struktur repository;
2. Astro version;
3. dependency;
4. existing pages/components/styles;
5. technical debt;
6. content duplication;
7. accessibility issue;
8. performance risk;
9. AI-slop design risk;
10. apa yang reusable dan apa yang sebaiknya direstrukturisasi.

Setelah itu buat implementation plan yang mengikuti `17-DEVELOPMENT-PLAN.md`.

---

## Prompt 1 — Foundation

Implementasikan Phase 1 Foundation berdasarkan seluruh dokumen proyek.

Scope hanya:

- CSS tokens;
- reset/base;
- typography;
- BaseLayout;
- metadata foundation;
- Header;
- desktop navigation;
- mobile navigation;
- Footer;
- base Button;
- SectionHeading;
- accessibility focus style.

Jangan membuat homepage lengkap.

Pastikan:

- mobile-first;
- no horizontal overflow;
- semantic HTML;
- keyboard navigation;
- no excessive JS;
- design tidak generik SaaS;
- typography sudah menunjukkan TSL Kids.

Setelah implementasi:

- run build;
- review semua perubahan;
- sebutkan file changed;
- audit against `08-DESIGN-SYSTEM.md` dan `10-ANTI-AI-SLOP.md`.

---

## Prompt 2 — Content Collections

Implementasikan Content Collections untuk:

- programs;
- FAQ;
- teachers.

Gunakan schema dari `16-CONTENT-COLLECTIONS.md`.

Masukkan initial content dari `02-PROGRAMS.md`.

Pastikan content data tidak hard-coded dalam UI component.

Jalankan build dan validasi schema.

---

## Prompt 3 — Homepage Hero

Buat **hanya hero homepage**.

Baca ulang:

- brand foundation;
- UI/UX;
- design system;
- anti-slop;
- motion guideline.

Hero harus:

- typography-led;
- terasa warm educational;
- bukan SaaS hero;
- bukan centered gradient hero;
- menampilkan tiga age/program markers;
- CTA utama "Temukan Program untuk Ananda";
- CTA sekunder "Lihat Semua Program";
- responsif;
- visual hierarchy kuat pada 375px;
- tidak menggunakan dekorasi Islam generik.

Tambahkan motion hanya jika memberi value.

Audit hero dengan Hallmark setelah selesai.

Jangan lanjut section lain.

---

## Prompt 4 — Program Overview

Tambahkan section program overview setelah hero.

Ambil content dari Content Collections.

Tiga program harus jelas berbeda:

- usia;
- format;
- fokus.

Hindari tiga card generik identik.

Gunakan editorial composition yang tetap mudah dipahami pada mobile.

Audit apakah orang tua dapat memahami beda program hanya dari section ini.

---

## Prompt 5 — Program Finder

Bangun Program Finder.

Inputs:

Usia:
- 4–6
- 6–7
- 8–13
- 14–15

Kebutuhan:
- mulai belajar Qur'an
- memperbaiki bacaan
- tahfizh
- private
- Qur'an + diniyyah

Output:

- recommended program;
- alasan;
- CTA ke detail program.

Gunakan JavaScript paling ringan.

Jangan install React kecuali terbukti perlu.

Pastikan accessible:

- keyboard;
- focus;
- selected state;
- screen-reader clarity.

Program finder adalah recommendation aid, bukan assessment akademik.

---

## Prompt 6 — Learning Sections

Bangun:

- Learning Approach;
- Learning Journey;
- Parent Partnership.

Jangan menggunakan tiga section dengan layout sama.

Visualisasi proses:

Kenali → Dampingi → Latih → Evaluasi → Lanjutkan

dan:

Mendengar → Menirukan → Diperbaiki → Mengulang → Bertumbuh

Gunakan animation progression yang subtle, termasuk fallback reduced motion.

---

## Prompt 7 — Homepage Completion

Selesaikan:

- Teacher Preview;
- FAQ Preview;
- Final CTA.

Lalu audit seluruh homepage.

Audit:

1. visual hierarchy;
2. repetitive section pattern;
3. card soup;
4. typography;
5. mobile;
6. CTA clarity;
7. copy;
8. accessibility;
9. motion;
10. Hallmark anti-slop.

Lakukan redesign jika ditemukan pola template generik.

---

## Prompt 8 — Program Pages

Buat ProgramLayout reusable.

Implementasikan:

- `/program/`
- `/program/madrasah-quran-usia-dini/`
- `/program/quran-private/`
- `/program/madrasah-quran-anak/`

Setiap halaman minimal berisi:

- hero;
- target usia;
- siapa yang cocok;
- materi;
- model belajar;
- learning journey;
- peran orang tua;
- durasi/frekuensi;
- FAQ relevant;
- CTA.

Konten berasal dari collections bila sesuai.

---

## Prompt 9 — Supporting Pages

Implementasikan:

- `/cara-belajar/`
- `/pengajar/`
- `/faq/`
- `/tentang/`

Jangan membuat halaman terasa seperti copy-paste layout.

Setiap halaman harus mempunyai composition sesuai content.

---

## Prompt 10 — Registration

Rancang dan implementasikan `/daftar/`.

Jika form panjang, gunakan multi-step:

1. Data Anak
2. Kebutuhan Belajar
3. Pilihan Program
4. Data Orang Tua
5. Review

Pastikan:

- label lengkap;
- validation jelas;
- keyboard accessible;
- privacy-aware;
- mobile friendly;
- success/error state.

Sebelum memilih backend/submission method, audit kebutuhan dan existing Netlify configuration.

Jangan membuat database baru jika belum diperlukan.

---

## Prompt 11 — Motion Audit

Audit seluruh motion.

Hapus animasi yang:

- hanya dekoratif;
- mengganggu content;
- terlalu lambat;
- looping;
- menyebabkan jank.

Pastikan `prefers-reduced-motion`.

Gunakan CSS/Web APIs sebelum menambahkan library.

---

## Prompt 12 — SEO

Implementasikan dan audit:

- title;
- description;
- canonical;
- OG;
- sitemap;
- robots;
- structured data yang benar-benar relevan;
- internal links;
- page headings.

Jangan keyword stuffing.

---

## Prompt 13 — Performance

Audit:

- bundle JS;
- hydration;
- images;
- fonts;
- LCP;
- CLS;
- INP;
- third-party scripts.

Target:

- Performance ≥95
- Accessibility ≥95
- Best Practices ≥95
- SEO ≥95

Kurangi dependency yang tidak perlu.

---

## Prompt 14 — Final Hallmark Audit

Lakukan visual audit final dengan prinsip Hallmark.

Cari:

- generic AI hero;
- repetitive cards;
- unnecessary pills;
- excessive radius;
- glow/gradient;
- generic iconography;
- decorative noise;
- empty copy;
- repetitive spacing;
- template-like composition.

Redesign bagian lemah tanpa merusak clarity.

Bandingkan desktop dan mobile.

---

## Prompt 15 — Final QA

Gunakan `19-QA-CHECKLIST.md`.

Perbaiki semua severity high dan medium.

Jalankan build final.

Output terakhir:

1. final project structure;
2. files changed;
3. routes;
4. content collections;
5. dependency list;
6. accessibility status;
7. performance status;
8. known limitations;
9. Netlify deployment instruction.

---

## Prompt 16 — Netlify Release

Siapkan project untuk deploy Netlify.

Pastikan:

- Astro build benar;
- output benar;
- environment variables terdokumentasi;
- domain-ready;
- redirect/canonical benar;
- forms/function bila ada berjalan;
- preview build dan production build tidak berbeda secara tidak sengaja.

Jangan melakukan perubahan desain pada tahap release kecuali bug.
