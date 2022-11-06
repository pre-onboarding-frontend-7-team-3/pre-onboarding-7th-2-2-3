import Home from "pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CardList from "components/card/CardList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ads" element={<CardList />}/>
        <Route />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
