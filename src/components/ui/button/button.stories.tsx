import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    asChild: {
      control: "boolean",
      description: "Render as a child component (uses Radix Slot)",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button with primary styling.
 * This is the standard button style used for primary actions.
 */
export const Default: Story = {
  args: {
    children: "Button",
  },
};

/**
 * Destructive variant for dangerous or delete actions.
 * Use this for actions that cannot be easily undone.
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

/**
 * Outline variant with border and transparent background.
 * Good for secondary actions or less prominent buttons.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

/**
 * Secondary variant with subtle styling.
 * Use for tertiary actions or supporting buttons.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

/**
 * Ghost variant with no background until hover.
 * Excellent for toolbar buttons or less important actions.
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

/**
 * Link variant styled as an underlined link.
 * Use when button behavior is needed but link styling is desired.
 */
export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

/**
 * Small size button.
 * Use in compact interfaces or when space is limited.
 */
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

/**
 * Large size button.
 * Use for prominent calls-to-action or in larger interfaces.
 */
export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

/**
 * Icon size button - square button perfect for icons.
 * Commonly used in toolbars and action menus.
 */
export const Icon: Story = {
  args: {
    size: "icon",
    children: "🔔",
  },
};

/**
 * Disabled button that cannot be clicked.
 * Shows the disabled state styling with reduced opacity.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

/**
 * Button with an icon and text.
 * Demonstrates how to combine icons with text labels.
 */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        With Icon
      </>
    ),
  },
};

/**
 * Showcase of all button variants in a grid.
 * Useful for comparing all variant styles at once.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
};

/**
 * Showcase of all button sizes.
 * Demonstrates the size variations available.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🔔</Button>
    </div>
  ),
};

/**
 * Matrix showing all combinations of variants and sizes.
 * Comprehensive view of all available button styles.
 */
export const VariantSizeMatrix: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Small Size</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="default">
            Default
          </Button>
          <Button size="sm" variant="destructive">
            Destructive
          </Button>
          <Button size="sm" variant="outline">
            Outline
          </Button>
          <Button size="sm" variant="secondary">
            Secondary
          </Button>
          <Button size="sm" variant="ghost">
            Ghost
          </Button>
          <Button size="sm" variant="link">
            Link
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Default Size</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Large Size</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="lg" variant="default">
            Default
          </Button>
          <Button size="lg" variant="destructive">
            Destructive
          </Button>
          <Button size="lg" variant="outline">
            Outline
          </Button>
          <Button size="lg" variant="secondary">
            Secondary
          </Button>
          <Button size="lg" variant="ghost">
            Ghost
          </Button>
          <Button size="lg" variant="link">
            Link
          </Button>
        </div>
      </div>
    </div>
  ),
};
