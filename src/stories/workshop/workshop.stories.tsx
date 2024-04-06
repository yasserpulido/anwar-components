import type { Meta, StoryObj } from "@storybook/react";
import { Workshop } from "../../design-system";

const meta = {
  title: "anwar-components/Workshop",
  component: Workshop,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Workshop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Workshop content",
  },
};
