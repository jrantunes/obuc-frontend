import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import Router from "routes";
import GlobalStyles from "styles/global";
import theme from "styles/theme";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import JobContextProvider from "contexts/JobContext";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <JobContextProvider>
      <ThemeProvider theme={theme}>
        <Router />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <GlobalStyles />
      </ThemeProvider>
    </JobContextProvider>
  </React.StrictMode>
);
