import FormJob from "components/FormJob";
import { JobFormValues } from "components/FormJob/types";
import Heading from "components/Heading";
import { Job } from "contexts/types";
import { useJobs } from "hooks/useJobs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import * as S from "./styles";

export const JobEdit = () => {
  const [jobData, setJobData] = useState<Job>();

  const { id } = useParams<{ id: string }>();
  const { handleUpdateJob, findJobById } = useJobs();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const job = findJobById(id);

      console.log(job);

      setJobData(job);
    }
  }, [id, findJobById]);

  const handleData = (values: JobFormValues) => {
    try {
      handleUpdateJob(id!, values);
      navigate("/");
      toast.success("Vaga editada com sucesso!");
    } catch (err) {
      toast.error("Erro ao editar Vaga!");
    }
  };

  return (
    <S.Wrapper>
      <S.FormContainer>
        <Heading color="primary" size="xlarge" weight="bold">
          Editar vaga
        </Heading>
        {jobData && <FormJob handleData={handleData} jobData={jobData} />}
      </S.FormContainer>
    </S.Wrapper>
  );
};
