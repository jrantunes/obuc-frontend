import * as yup from "yup";

export const jobSchema = yup.object().shape({
  name: yup.string().required("Insira o nome da vaga!"),
  salary: yup.string().required("Insira o salário para esta vaga!"),
  activities: yup.string().required("Insira pelo menos uma atividade!"),
  benefits: yup.string().required("Insira pelo menos um benefício!"),
  steps: yup.string().required("Insira pelo menos uma etapa!"),
  skills: yup.string().required("Insira pelo menos uma habilidade!"),
  experiences: yup.string().required("Insira pelo menos uma experiência!")
});

export const initialValues = {
  id: "",
  name: "",
  salary: "",
  activities: "",
  benefits: "",
  steps: "",
  skills: "",
  experiences: ""
};
