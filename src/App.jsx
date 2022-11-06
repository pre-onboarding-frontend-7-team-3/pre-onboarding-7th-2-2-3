import DashBoard from "pages/DashBoard";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { GlobalStyle, Theme } from "shared/global.style";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <React.Suspense fallback={<div>..loading</div>}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
