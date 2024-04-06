import type { Meta, StoryObj } from "@storybook/react";
import { Textfield } from "../../design-system";

const meta = {
  title: "anwar-components/Textfield",
  component: Textfield,
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
    rows: {
      control: {
        type: "number",
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
      action: "onChange",
    },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Textfield",
    name: "textfield",
    onChange: (value: string) => console.log(value),
  },
};
