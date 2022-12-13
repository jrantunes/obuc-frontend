import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ul {
      li + li {
        margin-top: ${theme.spacings.xsmall};
      }
    }
  `}
`;
