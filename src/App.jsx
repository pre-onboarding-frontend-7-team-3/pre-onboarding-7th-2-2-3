import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ads" element={<></>}/>
        <Route />
      </Routes>
  );
}

export default App;
