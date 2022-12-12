import { ReactNode } from "react";

export type Job = {
  id?: string;
  name: string;
  salary: string;
  activities: string;
  benefits: string;
  steps: string;
  skills: string;
  experiences: string;
};

export type JobContextData = {
  handleAddJob: (jobData: Job) => void;
  handleRemoveJob: (id: string) => void;
  handleUpdateJob: (id: string, jobData: Job) => void;
  findJobById: (id: string) => Job | undefined;
  jobs: Job[];
};

export type JobContextProviderProps = {
  children: ReactNode;
};
