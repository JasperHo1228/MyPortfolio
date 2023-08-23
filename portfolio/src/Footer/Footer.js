import React from "react";
import '../style/footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import {FaCopyright} from 'react-icons/fa';
function Footer(){
    return(
    <footer className="Footer-container">
        <div className="footer-wrapper">
          <h2><div className="footer-title"><div className="gradient-text-footer">Check out my social media</div></div></h2>
          <div className="socialmedia-link">
          <a href="https://www.linkedin.com/in/tsun-yin-ho-46981222b/" target="_blank" rel="noreferrer" className="LinkName">
            <span className="contact-icon linkedIn">
              <BsLinkedin />
            </span>
          </a>
          <a href="https://github.com/JasperHo1228" target="_blank" rel="noreferrer" className="LinkName">
            <span className="contact-icon github">
              <BsGithub />
            </span>
          </a>
        </div>
        <div className="copyRight">
          <span className="copyRight-icon"><FaCopyright/></span> 2023 by Jasper Ho. All Rights Reserved.
        </div>
        </div>
    </footer>);
}
export default Footer;