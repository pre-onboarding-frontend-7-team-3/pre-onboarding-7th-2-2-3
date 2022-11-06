import ReactDOM from "react-dom/client";
import React from "react";
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
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </>,
);
