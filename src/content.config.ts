import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programs = defineCollection({
  loader: glob({ base: './src/content/programs', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(), slug: z.string(), shortTitle: z.string(), ageMin: z.number(), ageMax: z.number(),
    format: z.string(), mode: z.literal('online'), duration: z.string().optional(), frequency: z.array(z.string()).optional(),
    focus: z.array(z.string()), summary: z.string(), status: z.enum(['active', 'coming-soon', 'inactive']),
    order: z.number(), accent: z.enum(['yellow', 'sky', 'sage']), suitableFor: z.string(), parentRole: z.string(),
  }),
});
const faqs = defineCollection({ loader: glob({ base: './src/content/faq', pattern: '**/*.md' }), schema: z.object({ question: z.string(), answer: z.string(), category: z.string(), order: z.number() }) });
const teachers = defineCollection({ loader: glob({ base: './src/content/teachers', pattern: '**/*.md' }), schema: z.object({ name: z.string(), role: z.string(), bio: z.string(), programs: z.array(z.string()), order: z.number() }) });
export const collections = { programs, faqs, teachers };
