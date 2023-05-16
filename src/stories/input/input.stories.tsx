import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../../design-system'

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'label',
      description: 'Manage the label of the input',
      control: 'text',
    },
    name: {
      name: 'name',
      description: 'Manage the name of the input',
      control: 'text',
    },
    type: {
      name: 'type',
      description: 'Manage the type of the input',
      control: 'select',
      options: [
        'text',
        'password',
        'email',
        'date',
        'time',
        'datetime-local',
        'month',
        'week',
        'search',
        'tel',
        'url',
        'color',
      ],
    },
    errors: {
      name: 'errors',
      description: 'Manage the errors of the input',
      control: 'text',
    },
    placeholder: {
      name: 'placeholder',
      description: 'Manage the placeholder of the input',
      control: 'text',
    },
    disabled: {
      name: 'disabled',
      description: 'Manage the disabled of the input',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    type: 'text',
    name: 'input',
  },
}
