import type { Meta, StoryObj } from '@storybook/react';

import { ExperienceRoleTitle } from './index';

const meta: Meta<typeof ExperienceRoleTitle> = {
  title: 'Atoms/ExperienceRoleTitle',
  component: ExperienceRoleTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExperienceRoleTitle>;

export const Primary: Story = {
  args: {
    role: 'Trainee',
    company: 'Prevision'
  },
};
