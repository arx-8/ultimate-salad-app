import { range } from "src/utils/array"

describe("range", () => {
  it("ok", () => {
    expect(range(0, 0)).toMatchInlineSnapshot(`
      Array [
        0,
      ]
    `)
    expect(range(3, 3)).toMatchInlineSnapshot(`
      Array [
        3,
      ]
    `)
    expect(range(0, 4)).toMatchInlineSnapshot(`
      Array [
        0,
        1,
        2,
        3,
        4,
      ]
    `)
    expect(range(2, 4)).toMatchInlineSnapshot(`
      Array [
        2,
        3,
        4,
      ]
    `)
  })
})
