import React from "react";
import "../styles/HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn active">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
