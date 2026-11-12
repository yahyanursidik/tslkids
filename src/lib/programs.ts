import { getCollection, type CollectionEntry } from 'astro:content';

export type Program = CollectionEntry<'programs'>['data'];

export async function getPrograms() {
  const entries = await getCollection('programs');
  return entries.sort((left, right) => left.data.order - right.data.order);
}

export function ageLabel({ ageMin, ageMax }: Program) {
  return `${ageMin}–${ageMax} tahun`;
}

export function scheduleLabel({ schedule }: Program) {
  return schedule.type === 'weekly' ? `${schedule.meetingsPerWeek}× per pekan` : 'Waktu fleksibel';
}

export function programUrl({ slug }: Program) {
  return `/program/${slug}/`;
}

export function programIllustration({ illustration }: Program, width?: 144 | 224) {
  return `/images/${illustration}${width ? `-${width}` : ''}.webp`;
}

export function programAges(programs: Program[]) {
  const min = Math.min(...programs.map(({ ageMin }) => ageMin));
  const max = Math.max(...programs.map(({ ageMax }) => ageMax));
  return Array.from({ length: max - min + 1 }, (_, index) => min + index);
}
