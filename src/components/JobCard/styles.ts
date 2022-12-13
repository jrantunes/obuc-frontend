import styled, { css } from "styled-components";

export const Wrapper = styled.li`
  ${({ theme }) => css`
    background: ${theme.colors.lightBg};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: 500;
  `}
`;

export const ActionsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`;
