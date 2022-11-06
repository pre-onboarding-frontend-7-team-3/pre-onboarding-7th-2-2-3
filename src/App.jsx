import { Route, Routes } from "react-router-dom";
import CardList from "components/card/CardList";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<CardList />} />
      </Routes>
    </RecoilRoot>
  );
};

export default Router;
