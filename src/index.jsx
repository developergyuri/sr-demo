import React from "react";
import ReactDOM from "react-dom";

/* Styles */
import "./index.css";

/* Own Components */
import Layout from "./components/layout/Layout";
import Carousel from "./components/carousel/Carousel";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Carousel />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
