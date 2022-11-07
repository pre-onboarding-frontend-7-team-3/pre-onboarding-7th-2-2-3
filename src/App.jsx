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
              <Suspense fallback={<>...loading</>}>
                <Home />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/ads"
          element={
            <Layout>
              <Suspense fallback={<>...loading</>}>
                <AdManagement />
              </Suspense>
            </Layout>
          }
        />
      </Routes>
    </RecoilRoot>
  );
};

export default Router;
