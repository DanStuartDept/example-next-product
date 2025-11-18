import { render, screen } from "@testing-library/react";
import { Quote } from "./quote";
import { expectNoA11yViolations } from "@/lib/test-utils/accessibility";

describe("Quote", () => {
  const mockQuote = "Dan is from ireland and is great";
  const mockSource = "Joe Blogs";

  it("renders the quote text", () => {
    render(<Quote quote={mockQuote} />);

    expect(screen.getByText(mockQuote, { exact: false })).toBeInTheDocument();
  });

  it("renders as a blockquote element", () => {
    const { container } = render(<Quote quote={mockQuote} />);

    const blockquote = container.querySelector("blockquote");
    expect(blockquote).toBeInTheDocument();
  });

  it("renders the source when provided", () => {
    render(<Quote quote={mockQuote} source={mockSource} />);

    expect(screen.getByText(mockSource, { exact: false })).toBeInTheDocument();
  });

  it("does not render source element when source is not provided", () => {
    const { container } = render(<Quote quote={mockQuote} />);

    const footer = container.querySelector("footer");
    expect(footer).not.toBeInTheDocument();
  });

  it("applies custom className when provided", () => {
    const customClass = "custom-quote-class";
    const { container } = render(
      <Quote quote={mockQuote} className={customClass} />
    );

    const blockquote = container.querySelector("blockquote");
    expect(blockquote).toHaveClass(customClass);
  });

  it("applies default styling classes", () => {
    const { container } = render(<Quote quote={mockQuote} />);

    const blockquote = container.querySelector("blockquote");
    expect(blockquote).toHaveClass("border-l-4", "pl-4", "italic");
  });

  it("renders with both quote and source", () => {
    render(<Quote quote={mockQuote} source={mockSource} />);

    expect(screen.getByText(mockQuote, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(mockSource, { exact: false })).toBeInTheDocument();
  });

  it("handles empty quote string", () => {
    const { container } = render(<Quote quote="" />);

    const paragraph = container.querySelector("p");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph?.textContent).toContain('"');
  });

  it("handles empty source string", () => {
    render(<Quote quote={mockQuote} source="" />);

    // Empty source should not render footer
    const { container } = render(<Quote quote={mockQuote} source="" />);
    const footer = container.querySelector("footer");
    expect(footer).not.toBeInTheDocument();
  });

  it("renders quote with special characters", () => {
    const specialQuote = "Quote with <special> & characters!";
    render(<Quote quote={specialQuote} />);

    expect(
      screen.getByText(specialQuote, { exact: false })
    ).toBeInTheDocument();
  });

  it("renders source in footer element", () => {
    const { container } = render(
      <Quote quote={mockQuote} source={mockSource} />
    );

    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent(`— ${mockSource}`);
  });

  it("applies correct styling to source", () => {
    const { container } = render(
      <Quote quote={mockQuote} source={mockSource} />
    );

    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("text-sm", "not-italic");
  });

  // Accessibility tests
  describe("Accessibility", () => {
    it("should have no accessibility violations with quote only", async () => {
      const renderResult = render(<Quote quote={mockQuote} />);
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with quote and source", async () => {
      const renderResult = render(
        <Quote quote={mockQuote} source={mockSource} />
      );
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with custom className", async () => {
      const renderResult = render(
        <Quote quote={mockQuote} source={mockSource} className="custom-class" />
      );
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with empty quote", async () => {
      const renderResult = render(<Quote quote="" />);
      await expectNoA11yViolations(renderResult);
    });
  });
});
