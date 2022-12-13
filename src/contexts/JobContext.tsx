import { createContext, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-toastify";

import { Job, JobContextData, JobContextProviderProps } from "./types";

export const JobContext = createContext<JobContextData>({} as JobContextData);

export default function JobContextProvider({
  children
}: JobContextProviderProps) {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const storagedJobs = localStorage.getItem("@jobs");

    if (storagedJobs) {
      setJobs(JSON.parse(storagedJobs));
    }
  }, []);

  const handleAddJob = (job: Job) => {
    const updatedJobs = jobs.map((i) => i);

    updatedJobs.push({
      ...job,
      id: uuidV4()
    });

    setJobs(updatedJobs);

    localStorage.setItem("@jobs", JSON.stringify(updatedJobs));
  };

  const handleRemoveJob = (id: string) => {
    const updatedJobs = jobs.map((i) => i);

    const jobIndex = updatedJobs.findIndex((job) => job.id === id);

    if (jobIndex < 0) {
      return;
    }

    updatedJobs.splice(jobIndex, 1);

    setJobs(updatedJobs);

    localStorage.setItem("@jobs", JSON.stringify(updatedJobs));

    toast.success("Vaga removida com sucesso!");
  };

  const handleUpdateJob = (id: string, job: Job) => {
    const updatedJobs = jobs.map((i) => i);

    const jobIndex = updatedJobs.findIndex((job) => job.id === id);

    if (jobIndex < 0) {
      return;
    }

    updatedJobs.splice(jobIndex, 1, {
      ...job
    });

    setJobs(updatedJobs);

    localStorage.setItem("@jobs", JSON.stringify(updatedJobs));
  };

  const findJobById = (id: string) => {
    return jobs.find((job) => job.id === id);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        handleAddJob,
        handleRemoveJob,
        handleUpdateJob,
        findJobById
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
