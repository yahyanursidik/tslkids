import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const schedule = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('weekly'),
    meetingsPerWeek: z.number().int().positive(),
    platform: z.string(),
    timeSlots: z.array(z.string()).min(1),
  }),
  z.object({ type: z.literal('flexible') }),
]);

const programs = defineCollection({
  loader: glob({ base: './src/content/programs', pattern: '**/*.md' }),
  schema: z
    .object({
      title: z.string(),
      slug: z.string(),
      ageMin: z.number().int().positive(),
      ageMax: z.number().int().positive(),
      track: z.enum(['madrasah', 'bacaan', 'hafalan']),
      format: z.string(),
      schedule,
      summary: z.string(),
      order: z.number().int(),
      accent: z.enum(['sage', 'sky', 'yellow', 'terracotta']),
      illustration: z.enum(['growth-blocks', 'learning-notebook', 'madrasah-book', 'memorization-cards']),
    })
    .refine((program) => program.ageMin <= program.ageMax, {
      message: 'Usia maksimum harus sama dengan atau lebih besar dari usia minimum.',
      path: ['ageMax'],
    }),
});

const faqs = defineCollection({
  loader: glob({ base: './src/content/faq', pattern: '**/*.md' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

const teachers = defineCollection({
  loader: glob({ base: './src/content/teachers', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    programs: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { programs, faqs, teachers };
