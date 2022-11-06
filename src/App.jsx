import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "pages/Home";
import AdManagement from "pages/AdManagement/AdManagement";
import Layout from "components/Layout";
import Spinner from "components/common/Spinner";

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
              <Suspense fallback={<></>}>
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
