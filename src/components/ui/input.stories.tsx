import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from './input';

const meta = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default text input.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

/**
 * Email input type.
 */
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'your@email.com',
  },
};

/**
 * Password input type.
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

/**
 * Input with a value.
 */
export const WithValue: Story = {
  args: {
    value: 'Pre-filled value',
    readOnly: true,
  },
};

/**
 * Disabled input state.
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};
