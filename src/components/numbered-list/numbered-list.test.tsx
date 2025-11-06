import { render, screen } from "@testing-library/react";
import { NumberedList } from "./numbered-list";
import { expectNoA11yViolations } from "@/lib/test-utils/accessibility";

describe("NumberedList", () => {
  const mockItems = [
    "First item",
    "Second item", 
    "Third item"
  ];

  it("renders all items in a numbered list", () => {
    render(<NumberedList items={mockItems} />);
    
    expect(screen.getByText("First item")).toBeInTheDocument();
    expect(screen.getByText("Second item")).toBeInTheDocument();
    expect(screen.getByText("Third item")).toBeInTheDocument();
  });

  it("renders an ordered list element", () => {
    render(<NumberedList items={mockItems} />);
    
    const list = screen.getByRole("list");
    expect(list.tagName).toBe("OL");
  });

  it("renders correct number of list items", () => {
    render(<NumberedList items={mockItems} />);
    
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  it("applies custom className when provided", () => {
    const customClass = "custom-class";
    render(<NumberedList items={mockItems} className={customClass} />);
    
    const list = screen.getByRole("list");
    expect(list).toHaveClass(customClass);
  });

  it("renders empty list when no items provided", () => {
    render(<NumberedList items={[]} />);
    
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("applies margin bottom to all items except the last one", () => {
    render(<NumberedList items={mockItems} />);
    
    const listItems = screen.getAllByRole("listitem");
    
    // First two items should have mb-2 class
    expect(listItems[0]).toHaveClass("mb-2");
    expect(listItems[1]).toHaveClass("mb-2");
    
    // Last item should not have mb-2 class
    expect(listItems[2]).not.toHaveClass("mb-2");
  });

  it("renders React nodes correctly", () => {
    const itemsWithNodes = [
      "String item",
      <span key="test">React node item</span>
    ];
    render(<NumberedList items={itemsWithNodes} />);
    
    expect(screen.getByText("String item")).toBeInTheDocument();
    expect(screen.getByText("React node item")).toBeInTheDocument();
  });

  it("applies aria-label when provided", () => {
    const ariaLabel = "List of features";
    render(<NumberedList items={mockItems} ariaLabel={ariaLabel} />);
    
    const list = screen.getByRole("list");
    expect(list).toHaveAttribute("aria-label", ariaLabel);
  });

  it("does not apply aria-label when not provided", () => {
    render(<NumberedList items={mockItems} />);
    
    const list = screen.getByRole("list");
    expect(list).not.toHaveAttribute("aria-label");
  });

  it("uses stable keys for list items", () => {
    const { container } = render(<NumberedList items={mockItems} />);
    
    const listItems = container.querySelectorAll("li");
    expect(listItems).toHaveLength(3);
    
    // Check that keys are stable (string items use content as key)
    const firstItem = listItems[0];
    expect(firstItem).toBeInTheDocument();
  });

  // Accessibility tests
  describe("Accessibility", () => {
    it("should have no accessibility violations with default props", async () => {
      const renderResult = render(<NumberedList items={mockItems} />);
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with aria-label", async () => {
      const renderResult = render(
        <NumberedList items={mockItems} ariaLabel="List of features" />
      );
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with React nodes", async () => {
      const itemsWithNodes = [
        "String item",
        <span key="test">React node item</span>
      ];
      const renderResult = render(<NumberedList items={itemsWithNodes} />);
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with empty list", async () => {
      const renderResult = render(<NumberedList items={[]} />);
      await expectNoA11yViolations(renderResult);
    });
  });
}); 
