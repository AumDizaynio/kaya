import React from "react";
import "./AuthorHome.scss";
import Dp from "../../assets/Dp.png";

const AuthorHome = () => {
  const Author = [
    { name: "Esthera Jackson", mail: "esthera@simmmple.com", role1: "Manager" , role2:"Organization" , status : "Online"},
    { name: "Alexa Liras", mail: "Laurent Michael", role1: "Programmer" , role2:"Developer" , status : "Offline"},
    { name: "Laurent Michael", mail: "laurent@simmmple.com", role1: "Executive" , role2:"Projects" , status : "Online"},
    { name: "Freduardo Hill", mail: "freduardo@simmmple.com", role1: "Manager" , role2:"Organization" , status : "Online"},
    { name: "Daniel Thomas", mail: "daniel@simmmple.com", role1: "Programmer" , role2:"Developer" , status : "Offline"},
    { name: "Mark Wilson", mail: "mark@simmmple.com", role1: "Designer" , role2:"UI/UX Design" , status : "Offline"},
  ];

  return (
    Author.map((arr)=>{
        return <div className="authorhome">
        <div className="blank"></div>
        <div className="main">
          <div className="ah-left">
            <img src={Dp} alt="" srcset="" />
            <div className="info">
              <p className="p1">{arr.name}</p>
              <p className="p2">{arr.mail}</p>
            </div>
          </div>
          <div className="ah-right">
            <div className="r1">
              <p className="p3">{arr.role1}</p>
              <p className="p4">{arr.role2}</p>
            </div>
            <p className="p5">{arr.status}</p>
            <p className="p6">14/06/21</p>
            <p className="p7">Edit</p>
          </div>
        </div>
      </div>
    })
  );
};

export default AuthorHome;
