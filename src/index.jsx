import React from "react";
import ReactDOM from "react-dom";

/* Styles */
import "./index.css";

/* Own Components */
import Layout from "./components/layout/Layout";
import Carousel from "./components/carousel/Carousel";
import Products from "./components/products/Products";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Carousel />
      <Products />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
