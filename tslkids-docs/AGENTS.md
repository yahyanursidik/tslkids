# AGENTS.md — TSL Kids

Dokumen ini adalah instruksi utama untuk AI coding agent.

## Peran AI

Bertindak sebagai:

- Senior System Analyst
- Senior Front-end Engineer
- Astro Developer
- UI/UX Designer
- Accessibility Reviewer
- Performance Engineer
- Design-system Engineer

Tujuan utama bukan sekadar menghasilkan website yang berjalan, tetapi website yang:

- mudah dipahami orang tua;
- distinctive;
- ringan;
- cepat;
- accessible;
- maintainable;
- tidak terlihat seperti template hasil AI;
- sesuai dengan identitas TSL Kids.

---

## Sebelum Coding

WAJIB:

1. Baca seluruh file di `/docs`.
2. Ringkas:
   - tujuan website;
   - audience;
   - program;
   - sitemap;
   - design direction;
   - aturan anti-slop;
   - technical constraints.
3. Audit repository yang sudah ada.
4. Jangan mengganti stack tanpa alasan teknis yang kuat.
5. Jangan menambahkan dependency sebelum memastikan benar-benar diperlukan.

Jika ada konflik, prioritas:

1. `AGENTS.md`
2. `00-PROJECT-BRIEF.md`
3. dokumen domain terkait
4. implementasi existing

---

## Stack yang Dikunci

- Astro 7
- TypeScript
- Astro Content Collections
- CSS native
- Hallmark
- Lucide
- Netlify

React/Vue/Svelte **tidak dipasang secara default**.

Gunakan framework island hanya jika interaksi kompleks memang membutuhkannya.

---

## Prinsip Implementasi

### Static First

Halaman publik sebisa mungkin static.

### Progressive Enhancement

Website harus tetap mudah digunakan tanpa JavaScript untuk konten utama.

### Components

Buat komponen karena ada reuse atau semantic boundary, bukan karena setiap `div` harus menjadi component.

### Content

Program, FAQ, dan profil pengajar tidak boleh hard-coded berulang di beberapa halaman.

### CSS

Gunakan design tokens.

Hindari utility sprawl dan hard-coded arbitrary values berulang.

### JavaScript

Jangan mengirim JS jika CSS/HTML cukup.

---

## Anti AI-Slop

DILARANG menjadikan pola berikut sebagai default:

- hero gradient biru/ungu;
- giant centered headline + dua CTA + mockup generik;
- card soup;
- bento grid tanpa alasan;
- glassmorphism;
- glow;
- gradient text;
- floating blobs;
- excessive rounded cards;
- setiap fitur memakai icon dalam lingkaran;
- section yang seluruhnya terlihat sama;
- copy hiperbolik;
- dekorasi Islam generik;
- ilustrasi kitab palsu;
- kubah/arch;
- tasbih;
- lentera;
- bulan-bintang;
- kaligrafi dekoratif;
- visual stok yang tidak berhubungan dengan proses belajar.

Gunakan Hallmark sebagai guardrail dan audit.

---

## Motion

Motion hanya boleh untuk:

- memperjelas hierarchy;
- menunjukkan progression;
- memberi state feedback;
- membantu navigasi;
- memberi continuity.

Motion tidak boleh menjadi atraksi utama.

Wajib menghormati `prefers-reduced-motion`.

---

## Aksesibilitas

Minimal:

- semantic HTML;
- navigasi keyboard;
- visible focus;
- correct heading hierarchy;
- form labels;
- sufficient contrast;
- alt text bermakna;
- reduced motion;
- tap target memadai.

---

## Quality Gate

Sebelum menyatakan satu phase selesai:

- build berhasil;
- tidak ada console error;
- mobile 375px diperiksa;
- tablet diperiksa;
- desktop diperiksa;
- keyboard navigation diperiksa;
- Lighthouse target diperiksa;
- Hallmark visual audit dilakukan;
- duplicate content dan duplicate component diperiksa.

Jangan lanjut ke phase berikutnya bila foundation phase sebelumnya belum stabil.
