import React from "react";
import "../styles/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppProvider";

function Navbar() {
  const { click, scroll, handleClick } = useAppContext();

  return (
    <div className={`${scroll ? "header header-bg" : "header"}`}>
      <nav className="navbar">
        <h1>
          <Link to="/">Portfolio.</Link>
        </h1>
        <ul className={`${click ? "routes active" : "routes"}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={() => handleClick()}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
