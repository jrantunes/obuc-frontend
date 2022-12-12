import Header from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Header",
  component: Header
  //args: {}
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
