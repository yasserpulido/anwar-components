import type { Meta, StoryObj } from "@storybook/react";
import { Footerbar } from "../../design-system";

const meta = {
  title: "anwar-components/Footerbar",
  component: Footerbar,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Footerbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Footer",
  },
};
