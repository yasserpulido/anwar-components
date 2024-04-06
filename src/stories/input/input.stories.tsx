import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../design-system";
import { fn } from "@storybook/test";

const meta = {
  title: "anwar-components/Input",
  component: Input,
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
    value: {
      control: {
        type: "text",
      },
    },
    errors: {
      control: {
        type: "text",
      },
    },
    type: {
      control: {
        type: "select",
        options: ["text", "date", "password", "search", "time"],
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    name: "name",
    onChange: fn(),
  },
};
