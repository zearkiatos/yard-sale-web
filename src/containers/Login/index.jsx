import React from "react";
import "../../styles/login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img className="logo" src="./logos/logo_yard_sale.svg" alt="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <label className="label" for="password">
            Password
          </label>
          <input
            className="input input-password"
            id="password"
            placeholder="********"
            type="password"
          />
          <label className="label" for="new-password">
            Re-enter password
          </label>
          <input
            className="input input-password"
            id="new-password"
            placeholder="********"
            type="password"
          />
          <button className="primary-button login-button" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
