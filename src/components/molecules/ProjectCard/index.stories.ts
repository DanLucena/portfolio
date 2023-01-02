import type { Meta, StoryObj } from '@storybook/react';

import { ProjectCard } from './index';

const meta: Meta<typeof ProjectCard> = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Primary: Story = {
  args: {
    title: 'Dummy Project Card',
    description: 'This is a dummy description for a project card',
    projectStack: ['Vue 2', 'NodeJS', 'Typescript']
  },
};
