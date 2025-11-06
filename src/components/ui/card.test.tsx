import { render, screen } from "@testing-library/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card"

describe("Card", () => {
  it("renders a card with all sections", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here</p>
        </CardContent>
        <CardFooter>
          <button>Action</button>
        </CardFooter>
      </Card>
    )
    
    expect(screen.getByText("Card Title")).toBeInTheDocument()
    expect(screen.getByText("Card Description")).toBeInTheDocument()
    expect(screen.getByText("Card content goes here")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument()
  })

  it("applies custom className to Card", () => {
    const { container } = render(<Card className="custom-card">Content</Card>)
    
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass("custom-card")
    expect(card).toHaveClass("rounded-lg")
  })

  it("renders without optional sections", () => {
    render(
      <Card>
        <CardContent>Simple content</CardContent>
      </Card>
    )
    
    expect(screen.getByText("Simple content")).toBeInTheDocument()
  })
})
