import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CardList from "components/card/CardList";
import Home from "pages/Home";

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
              <CardList />
            </Layout>
          }
        />
      </Routes>
    </RecoilRoot>
  );
};

export default Router;
