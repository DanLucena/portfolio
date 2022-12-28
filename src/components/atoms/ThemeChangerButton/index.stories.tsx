import type { Meta, StoryObj } from '@storybook/react';
import { ThemeChangerButton } from './index';

const meta: Meta<typeof ThemeChangerButton> = {
  title: 'Atoms/ThemeChangerButton',
  component: ThemeChangerButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeChangerButton>;

export const Primary: Story = {
  args: {
  },
};
