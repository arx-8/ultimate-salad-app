/**
 * Type-safe `Object.keys`
 */
export const objectKeys: <T extends string | number>(o: {
  [key in T]: unknown
}) => T[] = Object.keys

/**
 * Type-safe `Object.entries`
 */
export const objectEntries: <T extends string | number, V>(o: {
  [key in T]: V
}) => [T, V][] = Object.entries
