import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../design-system'

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      name: 'text',
      description: 'The text of the button',
      control: 'text',
    },
    variant: {
      name: 'variant',
      description: 'Manage the variant of the button, it can be primary or secondary',
      control: 'select',
      options: ['primary', 'danger', 'warning', 'success', 'link', 'link-danger'],
    },
    disabled: {
      name: 'disabled',
      description: 'Disable the button',
      control: 'boolean',
    },
    size: {
      name: 'size',
      description: 'Manage the size of the button',
      control: 'select',
      options: ['medium', 'large'],
    },
    onClick: {
      name: 'onClick',
      description: 'The function to be called when the button is clicked',
      type: 'function',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Button',
    variant: 'primary',
    onClick: () => console.log('clicked'),
  },
}

export const Danger: Story = {
  args: {
    text: 'Button',
    variant: 'danger',
    onClick: () => console.log('clicked'),
  },
}

export const Success: Story = {
  args: {
    text: 'Button',
    variant: 'success',
    onClick: () => console.log('clicked'),
  },
}

export const Warning: Story = {
  args: {
    text: 'Button',
    variant: 'warning',
    onClick: () => console.log('clicked'),
  },
}

export const Link: Story = {
  args: {
    text: 'Button',
    variant: 'link',
    onClick: () => console.log('clicked'),
  },
}

export const LinkDanger: Story = {
  args: {
    text: 'Button',
    variant: 'link-danger',
    onClick: () => console.log('clicked'),
  },
}
