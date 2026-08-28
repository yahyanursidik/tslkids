# 11 — Accessibility

## Target

WCAG-oriented implementation dengan Lighthouse Accessibility ≥ 95.

## Requirements

### Semantic HTML

Gunakan:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

sesuai konteks.

### Headings

Satu hierarchy logis.

Jangan memilih heading hanya karena ukuran font.

### Keyboard

Semua interactive element harus bisa diakses keyboard.

### Focus

Visible focus state wajib.

### Color

Informasi tidak boleh hanya dibedakan melalui warna.

### Forms

Setiap input:

- label;
- instruction bila perlu;
- error message;
- `aria-describedby` bila relevan.

### Images

Alt text deskriptif jika informatif.

Decorative image memakai empty alt.

### Motion

Hormati `prefers-reduced-motion`.

### Accordion

Gunakan semantic button dan state yang accessible.

### Touch

Target interaksi minimum sekitar 44 × 44px.

### Font

Body tidak terlalu kecil.

Default body sekitar 16–18px.
