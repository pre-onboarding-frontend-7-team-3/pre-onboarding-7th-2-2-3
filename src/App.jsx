import Advertisement from "pages/Advertisement";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ads" element={<Advertisement />} />
      <Route />
    </Routes>
  );
}

export default App;
