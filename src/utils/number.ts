export const sum = (ns: number[]): number => {
  return ns.reduce((acc, curr) => {
    return acc + curr
  }, 0)
}
