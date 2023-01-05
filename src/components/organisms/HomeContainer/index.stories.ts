import type { Meta, StoryObj } from '@storybook/react';
import { HomeContainer } from './index';

const meta: Meta<typeof HomeContainer> = {
  title: 'Organisms/HomeContainer',
  component: HomeContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HomeContainer>;

export const Primary: Story = {
  args: {
  },
};
