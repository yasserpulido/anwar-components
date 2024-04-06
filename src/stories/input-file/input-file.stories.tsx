import type { Meta, StoryObj } from "@storybook/react";
import { InputFile } from "../../design-system";
import { fn } from "@storybook/test";

const meta = {
  title: "anwar-components/InputFile",
  component: InputFile,
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
    disabled: {
      control: {
        type: "boolean",
      },
    },
    errors: {
      control: {
        type: "text",
      },
    },
    onBlur: {
      control: {
        type: "fn",
      },
    },
    onChange: {
      control: {
        type: "fn",
      },
    },
  },
} satisfies Meta<typeof InputFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    name: "name",
    onChange: fn(),
  },
};
