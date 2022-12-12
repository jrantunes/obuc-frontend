/* eslint-disable @typescript-eslint/ban-ts-comment */
import { BsBriefcase, BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineSave } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/Button";
import { FormWrapper } from "components/Form";
import TextField from "components/TextField";
import ItemsField from "components/ItemsField";
import { JobFormValues } from "./types";
import { initialValues, jobSchema } from "./constants";

import * as S from "./styles";
import { Job } from "contexts/types";

const inputNumberInvalidChars = ["e", ".", "+", "-"];

type FormJobProps = {
  handleData: (values: JobFormValues) => void;
  jobData?: Job;
};

const FormJob = ({ handleData, jobData }: FormJobProps) => {
  const {
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    getValues,
    register
  } = useForm<JobFormValues>({
    resolver: yupResolver(jobSchema),
    defaultValues: jobData || initialValues
  });

  const onSubmit = (values: JobFormValues) => {
    handleData(values);
  };

  return (
    <FormWrapper>
      <form>
        <TextField
          label="Título do cargo"
          placeholder="Título do cargo"
          labelFor="name"
          name="name"
          icon={<BsBriefcase />}
          register={register}
          formValue={watch("name")}
          error={errors.name?.message}
        />
        <TextField
          label="Salário"
          placeholder="Salário"
          labelFor="salary"
          name="salary"
          type="number"
          icon={<BsCurrencyDollar />}
          register={register}
          formValue={watch("salary")}
          error={errors.salary?.message}
          //@ts-ignore
          onWheel={(e) => e.target.blur()}
          onKeyDown={(e) => {
            if (
              inputNumberInvalidChars.includes(e.key) ||
              //@ts-ignore
              e.keyCode === 38 ||
              //@ts-ignore
              e.keyCode === 40
            ) {
              e.preventDefault();
            }
          }}
        />

        <S.ListFieldsWrapper>
          <ItemsField
            label="Atividades"
            placeholder="Atividades (Digite o nome e aperte ENTER para adicionar)"
            labelFor="activities"
            name="activities"
            error={errors.activities?.message}
            initialItems={getValues("activities")
              .split(",")
              .filter((i) => !!i)}
            onUpdateItems={(items) => {
              setValue("activities", items.join(","));
              setError("activities", { message: "" });
            }}
          />
          <ItemsField
            label="Benefícios"
            placeholder="Benefícios (Digite o nome e aperte ENTER para adicionar)"
            labelFor="benefits"
            name="benefits"
            error={errors.benefits?.message}
            initialItems={getValues("benefits")
              .split(",")
              .filter((i) => !!i)}
            onUpdateItems={(items) => {
              setValue("benefits", items.join(","));
              setError("benefits", { message: "" });
            }}
          />
          <ItemsField
            label="Etapas do processo"
            placeholder="Etapas (Digite o nome e aperte ENTER para adicionar)"
            labelFor="steps"
            name="steps"
            error={errors.steps?.message}
            initialItems={getValues("steps")
              .split(",")
              .filter((i) => !!i)}
            onUpdateItems={(items) => {
              setValue("steps", items.join(","));
              setError("steps", { message: "" });
            }}
          />
          <ItemsField
            label="Habilidades"
            placeholder="Habilidades (Digite o nome e aperte ENTER para adicionar)"
            labelFor="skills"
            name="skills"
            error={errors.skills?.message}
            initialItems={getValues("skills")
              .split(",")
              .filter((i) => !!i)}
            onUpdateItems={(items) => {
              setValue("skills", items.join(","));
              setError("skills", { message: "" });
            }}
          />
          <ItemsField
            label="Experiências"
            placeholder="Experiências (Digite o nome e aperte ENTER para adicionar)"
            labelFor="experiences"
            name="experiences"
            error={errors.experiences?.message}
            initialItems={getValues("experiences")
              .split(",")
              .filter((i) => !!i)}
            onUpdateItems={(items) => {
              setValue("experiences", items.join(","));
              setError("experiences", { message: "" });
            }}
          />
        </S.ListFieldsWrapper>

        <Button
          type="button"
          icon={<AiOutlineSave />}
          onClick={handleSubmit(onSubmit)}
        >
          Salvar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormJob;
