import React from "react";
import "../styles/WorkCardStyles.css";
import WorkCard from "./WorkCard";
import workCardData from "../data/workCardData";

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workCardData.map((data, index) => {
          return <WorkCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
}

export default Work;
