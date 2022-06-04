import { Brand } from "utility-types"

export type SaladID = Brand<string, "SaladID">

type SaladRate = 1 | 2 | 3 | 4 | 5

export type Salad = {
  id: SaladID
  name: string
  rate: SaladRate
}
