import React from "react";
import "@styles/recoveryPassword.scss";
import emailIcon from '@icons/email.svg'
import logo from '@logos/logo_yard_sale.svg';

const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img className="recovery-logo" src={logo} alt="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={emailIcon} alt="Email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email </span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
