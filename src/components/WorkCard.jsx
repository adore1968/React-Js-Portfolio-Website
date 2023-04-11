import React from "react";
import "../styles/WorkCardStyles.css";
import { NavLink } from "react-router-dom";

function WorkCard({ data }) {
  return (
    <div className="project-card">
      <img src={data.imgSrc} alt="image" />
      <h2 className="project-title">{data.title}</h2>
      <div className="pro-details">
        <p>{data.text}</p>
        <div className="pro-btns">
          <NavLink to={data.view} className="btn active">
            View
          </NavLink>
          <NavLink to="url.com" className="btn active">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
