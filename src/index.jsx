import React from "react";
import ReactDOM from "react-dom";

/* Styles */
import "./index.css";

/* Own Components */
import Layout from "./components/layout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <div>Content</div>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
