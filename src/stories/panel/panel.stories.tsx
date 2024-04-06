import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "../../design-system";

const meta = {
  title: "anwar-components/Panel",
  component: Panel,
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
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Panel",
    children: "Panel content",
  },
};
