import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../design-system";
import { fn } from "@storybook/test";

const meta = {
  title: "anwar-components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    onChange: {
      action: "changed",
    },
    value: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    label: "Checkbox",
    name: "checkbox",
    value: false,
    onChange: fn(),
  },
};
