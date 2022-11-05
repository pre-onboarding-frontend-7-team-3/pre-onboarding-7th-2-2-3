import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./App";
import { RecoilRoot } from "recoil";
// import GlobalStyles from "styles/GlobalStyles";
// import { ThemeProvider, useTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const theme = useTheme();

root.render(
  // <ThemeProvider theme={theme}>
  // <GlobalStyles />
  <RecoilRoot>
    <Router />
  </RecoilRoot>,
  // </ThemeProvider>,
);
