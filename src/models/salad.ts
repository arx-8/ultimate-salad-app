import { ulid } from "ulidx"
import { Brand } from "utility-types"

export type SaladRecipeID = Brand<string, "SaladRecipeID">

type SaladRate = 1 | 2 | 3 | 4 | 5

export type SaladRecipe = {
  id: SaladRecipeID
  name: string
  rate: SaladRate
}

export const generateSaladRecipeID = (): SaladRecipeID => {
  return ulid() as SaladRecipeID
}
