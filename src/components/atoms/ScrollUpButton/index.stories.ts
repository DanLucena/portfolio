import type { Meta, StoryObj } from '@storybook/react';

import { ScrollUpButton } from './index';

const meta: Meta<typeof ScrollUpButton> = {
  title: 'Atoms/ScrollUpButton',
  component: ScrollUpButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollUpButton>;

export const Primary: Story = {
  args: {
  },
};
