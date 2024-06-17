import type { Meta, StoryObj } from '@storybook/react';

import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'Text Field',
  component: Example
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    placeholder: 'Type Here'
  }
};
export const Secondary: Story = {
  args: {
    placeholder: 'Enter your name'
  }
};
