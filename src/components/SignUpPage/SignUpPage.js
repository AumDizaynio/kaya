import React from "react";
import "./SignUpPage.scss";
import { Apple, Fb, Google } from "../../icons";

const SignUpPage = () => {
  return (
    <div className="SignIn-main">
      <div className="left">
        <h2>INSPIRED BY THE FUTURE:</h2>
        <h1>THE VISION UI DASHBOARD</h1>
      </div>
      <div className="right">
        <div className="r1">
          <h2>Welcome!</h2>
          <p>
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
        <div className="r2">
          <p className="register">Register with</p>
          <div>
            <p className="logo" href=""><Fb /></p>
            <p className="logo" href=""><Apple /></p>
            <p className="logo" href=""><Google /></p>
          </div>
          <p className="or">Or</p>
          <div className="form">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Your full name" />
          </div>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Your email address" />
          </div>
          <div className="form">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Your password" />
          </div>
          <div className="RememberMe">
            <div className="rm">
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
            <p className="RM">Remeber Me</p>
          </div>
        </div>
        <div className="r3"></div>
      </div>
    </div>
  );
};

export default SignUpPage;
