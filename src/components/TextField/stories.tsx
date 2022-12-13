import { AiOutlineMail } from "react-icons/ai";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextField from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300, padding: 15 }}>
        <Story />
      </div>
    )
  ],
  args: {
    label: "Label",
    labelFor: "input",
    placeholder: "Placeholder",
    disabled: false,
    iconPosition: "left"
  },
  argTypes: {
    labelFor: {
      control: false
    },
    icon: {
      control: false
    },
    error: {
      control: false
    },
    initialValue: {
      control: false
    },
    formValue: {
      control: false
    },
    register: {
      control: false
    },
    iconPosition: {
      control: "select"
    }
  }
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const withIcon: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

withIcon.args = {
  icon: <AiOutlineMail />
};

export const withError: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

withError.args = {
  error: "Algum erro aconteceu!",
  initialValue: "Errou!!!"
};

withError.argTypes = {
  disabled: {
    control: false
  }
};
