# 09 — Motion Guideline

## Principle

> Motion should explain, guide, or reassure — never decorate.

## Allowed Categories

### 1. Entrance Reveal

- opacity;
- translateY 8–16px;
- duration 350–600ms;
- light stagger.

### 2. State Change

Untuk:

- accordion;
- program finder;
- form progression;
- selected age;
- selected need.

### 3. Progress / Learning Journey

Animasi dapat memperlihatkan progression:

```text
Mendengar
→ Menirukan
→ Diperbaiki
→ Mengulang
→ Bertumbuh
```

### 4. Hover Feedback

Desktop only.

Contoh:

- card Y -2px/-3px;
- arrow X +3px;
- image scale sangat kecil.

## Avoid

- bounce;
- looping decorative animation;
- parallax berat;
- cursor follower;
- blob moving;
- floating icons;
- constant shimmer;
- dramatic page transition;
- animation yang menghambat content.

## Technology Priority

1. CSS transitions
2. CSS keyframes
3. IntersectionObserver
4. Web Animations API
5. library tambahan hanya bila ada requirement nyata

Jangan install GSAP/Framer Motion secara default.

## Reduced Motion

Wajib:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Content tidak boleh tergantung pada animation agar bisa dimengerti.
