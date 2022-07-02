export const sum = (ns: number[]): number => {
  return ns.reduce((acc, curr) => {
    return acc + curr
  }, 0)
}

/**
 * `NaN` safety to-number.
 * `NaN` cannot be detected by static analysis. Therefore, `NaN` is returned as `undefined`, which is easier to analyze statically.
 */
export const toNumber = (s: string): number | undefined => {
  if (s.trim().length === 0) {
    return
  }

  // Disallow abbreviated notation of decimals.
  // e.g.
  // - Number("1.") // 1
  // - Number(".1") // 0.1
  if (s[0] === ".") {
    return
  }
  if (s[s.length - 1] === ".") {
    return
  }

  const n = Number(s)
  if (Number.isNaN(n)) {
    return
  }
  return n
}
