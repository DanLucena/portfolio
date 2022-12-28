import type { Meta, StoryObj } from '@storybook/react';

import { ExperienceDateRange } from './index';

const meta: Meta<typeof ExperienceDateRange> = {
  title: 'Atoms/ExperienceDateRange',
  component: ExperienceDateRange,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExperienceDateRange>;

export const Primary: Story = {
  args: {
    startDate: '2019',
    endDate: '2020'
  },
};
