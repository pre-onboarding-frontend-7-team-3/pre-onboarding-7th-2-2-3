import DashBoard from "pages/DashBoard";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
