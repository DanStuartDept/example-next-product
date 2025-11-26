import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card } from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title text to display",
    },
    titleHeadingLevel: {
      control: "select",
      options: ["h2", "h3", "h4"],
      description: "The heading level for the title",
    },
    description: {
      control: "text",
      description: "The description text to display",
    },
    imagePosition: {
      control: "select",
      options: ["top", "bottom", "none"],
      description: "Position of the image relative to content",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default card with just title and description.
 * This is the simplest form of the card component.
 */
export const Default: Story = {
  args: {
    title: "Card Title",
    description:
      "This is a card description that provides more information about the card content.",
  },
};

/**
 * Card with a call-to-action button.
 * Use this when you need user interaction with a button.
 */
export const WithCTAButton: Story = {
  args: {
    title: "Card with Action",
    description:
      "This card includes a call-to-action button that can trigger an action.",
    cta: {
      text: "Click me",
      onClick: () => alert("Button clicked!"),
    },
  },
};

/**
 * Card with a call-to-action link to an internal page.
 * Use this for navigation within your app.
 */
export const WithCTALink: Story = {
  args: {
    title: "Card with Link",
    description:
      "This card includes a call-to-action link for navigation to another page.",
    cta: {
      text: "Learn more",
      href: "/about",
    },
  },
};

/**
 * Card with external link.
 * Opens in a new tab with proper security attributes.
 */
export const WithExternalLink: Story = {
  args: {
    title: "External Resource",
    description: "This card links to an external website for more information.",
    cta: {
      text: "Visit website",
      href: "https://example.com",
    },
  },
};

/**
 * Card with image positioned at the top.
 * Great for showcasing visual content.
 */
export const WithImageTop: Story = {
  args: {
    title: "Beautiful Landscape",
    description: "A stunning view captured at the perfect moment.",
    image: {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      alt: "Mountain landscape",
    },
    imagePosition: "top",
  },
};

/**
 * Card with image positioned at the bottom.
 * Alternative layout for different visual hierarchy.
 */
export const WithImageBottom: Story = {
  args: {
    title: "Ocean View",
    description: "The calming waves and endless horizon.",
    image: {
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
      alt: "Ocean view",
    },
    imagePosition: "bottom",
  },
};

/**
 * Complete card with all features.
 * Demonstrates all available options combined.
 */
export const Complete: Story = {
  args: {
    title: "Feature Showcase",
    titleHeadingLevel: "h3",
    description:
      "This card demonstrates all available features including image, custom heading level, and call-to-action.",
    image: {
      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop",
      alt: "Abstract colorful art",
    },
    imagePosition: "top",
    cta: {
      text: "Explore more",
      href: "#",
    },
  },
};

/**
 * Card with h3 heading.
 * Use for section-level cards in hierarchical content.
 */
export const WithH3Heading: Story = {
  args: {
    title: "Section Card",
    titleHeadingLevel: "h3",
    description: "This card uses an h3 heading for proper content hierarchy.",
  },
};

/**
 * Card with h4 heading.
 * Use for subsection-level cards in deeply nested content.
 */
export const WithH4Heading: Story = {
  args: {
    title: "Subsection Card",
    titleHeadingLevel: "h4",
    description:
      "This card uses an h4 heading for deeper content hierarchy levels.",
  },
};

/**
 * Card with custom styling.
 * Demonstrates how to apply custom classes.
 */
export const CustomStyling: Story = {
  args: {
    title: "Custom Styled Card",
    description: "This card has custom styling applied through className.",
    className: "border-2 border-primary bg-primary/5",
  },
};

/**
 * Multiple cards in a grid layout.
 * Shows how cards work together in a common use case.
 */
export const GridLayout: Story = {
  args: {
    title: "",
    description: "",
  },
  render: () => (
    <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card
        title="First Card"
        description="This is the first card in the grid."
        cta={{ text: "View", href: "#" }}
      />
      <Card
        title="Second Card"
        description="This is the second card with an image."
        image={{
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          alt: "Mountain",
        }}
      />
      <Card
        title="Third Card"
        description="This is the third card with action."
        cta={{ text: "Action", onClick: () => alert("Clicked!") }}
      />
      <Card
        title="Fourth Card"
        titleHeadingLevel="h3"
        description="This card has everything."
        image={{
          src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop",
          alt: "Art",
        }}
        cta={{ text: "Discover", href: "https://example.com" }}
      />
      <Card
        title="Fifth Card"
        description="Image at the bottom this time."
        image={{
          src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
          alt: "Ocean",
        }}
        imagePosition="bottom"
      />
      <Card
        title="Sixth Card"
        description="Simple card to complete the grid."
      />
    </div>
  ),
};

/**
 * Comparison of heading levels.
 * Shows all three heading level options side by side.
 */
export const HeadingLevels: Story = {
  args: {
    title: "",
    description: "",
  },
  render: () => (
    <div className="flex max-w-5xl flex-col gap-6 md:flex-row">
      <Card
        title="H2 Heading"
        titleHeadingLevel="h2"
        description="This card uses an h2 heading (default)."
      />
      <Card
        title="H3 Heading"
        titleHeadingLevel="h3"
        description="This card uses an h3 heading."
      />
      <Card
        title="H4 Heading"
        titleHeadingLevel="h4"
        description="This card uses an h4 heading."
      />
    </div>
  ),
};

/**
 * Image position comparison.
 * Shows how images can be positioned at top or bottom.
 */
export const ImagePositions: Story = {
  args: {
    title: "",
    description: "",
  },
  render: () => (
    <div className="flex max-w-5xl flex-col gap-6 md:flex-row">
      <Card
        title="Image on Top"
        description="The image appears above the content."
        image={{
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          alt: "Mountain",
        }}
        imagePosition="top"
      />
      <Card
        title="Image on Bottom"
        description="The image appears below the content."
        image={{
          src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
          alt: "Ocean",
        }}
        imagePosition="bottom"
      />
    </div>
  ),
};
