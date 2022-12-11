import styled, { css } from "styled-components";

import * as ItemsFieldStyles from "components/ItemsField/styles";

export const ListFieldsWrapper = styled.div`
  ${({ theme }) => css`
    ${ItemsFieldStyles.Wrapper} {
      margin-top: ${theme.spacings.small};
    }
  `}
`;
