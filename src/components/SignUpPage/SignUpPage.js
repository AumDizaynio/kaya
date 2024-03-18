import React, { useState } from "react";
import "./SignUpPage.scss";
import { Apple, Fb, Google } from "../../icons";
import Checkbox from "../Checkbox/Checkbox";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handlechange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value, "hgggdfdfdf");
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });


  };
  console.log(details, "deta")

  const handlesubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(details))
    console.log(details)
  };

  const Validation = (signinData) => {
    const errors = {};
    const regexemail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const regexpassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (details.name === "") {
      errors.name = "name is not valid"
    }

    if (details.email === "") {
      errors.email = "email is Required !";
    } else if (!regexemail.test(details.email)) {
      errors.email = "email is not valid !";
    }

    if (details.passwordsignin === "") {
      errors.password = "password is Required !";
    } else if (!regexpassword.test(details.password)) {
      errors.password = "password is not valid !";
    }

    return errors;
  };

  return (
    <div className="SignUp-main">
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
          <div className="r2-main">
            <p className="register">Register with</p>
            <div className="logolist">
              <p className="logo" href="">
                <a href="https://www.facebook.com/">
                  <Fb />
                </a>
              </p>
              <p className="logo" href="">
                <a href="https://www.apple.com/">
                  <Apple />
                </a>
              </p>
              <p className="logo" href="">
                <a href="https://www.google.com/">
                  <Google />
                </a>
              </p>
            </div>
            <p className="or">Or</p>
            <form action="psot" onSubmit={handlesubmit}>
              <div className="form">
                <label className="textlabel" htmlFor="name">
                  Name
                </label>
                <input
                  name="name"
                  className="text"
                  type="text"
                  placeholder="Your full name"
                  onChange={handlechange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>
              <div className="form">
                <label className="emaillabel" htmlFor="email">
                  Email
                </label>
                <input
                  name="email"
                  className="email"
                  type="email"
                  placeholder="Your email address"
                  onChange={handlechange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <div className="form">
                <label className="passwordlabel" htmlFor="password">
                  Password
                </label>
                <input
                  name="password"
                  className="password"
                  type="password"
                  placeholder="Your password"
                  onChange={handlechange}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
              </div>
              <div className="RememberMe">
                <Checkbox />
                <p className="RM">Remeber Me</p>
              </div>
              <div className="last-div">
                <button type="submit">SIGN UP</button>
                <p>
                  Already have an account? <span><Link to={"/"}>Sign in</Link></span>
                </p>
              </div>
            </form>
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

export default SignUpPage;
