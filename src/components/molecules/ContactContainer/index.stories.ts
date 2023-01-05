import type { Meta, StoryObj } from '@storybook/react';
import { ContactContainer } from './index';

const meta: Meta<typeof ContactContainer> = {
  title: 'Molecules/ContactContainer',
  component: ContactContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactContainer>;

export const Primary: Story = {
  args: {
  },
};
