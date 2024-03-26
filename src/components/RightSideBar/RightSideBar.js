import React from "react";
import "./RightSideBar.scss";
import { NavBellIcon, NavProfile, NavSetting, OK, Search } from "../../icons";
import AuthorHome from "../AuthorHome/AuthorHome";
import ProjectHome from "../ProjectHome/ProjectHome";

function RightSideBar() {


  return (

    <div className="rightsidebar">
      <div className="navbar">
        <div className="nav-l">
          <p className="p1">
            Pages <span>/ Tables</span>
          </p>
          <p className="p2">Tables</p>
        </div>
        <div className="nav-r">
          <div className="search">
            <Search />
            <input placeholder="Type Here ..." />
          </div>
          <div className="navsignin">
            <NavProfile />
            <p>Sign In</p>
          </div>
          <div className="icon1">
            <NavSetting />
          </div>
          <div className="icon2">
            <NavBellIcon />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------------------- */}

      <div className="main-1">
        <div className="main-1-lr">
          <div className="main-1-left">
            <h1>Authors Table</h1>
            <h2>AUTHOR</h2>
          </div>
          <div className="main-1-right">
            <p className="p1">FUNCTION</p>
            <p className="p2">STATUS</p>
            <p className="p3">EMPLOYED</p>
            <p className="p4"></p>
          </div>
        </div>
        <AuthorHome />
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------- */}

      <div className="main-2">
        <div className="main-2-lr">
          <div className="main-2-left">
            <div className="add-on">
              <h1>Projects</h1>
              <div><OK /><p>30 done this month</p></div>
            </div>
            <h2>COMPANIES</h2>
          </div>
          <div className="main-2-right">
            <p className="p1">FUNCTION</p>
            <p className="p2">STATUS</p>
            <p className="p3">COMPLETION</p>
            <p className="p4"></p>
          </div>
        </div>
        <ProjectHome />
      </div>



    </div>
  );
}

export default RightSideBar;
