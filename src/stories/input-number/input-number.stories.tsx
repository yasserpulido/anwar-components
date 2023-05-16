import type { Meta, StoryObj } from '@storybook/react'

import { InputNumber } from '../../design-system'

const meta = {
  title: 'Input-Number',
  component: InputNumber,
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
    min: {
      name: 'min',
      description: 'Manage the min of the input',
      control: 'number',
    },
    max: {
      name: 'max',
      description: 'Manage the max of the input',
      control: 'number',
    },
    minLength: {
      name: 'minLength',
      description: 'Manage the minLength of the input',
      control: 'number',
    },
    maxLength: {
      name: 'maxLength',
      description: 'Manage the maxLength of the input',
      control: 'number',
    },
    step: {
      name: 'step',
      description: 'Manage the step of the input',
      control: 'number',
    },
    value: {
      name: 'value',
      description: 'Manage the value of the input',
      control: 'number',
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
} satisfies Meta<typeof InputNumber>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    name: 'input',
    value: 0,
  },
}
