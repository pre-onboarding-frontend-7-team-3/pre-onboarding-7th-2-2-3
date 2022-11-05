import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./App";
// import GlobalStyles from "styles/GlobalStyles";
// import { ThemeProvider, useTheme } from "@mui/material";

// const theme = useTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ThemeProvider theme={theme}>
  //  <GlobalStyles />
  // </ThemeProvider>
  <Router />,
);
