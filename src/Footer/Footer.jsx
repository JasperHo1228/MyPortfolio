import React from "react";
import "../style/footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="Footer-container">
      <div className="footer-wrapper">

        <div className="footer-terminal">
          <span>&gt;</span> connect()
        </div>

        <h2 className="footer-title">
          Connect with me
        </h2>

        <div className="socialmedia-link">
          <a
            href="https://www.linkedin.com/in/jasper-ho-46981222b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/JasperHo1228"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <BsGithub />
          </a>
        </div>

        <div className="copyRight">
          <FaCopyright />
          <span>{curYear} Jasper Ho. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;