import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CardList from "components/card/CardList";
import Home from "pages/Home";

const Router = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<CardList />} />
        <Route />
      </Routes>
    </RecoilRoot>
  );
};

export default Router;
