import type { Meta, StoryObj } from '@storybook/react'

import { Workshop } from '../../design-system'

const meta = {
  title: 'Workshop',
  tags: ['autodocs'],
  component: Workshop,
  argTypes: {
    children: {
      name: 'children',
      description: 'The children of the workshop',
      control: 'text',
    },
  },
} satisfies Meta<typeof Workshop>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello World',
  },
}
