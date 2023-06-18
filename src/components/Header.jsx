import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const showMenu = () => {
    setShowNav(!showNav);
  };
  return (
    <header>
      <div className="logo-header">
        <div className="logo-image">
          <img src="logo-white.png" alt="Logo" />
        </div>
        <div className="logo-text">Eden Playhouse and Learning Center Inc.</div>
        <button className="hamburger" onClick={showMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>

      {showNav && (
        <nav className="nav-bar-mobile">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/program">Progams</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Enroll Now</a>
            </li>
          </ul>
        </nav>
      )}

      <nav className="nav-bar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/program">Progams</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Enroll Now</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
