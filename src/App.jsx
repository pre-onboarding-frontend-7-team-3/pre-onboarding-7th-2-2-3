import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import DefaultTemplate from "template/DefaultTemplate";
import AdManagement from "pages/AdManagement";
import Dashboard from "pages/Dashboard";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <DefaultTemplate>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admanagement" element={<AdManagement />} />
          </Routes>
        </DefaultTemplate>
      </Router>
    </RecoilRoot>
  );
}

export default App;
