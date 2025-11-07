import type { Meta, StoryObj } from '@storybook/nextjs';
import { Skeleton } from './skeleton';

const meta = {
  title: 'Components/UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default skeleton loader.
 */
export const Default: Story = {
  render: () => <Skeleton className="w-[200px] h-[20px]" />,
};

/**
 * Skeleton for card loading state.
 */
export const Card: Story = {
  render: () => (
    <div className="w-[350px] space-y-3">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  ),
};

/**
 * Skeleton for text loading.
 */
export const Text: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[75%]" />
    </div>
  ),
};
