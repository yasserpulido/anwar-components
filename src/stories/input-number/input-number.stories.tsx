import type { Meta, StoryObj } from "@storybook/react";
import { InputNumber } from "../../design-system";
import { fn } from "@storybook/test";

const meta = {
  title: "anwar-components/InputNumber",
  component: InputNumber,
  tags: ["autodocs"],
  argTypes: {
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
    min: {
      control: {
        type: "number",
      },
    },
    max: {
      control: {
        type: "number",
      },
    },
    minLength: {
      control: {
        type: "number",
      },
    },
    maxLength: {
      control: {
        type: "number",
      },
    },
    step: {
      control: {
        type: "number",
      },
    },
    value: {
      control: {
        type: "number",
      },
    },
    errors: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onChange: {
      control: {
        type: "fn",
      },
    },
  },
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    name: "name",
    onChange: fn(),
  },
};
