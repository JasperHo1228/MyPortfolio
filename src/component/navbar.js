import '../style/navbar.css';
import React from 'react';
import { myRoute } from './Route.js';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
function NavBar({isNavbarOpen, togglerNavbar}) {
  const myOwnRoute = ([...myRoute]);
 
  return (
    <div className='navbar'>
      {/* Overlay to reduce the brightness */}
       <nav id={isNavbarOpen ? 'open' : 'close'} >
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
            <li className="remove" key={link.id}>
                  <a href={link.direct} className="barlink"> 
                  <span className="icon">
                   <ion-icon>{link.icon}</ion-icon>
                  </span>
              <span className='navtitle'>{link.title}</span>
               </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
