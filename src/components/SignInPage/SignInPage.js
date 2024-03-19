import React from "react";
import "./SignInPage.scss";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [signinData, setSigninData] = useState({
    emailsignin: "",
    passwordsignin: "",
  });

  const [errors, setErrors] = useState({});

  const handlechange1 = (e) => {
    const name1 = e.target.name;
    const value1 = e.target.value;
    setSigninData((last) => {
      return { ...last, [name1]: value1 };
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setErrors(Validation(signinData));
  };

  const Validation = (signinData) => {
    const errors = {};
    const regexemail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const regexpassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (signinData.emailsignin === "") {
      errors.emailsignin = "email is Required !";
    } else if (!regexemail.test(signinData.emailsignin)) {
      errors.emailsignin = "email is not valid !";
    }

    if (signinData.passwordsignin === "") {
      errors.passwordsignin = "password is Required !";
    } else if (!regexpassword.test(signinData.passwordsignin)) {
      errors.passwordsignin = "password is not valid !";
    }

    return errors;
  };

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
          <form onSubmit={handleSignIn}>
            <div>
              <label className="emaillabel" htmlFor="email">
                Email
              </label>
              <input
                name="emailsignin"
                className="email"
                type="text"
                placeholder="Your email address"
                onChange={handlechange1}
              />
              {errors.emailsignin && (
                <p style={{ color: "red" }}>{errors.emailsignin}</p>
              )}
            </div>
            <div>
              <label className="passwordlabel" htmlFor="password">
                Password
              </label>
              <input
                name="passwordsignin"
                className="password"
                type="password"
                placeholder="Your password"
                onChange={handlechange1}
              />
              {errors.passwordsignin && (
                <p style={{ color: "red" }}>{errors.passwordsignin}</p>
              )}
            </div>

            <div className="RememberMe">
              <Checkbox />
              <p>Remeber Me</p>
            </div>
            <div className="header-last-div">
              <button type="submit">SIGN IN</button>
              <p>
                Don't have an account?
                <span>
                  {" "}
                  <Link to={"/Signup"}>Sign up</Link>
                </span>
              </p>
            </div>
          </form>
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
      <button className="download">Download</button>
      </div>
    </div>
  );
};

export default SignInPage;
