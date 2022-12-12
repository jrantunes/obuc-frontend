import styled, { css } from "styled-components";

import * as HeadingStyles from "components/Heading/styles";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-height: calc(100vh - 10rem);
    margin-top: 0.8rem;
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.medium};
    padding-top: 0;
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 50rem;

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;
