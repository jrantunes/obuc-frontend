import { JobContext } from "contexts/JobContext";
import { useContext } from "react";

export const useJobs = () => {
  const context = useContext(JobContext);

  return context;
};
