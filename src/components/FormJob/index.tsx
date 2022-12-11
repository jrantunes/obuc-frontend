import { BsBriefcase, BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineSave } from "react-icons/ai";
import Button from "components/Button";
import { FormWrapper } from "components/Form";
import TextField from "components/TextField";
import ItemsField from "components/ItemsField";

import * as S from "./styles";

const FormJob = () => {
  return (
    <FormWrapper>
      <form>
        <TextField
          label="Título do cargo"
          placeholder="Título do cargo"
          labelFor="name"
          name="name"
          icon={<BsBriefcase />}
        />
        <TextField
          label="Salário"
          placeholder="Salário"
          labelFor="salary"
          name="salary"
          icon={<BsCurrencyDollar />}
        />

        <S.ListFieldsWrapper>
          <ItemsField
            label="Atividades"
            placeholder="Atividades (Digite o nome e aperte ENTER para adicionar)"
            labelFor="activities"
            name="activities"
          />
          <ItemsField
            label="Benefícios"
            placeholder="Benefícios (Digite o nome e aperte ENTER para adicionar)"
            labelFor="benefits"
            name="benefits"
          />
          <ItemsField
            label="Etapas do processo"
            placeholder="Etapas (Digite o nome e aperte ENTER para adicionar)"
            labelFor="steps"
            name="steps"
          />
          <ItemsField
            label="Habilidades"
            placeholder="Habilidades (Digite o nome e aperte ENTER para adicionar)"
            labelFor="skills"
            name="skills"
          />
        </S.ListFieldsWrapper>

        <Button type="button" icon={<AiOutlineSave />}>
          Salvar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormJob;
