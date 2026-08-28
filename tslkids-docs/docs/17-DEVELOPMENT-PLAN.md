# 17 — Development Plan

## Phase 0 — Repository Audit

- inspect existing files;
- inspect package.json;
- confirm Astro version;
- remove unnecessary starter content only after understanding dependency;
- establish branch/build baseline.

Deliverable:

- audit summary;
- implementation plan.

---

## Phase 1 — Foundation

Build:

- tokens;
- typography;
- global layout;
- header;
- mobile navigation;
- footer;
- accessibility foundation;
- metadata foundation.

Do not build full homepage yet.

Quality Gate:

- typography responsive;
- navigation works;
- no horizontal overflow;
- design tokens stable.

---

## Phase 2 — Content Model

Build:

- programs collection;
- FAQ collection;
- teachers collection;
- schema;
- sample content.

Quality Gate:

- all content validated;
- no repeated program constants in components.

---

## Phase 3 — Homepage

Build sequentially:

1. Hero
2. Program Overview
3. Program Finder
4. Learning Approach
5. Learning Journey
6. Parent Partnership
7. Teachers Preview
8. FAQ Preview
9. Final CTA

Perform Hallmark audit after homepage.

---

## Phase 4 — Program Pages

Build:

- program index;
- usia dini;
- private;
- madrasah.

Use shared ProgramLayout.

---

## Phase 5 — Supporting Pages

Build:

- cara belajar;
- pengajar;
- FAQ;
- tentang.

---

## Phase 6 — Registration

Build:

- registration UX;
- validation;
- submission strategy;
- success/error state.

Do not store sensitive data unnecessarily.

---

## Phase 7 — Motion

Add after layout stabilizes.

Motion should be enhancement, not foundation.

---

## Phase 8 — SEO / Analytics

- metadata;
- sitemap;
- robots;
- OG;
- analytics events;
- structured data where appropriate.

---

## Phase 9 — QA

- visual;
- responsive;
- accessibility;
- keyboard;
- motion;
- Lighthouse;
- Hallmark;
- links;
- forms.

---

## Phase 10 — Netlify

- preview deploy;
- stakeholder review;
- production deploy;
- post-deploy smoke test.
