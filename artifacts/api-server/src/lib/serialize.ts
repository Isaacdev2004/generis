/**
 * Converts all Date values in an object (or array of objects) to ISO strings.
 * Required because Drizzle returns Date objects for timestamp columns but
 * the generated Zod schemas expect strings (matching the OpenAPI date-time format).
 */
export function serializeDates<T>(row: T): T {
  if (Array.isArray(row)) {
    return row.map(serializeDates) as unknown as T;
  }
  if (row !== null && typeof row === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(row as Record<string, unknown>)) {
      result[key] = value instanceof Date ? value.toISOString() : value;
    }
    return result as T;
  }
  return row;
}
