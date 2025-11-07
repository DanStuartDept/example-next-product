"use client"

import type { Meta, StoryObj } from '@storybook/nextjs';
import { Separator } from './separator';

const meta = {
  title: 'Components/UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Horizontal separator.
 */
export const Horizontal: Story = {
  render: () => (
    <div className="w-[200px]">
      <div className="space-y-1">
        <p className="text-sm">Item 1</p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <p className="text-sm">Item 2</p>
      </div>
    </div>
  ),
};

/**
 * Vertical separator.
 */
export const Vertical: Story = {
  render: () => (
    <div className="flex h-[50px] items-center space-x-4">
      <div className="text-sm">Item 1</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Item 2</div>
    </div>
  ),
};
