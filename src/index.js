import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import RecoveryPassword from './containers/RecoveryPassword';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="recovery-password" element={<RecoveryPassword />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
