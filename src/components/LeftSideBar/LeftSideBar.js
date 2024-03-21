import React, { useState } from "react";
import {
  Billing,
  Home,
  HomeSignIn,
  HomeSignUp,
  HomeProfile,
  RTL,
  Table,
} from "../../icons";
import "./LeftSideBar.scss"

const LeftSideBar = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);

  const arr = [
    { icon: <Home />, title: "Dashboard" },
    { icon: <Table />, title: "Tables" },
    { icon: <Billing />, title: "Billing" },
    { icon: <RTL />, title: "RTL" },
    { icon: <HomeProfile />, title: "Profile" },
    { icon: <HomeSignIn />, title: "Sign In" },
    { icon: <HomeSignUp />, title: "Sign Up" },
  ];

  return (
    <div className="leftsidebar">
      <div className="top">
        <h1>VISION UI FREE</h1>
        <hr />
        <div className="top-1">
          {arr
            .map((item, index) => {
              return (
                <div
                  className={index === activeIndex1 ? "t2" : "t1"}
                  onClick={() => {
                    setActiveIndex1(index);
                  }}
                >
                  <div className="icon">{item.icon}</div>
                  <p>{item.title}</p>
                </div>
              );
            })
            .filter((item, index) => {
              return index < 4;
            })}
        </div>
      </div>
      <div className="bottom">
        <h2>ACCOUNT <br /> PAGES </h2>
        <div className="bottom-1">
          {arr
            .map((item, index) => {
              return (
                <div
                  className={index === activeIndex1 ? "b2" : "b1"}
                  onClick={() => {
                    setActiveIndex1(index);
                  }}
                >
                  <div className="icon">{item.icon}</div>
                  <p>{item.title}</p>
                </div>
              );
            })
            .filter((item, index) => {
              return index > 3;
            })}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
