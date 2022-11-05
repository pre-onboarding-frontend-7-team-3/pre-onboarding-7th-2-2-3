import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "components/common/PageHeader";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHeader />} />
        {/* <Route path="/AdManagement" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
