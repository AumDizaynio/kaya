import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import "./Home.scss";
import RightSideBar from "../RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div className="home-main">
      <div className="LeftBar">
        <LeftSideBar />
      </div>
      <div className="RightBar">
        <RightSideBar/>
      </div>
    </div>
  );
};

export default Home;
