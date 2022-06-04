/**
 * Ensure that the value is present.
 * With `!` (non-null assertion operator), if the type is wrong (That is, if in fact there is null/undefined), null/undefined will be propagated to the process ahead.
 * This function is used to prevent difficult debugging problems as described above.
 *
 * @param x target
 * @param extraMessage Messages to help identify the cause of the problem if it should occur.
 */
export function assertNonNull<T>(
  x: T,
  extraMessage: string
): asserts x is NonNullable<T> {
  if (x == null) {
    throw new Error(
      `Unexpected null / undefined. Should exist value. (${extraMessage})`
    )
  }
}
