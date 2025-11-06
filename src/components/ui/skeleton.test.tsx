import { render } from "@testing-library/react"
import { Skeleton } from "./skeleton"

describe("Skeleton", () => {
  it("renders a skeleton loader", () => {
    const { container } = render(<Skeleton />)
    
    const skeleton = container.firstChild as HTMLElement
    expect(skeleton).toBeInTheDocument()
    expect(skeleton).toHaveClass("animate-pulse")
    expect(skeleton).toHaveClass("bg-muted")
  })

  it("applies custom className", () => {
    const { container } = render(<Skeleton className="h-4 w-20" />)
    
    const skeleton = container.firstChild as HTMLElement
    expect(skeleton).toHaveClass("h-4")
    expect(skeleton).toHaveClass("w-20")
  })

  it("accepts custom props", () => {
    const { container } = render(<Skeleton data-testid="loading" />)
    
    const skeleton = container.firstChild as HTMLElement
    expect(skeleton).toHaveAttribute("data-testid", "loading")
  })
})
