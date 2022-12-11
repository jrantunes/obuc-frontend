import FormJob from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "FormJob",
  component: FormJob
  //args: {}
} as ComponentMeta<typeof FormJob>;

export const Default: ComponentStory<typeof FormJob> = () => (
  <div style={{ width: 500, height: 300, margin: "auto" }}>
    <FormJob />
  </div>
);
