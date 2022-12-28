import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './index';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    label: 'Home',
    selected: false
  },
};
