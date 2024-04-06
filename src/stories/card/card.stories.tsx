import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../design-system";

const meta = {
  title: "anwar-components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello, world!",
    title: "Card title",
  },
};
