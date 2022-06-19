import { objectEntries } from "src/utils/object"
import { Brand } from "utility-types"

export type FoodID = Brand<string, "FoodID">

export type Food = {
  amount: number
  details: FoodDetails
  id: FoodID
  name: string
}

export type FoodDetails = {
  enerc_kcal: number
  protcaa: number
  refuse_rate: number
  water: number
}

/**
 * These are metadata and do not need to be displayed in the chart
 */
export const metaSeries: (keyof FoodDetails)[] = ["refuse_rate"]

export const getEatableAmount = (f: Food): number => {
  return f.amount * (100 - f.details.refuse_rate) * 0.01
}

const baseAmountGram = 100

export const getSummedDetails = (fs: Food[]): FoodDetails => {
  return fs.reduce((acc, curr) => {
    // calc Amount-per-100g to real-amount
    const rate =
      (curr.amount / baseAmountGram) * (100 - curr.details.refuse_rate) * 0.01
    const realDetails = objectEntries(curr.details).reduce(
      (acc2, [key, amount]) => {
        return {
          ...acc2,
          [key]: amount * rate,
        }
      },
      {} as Partial<FoodDetails>
    ) as FoodDetails

    // merge
    const merged: Partial<FoodDetails> = {}
    for (const [key, amount] of objectEntries(realDetails)) {
      const maybeAmount = acc[key]
      merged[key] = maybeAmount == null ? amount : maybeAmount + amount
    }

    return merged
  }, {} as Partial<FoodDetails>) as FoodDetails
}

export const displaySortKeys: readonly (keyof FoodDetails)[] = [
  "enerc_kcal",
  "water",
  "protcaa",
  "refuse_rate",
]
