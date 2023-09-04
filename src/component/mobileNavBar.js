import React from 'react';
import { myRoute } from './Route.js';

import '../style/navbar.css';

function MobileNavBar({ isNavbarOpen, togglerNavbar }) {
  const myOwnRoute = [...myRoute];

  return (
    <div className="mobileNavBar-container">
      <div className={`mobileNavBar-wrapper ${isNavbarOpen ? 'open' : 'close'}`}  
      id={isNavbarOpen ? 'open' : 'close'}
     >
      <div
        onClick={togglerNavbar}
        className={`mobileButton ${isNavbarOpen ? 'close-icon' : 'menu-icon'}`}
        id={isNavbarOpen ? 'open' : 'close'}
      >
        <span className={`mobileIcon ${isNavbarOpen ? 'close-icon' : 'menu-icon'}`} />
        <span className={`mobileIcon ${isNavbarOpen ? 'close-icon' : 'menu-icon'}`} />
        <span className={`mobileIcon ${isNavbarOpen ? 'close-icon' : 'menu-icon'}`} />
        </div>
    
        <ul className={`mobile-wholeul ${isNavbarOpen ? 'mobileBar-open' : 'mobileBar-close'}`}>
          {myOwnRoute.map((link) => (
            <li className="EachLink" key={link.id}>
              <a href={link.direct} className="barlink">
                <span className="icon">
                  <ion-icon>{link.icon}</ion-icon>
                </span>
                <span className="navtitle">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileNavBar;
