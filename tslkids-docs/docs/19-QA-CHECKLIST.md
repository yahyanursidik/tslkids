# 19 — QA Checklist

## Build

- [ ] `astro build` berhasil
- [ ] tidak ada TypeScript error
- [ ] tidak ada broken imports
- [ ] tidak ada console error

## Routing

- [ ] `/`
- [ ] `/program/`
- [ ] `/program/madrasah-quran-usia-dini/`
- [ ] `/program/quran-private/`
- [ ] `/program/madrasah-quran-anak/`
- [ ] `/cara-belajar/`
- [ ] `/pengajar/`
- [ ] `/faq/`
- [ ] `/tentang/`
- [ ] `/daftar/`
- [ ] privacy
- [ ] terms

## Mobile

Check minimum:

- [ ] 320px
- [ ] 375px
- [ ] 390px
- [ ] 430px

Validate:

- [ ] no horizontal scroll
- [ ] navigation works
- [ ] CTA visible
- [ ] headings wrap naturally
- [ ] cards/content not cramped
- [ ] forms usable
- [ ] tap target adequate

## Tablet

- [ ] 768px
- [ ] 1024px

## Desktop

- [ ] 1280px
- [ ] 1440px
- [ ] 1920px

## Accessibility

- [ ] semantic landmarks
- [ ] heading hierarchy
- [ ] keyboard navigation
- [ ] visible focus
- [ ] form labels
- [ ] form errors
- [ ] alt text
- [ ] sufficient contrast
- [ ] selected state not color-only
- [ ] reduced motion
- [ ] accordion accessible

## Design

- [ ] brand feels warm educational
- [ ] not too childish
- [ ] no Islamic-template clichés
- [ ] no AI gradient hero
- [ ] no card soup
- [ ] no repetitive section composition
- [ ] no excessive pills
- [ ] no excessive radius
- [ ] no decorative motion
- [ ] typography hierarchy strong
- [ ] program distinctions clear

## Content

- [ ] age ranges correct
- [ ] program differences clear
- [ ] no fear-based marketing
- [ ] no false guarantee
- [ ] natural Indonesian
- [ ] CTA consistent
- [ ] no placeholder copy
- [ ] no fake testimonial

## Program Finder

- [ ] keyboard accessible
- [ ] meaningful result
- [ ] clear reason
- [ ] correct CTA
- [ ] no misleading assessment claim

## Forms

- [ ] validation
- [ ] success state
- [ ] error state
- [ ] required field semantics
- [ ] privacy notice
- [ ] sensitive data minimized

## SEO

- [ ] unique title
- [ ] unique description
- [ ] canonical
- [ ] OG
- [ ] sitemap
- [ ] robots
- [ ] internal links
- [ ] structured data valid if used

## Performance

- [ ] images optimized
- [ ] dimensions set
- [ ] fonts optimized
- [ ] minimal JS
- [ ] minimal hydration
- [ ] no unnecessary library
- [ ] LCP target
- [ ] CLS target
- [ ] INP target

## Netlify

- [ ] build settings correct
- [ ] environment variables set
- [ ] preview deploy checked
- [ ] domain checked
- [ ] HTTPS checked
- [ ] production smoke test
