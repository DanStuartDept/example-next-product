import type { Meta, StoryObj } from '@storybook/react';
import { NumberedList } from './numbered-list';

const meta = {
  title: 'Components/NumberedList',
  component: NumberedList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ['First item', 'Second item', 'Third item'],
  },
};

export const SingleItem: Story = {
  args: {
    items: ['Single item'],
  },
};

export const EmptyList: Story = {
  args: {
    items: [],
  },
};

export const LongList: Story = {
  args: {
    items: [
      'First item',
      'Second item',
      'Third item',
      'Fourth item',
      'Fifth item',
      'Sixth item',
      'Seventh item',
      'Eighth item',
    ],
  },
};

export const WithCustomClass: Story = {
  args: {
    items: ['Styled item', 'Another styled item'],
    className: 'text-lg text-blue-600',
  },
};

export const WithAriaLabel: Story = {
  args: {
    items: ['Feature 1', 'Feature 2', 'Feature 3'],
    ariaLabel: 'List of features',
  },
};

export const WithReactNodes: Story = {
  args: {
    items: [
      'Simple text item',
      <span key="bold">Bold <strong>text</strong> item</span>,
      <div key="custom" className="text-purple-600">Styled React node</div>,
    ],
  },
};
