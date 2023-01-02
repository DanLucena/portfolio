import type { Meta, StoryObj } from '@storybook/react';
import { ProjectsContainer } from './index';

const meta: Meta<typeof ProjectsContainer> = {
  title: 'Organisms/ProjectsContainer',
  component: ProjectsContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectsContainer>;

export const Primary: Story = {
  args: {
    projects: [
      {
        title: 'This is a dummy project',
        description: 'This is a dummy description for a dummy project',
        projectStack: ['Vue 2', 'NodeJS', 'Typescript']
      }
    ]
  },
};
