import type { Meta, StoryObj } from '@storybook/react';

import { SocialMediaIcons } from './index';

const meta: Meta<typeof SocialMediaIcons> = {
  title: 'Atoms/SocialMediaIcons',
  component: SocialMediaIcons,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialMediaIcons>;

export const Primary: Story = {
  args: {
  },
};
