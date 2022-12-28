import type { Meta, StoryObj } from '@storybook/react';
import { AboutSection } from './index';

const meta: Meta<typeof AboutSection> = {
  title: 'Molecules/AboutSection',
  component: AboutSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

export const Primary: Story = {
  args: {
  },
};
