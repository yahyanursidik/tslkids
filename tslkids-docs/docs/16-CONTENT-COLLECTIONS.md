# 16 — Content Collections

## Programs Schema Concept

```ts
{
  title: string,
  slug: string,
  shortTitle: string,
  ageMin: number,
  ageMax: number,
  format: string,
  mode: "online",
  duration?: string,
  frequency?: string[],
  focus: string[],
  summary: string,
  status: "active" | "coming-soon" | "inactive",
  order: number,
  accent: "yellow" | "sky" | "sage"
}
```

## FAQ

```ts
{
  question: string,
  answer: string,
  category: string,
  order: number
}
```

## Teacher

```ts
{
  name: string,
  role: string,
  bio: string,
  photo?: ImageMetadata,
  programs: string[],
  order: number
}
```

## Content Rule

Content must be:

- factual;
- current;
- concise;
- natural;
- parent-oriented.

Do not expose information guru/anak yang seharusnya private.

## Separation

Content data tidak boleh bercampur dengan layout logic.
