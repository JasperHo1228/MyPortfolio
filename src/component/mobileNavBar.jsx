import React, { useState } from "react";
import { myRoute } from "./Route.jsx";
import "../style/navbar.css";

function MobileNavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const openNavbar = () => {
    setIsNavbarOpen(true);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className="mobile-navbar">

      {/* Click outside to close */}
      {isNavbarOpen && (
        <div
          className="mobile-navbar-overlay"
          onClick={closeNavbar}
          aria-hidden="true"
        />
      )}

      <div
        className={`mobile-navbar-menu ${
          isNavbarOpen ? "is-open" : ""
        }`}
      >

        {/* Hamburger / Cross button */}
        <button
          type="button"
          className={`mobile-navbar-toggle ${
            isNavbarOpen ? "is-open" : ""
          }`}
          onClick={
            isNavbarOpen
              ? closeNavbar
              : openNavbar
          }
          aria-label={
            isNavbarOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={isNavbarOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navbar area */}
        <ul className="mobile-navbar-list">
          {myRoute.map((link) => (
            <li
              className="mobile-navbar-item"
              key={link.id}
            >
              <a
                href={link.direct}
                className="mobile-navbar-link"
                onClick={closeNavbar}
              >
                <span className="mobile-navbar-icon">
                  <ion-icon>{link.icon}</ion-icon>
                </span>

                <span className="mobile-navbar-title">
                  {link.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default MobileNavBar;