import React from "react";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./card";
import { expectNoA11yViolations } from "@/lib/test-utils/accessibility";

describe("ProductCard", () => {
  const defaultProps = {
    title: "Card Title",
    description: "This is a card description",
  };

  it("renders with required props", () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("This is a card description")).toBeInTheDocument();
  });

  it("renders with h2 heading by default", () => {
    render(<ProductCard {...defaultProps} />);
    const heading = screen.getByRole("heading", { name: /card title/i });
    expect(heading.tagName).toBe("H2");
  });

  it("renders with h3 heading when specified", () => {
    render(<ProductCard {...defaultProps} titleHeadingLevel="h3" />);
    const heading = screen.getByRole("heading", { name: /card title/i });
    expect(heading.tagName).toBe("H3");
  });

  it("renders with h4 heading when specified", () => {
    render(<ProductCard {...defaultProps} titleHeadingLevel="h4" />);
    const heading = screen.getByRole("heading", { name: /card title/i });
    expect(heading.tagName).toBe("H4");
  });

  it("renders without CTA when not provided", () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders CTA button with onClick handler", () => {
    const handleClick = vi.fn();
    render(
      <ProductCard
        {...defaultProps}
        cta={{ text: "Click me", onClick: handleClick }}
      />
    );
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders CTA as link with href", () => {
    render(
      <ProductCard
        {...defaultProps}
        cta={{ text: "Learn more", href: "/about" }}
      />
    );
    const link = screen.getByRole("link", { name: /learn more/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
  });

  it("renders external link with target and rel attributes", () => {
    render(
      <ProductCard
        {...defaultProps}
        cta={{ text: "External link", href: "https://example.com" }}
      />
    );
    const link = screen.getByRole("link", { name: /external link/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders internal link without target and rel attributes", () => {
    render(
      <ProductCard
        {...defaultProps}
        cta={{ text: "Internal link", href: "/page" }}
      />
    );
    const link = screen.getByRole("link", { name: /internal link/i });
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("renders protocol-relative URL with target and rel attributes", () => {
    render(
      <ProductCard
        {...defaultProps}
        cta={{ text: "Protocol relative", href: "//example.com" }}
      />
    );
    const link = screen.getByRole("link", { name: /protocol relative/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders without image when not provided", () => {
    const { container } = render(<ProductCard {...defaultProps} />);
    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(0);
  });

  it("renders with image when provided", () => {
    render(
      <ProductCard
        {...defaultProps}
        image={{ src: "/test.jpg", alt: "Test image" }}
      />
    );
    const img = screen.getByRole("img", { name: /test image/i });
    expect(img).toBeInTheDocument();
  });

  it("renders image with custom dimensions", () => {
    render(
      <ProductCard
        {...defaultProps}
        image={{ src: "/test.jpg", alt: "Test image", width: 800, height: 600 }}
      />
    );
    const img = screen.getByRole("img", { name: /test image/i });
    expect(img).toBeInTheDocument();
  });

  it("applies imagePosition variant correctly for top", () => {
    const { container } = render(
      <ProductCard
        {...defaultProps}
        image={{ src: "/test.jpg", alt: "Test image" }}
        imagePosition="top"
      />
    );
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("flex-col");
  });

  it("applies imagePosition variant correctly for bottom", () => {
    const { container } = render(
      <ProductCard
        {...defaultProps}
        image={{ src: "/test.jpg", alt: "Test image" }}
        imagePosition="bottom"
      />
    );
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("flex-col-reverse");
  });

  it("applies custom className", () => {
    const { container } = render(
      <ProductCard {...defaultProps} className="custom-class" />
    );
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ProductCard {...defaultProps} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("renders complete card with all features", () => {
    const handleClick = vi.fn();
    render(
      <ProductCard
        {...defaultProps}
        titleHeadingLevel="h3"
        image={{ src: "/test.jpg", alt: "Test image" }}
        imagePosition="top"
        cta={{ text: "Action", onClick: handleClick }}
      />
    );

    expect(
      screen.getByRole("heading", { name: /card title/i })
    ).toBeInTheDocument();
    expect(screen.getByText("This is a card description")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /test image/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /action/i })).toBeInTheDocument();
  });

  // Accessibility tests
  describe("Accessibility", () => {
    it("should have no accessibility violations with default props", async () => {
      const renderResult = render(<ProductCard {...defaultProps} />);
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with CTA button", async () => {
      const handleClick = vi.fn();
      const renderResult = render(
        <ProductCard
          {...defaultProps}
          cta={{ text: "Click me", onClick: handleClick }}
        />
      );
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with CTA link", async () => {
      const renderResult = render(
        <ProductCard
          {...defaultProps}
          cta={{ text: "Learn more", href: "/about" }}
        />
      );
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with image", async () => {
      const renderResult = render(
        <ProductCard
          {...defaultProps}
          image={{ src: "/test.jpg", alt: "Test image" }}
        />
      );
      await expectNoA11yViolations(renderResult);
    });

    it("should have no accessibility violations with all features", async () => {
      const handleClick = vi.fn();
      const renderResult = render(
        <ProductCard
          {...defaultProps}
          titleHeadingLevel="h3"
          image={{ src: "/test.jpg", alt: "Test image" }}
          cta={{ text: "Action", onClick: handleClick }}
        />
      );
      await expectNoA11yViolations(renderResult);
    });
  });
});
