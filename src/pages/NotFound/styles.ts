import styled, { css } from "styled-components";

import * as ButtonStyles from "components/Button/styles";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
    }

    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
      font-weight: bold;
    }
  `}
`;
