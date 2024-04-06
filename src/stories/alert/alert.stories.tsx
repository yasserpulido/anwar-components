import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Alert } from "../../design-system";
import { Theme } from "../../providers";

const meta = {
  title: "anwar-components/Alert",
  component: Alert,
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
    status: {
      control: false,
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    status: {
      text: "Success",
      type: "success",
    },
    reset: fn(),
  },
};

export const Error: Story = {
  args: {
    status: {
      text: "Error",
      type: "error",
    },
    reset: fn(),
  },
};
