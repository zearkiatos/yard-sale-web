import React, { useRef } from "react";
import "@styles/login.scss";
import logos from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password")
    };
    console.log(data);
  };
  return (
    <div className="login">
      <div className="form-container">
        <img className="login-logo" src={logos} alt="logo" />
        <div>
          <form action="/" className="form" ref={form}>
            <label className="label" for="email">
              Email
            </label>
            <input
              className="input input-email"
              id="email"
              name="email"
              placeholder="email@example.com"
              type="email"
            />
            <label className="label" for="password">
              Password
            </label>
            <input
              className="input input-password"
              id="password"
              name="password"
              placeholder="********"
              type="password"
            />
            <button
              className="primary-button login-button"
              type="submit"
              onClick={handleSubmit}
            >
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
