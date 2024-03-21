import React from "react";
import "./ProjectHome.scss";
import { PorjectIcon, ThreeDot2 } from "../../icons";

const ProjectHome = () => {
    const Project = [
        { name: "Chakra Soft UI Version", budget: "$14,000", status: "working" },
        { name: "Add Progress Track", budget: "$3,000", status: "canceled" },
        { name: "Fix Platform Errors", budget: "Not set", status: "Done" },
        { name: "Launch our Mobile App", budget: "$32,000", status: "Done" },
        { name: "Add the New Pricing Page", budget: "$400", status: "working" }
    ];

    return (
        <div>
            {

                Project.map((item) => {
                    return <div className="projecthome">
                        <div className="blank"></div>
                        <div className="main">
                            <div className="ah-left">
                                <PorjectIcon />
                                <p>{item.name}</p>
                            </div>
                            <div className="ah-right">
                                <div className="r1">
                                    <p className="p3">{item.budget}</p>
                                </div>
                                <p className="p5">{item.status}</p>
                                <p className="p6">
                                    <p>60%</p>
                                    <div>
                                        <div className="p6-1"></div>
                                        <div className="p6-2"></div>
                                    </div>
                                </p>
                                <p className="p7"><ThreeDot2 /></p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ProjectHome;
