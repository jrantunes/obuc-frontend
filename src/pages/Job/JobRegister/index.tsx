import FormJob from "components/FormJob";
import { JobFormValues } from "components/FormJob/types";
import Heading from "components/Heading";
import { useJobs } from "hooks/useJobs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as S from "./styles";

export const JobRegister = () => {
  const { handleAddJob } = useJobs();
  const navigate = useNavigate();

  const handleData = (values: JobFormValues) => {
    try {
      handleAddJob(values);
      navigate("/");
      toast.success("Vaga criada com sucesso!");
    } catch (err) {
      toast.error("Erro ao criar Vaga!");
    }
  };

  return (
    <S.Wrapper>
      <S.FormContainer>
        <Heading color="primary" size="xlarge" weight="bold">
          Nova vaga
        </Heading>
        <FormJob handleData={handleData} />
      </S.FormContainer>
    </S.Wrapper>
  );
};
