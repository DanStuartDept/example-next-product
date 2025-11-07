import type { Meta, StoryObj } from '@storybook/nextjs';
import { Textarea } from './textarea';

const meta = {
  title: 'Components/UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default textarea.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

/**
 * Textarea with value.
 */
export const WithValue: Story = {
  args: {
    value: 'This is some pre-filled content in the textarea.',
    readOnly: true,
  },
};

/**
 * Disabled textarea.
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
};
