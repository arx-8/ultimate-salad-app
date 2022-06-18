import { render } from "@testing-library/react-native"
import { ExampleComponent } from "./ExampleComponent"

describe("renders correctly", () => {
  it("case 1", () => {
    const rendered = render(<ExampleComponent content="hello react-native" />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })

  it("case 2", () => {
    const rendered = render(<ExampleComponent content="hello snapshot" />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
