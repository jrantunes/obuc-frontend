import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiOutlineSave } from "react-icons/ai";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    size: "medium",
    color: "primary",
    borderRadius: "medium",
    iconPosition: "left",
    hasBoxShadow: false,
    fullWidth: false,
    disabled: false,
    outlined: false,
    minimal: false
  },
  argTypes: {
    icon: {
      control: false
    },
    iconPosition: {
      control: "select"
    },
    as: {
      control: false
    },
    size: {
      control: "select"
    },
    color: {
      control: "select"
    },
    borderRadius: {
      control: "select"
    }
  }
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const withIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

withIcon.args = {
  icon: <AiOutlineSave />
};
