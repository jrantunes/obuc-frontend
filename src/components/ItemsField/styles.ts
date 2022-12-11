import styled, { css, DefaultTheme } from "styled-components";
import { ItemsFieldProps } from ".";

type WrapperProps = Pick<ItemsFieldProps, "disabled"> & { error: boolean };
type HasValueProps = {
  hasValue: boolean;
};
type InputProps = {
  hasLabel: boolean;
} & HasValueProps;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    border: 0.1rem solid ${theme.colors.primary};
    position: relative;

    cursor: text;
  `}
`;

type InputContentProps = {
  hasLabel: boolean;
};

export const InputContent = styled.div<InputContentProps>`
  ${({ hasLabel }) => css`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${hasLabel &&
    css`
      &:focus-within {
        & + label {
          transform: translate(0, -2rem);
          opacity: 1;
          transition: 0.4s;
        }
      }
    `}
  `}
`;

export const ItemsContainer = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.4rem;
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    padding: 0.4rem ${theme.spacings.xsmall};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 2rem;
    line-height: 1;
    display: flex;
    align-items: center;

    button {
      font-size: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 50%;
      margin-left: 0.4rem;
      cursor: pointer;

      svg {
        width: 1.4rem;
        height: 1.4rem;
        color: ${theme.colors.secondary};
      }
    }
  `}
`;

export const Input = styled.input<InputProps>`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    background: transparent;
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    border: 0;
    outline: none;
    transition: 0.4s;

    &::placeholder {
      font-family: ${theme.font.family};
      color: ${theme.colors.gray};
    }
  `}
`;

export const Label = styled.label<HasValueProps>`
  ${({ theme, hasValue }) => css`
    cursor: text;
    position: absolute;
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    transform: ${hasValue ? "translate(0, -2rem)" : "translate(0.8rem, 0)"};
    padding: 0 0.4rem;
    top: 0.8rem;
    left: calc(${theme.spacings.xsmall} - 0.4rem);
    opacity: ${hasValue ? "1" : "0"};
    transition: 0.4s;
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

const wrapperModifiers = {
  disabled: () => css`
    ${Label},
    ${Input},
    ${InputWrapper} {
      cursor: not-allowed;
    }

    ${InputWrapper} {
      opacity: 0.8;
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${Label} {
      color: ${theme.colors.red};
    }

    ${InputWrapper} {
      border: 0.1rem solid ${theme.colors.red};
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled()}
    ${error && wrapperModifiers.error(theme)}
  `}
`;
