import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "../../design-system";
import { Theme } from "../../providers";

const meta = {
  title: "Navbar",
  tags: ["autodocs"],
  component: Navbar,
  argTypes: {
    title: {
      name: "title",
      type: { name: "string", required: true },
      control: { type: "text" },
      description: "The title of the navbar",
    },
    titleColor: {
      name: "titleColor",
      type: { name: "string" },
      control: {
        type: "select",
        options: ["BlueDress", "Black", "DoveGrey", "White"],
      },
      description: "The color of the title",
    },
    items: {
      name: "items",
      control: { type: "object" },
      description: "The items of the navbar",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    items: [
      { name: "Home", link: "" },
      { name: "About", link: "" },
      { name: "Contact", link: "" },
    ],
    title: "My Website",
    titleColor: "BlueDress",
  },
};
