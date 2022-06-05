import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { generateSaladRecipeID, SaladRecipe } from "src/models/salad"
import { generateGodName } from "src/utils/misc"

export type State = Readonly<{
  recipes: SaladRecipe[]
}>

export const initialState: State = {
  recipes: [],
}

export const slice = createSlice({
  initialState,
  name: "salads",
  reducers: {
    addSalad: (state) => {
      state.recipes.push({
        id: generateSaladRecipeID(),
        name: `${generateGodName()}・サラダ`,
        rate: ((Math.floor(Math.random() * 4) % 4) + 1) as SaladRecipe["rate"],
      })
    },
    deleteSalad: (state, action: PayloadAction<Pick<SaladRecipe, "id">>) => {
      state.recipes = state.recipes.filter((r) => {
        return r.id !== action.payload.id
      })
    },
  },
})
