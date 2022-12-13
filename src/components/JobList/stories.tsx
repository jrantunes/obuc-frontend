import JobList from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "JobList",
  component: JobList
  //args: {}
} as ComponentMeta<typeof JobList>;

export const Default: ComponentStory<typeof JobList> = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 460, padding: 15 }}>
      <JobList />
    </div>
  </BrowserRouter>
);
