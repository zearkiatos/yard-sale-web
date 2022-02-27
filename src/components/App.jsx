import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../containers/Layout";
import Router from '../router';
import "../styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  );
};

export default App;
