/**
 * This file implements the function related to nullish (null and undefined)
 */

/**
 * Ensure that the value is present.
 * With `!` (non-null assertion operator), if the type is wrong (That is, if in fact there is null/undefined), null/undefined will be propagated to the process ahead.
 * This function is used to prevent difficult debugging problems as described above.
 *
 * @param x target
 * @param extraMessage Messages to help identify the cause of the problem if it should occur.
 */
export const assertNonNullish: <T>(
  x: T,
  extraMessage: string
) => asserts x is NonNullable<T> = (x, extraMessage) => {
  if (x == null) {
    throw new Error(
      `Unexpected null or undefined. Should exist value. (${extraMessage})`
    )
  }
}

/**
 * @param x target
 * @param extraMessage Messages to help identify the cause of the problem if it should occur.
 */
export const nonNullish = <T>(
  x: T | null | undefined,
  extraMessage: string
): T => {
  if (x == null) {
    throw new Error(
      `Unexpected null or undefined. Should exist value. (${extraMessage})`
    )
  }
  return x
}
