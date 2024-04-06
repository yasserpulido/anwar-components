import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../../design-system";

const meta = {
  title: "anwar-components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: false,
    },
    data: {
      control: false,
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    onSelect: {
      control: false,
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      {
        heading: "ID",
        value: "id",
      },
      {
        heading: "Name",
        value: "name",
      },
    ],
    data: [
      {
        id: 1,
        name: "Anwar",
      },
      {
        id: 2,
        name: "50",
      },
      {
        id: 3,
        name: "100",
      },
    ],
    isLoading: false,
    onSelect: (element) => console.log(element),
  },
};
