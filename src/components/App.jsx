import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "@containers/Layout";
import Router from "@router";
import "@styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
