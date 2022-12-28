import type { Meta, StoryObj } from '@storybook/react';

import { ExperienceStack } from './index';

const meta: Meta<typeof ExperienceStack> = {
  title: 'Atoms/ExperienceStack',
  component: ExperienceStack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExperienceStack>;

export const Primary: Story = {
  args: {
    stack: ['Angular', 'Typescript', 'NgRx']
  },
};
