import Heading from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Heading",
    color: "black",
    size: "medium",
    weight: "regular"
  },
  argTypes: {
    color: {
      control: "select"
    },
    size: {
      control: "select"
    },
    weight: {
      control: "select"
    }
  }
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);
