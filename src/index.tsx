import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import Router from "routes";
import GlobalStyles from "styles/global";
import theme from "styles/theme";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
