import type { Meta, StoryObj } from '@storybook/nextjs';
import { Alert, AlertDescription, AlertTitle } from './alert';

const meta = {
  title: 'Components/UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default alert.
 */
export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a default alert component for displaying information.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Destructive alert for errors.
 */
export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        This is a destructive alert for error messages.
      </AlertDescription>
    </Alert>
  ),
};
