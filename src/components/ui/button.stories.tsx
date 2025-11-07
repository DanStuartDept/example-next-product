import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './button';

const meta = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button with primary styling.
 */
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

/**
 * Secondary variant button.
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

/**
 * Destructive variant for dangerous actions.
 */
export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

/**
 * Outline variant with border.
 */
export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

/**
 * Ghost variant with minimal styling.
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

/**
 * Link variant styled as a link.
 */
export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

/**
 * Small size button.
 */
export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

/**
 * Large size button.
 */
export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

/**
 * Icon button with icon size.
 */
export const Icon: Story = {
  args: {
    children: '→',
    size: 'icon',
  },
};

/**
 * Disabled button state.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
