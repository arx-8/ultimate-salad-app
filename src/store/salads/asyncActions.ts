import { SaladRecipe } from "src/models/salad"
import { createAsyncThunk } from "src/store"

export const loadRecipes = createAsyncThunk<SaladRecipe[]>(
  "loadRecipes",
  async (_, { extra }) => {
    const salads = await extra.storage.read<SaladRecipe[]>("salad_recipes")
    return salads == null ? [] : salads
  }
)
