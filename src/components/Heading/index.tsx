import * as S from "./styles";

export type HeadingProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "xlarge";
  weight?: "regular" | "medium" | "bold";
  color?: "primary" | "black" | "gray" | "white";
  align?: "left" | "center" | "right";
};

const Heading = ({
  children,
  size = "medium",
  weight = "regular",
  color = "black",
  align = "left"
}: HeadingProps) => {
  return (
    <S.Wrapper size={size} weight={weight} color={color} align={align}>
      {children}
    </S.Wrapper>
  );
};

export default Heading;
