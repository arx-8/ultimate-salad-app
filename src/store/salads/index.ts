import * as selectors from "./selectors"
import { slice } from "./slice"

/**
 * NOTE: Why re-export?
 *
 * - To make it easier to copy an entire folder when creating multiple Slice
 * - To make it easier to import selectors on a per-domain basis
 */

export const saladsSlice = slice
export const saladsActions = slice.actions
export const saladsSelectors = selectors
