import { expectType } from "tsd"
import { nonNullish } from "./nullish"

describe("nonNullish", () => {
  it("ok", () => {
    // ## Arrange ##
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
    const maybe: string | undefined = "hello" as any

    // ## Act ##
    // ## Assert ##
    expectType<string>(nonNullish(maybe, "why"))
    expect(nonNullish(maybe, "why")).toStrictEqual("hello")
  })

  it("ng", () => {
    // ## Arrange ##
    type SomeObject = {
      id: string
      nested: {
        a: string
      }
      rate: number
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
    const maybe: SomeObject | undefined = undefined as any

    // ## Act ##
    // ## Assert ##
    expect(() => {
      expectType<SomeObject>(nonNullish(maybe, "why"))
    }).toThrowErrorMatchingInlineSnapshot(
      `"Unexpected null or undefined. Should exist value. (why)"`
    )
  })
})
