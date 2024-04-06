import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../../design-system";

const meta = {
  title: "anwar-components/Dropdown",
  component: Dropdown,
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
    options: {
      control: false,
    },
    errors: {
      control: {
        type: "text",
      },
    },
    value: {
      control: false,
    },
    multiple: {
      control: {
        type: "boolean",
      },
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Dropdown",
    name: "dropdown",
    options: [
      {
        id: "1",
        name: "Option 1",
      },
      {
        id: "2",
        name: "Option 2",
      },
      {
        id: "3",
        name: "Option 3",
      },
    ],
    onChange: (value) => console.log(value),
  },
};
