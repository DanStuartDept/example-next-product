import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from './badge';

const meta = {
  title: 'Components/UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge.
 */
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

/**
 * Secondary variant badge.
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

/**
 * Destructive variant badge.
 */
export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

/**
 * Outline variant badge.
 */
export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};
