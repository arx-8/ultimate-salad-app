import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "src/store"

export const getRecipes = createSelector(
  (state: RootState) => {
    return state.salads.recipes
  },
  (recipes) => {
    return recipes
  }
)
