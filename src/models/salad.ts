import { ulid } from "ulidx"
import { Brand } from "utility-types"

export type SaladID = Brand<string, "SaladID">

type SaladRate = 1 | 2 | 3 | 4 | 5

export type Salad = {
  id: SaladID
  name: string
}

export const generateSaladID = (): SaladID => {
  return ulid() as SaladID
}

export const getSaladRate = (salad: Salad): SaladRate => {
  console.warn("TODO impl calc logic")
  return ((Math.floor(salad.name.length * 4) % 5) + 1) as SaladRate
}
