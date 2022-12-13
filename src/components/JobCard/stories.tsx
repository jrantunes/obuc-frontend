import JobCard from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "JobCard",
  component: JobCard,
  args: {
    id: "id",
    description: "description",
    name: "name"
  }
} as ComponentMeta<typeof JobCard>;

export const Default: ComponentStory<typeof JobCard> = (args) => (
  <BrowserRouter>
    <div style={{ maxWidth: 400, padding: 15 }}>
      <JobCard {...args} />
    </div>
  </BrowserRouter>
);
