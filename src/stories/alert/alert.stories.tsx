import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from '../../design-system'
import { Theme } from '../../providers'

const meta = {
  title: 'Alert',
  tags: ['autodocs'],
  component: Alert,
  argTypes: {
    status: {
      name: 'status',
      description: 'Manage the status of the alert, it can be success or error',
      control: 'object',
    },
    reset: {
      control: 'function',
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
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    status: {
      text: 'Success',
      type: 'success',
    },
    reset: () => {
      console.log('reset')
    },
  },
}

export const Error: Story = {
  args: {
    status: {
      text: 'Error',
      type: 'error',
    },
    reset: () => {
      console.log('reset')
    },
  },
}
