import type { Meta, StoryObj } from '@storybook/react';
import { PresentationContainer } from './index';

const meta: Meta<typeof PresentationContainer> = {
  title: 'Molecules/PresentationContainer',
  component: PresentationContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PresentationContainer>;

export const Primary: Story = {
  args: {
  },
};
