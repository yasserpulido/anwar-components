import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../../design-system";
import { Theme } from "../../providers";

const meta = {
  title: "anwar-components/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ height: "250px" }}>
        <Theme />
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    header: {
      control: {
        type: "text",
      },
    },
    content: {
      control: {
        type: "text",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: "Modal Header",
    content: "Modal Content",
    children: "Modal Children",
  },
};
