import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "shared/GlobalStyle";
import theme from "shared/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Suspense fallback={<></>}>
        <Router>
          <App />
        </Router>
      </Suspense>
    </ThemeProvider>
  </>,
);
