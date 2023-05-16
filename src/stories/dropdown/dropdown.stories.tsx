import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from '../../design-system'
import { Theme } from '../../providers'

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'text',
      description: 'The text of the button',
      control: 'text',
    },
    options: {
      name: 'options',
      description: 'The options of the dropdown',
      control: 'object',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '250px' }}>
        <Theme />
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Dropdown',
    name: 'dropdown',
    options: [
      { id: '1', name: 'option-1' },
      { id: '2', name: 'option-2' },
      { id: '3', name: 'option-3' },
    ],
  },
}
