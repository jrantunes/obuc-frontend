import Heading from "components/Heading";
import JobCard from "components/JobCard";
import { useJobs } from "hooks/useJobs";
import * as S from "./styles";

const JobList = () => {
  const { jobs } = useJobs();

  const formatCurrency = (value: number) => {
    return Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };

  return (
    <S.Wrapper>
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id!}
              name={job.name}
              description={formatCurrency(Number(job.salary))}
            />
          ))
        ) : (
          <Heading size="large" color="gray" weight="medium">
            Nenhuma vaga cadastrada!
          </Heading>
        )}
      </ul>
    </S.Wrapper>
  );
};

export default JobList;
