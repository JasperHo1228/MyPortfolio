import '../style/navbar.css';
import React, { useState, useEffect} from 'react';
import { myRoute } from '../component/Route.js';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

function NavBar() {
  const myOwnRoute = ([...myRoute]);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const togglerNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    // Add event listener to close the sidebar when clicking outside of it
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#open')) {
        setNavbarOpen(false);
      }
    };

     document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Overlay to reduce the brightness */}
      {isNavbarOpen && <div className="overlay active" />}

      <nav id={isNavbarOpen ? 'open' : 'close'}>
        <ul className="wholeul">
          {isNavbarOpen ? (
            <hamburger-icon onClick={togglerNavbar} className="close-icon">
              <ImCross />
            </hamburger-icon>
          ) : (
            <hamburger-icon onClick={togglerNavbar} className="menu-icon">
              <GiHamburgerMenu />
            </hamburger-icon>
          )}

          {myOwnRoute.map((link) => (
      
            <li className="remove">
                  <a href={link.direct} className="barlink"> 
                  <span className="icon">
                   <ion-icon>{link.icon}</ion-icon>
                  </span>
              <title>{link.title}</title>
               </a>
            </li>
          ))}

          <li className="remove">
            <a href="https://www.linkedin.com/in/tsun-yin-ho-46981222b/" className="barlink">
              <span className="icon">
                <ion-icon>
                  <BsLinkedin />
                </ion-icon>
              </span>
              <title>LinkedIn</title>
            </a>
          </li>

          <li className="remove">
            <a href="https://github.com/JasperHo1228" className="barlink">
              <span className="icon">
                <ion-icon>
                  <BsGithub />
                </ion-icon>
              </span>
              <title>GitHub</title>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
