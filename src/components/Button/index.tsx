import { ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./styles";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonSizes = "small" | "medium" | "large";
export type IconPositions = "left" | "right";

export type ButtonProps = {
  size?: ButtonSizes;
  color?: "primary" | "secondary";
  iconPosition?: IconPositions;
  fullWidth?: boolean;
  minimal?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
} & ButtonTypes;

const Button = ({
  icon,
  children,
  size = "medium",
  color = "primary",
  iconPosition = "left",
  fullWidth = false,
  disabled = false,
  minimal = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      minimal={minimal}
      disabled={disabled}
      hasIcon={!!icon}
      color={color}
      iconPosition={iconPosition}
      hasOnlyIcon={!!icon && !children}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default Button;
