import { SaladRecipeID } from "src/models/salad"
import { RootState } from "src/store"
import { getRecipes } from "src/store/salads/selectors"
import { initialState } from "src/store/salads/slice"

const mockInitialState: RootState = {
  salads: initialState,
}

describe("getRecipes", () => {
  it("empty", () => {
    // ## Arrange ##
    // ## Act ##
    const result = getRecipes({
      ...mockInitialState,
    })

    // ## Assert ##
    expect(result).toMatchInlineSnapshot(`Array []`)
  })

  it("has elements", () => {
    // ## Arrange ##
    // ## Act ##
    const result = getRecipes({
      ...mockInitialState,
      salads: {
        recipes: [
          {
            id: "a" as SaladRecipeID,
            name: "A salad",
            rate: 1,
          },
          {
            id: "b" as SaladRecipeID,
            name: "B salad",
            rate: 5,
          },
        ],
      },
    })

    // ## Assert ##
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "a",
          "name": "A salad",
          "rate": 1,
        },
        Object {
          "id": "b",
          "name": "B salad",
          "rate": 5,
        },
      ]
    `)
  })
})
