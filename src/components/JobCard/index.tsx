import Button from "components/Button";
import Heading from "components/Heading";
import { useJobs } from "hooks/useJobs";
import { FiEdit, FiTrash, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

import * as S from "./styles";

export type JobCardProps = {
  id: string;
  name: string;
  description: string;
  handleDownloadPdf?: () => void;
};

const JobCard = ({
  id,
  name,
  description,
  handleDownloadPdf
}: JobCardProps) => {
  const { handleRemoveJob } = useJobs();

  return (
    <S.Wrapper>
      <div>
        <Heading size="large" weight="bold" color="black">
          {name}
        </Heading>
        <S.Description>{description}</S.Description>
      </div>
      <S.ActionsContainer>
        <Link to={`/vagas/${id}`}>
          <Button minimal icon={<FiEdit />} />
        </Link>
        {handleDownloadPdf && (
          <Button minimal icon={<FiDownload />} onClick={handleDownloadPdf} />
        )}
        <Button
          minimal
          icon={<FiTrash />}
          color="secondary"
          onClick={() => handleRemoveJob(id)}
        />
      </S.ActionsContainer>
    </S.Wrapper>
  );
};

export default JobCard;
