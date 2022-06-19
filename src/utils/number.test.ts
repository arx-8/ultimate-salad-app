import { sum } from "src/utils/number"

describe("sum", () => {
  it("ok", () => {
    expect(sum([1, 2, 3])).toStrictEqual(6)
    expect(sum([100, 0.0002, 3])).toStrictEqual(103.0002)
  })
})
