import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "shared/global.style";
import Layout from "components/layout";
import Home from "pages/Home";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
