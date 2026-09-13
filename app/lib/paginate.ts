export type Page<T> = { items: T[]; page: number; pageCount: number };

/** Returns null for a page that doesn't exist (not a positive integer, or past the end). */
export function paginate<T>(items: T[], rawPage: string | null, size: number): Page<T> | null {
  const page = rawPage === null ? 1 : Number(rawPage);
  const pageCount = Math.max(1, Math.ceil(items.length / size));
  if (!Number.isInteger(page) || page < 1 || page > pageCount) return null;
  return { items: items.slice((page - 1) * size, page * size), page, pageCount };
}
