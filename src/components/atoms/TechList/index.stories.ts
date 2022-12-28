import type { Meta, StoryObj } from '@storybook/react';

import { TechList } from './index';

const meta: Meta<typeof TechList> = {
  title: 'Atoms/TechList',
  component: TechList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TechList>;

export const Primary: Story = {
  args: {
    technologies: ['Javascript', 'Typescript', 'VueJS', 'Rails', 'NodeJS', 'Typescript']
  },
};
