import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceContainer } from './index';

const meta: Meta<typeof ExperienceContainer> = {
  title: 'Organisms/ExperienceContainer',
  component: ExperienceContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExperienceContainer>;

export const Primary: Story = {
  args: {
    title: 'Work Experiences',
    experienceCards: [
      {
        experienceDate: {
          startDate: '2019',
          endDate: '2020'
        },
        experienceDescription: {
          description: 'This is a testing description'
        },
        experienceRole: {
          role: 'Trainee',
          company: 'Prevision'
        },
        experienceStack: {
          stack: ['Angular', 'Typescript', 'NgRx']
        }
      }
    ]
  },
};
