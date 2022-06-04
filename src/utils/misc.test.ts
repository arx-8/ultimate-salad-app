import { generateGodName } from "src/utils/misc"

describe("generateGodName", () => {
  it("ok", () => {
    expect(typeof generateGodName() === "string").toStrictEqual(true)
  })
})
