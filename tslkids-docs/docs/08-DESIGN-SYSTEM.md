# 08 — Design System

## Color Tokens

```css
:root {
  --color-forest: #326b57;
  --color-sage: #a9c9b6;
  --color-cream: #fbf8f1;
  --color-yellow: #f4c96b;
  --color-terracotta: #d97962;
  --color-sky: #83b9d1;

  --color-text: #24312c;
  --color-text-muted: #718078;
  --color-border: #dfe5df;

  --color-surface: #ffffff;
  --color-surface-warm: #fbf8f1;
}
```

Warna dapat dikalibrasi saat implementation audit, tetapi jangan mengubah arah palet tanpa alasan.

## Program Accent

- Usia Dini → soft yellow
- Qur'an Private → sky
- Madrasah Qur'an → sage / forest

Gunakan sebagai accent, bukan full-screen rainbow.

## Typography

### Heading

Nunito Sans, fallback sans-serif.

Preferred weights:

- 700
- 800

### Body

Plus Jakarta Sans.

Preferred weights:

- 400
- 500
- 600

## Fluid Type

Gunakan `clamp()`.

Contoh:

```css
--font-display: clamp(2.75rem, 7vw, 6.5rem);
--font-h1: clamp(2.3rem, 5vw, 5rem);
--font-h2: clamp(1.9rem, 3vw, 3.5rem);
--font-h3: clamp(1.35rem, 2vw, 2rem);
--font-body-lg: clamp(1.05rem, 1.4vw, 1.25rem);
```

## Spacing

Jangan memberikan `py-24` kepada semua section.

Gunakan rhythm:

- compact;
- normal;
- spacious;
- editorial break.

Suggested tokens:

```css
--space-section-sm: clamp(3rem, 6vw, 5rem);
--space-section-md: clamp(4.5rem, 8vw, 8rem);
--space-section-lg: clamp(6rem, 11vw, 11rem);
```

## Radius

```css
--radius-sm: .5rem;
--radius-md: .875rem;
--radius-lg: 1.375rem;
```

Jangan semua card memakai radius terbesar.

## Shadow

Minimal.

Gunakan border dan surface distinction sebelum shadow.

## Buttons

Tidak semua tombol berbentuk pill.

Primary:

- high contrast;
- clear text;
- visible focus.

Secondary:

- subtle border / text treatment.

## Icons

Lucide.

Icon harus membantu scan atau meaning.

Jangan memasukkan icon pada semua heading.
