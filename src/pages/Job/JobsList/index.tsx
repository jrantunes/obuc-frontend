import Heading from "components/Heading";
import JobListComponent from "components/JobList";
import * as S from "./styles";

export const JobsList = () => {
  return (
    <S.Wrapper>
      <S.ListContainer>
        <Heading color="primary" size="xlarge" weight="bold">
          Vagas
        </Heading>

        <JobListComponent />
      </S.ListContainer>
    </S.Wrapper>
  );
};
