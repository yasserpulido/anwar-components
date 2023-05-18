import type { Meta, StoryObj } from "@storybook/react";

import { Anchor } from "../../design-system";

const meta = {
  title: "Anchor",
  component: Anchor,
  tags: ["autodocs"],
  argTypes: {
    text: {
      name: "text",
      description: "The text of the button",
      control: "text",
    },
    href: {
      name: "href",
      description: "The href of the anchor",
      control: "text",
    },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Click me!",
    href: "#",
  },
};
