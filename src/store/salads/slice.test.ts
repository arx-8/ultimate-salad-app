import { SaladRecipeID } from "src/models/salad"
import { initialState, slice, State } from "src/store/salads/slice"

describe("reducer / addSalad", () => {
  it("ok", () => {
    // ## Arrange ##
    // ## Act ##
    const result = slice.reducer(initialState, slice.actions.addSalad())

    // ## Assert ##
    expect(result.recipes.length).toStrictEqual(1)
    expect(typeof result.recipes[0]?.id === "string").toStrictEqual(true)
    expect(typeof result.recipes[0]?.name === "string").toStrictEqual(true)
    expect(typeof result.recipes[0]?.rate === "number").toStrictEqual(true)
  })
})

describe("reducer / deleteSalad", () => {
  it("ok", () => {
    // ## Arrange ##
    const state: State = {
      ...initialState,
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
    }

    // ## Act ##
    const result = slice.reducer(
      state,
      slice.actions.deleteSalad({
        id: "a" as SaladRecipeID,
      })
    )

    // ## Assert ##
    expect(result).toMatchInlineSnapshot(`
      Object {
        "recipes": Array [
          Object {
            "id": "b",
            "name": "B salad",
            "rate": 5,
          },
        ],
      }
    `)
  })
})
