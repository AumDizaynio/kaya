import React, { useState } from "react";
import "./Header.scss";
import { Burger, Cross, Dashboard, Profile, SignIn, SignUp } from "../../icons";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div className="header-main">
      <div className="header">
        <h3>VISION UI FREE</h3>
        <ul className="header-list">
          <li className="list-items">
            <Dashboard />
            <p>DASHBOARD</p>
          </li>
          <li className="list-items">
            <Profile />
            <p>PROFILE</p>
          </li>
          <li className="list-items">
            <SignUp />
            <p>SIGN UP</p>
          </li>
          <li className="list-items">
            <SignIn />
            <p>SIGN IN</p>
          </li>
        </ul>
        <button>Free Download</button>
        <div className="burger" onClick={handleBurger}>
          {!burger ? <Burger /> : <Cross />}
        </div>
        <div className={burger ? "yes" : "no"}>
          <ul className="burger-list">
            <li className="burger-items">
              <Dashboard />
              <p>DASHBOARD</p>
            </li>
            <li className="burger-items">
              <Profile />
              <p>PROFILE</p>
            </li>
            <li className="burger-items">
              <SignUp />
              <p>SIGN UP</p>
            </li>
            <li className="burger-items">
              <SignIn />
              <p>SIGN IN</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
