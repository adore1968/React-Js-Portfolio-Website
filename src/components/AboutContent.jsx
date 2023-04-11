import React from "react";
import "../styles/AboutContentStyles.css";
import { Link } from "react-router-dom";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.jpg";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react front end developer. I create responsive secure websites
          for my clients.
        </p>
        <Link to="/contact" className="btn active">
          CONTACT
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} alt="image" className="img" />
          </div>
          <div className="img-stack top">
            <img src={react2} alt="image" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
