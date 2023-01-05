import type { Meta, StoryObj } from '@storybook/react';

import { MailButton } from './index';

const meta: Meta<typeof MailButton> = {
  title: 'Atoms/MailButton',
  component: MailButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MailButton>;

export const Primary: Story = {
  args: {
  },
};
