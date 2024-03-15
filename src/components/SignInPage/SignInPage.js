import React from "react";
import "./SignInPage.scss";

const SignInPage = () => {
  return (
    <div className="SignIn-main">
      <div className="left">
        <h2>INSPIRED BY THE FUTURE:</h2>
        <h1>THE VISION UI DASHBOARD</h1>
      </div>
      <div className="right">
        <div className="r-top">
          <h2>Nice to see you!</h2>
          <h3>Enter your email and password to sign in</h3>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Your email address" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Your password" />
          </div>

          <div className="RememberMe">
            <div className="rm">
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
            <p>Remeber Me</p>
          </div>
          <div className="header-last-div">
            <button>SIGN IN</button>
            <p>
              Don't have an account? <span>Sign up</span>
            </p>
          </div>
        </div>
        <div className="info">
          <p>
            @ 2021, Made with ❤️ by{" "}
            <span>Simmmple & Creative Tim for a better web</span>{" "}
          </p>
          <ul>
            <li>Marketplace</li>
            <li>Blog</li>
            <li>License</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
