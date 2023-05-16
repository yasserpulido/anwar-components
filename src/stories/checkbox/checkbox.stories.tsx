import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../../design-system'

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'label',
      description: 'The label of the checkbox',
      control: 'text',
    },
    name: {
      name: 'name',
      description: 'The name of the checkbox',
      control: 'text',
    },
    value: {
      name: 'value',
      description: 'The value of the checkbox',
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      description: 'The disabled of the checkbox',
      control: 'boolean',
    },
    onChange: {
      name: 'onChange',
      description: 'The onChange of the checkbox',
      control: 'function',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Checkbox',
    name: 'checkbox',
    value: false,
  },
}
