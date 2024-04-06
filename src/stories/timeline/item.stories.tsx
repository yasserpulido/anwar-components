import { Meta, StoryFn } from "@storybook/react";
import { TimelineBase } from "../../design-system";

const meta: Meta<typeof TimelineBase.Item> = {
  title: "anwar-components/Item",
  component: TimelineBase.Item,
  argTypes: {
    media: {
      control: false,
    },
  },
};

export default meta;

const Template: StoryFn<typeof TimelineBase.Item> = (args) => (
  <TimelineBase.Item {...args} />
);

export const Default = Template.bind({});
Default.args = {
  media: {
    id: 1,
    title: "Example Movie",
    year: 2021,
    description: "This is an example description of a movie...",
    rating: 4,
    favorite: true,
  },
};
