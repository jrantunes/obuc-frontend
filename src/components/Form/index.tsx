import styled, { css } from "styled-components";

import * as TextFieldStyles from "components/TextField/styles";
import * as ButtonStyles from "components/Button/styles";

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;

    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;

      ${TextFieldStyles.Wrapper} + ${TextFieldStyles.Wrapper} {
        margin-top: ${theme.spacings.small};
      }

      ${ButtonStyles.Wrapper} {
        margin: ${theme.spacings.medium} auto 0;
      }
    }
  `}
`;

export const AuthFormDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.regular};
    line-height: ${theme.font.sizes.large};
    margin: 0 auto ${theme.spacings.medium};
    max-width: 26rem;
    text-align: center;
  `}
`;
