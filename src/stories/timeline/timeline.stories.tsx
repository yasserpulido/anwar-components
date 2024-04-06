import { Meta, StoryFn } from "@storybook/react";
import { TimelineBase } from "../../design-system";
import { Default as ItemStory } from "./item.stories"; // Importa la historia concreta que quieres usar

export default {
  title: "anwar-components/Timeline",
  component: TimelineBase.Timeline,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta;

const TimelineTemplate: StoryFn = (args) => (
  <TimelineBase.Timeline {...args}>
    {Array.from({ length: 2 }, (_, index) => (
      <ItemStory {...ItemStory.args} key={index} />
    ))}
  </TimelineBase.Timeline>
);

export const Default = TimelineTemplate.bind({});
Default.args = {};
