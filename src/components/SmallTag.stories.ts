import { type Meta, type StoryObj } from '@storybook/react';
import SmallTag from '~/components/SmallTag';

const meta: Meta<typeof SmallTag> = {
  component: SmallTag,
  title: 'SmallTag',
};

export default meta;

export type Story = StoryObj<typeof SmallTag>;

export const Default: Story = {
  args: {
    name: 'Next.js',
    backgroundColor: 'black',
    textColor: 'white',
  },
};
