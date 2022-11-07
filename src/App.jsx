import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "pages/Home/Home";
import AdManagement from "pages/AdManagement/AdManagement";
import Layout from "components/Layout";

const Router = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/ads"
          element={
            <Layout>
              <AdManagement />
            </Layout>
          }
        />
      </Routes>
    </RecoilRoot>
  );
};

export default Router;
