import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../../design-system";

const meta = {
  title: "anwar-components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: false,
    },
    title: {
      control: false,
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: {
      name: "Anwar",
      link: "/",
    },
    items: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
};
