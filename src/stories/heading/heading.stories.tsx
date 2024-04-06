import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../../design-system";

const meta = {
  title: "anwar-components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    size: "h1",
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading 2",
    size: "h2",
  },
};

export const Heading3: Story = {
  args: {
    children: "Heading 3",
    size: "h3",
  },
};

export const Heading4: Story = {
  args: {
    children: "Heading 4",
    size: "h4",
  },
};

export const Heading5: Story = {
  args: {
    children: "Heading 5",
    size: "h5",
  },
};

export const Heading6: Story = {
  args: {
    children: "Heading 6",
    size: "h6",
  },
};
