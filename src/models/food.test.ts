import { Food, FoodID, getSummedDetails } from "src/models/food"

describe("getSummedDetails", () => {
  it("ok", () => {
    // ## Arrange ##
    const foods: Food[] = [
      {
        amount: 100,
        details: {
          enerc_kcal: 26,
          protcaa: 1.6,
          refuse_rate: 3,
          water: 90.2,
        },
        id: "06080" as FoodID,
        name: "ケール　葉　生",
      },
      {
        amount: 50,
        details: {
          enerc_kcal: 30,
          protcaa: 0.8,
          refuse_rate: 2,
          water: 91,
        },
        id: "06183" as FoodID,
        name: "ミニトマト",
      },
      {
        amount: 200,
        details: {
          enerc_kcal: 21,
          protcaa: 1.2,
          refuse_rate: 20,
          water: 91.5,
        },
        id: "06238" as FoodID,
        name: "バジル　葉　生",
      },
    ]

    // ## Act ##
    // ## Assert ##
    expect(getSummedDetails(foods)).toMatchInlineSnapshot(`
      Object {
        "enerc_kcal": 73.52000000000001,
        "protcaa": 3.864,
        "refuse_rate": 35.89,
        "water": 278.48400000000004,
      }
    `)
  })
})
