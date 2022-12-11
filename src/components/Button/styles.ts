import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";
import { ButtonProps, ButtonSizes, IconPositions } from ".";

type WrapperProps = {
  hasIcon: boolean;
  hasOnlyIcon: boolean;
} & Pick<
  ButtonProps,
  "size" | "fullWidth" | "minimal" | "color" | "iconPosition"
>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,

  large: (theme: DefaultTheme) => css`
    height: 6rem;
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

    svg {
      width: 3rem;
      height: 3rem;
    }
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};
    transition: color ${theme.transitions.fast};
    padding: 0;
    height: auto;

    &:hover {
      color: ${darken(0.08, theme.colors.primary)};
    }

    &:disabled {
      &:hover {
        background: none;
        color: ${theme.colors.primary};
      }
    }
  `,

  withIcon: (theme: DefaultTheme, iconPosition: IconPositions) => css`
    svg {
      width: 2rem;
      height: 2rem;
      order: ${iconPosition === "right" ? "1" : "0"};

      & + span {
        margin-${iconPosition}: ${theme.spacings.xxsmall};
      }
    }
  `,

  onlyIcon: (theme: DefaultTheme, size: ButtonSizes) => css`
    padding: ${size !== "large"
      ? theme.spacings.xxsmall
      : theme.spacings.small};
    height: auto;
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    color,
    size,
    fullWidth,
    minimal,
    iconPosition,
    hasIcon,
    hasOnlyIcon
  }) =>
    css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors[color!]};
      color: ${theme.colors.white};
      font-family: ${theme.font.family};
      font-weight: ${theme.font.regular};
      border: 0;
      border-radius: ${theme.border.radius};
      cursor: pointer;
      padding: ${theme.spacings.xxsmall};
      transition: background-color ${theme.transitions.fast};

      &:hover {
        background: ${minimal ? "none" : darken(0.05, theme.colors[color!])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;

        &:hover {
          background: ${theme.colors[color!]};
        }
      }

      ${hasIcon && wrapperModifiers.withIcon(theme, iconPosition!)}
      ${fullWidth && wrapperModifiers.fullWidth()}
      ${!!size && wrapperModifiers[size!](theme)}
      ${hasOnlyIcon && wrapperModifiers.onlyIcon(theme, size!)}
      ${minimal && wrapperModifiers.minimal(theme)}
    `}
`;
