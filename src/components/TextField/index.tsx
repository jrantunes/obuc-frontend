import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import * as S from "./styles";

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  label?: string;
  labelFor?: string;
  formValue?: any;
  initialValue?: string;
  disabled?: boolean;
  register?: UseFormRegister<any>;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  onInputChange,
  label,
  error,
  icon,
  labelFor = "",
  initialValue = "",
  formValue = "",
  iconPosition = "left",
  register,
  disabled = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.InputContent
          hasLabel={!!label}
          iconPosition={iconPosition}
          hasIcon={!!icon}
        >
          <S.Input
            id={labelFor}
            disabled={disabled}
            hasValue={!!value || !!formValue}
            hasLabel={!!label}
            onChange={register ? undefined : onChange}
            value={register ? undefined : value}
            autoComplete="off"
            {...(!!register && register(props.name || "name"))}
            {...props}
          />
        </S.InputContent>
        {!!label && (
          <S.Label
            aria-hidden={!value}
            hasValue={!!value || !!formValue}
            htmlFor={labelFor}
          >
            {label}
          </S.Label>
        )}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
