import React from "react";
import "./Header.scss";
import { Dashboard, Profile, SignIn, SignUp } from "../../icons";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
