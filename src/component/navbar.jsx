import React, { useState } from "react";
import { myRoute } from "./Route.jsx";
import "../style/navbar.css";

function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const openNavbar = () => {
    setIsNavbarOpen(true);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className="navbar">

      {/* Click outside to close */}
      {isNavbarOpen && (
        <div
          className="navbar-overlay"
          onClick={closeNavbar}
          aria-hidden="true"
        />
      )}

      <nav
        className={`desktop-navbar ${
          isNavbarOpen ? "navbar-open" : "navbar-closed"
        }`}
      >

        {/* Hamburger / Cross button */}
        <button
          type="button"
          className={`navbar-toggle ${
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
        <ul className="navbar-list">
          {myRoute.map((link) => (
            <li
              className="navbar-item"
              key={link.id}
            >
              <a
                href={link.direct}
                className="navbar-link"
              >
                <span className="navbar-icon">
                  <ion-icon>{link.icon}</ion-icon>
                </span>

                <span className="navbar-title">
                  {link.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </div>
  );
}

export default NavBar;