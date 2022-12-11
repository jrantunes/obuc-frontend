import { ComponentMeta, ComponentStory } from "@storybook/react";
import ItemsField from ".";

export default {
  title: "Form/ItemsField",
  component: ItemsField,
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
} as ComponentMeta<typeof ItemsField>;

export const Default: ComponentStory<typeof ItemsField> = (args) => (
  <div style={{ maxWidth: 400, padding: 15 }}>
    <ItemsField {...args} />
  </div>
);

export const withError: ComponentStory<typeof ItemsField> = (args) => (
  <div style={{ maxWidth: 400, padding: 15 }}>
    <ItemsField {...args} />
  </div>
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
