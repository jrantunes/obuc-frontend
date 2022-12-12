import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.medium};
  `}
`;

export const FormContainer = styled.div`
  width: 50rem;
`;
