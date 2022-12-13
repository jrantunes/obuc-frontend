import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from "styled-components";

type GlobalStylesProps = {
  removeBg?: boolean;
  theme: DefaultTheme;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: ${theme.colors.white};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.primary};
        border-radius: ${theme.border.radius};
      }

      scrollbar-width: thin;
      scrollbar-color: ${theme.colors.primary} ${theme.colors.white};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.white};
      `};
    }
  `}

`;

export default GlobalStyles;
