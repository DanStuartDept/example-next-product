import type { Meta, StoryObj } from "@storybook/nextjs";
import { Quote } from "./quote";

const meta = {
  title: "Components/Quote",
  component: Quote,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    quote: {
      control: "text",
      description: "The quote text to display",
    },
    source: {
      control: "text",
      description: "Optional source/author of the quote",
    },
    className: {
      control: "text",
      description: "Optional CSS class name to apply to the container element",
    },
  },
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default quote with both text and source attribution.
 * This is the most common use case for the component.
 */
export const Default: Story = {
  args: {
    quote: "Dan is from ireland and is great",
    source: "Joe Blogs",
  },
};

/**
 * Quote without source attribution.
 * Useful when the author is unknown or not relevant.
 */
export const WithoutSource: Story = {
  args: {
    quote: "This is a quote without an attribution.",
  },
};

/**
 * Short, concise quote with source.
 * Demonstrates how the component handles brief quotes.
 */
export const ShortQuote: Story = {
  args: {
    quote: "Simplicity is the ultimate sophistication.",
    source: "Leonardo da Vinci",
  },
};

/**
 * Longer quote demonstrating multi-line text handling.
 * Shows how the component handles more substantial quotes.
 */
export const LongQuote: Story = {
  args: {
    quote:
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    source: "Steve Jobs",
  },
};

/**
 * Quote with custom styling applied via className.
 * Demonstrates how to customize the appearance using Tailwind classes.
 */
export const WithCustomStyling: Story = {
  args: {
    quote: "Customized quote with different colors and font size.",
    source: "Custom Author",
    className: "text-lg text-blue-600 border-blue-400",
  },
};

/**
 * Quote in a container with defined width.
 * Shows how the component behaves within width constraints.
 */
export const WithinContainer: Story = {
  args: {
    quote: "This quote is displayed within a constrained container.",
    source: "Container Example",
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

/**
 * Multiple quotes displayed together.
 * Demonstrates how multiple quote components look when stacked.
 */
export const MultipleQuotes: Story = {
  args: {
    quote: "Demonstration of multiple quotes",
  },
  render: () => (
    <div className="flex w-[600px] flex-col gap-6">
      <Quote
        quote="The best time to plant a tree was 20 years ago. The second best time is now."
        source="Chinese Proverb"
      />
      <Quote
        quote="In the middle of difficulty lies opportunity."
        source="Albert Einstein"
      />
      <Quote quote="Innovation distinguishes between a leader and a follower." />
    </div>
  ),
};

/**
 * Quote with a very long source name.
 * Tests how the component handles lengthy attribution text.
 */
export const LongSourceName: Story = {
  args: {
    quote: "A quote with a notably lengthy source attribution.",
    source:
      "Dr. Professor Extraordinaire of the University of Long Names and Extended Titles",
  },
};

/**
 * Quote with special characters and punctuation.
 * Ensures the component properly handles various characters.
 */
export const WithSpecialCharacters: Story = {
  args: {
    quote:
      "Don't let yesterday take up too much of today! Life's 100% what you make it.",
    source: "Will Rogers",
  },
};
