import type { Meta, StoryObj } from '@storybook/nextjs';
import { Label } from './label';
import { Input } from './input';

const meta = {
  title: 'Components/UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default label.
 */
export const Default: Story = {
  args: {
    children: 'Label Text',
  },
};

/**
 * Label with input field.
 */
export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="your@email.com" />
    </div>
  ),
};
