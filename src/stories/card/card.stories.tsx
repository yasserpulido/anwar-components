import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../../design-system'
import { Theme } from '../../providers'

const meta = {
  title: 'Card',
  tags: ['autodocs'],
  component: Card,
  argTypes: {
    title: {
      name: 'title',
      description: 'Title of the card',
      control: 'text',
    },
    children: {
      name: 'children',
      description: 'Content of the card',
      control: 'text',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'Card Content',
  },
}
