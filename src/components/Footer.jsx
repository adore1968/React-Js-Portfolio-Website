import React from "react";
import "../styles/FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="left">
        <div className="home">
          <FaHome className="icon" />
          <div>
            <p>123 Housing Society.</p>
            <p>Bangladesh.</p>
          </div>
        </div>
        <div className="phone">
          <FaPhone className="icon" />
          <p>1-23-23-343-23</p>
        </div>
        <div className="contact">
          <MdEmail className="icon" />
          <p>info@gmail.com</p>
        </div>
      </div>
      <div className="right">
        <h4>About the company</h4>
        <p>
          This is me Fahimul Kabir. CEO & Founder of Tech2etc. Ienjoy discussing
          new projects and design challenges.
        </p>
        <div>
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
