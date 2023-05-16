import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '../../design-system'
import { Theme } from '../../providers'

const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    header: {
      name: 'header',
      description: 'The header of the modal',
      control: 'text',
    },
    content: {
      name: 'content',
      description: 'The content of the modal',
      control: 'text',
    },
    children: {
      name: 'children',
      description: 'The children of the modal',
      control: 'text',
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
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    header: 'Save',
    content: 'Would you like to save?',
    children: 'Buttons',
  },
}
