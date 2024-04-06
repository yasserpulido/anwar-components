import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "../../design-system";

const meta = {
  title: "anwar-components/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: {
        type: "text",
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Click me!",
    href: "https://yasserpulido.com/",
  },
};
