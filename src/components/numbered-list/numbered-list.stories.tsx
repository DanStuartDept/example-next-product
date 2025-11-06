import type { Meta, StoryObj } from "@storybook/nextjs";
import { NumberedList } from "./numbered-list";

const meta = {
  title: "Components/NumberedList",
  component: NumberedList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NumberedList>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing a numbered list with three items.
 * This is the most common use case for the component.
 */
export const Default: Story = {
  args: {
    items: ["First item", "Second item", "Third item"],
  },
};

/**
 * Story demonstrating the component with a single item.
 * Useful for testing edge cases and minimal list scenarios.
 */
export const SingleItem: Story = {
  args: {
    items: ["Single item"],
  },
};

/**
 * Story showing an empty list with no items.
 * Tests how the component handles edge cases when no data is provided.
 */
export const EmptyList: Story = {
  args: {
    items: [],
  },
};

/**
 * Story with a longer list of eight items.
 * Demonstrates how the component handles multiple items and spacing.
 */
export const LongList: Story = {
  args: {
    items: [
      "First item",
      "Second item",
      "Third item",
      "Fourth item",
      "Fifth item",
      "Sixth item",
      "Seventh item",
      "Eighth item",
    ],
  },
};

/**
 * Story demonstrating custom styling with Tailwind CSS classes.
 * Shows how the className prop can be used to customize the appearance.
 */
export const WithCustomClass: Story = {
  args: {
    items: ["Styled item", "Another styled item"],
    className: "text-lg text-blue-600",
  },
};

/**
 * Story showing accessibility features with an aria-label.
 * Important for screen readers and assistive technologies.
 */
export const WithAriaLabel: Story = {
  args: {
    items: ["Feature 1", "Feature 2", "Feature 3"],
    ariaLabel: "List of features",
  },
};

/**
 * Story demonstrating the use of React nodes as list items.
 * Shows that the component can handle both strings and JSX elements.
 */
export const WithReactNodes: Story = {
  args: {
    items: [
      "Simple text item",
      <span key="bold">
        Bold <strong>text</strong> item
      </span>,
      <div key="custom" className="text-purple-600">
        Styled React node
      </div>,
    ],
  },
};
