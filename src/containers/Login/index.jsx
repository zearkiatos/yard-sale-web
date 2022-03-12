import React from "react";
import "@styles/login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img className="logo" src="./logos/logo_yard_sale.svg" alt="logo" />
        <div>
          <form action="/" className="form">
            <label className="label" for="email">
              Email
            </label>
            <input
              className="input input-email"
              id="email"
              placeholder="email@example.com"
              type="email"
            />
            <label className="label" for="password">
              Password
            </label>
            <input
              className="input input-password"
              id="password"
              placeholder="********"
              type="password"
            />
            <button className="primary-button login-button" type="submit">
              Log in
            </button>
            <a href="/">Forgot my password</a>
          </form>
        </div>
        <div>
          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
