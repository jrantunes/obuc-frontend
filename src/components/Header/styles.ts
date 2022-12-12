import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} 0;
    max-width: ${theme.grid.container};
    margin: 0 auto;

    img {
      width: 9.6rem;
      height: 9.6rem;
    }

    a {
      text-decoration: none;

      & + a {
        margin-left: ${theme.spacings.small};
      }
    }
  `}
`;
