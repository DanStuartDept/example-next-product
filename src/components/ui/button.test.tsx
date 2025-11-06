import { render, screen } from "@testing-library/react"
import { Button } from "./button"

describe("Button", () => {
  it("renders a button with text", () => {
    render(<Button>Click me</Button>)
    
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("applies default variant styling", () => {
    render(<Button>Default</Button>)
    
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-primary")
  })

  it("applies destructive variant styling", () => {
    render(<Button variant="destructive">Delete</Button>)
    
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-destructive")
  })

  it("applies different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-9")

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-11")
  })

  it("handles disabled state", () => {
    render(<Button disabled>Disabled</Button>)
    
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
    expect(button).toHaveClass("disabled:opacity-50")
  })

  it("forwards onClick handler", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    
    screen.getByRole("button").click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
