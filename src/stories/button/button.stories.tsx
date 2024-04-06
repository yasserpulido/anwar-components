import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../design-system";

const meta = {
  title: "anwar-components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "clicked",
    },
    size: {
      control: {
        type: "radio",
        options: ["medium", "large"],
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["button", "submit"],
      },
    },
    variant: {
      control: {
        type: "radio",
        options: [
          "primary",
          "danger",
          "warning",
          "success",
          "link",
          "link-danger",
        ],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Click me!",
    variant: "primary",
  },
};

export const Danger: Story = {
  args: {
    text: "Click me!",
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    text: "Click me!",
    variant: "warning",
  },
};

export const Success: Story = {
  args: {
    text: "Click me!",
    variant: "success",
  },
};

export const Link: Story = {
  args: {
    text: "Click me!",
    variant: "link",
  },
};

export const LinkDanger: Story = {
  args: {
    text: "Click me!",
    variant: "link-danger",
  },
};
