import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceCard } from './index';

const meta: Meta<typeof ExperienceCard> = {
  title: 'Molecules/ExperienceCard',
  component: ExperienceCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExperienceCard>;

export const Primary: Story = {
  args: {
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
  },
};
