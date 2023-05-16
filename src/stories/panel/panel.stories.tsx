import type { Meta, StoryObj } from '@storybook/react'

import { Panel } from '../../design-system'

const meta = {
  title: 'Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'title',
      description: 'The title of the panel',
      control: 'text',
    },
    children: {
      name: 'children',
      description: 'The children of the panel',
      control: 'text',
    },
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Title',
    children: 'Ipsum dolor sit amet, consectetur adipiscing elit.',
  },
}
