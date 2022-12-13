import styled, { css } from "styled-components";

import * as HeadingStyles from "components/Heading/styles";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-height: calc(100vh - 11.2rem);
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.medium};
    padding-top: 0;
  `}
`;

export const ListContainer = styled.div`
  ${({ theme }) => css`
    width: 60rem;

    > ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;
