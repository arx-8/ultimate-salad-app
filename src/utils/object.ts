/**
 * Type-safe `Object.keys`
 */
export const objectKeys: <K extends string | number>(
  o: Record<K, unknown>
) => K[] = Object.keys

/**
 * Type-safe `Object.entries`
 */
export const objectEntries: <K extends string | number, V>(
  o: Record<K, V>
) => [K, V][] = Object.entries

export const objectFilter = <
  K extends string | number,
  V,
  DisallowKey extends string | number
>(
  o: Record<K, V>,
  disallowKeys: DisallowKey[]
): Record<K, V> => {
  const disallows = disallowKeys.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: true,
    }
  }, {} as Record<DisallowKey, true>)

  return objectEntries(o)
    .filter((d) => {
      const k = d[0] as unknown as DisallowKey
      return !disallows[k]
    })
    .reduce((acc, curr) => {
      return {
        ...acc,
        [curr[0]]: curr[1],
      }
    }, {} as Partial<Record<K, V>>) as Record<K, V>
}
