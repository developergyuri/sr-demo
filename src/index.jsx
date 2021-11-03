import React from "react";
import ReactDOM from "react-dom";

/* Styles */
import "./index.css";

/* Own Components */
import Header from "./components/header/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById("root")
);
