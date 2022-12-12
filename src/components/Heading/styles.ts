import styled, { css, DefaultTheme } from "styled-components";

import { HeadingProps } from ".";

type WrapperProps = Omit<HeadingProps, "children">;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `
};

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size, weight, color, align }) => css`
    color: ${theme.colors[color!]};
    font-weight: ${theme.font[weight!]};
    text-align: ${align};

    ${!!size && wrapperModifiers[size!](theme)}
  `}
`;
