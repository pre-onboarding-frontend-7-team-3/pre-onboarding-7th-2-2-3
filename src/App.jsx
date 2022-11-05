import "./App.css";
import { Route, Routes } from "react-router-dom";
import CardList from "components/card/CardList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardList />} />
    </Routes>
  );
}

export default App;
