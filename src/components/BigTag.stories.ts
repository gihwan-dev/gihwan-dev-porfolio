import { type Meta, type StoryObj } from '@storybook/react';
import BigTag from '~/components/BigTag';

const meta: Meta<typeof BigTag> = {
  title: 'BigTag',
  component: BigTag,
};

export default meta;

export type Story = StoryObj<typeof BigTag>;

export const Default: Story = {
  args: {
    name: 'Next.js',
    backgroundColor: 'black',
    textColor: 'white',
  },
};
