import type { Meta, StoryObj } from '@storybook/react';

import { TopNavBar } from './index';

const meta: Meta<typeof TopNavBar> = {
  title: 'Molecules/TopNavBar',
  component: TopNavBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TopNavBar>;

export const Primary: Story = {
  args: {
    fixed: true,
    blurry: true,
    items: ["Home", "Posts", "Projects"]
  },
};
