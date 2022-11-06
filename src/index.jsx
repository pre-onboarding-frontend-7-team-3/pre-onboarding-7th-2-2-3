import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const theme = useTheme();

root.render(
  <Router>
    <App />
  </Router>,
);
