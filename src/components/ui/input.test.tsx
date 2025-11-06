import { render, screen } from "@testing-library/react"
import { Input } from "./input"

describe("Input", () => {
  it("renders an input field", () => {
    render(<Input placeholder="Enter text" />)
    
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument()
  })

  it("accepts a value", () => {
    render(<Input value="Test value" readOnly />)
    
    const input = screen.getByRole("textbox") as HTMLInputElement
    expect(input.value).toBe("Test value")
  })

  it("applies custom className", () => {
    render(<Input className="custom-class" />)
    
    const input = screen.getByRole("textbox")
    expect(input).toHaveClass("custom-class")
  })

  it("handles different input types", () => {
    const { rerender } = render(<Input type="email" />)
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email")

    rerender(<Input type="password" />)
    const passwordInput = document.querySelector('input[type="password"]')
    expect(passwordInput).toBeInTheDocument()
  })

  it("handles disabled state", () => {
    render(<Input disabled />)
    
    const input = screen.getByRole("textbox")
    expect(input).toBeDisabled()
  })
})
