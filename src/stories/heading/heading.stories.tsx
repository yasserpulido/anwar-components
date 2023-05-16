import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from '../../design-system'

const meta = {
  title: 'Heading',
  tags: ['autodocs'],
  component: Heading,
  argTypes: {
    size: {
      name: 'size',
      description: 'Manage the size of the heading',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  args: {
    size: 'h1',
    children: 'Heading',
  },
}

export const Heading2: Story = {
  args: {
    size: 'h2',
    children: 'Heading',
  },
}

export const Heading3: Story = {
  args: {
    size: 'h3',
    children: 'Heading',
  },
}

export const Heading4: Story = {
  args: {
    size: 'h4',
    children: 'Heading',
  },
}

export const Heading5: Story = {
  args: {
    size: 'h5',
    children: 'Heading',
  },
}

export const Heading6: Story = {
  args: {
    size: 'h6',
    children: 'Heading',
  },
}
