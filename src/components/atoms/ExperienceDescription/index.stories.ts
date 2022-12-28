import type { Meta, StoryObj } from '@storybook/react';

import { ExperienceDescription } from './index';

const meta: Meta<typeof ExperienceDescription> = {
  title: 'Atoms/ExperienceDescription',
  component: ExperienceDescription,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExperienceDescription>;

export const Primary: Story = {
  args: {
    description: 'This is a testing description'
  },
};
